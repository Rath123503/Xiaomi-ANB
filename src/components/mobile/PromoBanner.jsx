import React from 'react';
import { motion } from 'framer-motion';

export const PromoBanner = ({ image, title, subtitle, onLearnMore }) => {
  if (!image && !title) return null;

  return (
    // section 
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#F5F7FA]">
      
      
      <div className="absolute inset-0 w-full h-full">
        {image && (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover object-left" 
            referrerPolicy="no-referrer"
          />
        )}
      </div>

    
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex justify-end">
        
        
        <div className="w-full sm:w-2/3 lg:w-1/2 text-left pl-4 sm:pl-0">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191919] tracking-tight font-sans">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base sm:text-xl lg:text-2xl text-gray-950 font-normal mt-3 tracking-wide max-w-[450px]">
              {subtitle}
            </p>
          )}
          <button
            onClick={onLearnMore}
            className="mt-6 sm:mt-8 px-6 py-2.5 bg-[#191919] hover:bg-gray-850 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;