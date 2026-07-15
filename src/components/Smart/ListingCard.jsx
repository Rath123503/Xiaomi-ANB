import React from 'react';
import { motion } from 'framer-motion';

const PRODUCTS_PER_PAGE = 12;

const listingCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: (index % PRODUCTS_PER_PAGE) * 0.04, ease: 'easeOut' },
  }),
};

export const ListingCard = ({ product, index }) => {
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