import React from 'react';
import { motion } from 'motion/react';

export const Card = ({
  children,
  className = '',
  onClick,
  hoverable = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverable && onClick ? { y: -6 } : {}}
      onClick={onClick}
      className={`bg-white rounded-3xl border border-gray-100 p-6 flex flex-col justify-between transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${hoverable ? 'hover:shadow-xl hover:border-gray-200/80' : 'shadow-2xs'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
