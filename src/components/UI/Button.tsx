// import React from 'react';
// import { motion } from 'framer-motion';
// import { LucideIcon } from 'lucide-react';

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   icon?: LucideIcon;
//   iconPosition?: 'left' | 'right';
//   onClick?: () => void;
//   href?: string;
//   className?: string;
//   type?: 'button' | 'submit' | 'reset';
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'md',
//   icon: Icon,
//   iconPosition = 'right',
//   onClick,
//   href,
//   className = '',
//   type = 'button',
// }) => {
//   const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none focus:outline-none';
  
//   const variants = {
//     primary: 'bg-primary-yellow text-primary-black hover:bg-primary-yellow/90 hover:shadow-lg hover:shadow-primary-yellow/20',
//     secondary: 'bg-primary-charcoal text-primary-offwhite border border-primary-yellow/30 hover:border-primary-yellow hover:bg-primary-charcoal/80',
//     outline: 'border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-primary-black',
//   };

//   const sizes = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };

//   const content = (
//     <>
//       {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
//       {children}
//       {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
//     </>
//   );

//   const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

//   if (href) {
//     return (
//       <motion.a
//         href={href}
//         className={classes}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {content}
//       </motion.a>
//     );
//   }

//   return (
//     <motion.button
//       type={type}
//       className={classes}
//       onClick={onClick}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       {content}
//     </motion.button>
//   );
// };

// export default Button;


import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-yellow text-primary-black hover:bg-primary-yellow/90 hover:shadow-lg hover:shadow-primary-yellow/20',
    secondary: 'bg-primary-charcoal text-primary-offwhite border border-primary-yellow/30 hover:border-primary-yellow hover:bg-primary-charcoal/80',
    outline: 'border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-primary-black',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2" />}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {content}
    </motion.button>
  );
};

export default Button;