const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['credit', 'debit', 'transfer', 'request'], required: true },
  amount: { type: Number, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  from: String, // accountNumber or username
  to: String,   // accountNumber or username
});

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  ssn: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  annualIncome: { type: Number, required: true },
  idType: { type: String, required: true },
  idNumber: { type: String, required: true },
  idState: { type: String, required: true },
  idExpiration: { type: Date, required: true },
  mailingAddress: { type: String },
  alternateAddress: { type: String },
  idFront: { type: String }, // Store file path or URL
  idBack: { type: String },  // Store file path or URL
  createdAt: { type: Date, default: Date.now },
  accountNumber: { type: String, unique: true },
  balance: { type: Number, default: 0 },
  transactions: [transactionSchema],
  username: { type: String, unique: true, sparse: true }, // <-- Add this line
  password: { type: String }, // <-- Add this line
  isAdmin: { type: Boolean, default: false },
  trustedIps: [String], // Array of trusted IP addresses
});

// Hash the SSN before saving the user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('ssn')) return next();
  const salt = await bcrypt.genSalt(10);
  this.ssn = await bcrypt.hash(this.ssn, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);