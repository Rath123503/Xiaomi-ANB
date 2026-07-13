import React from 'react';
import { motion } from 'framer-motion';

// --- SINGLE PRODUCT CARD COMPONENT ---
export const ProductCard = ({ title, subtitle, image, onLearnMore }) => {
  return (
    <div className="relative bg-[#F9F9F9] h-[516px] w-[340px]  overflow-hidden flex flex-col justify-between items-center pt-12 pb-4 ">
      {/* Text Content Area */}
      <div className="text-center flex flex-col items-center flex-1">
        <h3 className="text-2xl font-bold text-[#191919] tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-[240px] leading-relaxed min-h-[40px]">
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
      <div className="w-full h-[225px] flex items-end justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image}
          alt={title}
          className="h-full object-contain object-bottom select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

// --- "ALL PRODUCTS" CARD COMPONENT ---
export const AllProductsCard = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group bg-[#F9F9F9] h-[516px] flex flex-col items-center justify-center gap-4 cursor-pointer w-full"
    >
      <span className="text-3xl font-bold text-[#191919] tracking-tight">
        All Products
      </span>
      
      {/* Orange Arrow Icon Wrapper */}
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

// --- MAIN GRID CONTAINER ---
export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Xiaomi 17T",
      subtitle: "Leica 5x Telephoto",
      image: "https://i02.appmifile.com/866_operator_global/04/06/2026/b3ef2b5dc1eb74c707c3793245106adf.png?thumb=1&w=500&f=webp&q=85", // Replace with real image path
    },
    {
      id: 2,
      title: "Xiaomi 17 Ultra",
      subtitle: "Essential Leica Imagery",
      image: "https://i02.appmifile.com/146_operatorx_operatorx_opx/20/02/2026/dbdf12655687b48d825c298dffc04954.png?thumb=1&w=500&f=webp&q=85", // Replace with real image path
    },
    {
      id: 3,
      title: "Xiaomi 17",
      subtitle: "Light Fusion 950 high dynamic sensor 6330mAh (typ) Xiaomi Surge Battery",
      image: "https://i02.appmifile.com/688_operatorx_operatorx_opx/20/02/2026/3f1abe3d947c14ca8dbcb839bf280309.png?thumb=1&w=500&f=webp&q=85", // Replace with real image path
    },
  ];

  return (
    <section className="w-full bg-white py-4 px-4 sm:px-4 lg:px-4">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle}
            image={product.image}
            onLearnMore={() => console.log(`Clicked ${product.title}`)}
          />
        ))}
        <AllProductsCard onClick={() => console.log("Navigate to all products")} />
      </div>
    </section>
  );
};

export default ProductGrid;
