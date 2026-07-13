import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/layout/Navbar/Navbar';
import { Footer } from '../../components/layout/Footer/Footer';
import { MaterialIcon } from '../../components/common/MaterialIcon';
import { SmartHomeHeroCarousel } from '../../components/Smart/SmartHomecarousel';
import { tvsAndHAProducts, vacuumCleanersProducts, environmentApplianceProducts, kitchenApplianceProducts, cookingAppliancesProducts, smartLightingProducts, homeSecurityProducts, tvsAndHAAllProducts, vacuumCleanersAllProducts, environmentApplianceAllProducts, kitchenApplianceAllProducts, cookingAppliancesAllProducts, smartLightingAllProducts, homeSecurityAllProducts } from '../../data/SmartHome';

// ============================================================
// REUSABLE CARD COMPONENT - Used by all sections
// ============================================================
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
  }),
};

const ProductCard = ({ product, index, isLarge = false, onLearnMore }) => {
  const { name, tagline, image } = product;

  return (
    <motion.article
      className={`group flex w-full flex-col items-center justify-start bg-white p-[27px] text-center ${
        isLarge ? 'h-[380px] sm:h-[460px] lg:h-[516.97px]' : 'h-[340px] sm:h-[420px] lg:h-[516.97px]'
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-xl'}`}>
        {name}
      </h3>
      <p className={`mt-2 text-gray-500 ${isLarge ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'}`}>
        {tagline}
      </p>

      <button
        type="button"
        onClick={() => onLearnMore && onLearnMore(product)}
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-lg bg-black px-6 py-1.5 text-sm font-Regular text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

// ============================================================
// "ALL PRODUCTS" CARD COMPONENT
// ============================================================
const AllProductsCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex h-[340px] w-full flex-col items-center justify-center gap-4 bg-white p-[27px] text-center sm:h-[420px] lg:h-[516.97px]"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);

// ============================================================
// REUSABLE SECTION COMPONENT
// ============================================================
const ProductSection = ({ title, products, navigatePath, onViewAll }) => {
  const navigate = useNavigate();
  const largeProducts = products.filter((p) => p.size === 'large');
  const smallProducts = products.filter((p) => p.size === 'small').slice(0, 3);

  // Determine grid columns for large cards (2 or 3 based on product count)
  const largeGridCols = largeProducts.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3';

  const handleMoreClick = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      navigate(navigatePath);
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="flex flex-col items-center py-14 text-center">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-[28px]">
          {title}
        </h1>
        <button
          type="button"
          onClick={handleMoreClick}
          className="mt-4 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          More
        </button>
      </div>

      {/* Large Products Grid */}
      <div className={`grid grid-cols-1 gap-[2px] bg-[#F5F5F5] ${largeGridCols}`}>
        {largeProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} isLarge={true} />
        ))}
      </div>

      {/* Small Products Grid */}
      <div className="mt-[2px] grid grid-cols-2 gap-[2px] bg-[#F5F5F5] lg:grid-cols-4">
        {smallProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} isLarge={false} />
        ))}
        <AllProductsCard index={smallProducts.length} onViewAll={handleMoreClick} />
      </div>
    </section>
  );
};

// ============================================================
// MAIN SMART HOME PAGE
// ============================================================
export const SmartHome = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const navigate = useNavigate();

  // Navigation handler for "More" buttons
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSelectProduct={onSelectProduct}
        onOpenAuthModal={onOpenAuthModal}
        onOpenCartModal={onOpenCartModal}
        cartCount={cartCount}
      />

      <SmartHomeHeroCarousel onSelectProduct={onSelectProduct} />

      <ProductSection 
        title="TVs & HA" 
        products={tvsAndHAProducts} 
        navigatePath="/smart-home/tvs-ha"
        onViewAll={() => handleNavigate('/smart-home/tvs-ha')}
      />

      <ProductSection 
        title="Vacuum Cleaners" 
        products={vacuumCleanersProducts} 
        navigatePath="/smart-home/vacuum-cleaners"
        onViewAll={() => handleNavigate('/smart-home/vacuum-cleaners')}
      />

      <ProductSection 
        title="Environment Appliance" 
        products={environmentApplianceProducts} 
        navigatePath="/smart-home/environment-appliance"
        onViewAll={() => handleNavigate('/smart-home/environment-appliance')}
      />

      <ProductSection 
        title="Kitchen Appliance" 
        products={kitchenApplianceProducts} 
        navigatePath="/smart-home/kitchen-appliance"
        onViewAll={() => handleNavigate('/smart-home/kitchen-appliance')}
      />

      <ProductSection 
        title="Cooking Appliances" 
        products={cookingAppliancesProducts} 
        navigatePath="/smart-home/cooking-appliances"
        onViewAll={() => handleNavigate('/smart-home/cooking-appliances')}
      />

      <ProductSection 
        title="Smart Lightings" 
        products={smartLightingProducts} 
        navigatePath="/smart-home/smart-lightings"
        onViewAll={() => handleNavigate('/smart-home/smart-lightings')}
      />

      <ProductSection 
        title="Home Security" 
        products={homeSecurityProducts} 
        navigatePath="/smart-home/home-security"
        onViewAll={() => handleNavigate('/smart-home/home-security')}
      />

      <Footer />
    </div>
  );
};

export default SmartHome;

/* ============================================================
   ADDED PAGE — TVs & HA full listing page (Figma design)
   Navigated to from the TVs & HA "More" button / "All Products"
   arrow above. Routed at /smart-home/tvs-ha in App.jsx.
   ============================================================ */

const PRODUCTS_PER_PAGE = 12;

const listingCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: (index % PRODUCTS_PER_PAGE) * 0.04, ease: 'easeOut' },
  }),
};

const ListingCard = ({ product, index }) => {
  const { name, image } = product;

  return (
    <motion.article
      className="group flex h-[420px] w-full flex-col items-center justify-start bg-white p-6 text-center sm:h-[460px]"
      variants={listingCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
        {name}
      </h3>

      <button
        type="button"
        aria-label={`Learn more about ${name}`}
        className="mt-4 rounded-md bg-black px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      >
        Learn more
      </button>

      <div className="mt-6 flex w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
    </motion.article>
  );
};

const ListingPagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex items-center justify-center gap-6 py-14">
    <button
      type="button"
      onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
      aria-label="Previous page"
      className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white transition-colors duration-300 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <MaterialIcon name="chevron_left" size={20} />
    </button>

    <div className="flex items-center gap-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage}
          className={`text-base font-semibold transition-colors duration-200 focus:outline-none ${
            page === currentPage ? 'text-orange-500' : 'text-gray-900 hover:text-orange-500'
          }`}
        >
          {page}
        </button>
      ))}
    </div>

    <button
      type="button"
      onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
      aria-label="Next page"
      className="flex h-11 w-11 items-center justify-center rounded-md bg-black text-white transition-colors duration-300 hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
    >
      <MaterialIcon name="chevron_right" size={20} />
    </button>
  </div>
);

export const TvsAndHA = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(tvsAndHAAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = tvsAndHAAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">TVs &amp; HA</h1>

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

/* ============================================================
   ADDED PAGE — Vacuum Cleaner full listing page (Figma design)
   Navigated to from the Vacuum Cleaners "More" button / "All
   Products" arrow above. Routed at /smart-home/vacuum-cleaners
   in App.jsx.
   ============================================================ */

export const VacuumCleaners = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(vacuumCleanersAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = vacuumCleanersAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Vacuum Cleaner</h1>

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

/* ============================================================
   ADDED PAGE — Environment Appliance full listing page (Figma design)
   Navigated to from the Environment Appliance "More" button /
   "All Products" arrow above. Routed at
   /smart-home/environment-appliance in App.jsx.
   ============================================================ */

export const EnvironmentAppliance = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(environmentApplianceAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = environmentApplianceAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Environment Appliance</h1>

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

/* ============================================================
   ADDED PAGE — Kitchen Appliance full listing page (Figma design)
   Navigated to from the Kitchen Appliance "More" button /
   "All Products" arrow above. Routed at
   /smart-home/kitchen-appliance in App.jsx.
   ============================================================ */

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

/* ============================================================
   ADDED PAGE — Cooking Appliances full listing page (Figma design)
   Navigated to from the Cooking Appliances "More" button /
   "All Products" arrow above. Routed at
   /smart-home/cooking-appliances in App.jsx.
   ============================================================ */

export const CookingAppliances = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(cookingAppliancesAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = cookingAppliancesAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Cooking Appliances</h1>

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

/* ============================================================
   ADDED PAGE — Smart Lightings full listing page (Figma design)
   Navigated to from the Smart Lightings "More" button /
   "All Products" arrow above. Routed at
   /smart-home/smart-lightings in App.jsx.
   ============================================================ */

export const SmartLightings = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(smartLightingAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = smartLightingAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Smart Lightings</h1>

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

/* ============================================================
   ADDED PAGE — Home Security full listing page (Figma design)
   Navigated to from the Home Security "More" button /
   "All Products" arrow above. Routed at
   /smart-home/home-security in App.jsx.
   ============================================================ */

export const HomeSecurity = ({
  onSelectProduct,
  onAddToCart,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount,
}) => {
  const [sortMode, setSortMode] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(homeSecurityAllProducts.length / PRODUCTS_PER_PAGE));
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = homeSecurityAllProducts.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

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
          <h1 className="text-2xl font-bold text-gray-900 sm:text-[28px]">Home Security</h1>

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