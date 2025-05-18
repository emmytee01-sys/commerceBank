import React from 'react';
import { CreditCard, Landmark, Briefcase, Home } from 'lucide-react';

const promos = [
  {
    title: 'Checking Accounts',
    description: 'Find the right checking account for your needs.',
    icon: <CreditCard size={48} />,
    bgColor: 'bg-blue-800',
  },
  {
    title: 'Savings & CDs',
    description: 'Grow your money with competitive rates.',
    icon: <Landmark size={48} />,
    bgColor: 'bg-red-600',
  },
  {
    title: 'Business Banking',
    description: 'Solutions to help your business thrive.',
    icon: <Briefcase size={48} />,
    bgColor: 'bg-green-700',
  },
  {
    title: 'Home Loans',
    description: 'Finance your home with affordable options.',
    icon: <Home size={48} />,
    bgColor: 'bg-purple-700',
  },
];

const PromoLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {promos.map((promo, index) => (
        <a
          key={index}
          href="#"
          className="block group transition-transform hover:translate-y-[-4px]"
        >
          <div className={`${promo.bgColor} p-6 rounded-lg text-white h-full relative overflow-hidden`}>
            {/* Background pattern */}
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <div className="w-40 h-40 rounded-full border-4 border-white"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-4">{promo.icon}</div>
              <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
              <p className="mb-4">{promo.description}</p>
              <span className="inline-flex items-center text-white font-medium group-hover:underline">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PromoLinks;