import React from 'react';

export const SectionHeader = ({ title, subtitle }) => (
  <div className="bg-[#F4F4F4] text-center py-16 px-4">
    <h2 className="text-4xl sm:text-5xl font-bold text-[#191919] tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base sm:text-lg text-gray-950 mt-3">{subtitle}</p>
    )}
    <button
      className="mt-8 px-8 py-3 bg-[#191919] hover:bg-gray-700 text-white text-sm font-bold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer"
    >
      More
    </button>
  </div>
);

export default SectionHeader;