import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Header/Header';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Optionally save token for authenticated requests
        localStorage.setItem('token', data.token);
        // Save isAdmin flag if you want
        if (data.isAdmin) {
          navigate('/admin-dashboard'); // <-- redirect to admin dashboard
        } else {
          navigate('/dashboard'); // <-- redirect to user dashboard
        }
      } else {
        setError(data.message || 'Login failed');
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
          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
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
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/enroll" className="text-blue-600 hover:underline">
              Enroll in Online Banking
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;