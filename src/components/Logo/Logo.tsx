import React from 'react';
import { CreditCard } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center">
      <CreditCard size={32} className="text-red-600 mr-2" />
      <div>
        <span className="text-2xl font-bold text-blue-800">Commerce</span>
        <span className="text-2xl font-bold text-red-600">Bank</span>
      </div>
    </a>
  );
};

export default Logo;