require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const hash = await bcrypt.hash('Damilare002!', 10);
    await User.create({
      username: 'admin',
      password: hash,
      email: 'admin@commercebank.com',
      accountNumber: '00000001',
      isAdmin: true,
      loginEnabled: true,
      trustedIps: [],
      // Add all required fields below:
      firstName: 'Super',
      lastName: 'Admin',
      phone: '1234567890',
      ssn: '000-00-0000',
      address: '1 Admin Lane',
      city: 'Admin City',
      state: 'Admin State',
      zipCode: '00000',
      employmentStatus: 'Employed',
      annualIncome: 100000,
      idType: 'Passport',
      idNumber: 'A1234567',
      idState: 'Admin State',
      idExpiration: new Date('2030-01-01'),
      dateOfBirth: new Date('1980-01-01'),
    });
    console.log('Super admin created!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });