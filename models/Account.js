const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  accountType: { type: String, enum: ['Checking', 'Savings'], required: true },
  accountNumber: { type: String, unique: true, required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  status: { type: String, enum: ['Active', 'Deactivated'], default: 'Active' },
});

module.exports = mongoose.model('Account', AccountSchema);