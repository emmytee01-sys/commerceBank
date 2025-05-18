import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const LoginWidget: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for login submission
    console.log('Login submitted', { username, password });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-800 py-3 px-4">
        <h2 className="text-white font-medium text-lg">Online Banking Login</h2>
      </div>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <a href="#forgot-password" className="text-sm text-blue-800 hover:text-red-600">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <span>Log In</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm">
          <a href="#enroll" className="text-blue-800 hover:text-red-600 flex items-center">
            <Lock size={14} className="mr-1" />
            Enroll in Online Banking
          </a>
          <a href="#help" className="text-blue-800 hover:text-red-600">
            Need Help?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginWidget;