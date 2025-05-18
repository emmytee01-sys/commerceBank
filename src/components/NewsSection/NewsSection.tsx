import React from 'react';

interface NewsItemProps {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

const newsItems: NewsItemProps[] = [
  {
    title: 'Commerce Bank Introduces New Mobile Banking Features',
    date: 'June 15, 2025',
    category: 'Product Updates',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Financial Planning Tips for Your Summer Vacation',
    date: 'June 10, 2025',
    category: 'Financial Tips',
    imageUrl: 'https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Commerce Bank Expands Small Business Lending Program',
    date: 'June 5, 2025',
    category: 'Business',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const NewsItem: React.FC<NewsItemProps> = ({ title, date, category, imageUrl }) => {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-lg overflow-hidden mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div>
        <span className="text-sm text-red-600 font-medium">{category}</span>
        <h3 className="text-lg font-semibold text-blue-800 group-hover:text-red-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {newsItems.map((item, index) => (
        <NewsItem key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsSection;