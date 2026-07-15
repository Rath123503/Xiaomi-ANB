import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.05, ease: 'easeOut' },
  }),
};

export const AllProductsCard = ({ index, onViewAll }) => (
  <motion.article
    className="flex flex-col items-center justify-center gap-[16px] bg-white text-center rounded-[12px]"
    style={{
      width: '340px',
      height: '516.97px',
      padding: '27px',
    }}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <h3 className="text-[18px] font-bold text-gray-900 leading-[1.3]">All Products</h3>
    <button
      type="button"
      onClick={onViewAll}
      aria-label="View all products"
      className="flex h-[44px] w-[44px] items-center justify-center rounded-[8px] border-2 border-orange-500 text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  </motion.article>
);