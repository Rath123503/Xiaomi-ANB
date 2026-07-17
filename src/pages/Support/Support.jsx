import React from 'react';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { SupportContent } from './SupportContent';

export const Support = ({
  onSelectProduct,
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
      
      <SupportContent />
    
      {/* Footer rendered inside page */}
      <Footer />
    </div>
  );
};

export default Support;
