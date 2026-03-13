import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block text-primary-yellow font-medium mb-2 text-sm tracking-wider uppercase">
          {subtitle}
        </span>
      )}
      <h2 className={`heading-2 ${light ? 'text-primary-offwhite' : 'text-white'} relative inline-block`}>
        {title}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: center ? '100%' : '60px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`h-1 bg-primary-yellow mt-2 ${center ? 'mx-auto' : ''}`}
          style={{ width: center ? '100%' : '60px' }}
        />
      </h2>
    </motion.div>
  );
};

export default SectionTitle;