import React from 'react';
import { motion } from 'framer-motion';

// --- 1. Sub-Component: PromoCard ---
const PromoCard = ({ title, subtitles, image, onLearnMore }) => {
  // 💡 បម្លែង subtitles ទៅជា Array ទោះបីជាខាងក្រៅផ្ញើមកជា String ក៏អត់ Crash ដែរ
  const normalizedSubtitles = Array.isArray(subtitles) 
    ? subtitles 
    : typeof subtitles === "string" 
      ? [subtitles] 
      : [];

  return (
    <div className="w-full bg-[#F5F7FA] min-h-[500px] sm:min-h-[600px] p-8 sm:p-12 flex flex-col items-center justify-between text-center overflow-hidden">
      
      {/* Text Content */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#191919] tracking-tight font-sans">
          {title}
        </h3>
        
        {normalizedSubtitles.length > 0 && (
          <div className="mt-3 space-y-1">
            {normalizedSubtitles.map((text, index) => (
              <p key={index} className="text-sm sm:text-base text-gray-600 font-normal tracking-wide">
                {text}
              </p>
            ))}
          </div>
        )}

        {/* Pill-shaped Button */}
        <button
          onClick={onLearnMore}
          className="mt-6 px-6 py-2 bg-[#191919] hover:bg-gray-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
        >
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-8 sm:mt-12">
        {image && (
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image}
            alt={title}
            className="h-[250px] sm:h-[320px] md:h-[360px] object-contain"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

    </div>
  );
};


export const PromoCardGrid = ({ promos = [] }) => {
  
  
  if (!promos || promos.length === 0) return null;

  return (
    <section className="w-full bg-white py-4 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {promos.map((card) => (
          <PromoCard
            key={card.id}
            title={card.title}
           
            subtitles={card.subtitles || card.subtitle}
            image={card.image}
            onLearnMore={card.onLearnMore}
          />
        ))}
      </div>
    </section>
  );
};