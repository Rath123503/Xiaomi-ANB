import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Mobile } from './pages/Mobile/Mobile';
import { Wearables } from './pages/Wearables/Wearables';
import { SmartHome, TvsAndHA, VacuumCleaners, EnvironmentAppliance, KitchenAppliance, CookingAppliances, SmartLightings, HomeSecurity } from './pages/SmartHome/SmartHome';
import { Discover } from './pages/Discover/Discover';
import { Support } from './pages/Support/Support';
import { ProductModal } from './components/common/Modal/ProductModal';
import { AuthModal } from './components/common/Modal/AuthModal';
import { CartModal } from './components/common/Modal/CartModal';
import { XIAOMI_CATEGORIES } from './data/XiaomiProducts';
import { MaterialIcon } from './components/common/MaterialIcon';
import { motion, AnimatePresence } from 'motion/react';


// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
} 

export default function App() {
  // Initial cart items (Watch S3 and 120W Charger)
  const [cartItems, setCartItems] = useState([
    // { product: XIAOMI_CATEGORIES.wearables.products[0], quantity: 1 },
    { product: XIAOMI_CATEGORIES.mobile.products[6], quantity: 1 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`Added "${product.name}" to bag`);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from bag');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Bag emptied');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#191919] font-sans selection:bg-[#FF6900] selection:text-white">
        
        {/* MAIN PAGE ROUTER */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/mobile"
              element={
                <Mobile
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/wearables"
              element={
                <Wearables
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home"
              element={
                <SmartHome
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />

            {/* TVs & HA listing page — reached via the "More" button
                and "All Products" arrow on the Smart Home page. */}
            <Route
              path="/smart-home/tvs-ha"
              element={
                <TvsAndHA
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/vacuum-cleaners"
              element={
                <VacuumCleaners
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/environment-appliance"
              element={
                <EnvironmentAppliance
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/kitchen-appliance"
              element={
                <KitchenAppliance
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/cooking-appliances"
              element={
                <CookingAppliances
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/smart-lightings"
              element={
                <SmartLightings
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/smart-home/home-security"
              element={
                <HomeSecurity
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onAddToCart={handleAddToCart}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />

            <Route
              path="/discover"
              element={
                <Discover
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            <Route
              path="/support"
              element={
                <Support
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            />
            {/* <Route
              path="/community"
              element={
                <Community
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onOpenAuthModal={() => setIsAuthOpen(true)}
                  onOpenCartModal={() => setIsCartOpen(true)}
                  cartCount={cartCount}
                />
              }
            /> */}
            {/* WILDCARD FALLBACK ROUTE TO PREVENT BLANK SCREEN ON UNMATCHED PATHS */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </main>

        {/* PRODUCT QUICK VIEW MODAL */}
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />

        {/* ACCOUNT / AUTH MODAL */}
        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onLoginSuccess={(user) => showToast(`Welcome back, ${user.name}!`)}
        />

        {/* SHOPPING BAG DRAWER */}
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* TOAST NOTIFICATION */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-6 right-6 z-50 bg-[#191919] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-700/80"
            >
              <div className="w-6 h-6 rounded-full bg-[#FF6900] flex items-center justify-center text-white shrink-0">
                <MaterialIcon name="check_circle" size={16} fill={true} />
              </div>
              <span className="text-sm font-semibold">{toastMessage}</span>
              <button
                onClick={() => setIsCartOpen(true)}
                className="ml-2 px-3 py-1 bg-white/10 hover:bg-white/20 text-orange-400 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                View Bag ({cartCount})
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </BrowserRouter>
  );
}