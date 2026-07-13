import React from 'react';

const ProductCard = ({ title, description, imageUrl, buttonText = "Learn more" }) => {
  return (
    <div className="flex flex-col items-center justify-start bg-white  p-8 shadow-sm hover:shadow-md transition duration-300 h-full">
      {/* Title */}
      <h3 className="text-2xl font-bold text-black text-center mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-700 text-center mb-6 max-w-xs leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="mb-8 px-6 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition duration-200 active:bg-gray-900">
        {buttonText}
      </button>

      {/* Image */}
      <div className="mt-auto w-full flex justify-center">
        <img 
          src={imageUrl} 
          alt={title}
          className="h-48 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ProductCard;