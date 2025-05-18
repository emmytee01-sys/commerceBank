import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const UtilityNav: React.FC = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-10 text-xs">
          <div className="flex items-center space-x-4">
            <a href="#locations" className="flex items-center text-blue-800 hover:text-red-600">
              <MapPin size={14} className="mr-1" />
              <span>Locations</span>
            </a>
            <a href="#contact" className="flex items-center text-blue-800 hover:text-red-600">
              <Phone size={14} className="mr-1" />
              <span>1-800-123-4567</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-blue-800 hover:text-red-600">About Us</a>
            <a href="#careers" className="text-blue-800 hover:text-red-600">Careers</a>
            <a href="#contact" className="text-blue-800 hover:text-red-600">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityNav;