import React from 'react';
import { motion } from 'framer-motion';

// Children Components

export const ProductFourCard = ({ title, subtitles = [], image, onLearnMore }) => {
  return (
    <div className="bg-white min-h-[520px] sm:min-h-[580px] p-6 sm:p-8 flex flex-col justify-between items-center text-center overflow-hidden border-r border-gray-100 last:border-r-0">
      
      
      <div className="flex flex-col items-center flex-1 w-full">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#191919] tracking-tight leading-snug min-h-[56px] flex items-center justify-center max-w-[220px]">
          {title}
        </h3>
        
        {/*  */}

        <div className="mt-2 min-h-[48px] flex flex-col justify-center">
          {subtitles.map((text, index) => (
            <p key={index} className="text-xs sm:text-sm text-gray-500 font-normal leading-tight">
              {text}
            </p>
          ))}
        </div>
        
        {/* ប៊ូតុង Learn more រាងមូលទ្រវែង */}
        <button
          onClick={onLearnMore}
          className="mt-6 px-6 py-2 bg-[#191919] hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
        >
          Learn more
        </button>
      </div>

      {/* ផ្នែករូបភាពទូរស័ព្ទនៅបាតខាងក្រោម */}
      <div className="w-full h-[220px] sm:h-[250px] flex items-end justify-center overflow-hidden mt-6">
        {image && (
          <motion.img
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image}
            alt={title}
            className="h-full object-contain object-bottom select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

    </div>
  );
};

// Main Components 
export const ProductFourGrid = ({ products = [], onLearnMore }) => {
  return (
    <section className="w-full bg-[#F5F7FA] py-6 px-4">
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-sm overflow-hidden">
        {products.map((product) => (
          <ProductFourCard
            key={product.id || product.title}
            title={product.title}
            subtitles={product.subtitles} 
            image={product.image}
            onLearnMore={() => onLearnMore && onLearnMore(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductFourGrid;