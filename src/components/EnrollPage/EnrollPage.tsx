import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const EnrollPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    accountNumber: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 1: Submit enrollment details and send OTP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/enroll/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        setMessage('OTP sent to your email. Please enter it below to verify.');
      } else {
        setError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  // Step 2: Verify OTP and complete enrollment
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          otp: otpInput,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Enroll in Online Banking</h1>
          {message && <p className="text-green-600 text-center mb-4">{message}</p>}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          {!otpSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Continue 
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter OTP sent to your email
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otpInput}
                  onChange={e => setOtpInput(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                  required
                  maxLength={6}
                  minLength={6}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Verify OTP & Enroll
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default EnrollPage;