import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../MaterialIcon';

export const CartModal = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  // Calculate totals
  const subtotal = items.reduce((acc, item) => {
    const numericPrice = parseFloat(item.product.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50"
      />

      {/* Slide Drawer from Right */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/60">
          <div className="flex items-center gap-2">
            <MaterialIcon name="shopping_bag" size={22} className="text-[#FF6900]" />
            <h3 className="font-bold text-lg text-gray-900">Your Shopping Cart</h3>
            <span className="px-2 py-0.5 bg-orange-100 text-[#FF6900] rounded-full text-xs font-bold">
              {items.reduce((a, b) => a + b.quantity, 0)} items
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer flex items-center justify-center"
          >
            <MaterialIcon name="close" size={20} />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                <MaterialIcon name="shopping_bag" size={36} />
              </div>
              <h4 className="text-base font-bold text-gray-700">Your cart is empty</h4>
              <p className="text-xs text-gray-400 mt-1">
                Discover flagship Xiaomi phones, wearables, and smart home tech!
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-end">
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-500 hover:underline font-semibold cursor-pointer"
                >
                  Clear all items
                </button>
              </div>

              {items.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  layout
                  className="flex gap-4 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 relative group"
                >
                  <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center shrink-0 border border-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-semibold text-[#FF6900] block mt-0.5">
                      {product.price}
                    </span>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="text-gray-400 hover:text-gray-700 p-0.5 cursor-pointer flex items-center justify-center"
                        >
                          <MaterialIcon name="remove" size={14} />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-gray-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="text-gray-400 hover:text-gray-700 p-0.5 cursor-pointer flex items-center justify-center"
                        >
                          <MaterialIcon name="add" size={14} />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-gray-400 hover:text-red-500 p-1.5 transition-colors cursor-pointer flex items-center justify-center"
                        title="Remove item"
                      >
                        <MaterialIcon name="delete" size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* FOOTER TOTALS */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50/90 space-y-3">
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <span>Shipping</span>
              <span>{shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `$${shipping}`}</span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between text-base font-bold text-gray-900">
              <span>Total</span>
              <span className="text-[#FF6900] text-xl">${total.toFixed(2)}</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                console.log(`Proceeding to Xiaomi Official Checkout! Total: $${total.toFixed(2)}`);
              }}
              className="w-full py-3.5 bg-[#FF6900] hover:bg-[#e05d00] text-white rounded-xl font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Proceed to Checkout</span>
              <MaterialIcon name="arrow_forward" size={18} />
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-medium pt-1">
              <MaterialIcon name="verified_user" size={14} className="text-[#FF6900]" />
              <span>256-bit SSL encrypted & Xiaomi Global Guarantee</span>
            </div>
          </div>
        )}
      </motion.aside>
    </AnimatePresence>
  );
};
export default CartModal;
