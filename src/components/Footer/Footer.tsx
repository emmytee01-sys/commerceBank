import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and social media */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Banking that works for you. Since 1865, Commerce Bank has been helping individuals,
              families, and businesses achieve financial success with our full range of financial products and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Banking</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Checking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Savings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Credit Cards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Home Loans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Auto Loans</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Financial Education</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Security Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mobile Banking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Investor Relations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Commerce Bank. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Accessibility</a>
              <a href="#" className="hover:text-white">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;