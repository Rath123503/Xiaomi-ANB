import React from 'react';
import { motion } from 'motion/react';

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyle = "py-3 px-6 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-[#FF6900] hover:bg-[#e05d00] text-white shadow-md hover:shadow-lg",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    dark: "bg-[#191919] hover:bg-black text-white",
    outline: "border border-gray-200 hover:border-[#FF6900] hover:text-[#FF6900] bg-transparent text-gray-700",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
