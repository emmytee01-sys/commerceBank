import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SubNavItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  subItems?: SubNavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Personal',
    subItems: [
      { label: 'Checking', href: '#checking' },
      { label: 'Savings', href: '#savings' },
      { label: 'Credit Cards', href: '#credit-cards' },
      { label: 'Home Loans', href: '#home-loans' },
      { label: 'Personal Loans', href: '#personal-loans' },
    ],
  },
  {
    label: 'Business',
    subItems: [
      { label: 'Business Checking', href: '#business-checking' },
      { label: 'Business Savings', href: '#business-savings' },
      { label: 'Business Credit Cards', href: '#business-credit-cards' },
      { label: 'Merchant Services', href: '#merchant-services' },
      { label: 'Business Loans', href: '#business-loans' },
    ],
  },
  {
    label: 'Wealth Management',
    subItems: [
      { label: 'Investment Services', href: '#investment-services' },
      { label: 'Retirement Planning', href: '#retirement-planning' },
      { label: 'Private Banking', href: '#private-banking' },
      { label: 'Trust Services', href: '#trust-services' },
      { label: 'Estate Planning', href: '#estate-planning' },
    ],
  },
  {
    label: 'Resources',
    subItems: [
      { label: 'Financial Education', href: '#financial-education' },
      { label: 'Security Center', href: '#security-center' },
      { label: 'Community Involvement', href: '#community' },
      { label: 'Calculators', href: '#calculators' },
      { label: 'FAQs', href: '#faqs' },
    ],
  },
];

const NavLinks: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <>
      {navItems.map((item) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center text-gray-800 hover:text-red-600 font-medium py-2 transition-colors">
            {item.label}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {/* Dropdown menu */}
          {activeMenu === item.label && item.subItems && (
            <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;