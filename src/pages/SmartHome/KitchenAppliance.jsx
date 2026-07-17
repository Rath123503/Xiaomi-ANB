import React, { useState } from 'react';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { MaterialIcon } from '../../components/common/MaterialIcon';
import { ListingCard } from '../../components/Smart/ListingCard';
import { ListingPagination } from '../../components/Smart/ListingPagination';
import { kitchenApplianceAllProducts } from '../../data/SmartHome';

const PRODUCTS_PER_PAGE = 12;

export const KitchenAppliance = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(kitchenApplianceAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = kitchenApplianceAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <div className="w-full bg-[#F5F5F5]">
        {/* Page header + filter row */}
        <div className="mx-auto max-w-[1400px] px-6 pt-10 sm:px-12 md:px-16">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Kitchen Appliance</h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm sm:text-base">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-gray-900 hover:text-orange-500 focus:outline-none"
            >
              Categories
              <MaterialIcon name="expand_more" size={18} />
            </button>

            <button
              type="button"
              onClick={() => setSortMode('relevance')}
              className={`font-medium transition-colors focus:outline-none ${
                sortMode === 'relevance' ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500'
              }`}
            >
              Relevance
            </button>

            <span className="text-gray-300">|</span>

            <button
              type="button"
              onClick={() => setSortMode('new')}
              className={`font-medium transition-colors focus:outline-none ${
                sortMode === 'new' ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500'
              }`}
            >
              New
            </button>
          </div>
        </div>

        {/* Product grid — 4 per row on desktop */}
        <div className="mx-auto mt-8 max-w-[1400px] px-6 sm:px-12 md:px-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {pageProducts.map((product, index) => (
              <ListingCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <ListingPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        )}
      </div>

      <Footer />
    </div>
  );
};