import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div 
      className="relative h-[500px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Apply Now
            </button>
            <button className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;