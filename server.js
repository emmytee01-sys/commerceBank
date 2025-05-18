const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
const enrollmentRoutes = require('./routes/enrollmentRoutes');
app.use('/api/enroll', enrollmentRoutes);
const walletRoutes = require('./routes/walletRoutes');
app.use('/api/wallet', walletRoutes);
const accountRoutes = require('./routes/accountRoutes');
app.use('/api/accounts', accountRoutes);
const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));