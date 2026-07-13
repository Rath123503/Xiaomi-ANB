import React from 'react';
import { motion } from 'framer-motion';

// --- 1. Sub-Component: PromoCard ---
const PromoCard = ({ title, subtitles, image, onLearnMore }) => {
  return (
    <div className="w-full bg-[#F5F7FA] min-h-[500px] sm:min-h-[600px] p-8 sm:p-12 flex flex-col items-center justify-between text-center overflow-hidden ">
      
      {/* Text Content */}
      <div className="flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#191919] tracking-tight font-sans">
          {title}
        </h3>
        
        {subtitles && subtitles.length > 0 && (
          <div className="mt-3 space-y-1">
            {subtitles.map((text, index) => (
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


// --- 2. Main Component: PromoCardGrid (Named Export) ---
export const PromoCardGrid = () => {
  
  
  const cardsData = [
    {
      id: 1,
      title: "REDMI Note 15 Pro 5G",
      subtitles: ["Massive 6580mAh battery", "New 200MP ultimate-clarity camera"],
      image: "https://i02.appmifile.com/223_operatorx_operatorx_opx/08/01/2026/4c093687512b2acfcdecca0f41d6c81c.png?thumb=1&w=500&f=webp&q=85", 
      
    },
    {
      id: 2,
      title: "REDMI Note 15 Pro",
      subtitles: ["IP65 dust and water resistance", "6.77\" FHD+ AMOLED display"],
      image: "https://i02.appmifile.com/139_operatorx_operatorx_opx/08/01/2026/a277a33b5b40a10292c428d138853406.png?thumb=1&w=500&f=webp&q=85", 
      
    }
  ];

  return (
    <section className="w-full bg-white py-4 px-4 sm:px-6">
      {/* Constrains total width to 1440px and splits into 2 clean columns */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardsData.map((card) => (
          <PromoCard
            key={card.id}
            title={card.title}
            subtitles={card.subtitles}
            image={card.image}
            onLearnMore={card.onLearnMore}
          />
        ))}
      </div>
    </section>
  );
};