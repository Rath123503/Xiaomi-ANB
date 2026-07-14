import React from 'react';
import { motion } from 'framer-motion';

// --- Children Component 
export const ProductFourCard = ({ title, subtitles = [], image, onLearnMore }) => {
  return (
    //
    <div className="bg-white min-h-[516px] p-6 sm:p-8 flex flex-col justify-between items-center text-center overflow-hidden">
      
      <div className="flex flex-col items-center flex-1 w-full">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-[#191919] tracking-tight leading-snug min-h-[56px] flex items-center justify-center max-w-[220px]">
          {title}
        </h3>
        
        {/* Subtitles */}
        <div className="mt-2 min-h-[48px] flex flex-col justify-center">
          {subtitles.map((text, index) => (
            <p key={index} className="text-xs sm:text-sm text-gray-500 font-normal leading-tight">
              {text}
            </p>
          ))}
        </div>
        
        {/* Button Learn more */}
        <button
          onClick={onLearnMore}
          className="mt-6 px-6 py-2 bg-[#191919] hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
        >
          Learn more
        </button>
      </div>

      {/* Images */}
      <div className="w-full h-[225px] sm:h-[250px] flex items-end justify-center overflow-hidden mt-6">
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

// --- Main Component 
export const ProductFourGrid = ({ products = [], onLearnMore }) => {
  return (
    <section className="w-full bg-[#F5F7FA] py-6 px-4">
      
     
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id || product.title} className="overflow-hidden ">
            <ProductFourCard
              title={product.title}
              subtitles={product.subtitles} 
              image={product.image}
              onLearnMore={() => onLearnMore && onLearnMore(product)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFourGrid;