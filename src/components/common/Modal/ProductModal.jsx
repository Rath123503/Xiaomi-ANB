import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialIcon } from '../MaterialIcon';

export const ProductModal = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [selectedColor, setSelectedColor] = React.useState('Black / Dark Titanium');
  const [isLiked, setIsLiked] = React.useState(false);

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-gray-100 hover:bg-[#FF6900] hover:text-white text-gray-600 transition-colors cursor-pointer flex items-center justify-center"
          >
            <MaterialIcon name="close" size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
            {/* LEFT: Product Image & Badges */}
            <div className="md:col-span-6 bg-gradient-to-br from-gray-50 to-gray-100/70 p-8 flex flex-col items-center justify-center relative">
              {product.badge && (
                <span
                  className={`absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
                    product.badgeColor || 'bg-[#FF6900] text-white'
                  }`}
                >
                  {product.badge}
                </span>
              )}

              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={product.image}
                alt={product.name}
                className="max-h-[300px] object-contain drop-shadow-lg my-6"
                referrerPolicy="no-referrer"
              />

              <div className="flex items-center gap-2 mt-4">
                {['Black / Dark Titanium', 'Ceramic White', 'Dragon Crystal Blue'].map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform ${
                      selectedColor === color ? 'border-[#FF6900] scale-110 shadow-sm' : 'border-transparent opacity-70'
                    }`}
                    style={{
                      backgroundColor: idx === 0 ? '#2a2a2c' : idx === 1 ? '#f3f4f6' : '#2563eb'
                    }}
                    title={color}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 mt-2 font-medium">Color: {selectedColor}</span>
            </div>

            {/* RIGHT: Product Info & Buy Action */}
            <div className="md:col-span-6 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6900] uppercase tracking-wider mb-2">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.subCategory}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-2xl font-extrabold text-[#FF6900]">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {product.rating && (
                  <div className="flex items-center gap-1.5 mt-3">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <MaterialIcon key={i} name="star" size={16} fill={true} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-800">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews || 120} verified reviews)</span>
                  </div>
                )}

                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {product.description ||
                    `Experience the next generation of Xiaomi innovation with ${product.name}. Featuring premium build quality, cutting-edge HyperOS integration, and industry-leading performance.`}
                </p>

                {/* Key Specs Pills */}
                {product.specs && (
                  <div className="mt-5">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                      Key Highlights
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-gray-200/60"
                        >
                          <MaterialIcon name="check" size={14} className="text-[#FF6900]" />
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Value Propositions */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-100 text-center">
                  <div className="flex flex-col items-center">
                    <MaterialIcon name="local_shipping" size={18} className="text-[#FF6900] mb-1" />
                    <span className="text-[11px] font-semibold text-gray-700">Free Shipping</span>
                    <span className="text-[10px] text-gray-400">Orders over $50</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-gray-100 px-2">
                    <MaterialIcon name="verified_user" size={18} className="text-[#FF6900] mb-1" />
                    <span className="text-[11px] font-semibold text-gray-700">Official Warranty</span>
                    <span className="text-[10px] text-gray-400">24-Month Global</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MaterialIcon name="replay" size={18} className="text-[#FF6900] mb-1" />
                    <span className="text-[11px] font-semibold text-gray-700">14-Day Returns</span>
                    <span className="text-[10px] text-gray-400">No questions asked</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-8 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex-1 py-3.5 px-6 bg-[#FF6900] hover:bg-[#e05d00] text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MaterialIcon name="shopping_bag" size={18} />
                  <span>Add to Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsLiked(!isLiked)}
                  aria-label="Add to wishlist"
                  className={`p-3.5 rounded-2xl border transition-colors cursor-pointer flex items-center justify-center ${
                    isLiked
                      ? 'bg-red-50 border-red-200 text-red-500'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <MaterialIcon name="favorite" size={20} fill={isLiked} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ProductModal;
