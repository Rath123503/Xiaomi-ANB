import React from 'react';
import { motion } from 'framer-motion';

// --- SINGLE PRODUCT CARD COMPONENT ---
export const ProductCard = ({ title, subtitle, image, onLearnMore }) => {
  return (
    <div className="relative bg-white h-[516px] w-full overflow-hidden flex flex-col justify-between items-center pt-12 pb-6 ">
      
      {/* Text Content Area */}
      <div className="text-center flex flex-col items-center flex-1 px-4 w-full">
        <h3 className="text-2xl font-bold text-[#191919] tracking-tight mb-2 min-h-[32px] flex items-center justify-center">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-[240px] leading-relaxed min-h-[48px] flex items-center justify-center">
          {subtitle}
        </p>
        
        {/* Learn More Button */}
        <button
          onClick={onLearnMore}
          className="mt-4 px-5 py-2 bg-[#191919] hover:bg-gray-800 text-white text-xs font-semibold rounded-lg transition-all duration-300 active:scale-95 cursor-pointer"
        >
          Learn more
        </button>
      </div>

      {/* Product Image pinned neatly to the bottom */}
      <div className="w-full h-[225px] flex items-end justify-center overflow-hidden px-4">
        {image && (
          <motion.img
            initial={{ opacity: 0, y: 20 }}
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

// --- "ALL PRODUCTS" CARD COMPONENT ---
export const AllProductsCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group bg-white h-[516px] flex flex-col items-center justify-center gap-4 cursor-pointer w-full rounded-sm shadow-sm border border-gray-100"
    >
      <span className="text-3xl font-bold text-[#191919] tracking-tight">
        All Products
      </span>
      
      <div className="w-10 h-10 border-2 border-[#FF6700] rounded-lg flex items-center justify-center text-[#FF6700] transition-transform duration-300 group-hover:translate-x-1.5">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2.5} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
        </svg>
      </div>
    </button>
  );
};

// --- MAIN GRID CONTAINER
export const ProductGrid = ({ products = [], onLearnMore, onViewAll }) => {
  return (
    <section className="w-full bg-[#F5F7FA] py-4 px-4">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id || product.title}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            onLearnMore={() => onLearnMore && onLearnMore(product)}
          />
        ))}
        <AllProductsCard onClick={onViewAll} />
      </div>
    </section>
  );
};

export default ProductGrid;