import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavLinks from './NavLinks';
import UtilityNav from './UtilityNav';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-blue-800 text-white w-full shadow-md">
      {/* Top utility nav */}
      <UtilityNav />
      
      {/* Main navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLinks />
            </nav>
            
            {/* Login/Search */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-blue-800 hover:text-red-600 transition-colors">
                <Search size={20} />
                <span className="font-medium">Search</span>
              </button>
              <Link
                to="/login"
                className="flex items-center px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                <User size={18} className="mr-2" />
                <span className="font-medium">Log In</span>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;