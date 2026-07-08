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
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSubCat = searchParams.get('cat') || 'all';
  const categoryData = XIAOMI_CATEGORIES.wearables;

  const products = categoryData.products.filter(
    (p) => activeSubCat === 'all' || p.subCategory === activeSubCat
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar rendered inside page */}
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      {/* Footer rendered inside page */}
      <Footer />
    </div>
  );
};

export default Wearables;
