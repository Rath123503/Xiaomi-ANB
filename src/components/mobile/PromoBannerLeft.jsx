import React from 'react';
import { motion } from 'framer-motion';

export const PromoBannerLeft = ({ image, title, subtitle, onLearnMore }) => {
  if (!image && !title) return null;

  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] flex items-center overflow-hidden bg-[#F5F7FA]">
      
      {/* 1. Background Image - Positioned absolute, centered/right focused, and sized nicely */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {image && (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center sm:object-right-bottom md:object-right"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* 2. Text Content Container - Uses grid to force text strictly to the left half */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Confines the text to exactly 1/2 of the screen on desktop so it never hits the phone */}
        <div className="w-full sm:w-1/2 lg:w-[45%] text-left">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191919] tracking-tight font-sans leading-tight">
            {title}
          </h3>
          
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl text-gray-950 font-normal mt-3 tracking-wide max-w-[400px]">
              {subtitle}
            </p>
          )}
          
          <button
            onClick={onLearnMore}
            className="mt-6 sm:mt-8 px-8 py-2.5 bg-[#191919] hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default PromoBannerLeft;