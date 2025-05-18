const express = require('express');
const User = require('../models/User');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const bcrypt = require('bcryptjs');

// Get all users
router.get('/users', auth, admin, async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// Add money to any account
router.post('/credit', auth, admin, async (req, res) => {
  const { accountNumber, amount, description } = req.body;
  const user = await User.findOne({ accountNumber });
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.balance += Number(amount);
  user.transactions.push({
    type: 'credit',
    amount,
    description: description || 'Admin credit',
    date: new Date(),
  });
  await user.save();
  res.json({ message: 'Account credited', balance: user.balance });
});

// Approve transfers (example: set a flag on a transaction)
router.post('/approve-transfer', auth, admin, async (req, res) => {
  const { userId, transactionId } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  const tx = user.transactions.id(transactionId);
  if (!tx) return res.status(404).json({ message: 'Transaction not found' });
  tx.approved = true;
  await user.save();
  res.json({ message: 'Transfer approved' });
});

// Manage user logins (enable/disable)
router.patch('/user-login', auth, admin, async (req, res) => {
  const { userId, enabled } = req.body;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.loginEnabled = enabled;
  await user.save();
  res.json({ message: `User login ${enabled ? 'enabled' : 'disabled'}` });
});

// Delete account
router.delete('/user/:userId', auth, admin, async (req, res) => {
  await User.findByIdAndDelete(req.params.userId);
  res.json({ message: 'User deleted' });
});

module.exports = router;