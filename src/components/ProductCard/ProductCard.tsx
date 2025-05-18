import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-4px] hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-red-600 mr-3">{icon}</div>
          <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href={linkUrl}
          className="inline-flex items-center text-blue-800 font-medium hover:text-red-600 transition-colors"
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
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
        </a>
      </div>
    </div>
  );
};

export default ProductCard;