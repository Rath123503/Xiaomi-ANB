import React from "react";
import { motion } from "motion/react";

export const FeatureCard = ({ name, features = [], image, onLearnMore }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bg-white border border-gray-100 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
  >
    <h4 className="text-base sm:text-lg font-bold text-[#191919]">{name}</h4>
    <div className="text-xs sm:text-sm text-gray-500 mt-1 space-y-0.5">
      {features.map((f, i) => (
        <p key={i}>{f}</p>
      ))}
    </div>
    <button
      onClick={onLearnMore}
      className="mt-4 px-5 py-2 bg-[#191919] hover:bg-gray-700 text-white text-xs font-bold rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
    >
      Learn more
    </button>
    <div className="mt-6 w-full flex items-center justify-center min-h-[140px]">
      {image ? (
        <img
          src={image}
          alt={name}
          className="max-h-[160px] w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-2/3 h-[140px] bg-gray-50 rounded" />
      )}
    </div>
  </motion.div>
);

export default FeatureCard;