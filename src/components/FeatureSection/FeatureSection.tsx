import React from 'react';

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  children,
  bgColor = 'bg-white',
}) => {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-3">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default FeatureSection;