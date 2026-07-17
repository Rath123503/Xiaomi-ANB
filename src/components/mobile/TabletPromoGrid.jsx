import React from 'react';
import { motion } from 'framer-motion';

// --- Sub-Component: TabletPromoCard ---
const TabletPromoCard = ({ title, subtitles, image, onLearnMore, isLarge }) => {
  const normalizedSubtitles = Array.isArray(subtitles) 
    ? subtitles 
    : typeof subtitles === "string" 
      ? [subtitles] 
      : [];

  return (
    <div className={`w-full bg-[#F5F7FA] p-8 flex flex-col items-center justify-between text-center overflow-hidden min-h-[500px] sm:min-h-[580px] ${
      isLarge ? 'md:col-span-2' : 'md:col-span-1'
    }`}>
      
      {/* Text Content */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#191919] tracking-tight font-sans">
          {title}
        </h3>
        
        {normalizedSubtitles.length > 0 && (
          <div className="mt-2 space-y-0.5">
            {normalizedSubtitles.map((text, index) => (
              <p key={index} className="text-xs sm:text-sm text-gray-600 font-normal tracking-wide leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        )}

        {/* Pill Button */}
        <button
          onClick={onLearnMore}
          className="mt-5 px-6 py-2 bg-[#191919] hover:bg-gray-800 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
        >
          Learn more
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center mt-6">
        {image && (
          <motion.img
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image}
            alt={title}
            className="h-[220px] sm:h-[280px] object-contain"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

    </div>
  );
};

// --- Main Component (Named Export) ---
export const TabletPromoGrid = ({ promos = [] }) => {
  if (!promos || promos.length === 0) return null;

  return (
    <section className="w-full bg-white py-4 px-4 sm:px-6">
      {/* 💡 គន្លឹះ៖ ប្រើ grid-cols-1 នៅលើ mobile និង md:grid-cols-4 នៅលើ desktop ដើម្បីបែងចែក Layout 1 ធំ និង 2 តូច */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {promos.map((card, index) => (
          <TabletPromoCard
            key={card.id || index}
            title={card.title}
            subtitles={card.subtitles || card.subtitle}
            image={card.image}
            onLearnMore={card.onLearnMore}
            // 💡 កាតទី១ (Index 0) នឹងមានទំហំធំ (Span 2) ឯកាតបន្តបន្ទាប់មានទំហំធម្មតា
            isLarge={index === 0}
          />
        ))}
      </div>
    </section>
  );
};