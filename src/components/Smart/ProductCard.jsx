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

export const ProductCard = ({ product, index, isLarge = false, onLearnMore }) => {
  const { name, tagline, image } = product;

  return (
    <motion.article
      className="group flex flex-col items-center justify-start bg-white text-center rounded-[12px] overflow-hidden"
      style={{
        width: isLarge ? '696px' : '340px',
        height: '516.97px',
        padding: '27px',
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
    >
      <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-[20px] leading-[1.3]' : 'text-[16px] leading-[1.3]'}`}>
        {name}
      </h3>
      <p className={`mt-[8px] text-gray-500 ${isLarge ? 'text-[14px] leading-[1.4]' : 'text-[12px] leading-[1.4]'}`}>
        {tagline}
      </p>

      <button
        type="button"
        onClick={() => onLearnMore && onLearnMore(product)}
        aria-label={`Learn more about ${name}`}
        className="mt-[16px] rounded-[8px] bg-black px-[24px] py-[6px] text-[14px] font-medium text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none"
      >
        Learn more
      </button>

      <div className="mt-[24px] flex w-full flex-1 items-center justify-center overflow-hidden">
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