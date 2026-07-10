import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { XIAOMI_CATEGORIES } from '../../data/xiaomiProducts';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { MaterialIcon } from '../../components/common/MaterialIcon';

export const Wearables = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
 
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar rendered inside page */}
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />              
      
     <div className="smartwatch h-[168px] bg-gray-200 flex items-center justify-center">
        <div className="SM flex flex-col items-center gap-3">
        <h2 className="text-[26px]">Smart Watch</h2>
        <p className="w-[90px] h-[40px] bg-gray-950 rounded-[12px] text-[16px] text-white flex items-center justify-center">  More

         </p>
       </div>
  
    </div>
    <div className="herowatch">
     <img src="https://i02.appmifile.com/38_operator_global/28/05/2026/b847290ce845d16c08da77a1d118a082.jpg?thumb=1&w=2560&f=webp&q=85" alt="" />
     
    </div>
    



     
   
      <Footer />
    </div>
  );
};

export default Wearables;
