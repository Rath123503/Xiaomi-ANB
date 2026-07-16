import React from 'react';
import { motion } from 'motion/react';
import { MaterialIcon } from '../common/MaterialIcon';

export const ProductCard = ({ product, onLearnMore }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className="bg-[#FAFAFA] border border-gray-100 rounded-lg p-5 flex flex-col hover:shadow-md transition-all duration-300"
  >
    {product.badge && (
      <span
        className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${
          product.badgeColor || 'bg-gray-800 text-white'
        }`}
      >
        {product.badge}
      </span>
    )}

    <div className="flex-1 flex items-center justify-center min-h-[140px]">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-[150px] w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>

    <h4 className="text-sm font-bold text-[#191919] mt-3">{product.name}</h4>

    {product.rating && (
      <div className="flex items-center gap-1 mt-1">
        <MaterialIcon name="star" size={14} className="text-yellow-500" />
        <span className="text-xs text-gray-500">
          {product.rating} ({product.reviews})
        </span>
      </div>
    )}

    <div className="flex items-baseline gap-2 mt-2">
      <span className="text-base font-bold text-[#FF6900]">{product.price}</span>
      {product.originalPrice && (
        <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
      )}
    </div>

    <button
      onClick={() => onLearnMore(product)}
      className="mt-3 self-start px-4 py-1.5 bg-[#191919] hover:bg-gray-700 text-white text-[11px] font-bold rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
    >
      Learn more
    </button>
  </motion.div>
);

export default ProductCard;