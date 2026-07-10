import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../../common/MaterialIcon';
import logo from "../../../assets/images/logohome.png";

import { 
  XIAOMI_CATEGORIES,
  TRENDING_SEARCHES, 
  RECENT_SEARCHES, 
  POPULAR_PRODUCTS, 
  ALL_PRODUCTS 
} from '../../../data/xiaomiProducts';

// 1. LOGO COMPONENT

export const Logo = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick} className="flex items-center shrink-0 focus:outline-none rounded-[10px]">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-[32px] h-[32px]  rounded-[10px] flex items-center justify-center  overflow-hidden select-none cursor-pointer"
        aria-label="Nova home"
      >
        <img
          src={logo}
          alt=""
          className="w-[22px] h-[22px]"
          draggable={false}
        />
      </motion.div>
    </Link>
  );
};


// 2. NAV ITEM COMPONENT

export const NavItem = ({
  label,
  href,
  isActive,
  onClick,
}) => {
  return (
    <div className="group relative flex items-center h-[48px] cursor-pointer">
      <Link
        to={href}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
        className={`text-[14px] font-medium transition-colors duration-200 py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6900] rounded-md flex items-center ${
          isActive
            ? 'text-[#FF6900]'
            : 'text-[#191919] group-hover:text-[#FF6900]'
        }`}
      >
        <span>{label}</span>
      </Link>
    </div>
  );
};

// 3. ICON BUTTONS

export const IconButton = ({
  onClick,
  ariaLabel,
  icon,
  badgeCount,
  isActive = false,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative p-2 rounded-full transition-colors duration-200 focus:outline-none flex items-center justify-center cursor-pointer ${
        isActive
          ? 'text-[#FF6900]'
          : 'text-[#191919] hover:text-[#FF6900]'
      }`}
    >
      {icon}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] bg-[#FF6900] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-xs">
          {badgeCount}
        </span>
      )}
    </motion.button>
  );
};

// Search and Account icons are intentionally non-interactive (no onClick) —
// clicking them currently does nothing.
export const SearchIcon = () => (
  <IconButton
    ariaLabel="Search"
    icon={<MaterialIcon name="search" size={22} />}
  />
);

export const AccountIcon = ({ isActive }) => (
  <IconButton
    ariaLabel="User Account"
    icon={<MaterialIcon name="person" size={22} fill={isActive} />}
    isActive={isActive}
  />
);

export const CartIcon = ({ onClick, count = 2 }) => (
  <IconButton
    onClick={onClick}
    ariaLabel="Shopping Cart"
    icon={<MaterialIcon name="shopping_bag" size={22} />}
    badgeCount={count}
  />
);

// 4. DESKTOP NAV COMPONENT

export const DesktopNav = ({
  activePath,
  onOpenSearch,
  onOpenAccount,
  onOpenCart,
  cartCount,
}) => {
  const primaryMenuItems = [
    { label: 'Mobile', href: '/mobile', slug: 'mobile' },
    { label: 'Wearables', href: '/wearables', slug: 'wearables' },
    { label: 'Smart Home', href: '/smart-home', slug: 'smart-home' },
    { label: 'Lifestyle', href: '/lifestyle', slug: 'lifestyle' },
    { label: 'POCO', href: '/poco', slug: 'poco' },
  ];

  const secondaryMenuItems = [
    { label: 'Discover', href: '/discover' },
    { label: 'Support', href: '/support' },
    { label: 'Community', href: '/community' },
  ];

  return (
    <div className="hidden lg:flex items-center justify-between h-[48px] w-full text-[#191919] font-sans">
      {/* LEFT PORTION: Logo + Primary Navigation */}
      <div className="flex items-center h-full">
        <div className="mr-[32px] flex items-center">
          <Logo />
        </div>

        <nav className="flex items-center space-x-[24px] h-full" aria-label="Primary Navigation">
          {primaryMenuItems.map((item) => {
            const isActive = activePath.startsWith(item.href);
            return (
              <NavItem
                key={item.slug}
                label={item.label}
                href={item.href}
                isActive={isActive}
              />
            );
          })}
        </nav>
      </div>

      {/* Gray vertical separator line */}
      <div className="hidden lg:block w-[1px] h-[14px] bg-[#D1D1D1] mx-[16px] self-center" />

      {/* RIGHT PORTION: Secondary Navigation + Icons */}
      <div className="flex items-center h-full">
        {/* Secondary Navigation */}
        <nav className="flex items-center space-x-[24px] mr-[32px] h-full" aria-label="Secondary Navigation">
          {secondaryMenuItems.map((item) => {
            const isActive = activePath.startsWith(item.href);
            return (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isActive={isActive}
              />
            );
          })}
        </nav>

        {/* Icons (Search, Account) — non-interactive, clicks do nothing */}
        <div className="flex items-center space-x-[24px]">
          <SearchIcon />
          <AccountIcon />
        </div>
      </div>
    </div>
  );
};


// 5. MOBILE NAV COMPONENT

export const MobileNav = ({
  onOpenDrawer,
  onOpenSearch,
  onOpenAccount,
}) => {
  return (
    <div className="flex lg:hidden items-center justify-between h-[48px] w-full">
      {/* Left: Hamburger menu */}
      <button
        onClick={onOpenDrawer}
        aria-label="Open Navigation Drawer"
        className="p-2 -ml-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
      >
        <MaterialIcon name="menu" size={24} />
      </button>

      {/* Center: Brand Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      {/* Right: Search, Account icons — non-interactive, clicks do nothing */}
      <div className="flex items-center gap-1.5">
        <SearchIcon />
        <AccountIcon />
      </div>
    </div>
  );
};

// Mega menu removed

// 7. SEARCH OVERLAY COMPONENT
// Note: no longer triggered from the navbar (Search icon click is disabled),
// kept here in case it's opened from elsewhere in the app.

export const SearchOverlay = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);
  const inputRef = useRef(null);

  // Focus input on open & ESC listener
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter products by query
  const searchResults = query.trim()
    ? ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.subCategory.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearchClick = (term) => {
    setQuery(term);
    if (!recentSearches.includes(term)) {
      setRecentSearches([term, ...recentSearches.slice(0, 4)]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed inset-0 bg-white z-50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Search Xiaomi Products"
        >
          {/* TOP SEARCH HEADER */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-10 px-6 py-5">
            <div className="max-w-[1440px] mx-auto flex items-center gap-4">
              <MaterialIcon name="search" size={28} className="text-[#FF6900] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Xiaomi products"
                className="w-full text-2xl md:text-3xl font-medium text-gray-900 bg-transparent border-none focus:outline-none placeholder:text-gray-300"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <MaterialIcon name="close" size={20} />
                </button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                aria-label="Close search overlay"
                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#FF6900] hover:text-white transition-colors ml-2 cursor-pointer flex items-center justify-center shrink-0"
              >
                <MaterialIcon name="close" size={24} />
              </motion.button>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="max-w-[1440px] mx-auto px-6 py-10">
            {query.trim() !== '' ? (
              /* SEARCH RESULTS VIEW */
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <span>Search results for "{query}"</span>
                    <span className="text-sm font-normal text-gray-400">({searchResults.length} items found)</span>
                  </h3>
                </div>

                {searchResults.length === 0 ? (
                  <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                    <MaterialIcon name="search" size={48} className="text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-gray-700">No products found</h4>
                    <p className="text-sm text-gray-500 mt-1">Try checking your spelling or searching for another term like "14 Ultra" or "Watch".</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {searchResults.map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ y: -6 }}
                        onClick={() => {
                          onSelectProduct?.(product);
                          onClose();
                        }}
                        className="group bg-white p-4 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                      >
                        <div className="h-32 w-full flex items-center justify-center overflow-hidden mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="text-center">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                            {product.category}
                          </span>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#FF6900] transition-colors truncate">
                            {product.name}
                          </h4>
                          <span className="text-sm font-bold text-[#FF6900] block mt-1">
                            {product.price}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


// 8. MOBILE DRAWER COMPONENT

export const MobileDrawer = ({
  isOpen,
  onClose,
  activePath,
  onOpenAuthModal,
}) => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedLang, setSelectedLang] = useState('English (US)');
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const mainNavItems = [
    { label: 'Home', href: '/', slug: 'home' },
    { label: 'Mobile', href: '/mobile', slug: 'mobile', hasSub: true },
    { label: 'Wearables', href: '/wearables', slug: 'wearables', hasSub: true },
    { label: 'Smart Home', href: '/smart-home', slug: 'smart-home', hasSub: true },
    { label: 'Lifestyle', href: '/lifestyle', slug: 'lifestyle', hasSub: true },
    { label: 'POCO', href: '/poco', slug: 'poco', hasSub: true },
  ];

  const secondaryNavItems = [
    { label: 'Discover', href: '/discover' },
    { label: 'Support', href: '/support' },
    { label: 'Community', href: '/community' },
  ];

  const toggleExpand = (slug) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer from Left (320px width) */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-[320px] bg-white z-50 flex flex-col shadow-2xl overflow-hidden lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
          >
            {/* DRAWER HEADER */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-[32px] h-[32px] bg-[#FF6900] rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-xs">
                  mi
                </div>
                <span className="font-bold text-gray-900 tracking-tight text-lg">
                  Xiaomi Store
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-200/60 transition-colors flex items-center justify-center"
              >
                <MaterialIcon name="close" size={22} />
              </button>
            </div>

            {/* DRAWER MENU LIST */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
              
              {/* PRIMARY NAV WITH SUBCATEGORIES */}
              <div>
                <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Products
                </span>
                <div className="space-y-1">
                  {mainNavItems.map((item) => {
                    const isActive = item.href === '/' ? activePath === '/' : activePath.startsWith(item.href);
                    const isExpanded = expandedCategory === item.slug;
                    const catData = XIAOMI_CATEGORIES[item.slug];

                    return (
                      <div key={item.slug} className="rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between">
                          <Link
                             to={item.href}
                             onClick={onClose}
                             className={`flex-1 px-3 py-3 text-[16px] font-medium transition-colors flex items-center ${
                               isActive ? 'text-[#FF6900] font-semibold' : 'text-[#191919] hover:text-[#FF6900]'
                             }`}
                          >
                            <span>{item.label}</span>
                          </Link>
                          {item.hasSub && catData && (
                            <button
                              onClick={() => toggleExpand(item.slug)}
                              aria-expanded={isExpanded}
                              aria-label={`Toggle ${item.label} subcategories`}
                              className="p-3 text-gray-400 hover:text-[#FF6900] transition-colors flex items-center justify-center"
                            >
                              <MaterialIcon
                                name="keyboard_arrow_down"
                                size={18}
                                className={`transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180 text-[#FF6900]' : ''
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Collapsible Subcategories */}
                        <AnimatePresence>
                          {isExpanded && catData && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-gray-50/80 rounded-xl px-4 py-2 mb-1 border border-gray-100"
                            >
                              <div className="space-y-2 py-1">
                                {catData.subCategories.map((sub) => (
                                  <Link
                                    key={sub.slug}
                                    to={`${item.href}?cat=${sub.slug}`}
                                    onClick={onClose}
                                    className="block py-1.5 text-sm text-gray-600 hover:text-[#FF6900] transition-colors font-medium flex items-center justify-between group"
                                  >
                                    <span>{sub.name}</span>
                                    <MaterialIcon name="chevron_right" size={14} className="text-gray-300 group-hover:text-[#FF6900] group-hover:translate-x-1 transition-all" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* SECONDARY NAVIGATION */}
              <div>
                <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  Explore
                </span>
                <div className="space-y-1">
                  {secondaryNavItems.map((item) => {
                    const isActive = activePath === item.href;
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={onClose}
                        className={`block px-3 py-3 rounded-xl text-[16px] font-medium transition-colors flex items-center ${
                          isActive
                            ? 'bg-orange-50 text-[#FF6900] font-semibold'
                            : 'text-[#191919] hover:bg-gray-50 hover:text-[#FF6900]'
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* DRAWER FOOTER: Sign In & Language Selector */}
            <div className="p-5 border-t border-gray-100 bg-gray-50/80 space-y-4">
              {/* Sign In Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onClose();
                  onOpenAuthModal?.();
                }}
                className="w-full py-3 px-4 bg-[#FF6900] hover:bg-[#e05d00] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MaterialIcon name="login" size={18} />
                <span>Sign In / Register</span>
              </motion.button>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                  className="w-full py-2.5 px-3 bg-white border border-gray-200 rounded-xl text-xs font-medium text-gray-700 flex items-center justify-between hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MaterialIcon name="language" size={16} className="text-gray-500" />
                    <span>Region / Language: <strong>{selectedLang}</strong></span>
                  </div>
                  <MaterialIcon name="keyboard_arrow_down" size={14} className="text-gray-400" />
                </button>

                {showLangDropdown && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-xl shadow-lg p-2 space-y-1 z-20">
                    {['English (US)', 'English (UK)', 'Español (ES)', 'Français (FR)', 'Global / International'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setShowLangDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium ${
                          selectedLang === lang ? 'bg-orange-50 text-[#FF6900] font-semibold' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};


// 9. CORE NAVBAR COMPONENT

export const Navbar = ({
  onSelectProduct,
  onOpenAuthModal,
  onOpenCartModal,
  cartCount = 2,
}) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle scroll event for sticky background blur and shadow
  useEffect(() => {
    const fontImport = document.createElement('link');
    fontImport.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap';
    fontImport.rel = 'stylesheet';
    document.head.appendChild(fontImport);

    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b border-[#ECECEC] ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-white'
        }`}
      >
        {/* Container: max-width 1440px, margin auto, px 32px */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <DesktopNav
            activePath={location.pathname}
            onOpenCart={() => onOpenCartModal?.()}
            cartCount={cartCount}
          />

          <MobileNav
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onOpenCart={() => onOpenCartModal?.()}
            cartCount={cartCount}
          />
        </div>
      </header>

      {/* Fullscreen Search Overlay — no longer opened from the navbar */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={onSelectProduct}
      />

      {/* Mobile Sidebar Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activePath={location.pathname}
        onOpenAuthModal={onOpenAuthModal}
      />
    </>
  );
};

export default Navbar;