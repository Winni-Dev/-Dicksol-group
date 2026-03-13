import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {
  const baseStyles = 'bg-primary-charcoal border border-primary-yellow/10 p-6 transition-all duration-300';
  
  const hoverStyles = hover
    ? 'hover:border-primary-yellow/30 hover:shadow-lg hover:shadow-primary-yellow/5 hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;