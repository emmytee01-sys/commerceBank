require('dotenv').config();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Log SendGrid API Key and Sender Email for debugging
console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY);
console.log('Sender Email:', process.env.EMAIL_USER);

// Generate a unique 9-digit account number
const generateAccountNumber = () => {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
};

exports.register = async (req, res) => {
  const { firstName, middleName, lastName, email, phone, dateOfBirth, ssn, address, city, state, zipCode, employmentStatus, annualIncome, idType, idNumber, idState, idExpiration, mailingAddress, alternateAddress } = req.body;

  try {
    // Save uploaded files
    const idFront = req.files?.idFront?.[0]?.path || '';
    const idBack = req.files?.idBack?.[0]?.path || '';

    // Generate account number
    const accountNumber = generateAccountNumber();

    // Create a new user
    const user = new User({
      firstName,
      middleName,
      lastName,
      email,
      phone,
      dateOfBirth,
      ssn,
      address,
      city,
      state,
      zipCode,
      employmentStatus,
      annualIncome,
      idType,
      idNumber,
      idState,
      idExpiration,
      mailingAddress,
      alternateAddress,
      idFront,
      idBack,
      accountNumber,
    });

    await user.save();

    // Send email to the user
    const msg = {
      to: email,
      from: process.env.EMAIL_USER, // Your verified SendGrid sender email
      subject: 'Account Registration Successful',
      text: `Dear ${firstName},

Congratulations! Your checking account has been successfully opened.

Account Details:
- Account Number: ${accountNumber}
- Account Type: Checking

Please proceed to enroll in online banking to set up your username and password.

Thank you for banking with us!

Best regards,
Commerce Bank`,
    };

    await sgMail.send(msg);

    res.status(201).json({
      message: 'Account created successfully',
      accountNumber,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};