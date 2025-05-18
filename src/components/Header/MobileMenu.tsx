import React from 'react';
import { Search, User, ChevronRight } from 'lucide-react';

const mobileMenuItems = [
  { label: 'Personal', href: '#personal' },
  { label: 'Business', href: '#business' },
  { label: 'Wealth Management', href: '#wealth' },
  { label: 'Resources', href: '#resources' },
  { label: 'About Us', href: '#about' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

const MobileMenu: React.FC = () => {
  return (
    <div className="md:hidden bg-white border-t border-gray-200 overflow-hidden">
      <div className="px-4 py-3 space-y-1">
        <button className="w-full flex items-center justify-between px-4 py-3 bg-red-600 text-white rounded">
          <div className="flex items-center">
            <User size={18} className="mr-2" />
            <span className="font-medium">Log In</span>
          </div>
          <ChevronRight size={18} />
        </button>
        
        <button className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 rounded">
          <div className="flex items-center">
            <Search size={18} className="mr-2" />
            <span className="font-medium">Search</span>
          </div>
          <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="py-2 border-t border-gray-200">
        {mobileMenuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 flex justify-between items-center"
          >
            <span>{item.label}</span>
            <ChevronRight size={16} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;