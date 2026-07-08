import React from 'react';
import { motion } from 'motion/react';
import { ALL_PRODUCTS } from '../../data/xiaomiProducts';
import { HeroCarousel } from '../../components/home/HeroCarousel';
import { MaterialIcon } from '../../components/common/MaterialIcon';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';

// Helper to find or map a product so that click works
const findProductByName = (name) => {
  return ALL_PRODUCTS.find(p => p.name.toLowerCase().includes(name.toLowerCase())) || ALL_PRODUCTS[0];
};

export const Home = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  
  const handleProductClick = (name) => {
    const prod = findProductByName(name);
    if (onSelectProduct && prod) {
      onSelectProduct(prod);
    }
  };

  const handleBuyClick = (name, e) => {
    e.stopPropagation();
    const prod = findProductByName(name);
    if (onAddToCart && prod) {
      onAddToCart(prod);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#191919] font-sans selection:bg-[#FF6900] selection:text-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />
      
      {/* 0. HERO CAROUSEL */}
      <HeroCarousel onSelectProduct={handleProductClick} />
      {/* 1. Featured Products Section*/}
      <section className="bg-white pt-8 pb-12 px-4 sm:px-6 md:px-8 text-center border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#191919] mb-1">
            Featured Products
          </h2>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
