const express = require('express');
const User = require('../models/User');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/accounts', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({
    accounts: [
      {
        accountNumber: user.accountNumber,
        accountType: 'Checking',
        status: 'Active',
        currency: 'USD',
        routingNumber: user.routingNumber || '101000019',
        balance: user.balance,
      },
    ],
  });
});

router.get('/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  // Only accessible by admins
});

module.exports = router;