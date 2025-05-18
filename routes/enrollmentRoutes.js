// filepath: c:\Users\His grace\Desktop\Emmytee\project\backend\routes\enrollmentRoutes.js
require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const nodemailer = require('nodemailer');

const otpStore = {}; // In-memory store for OTPs (use Redis or DB for production)

router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  try {
    // Use SendGrid SMTP
    const transporter = nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: 'apikey', // literal string
        pass: process.env.SENDGRID_API_KEY, // Your SendGrid API key
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // e.g. 'Your Bank <noreply@yourbank.com>'
      to: email,
      subject: 'Your Commerce Bank One Time Passcode OTP Code',
      text: `Your Commerce Bank One Time Passcode OTP code for online banking is: ${otp}`,
    });

    res.json({ message: 'OTP sent to email' });
  } catch (err) {
    console.error('SendGrid OTP error:', err); // Add this line
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

router.post('/', async (req, res) => {
  const { email, username, password, accountNumber, dateOfBirth, otp } = req.body;

  try {
    // Verify OTP
    if (!otp || otpStore[email] !== otp) {
      return res.status(400).json({ message: 'Invalid or expired OTP' });
    }
    delete otpStore[email]; // Remove OTP after use

    // Find user by email and account number only
    const user = await User.findOne({ email, accountNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found or details do not match' });
    }

    // Check if already enrolled
    if (user.username) {
      return res.status(400).json({ message: 'User already enrolled in online banking' });
    }

    // Hash password and save
    const salt = await bcrypt.genSalt(10);
    user.username = username;
    user.password = await bcrypt.hash(password, salt);
    // Optionally update dateOfBirth if you want to store it
    // user.dateOfBirth = dateOfBirth;
    await user.save();

    console.log('Enrollment successful');
    res.status(200).json({ message: 'Enrollment successful' });
  } catch (err) {
    console.error('Error during enrollment:', err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/all-users', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;