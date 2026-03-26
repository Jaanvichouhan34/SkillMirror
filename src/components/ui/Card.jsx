import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        y: -6, 
        borderColor: 'rgba(79, 156, 249, 0.4)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 20px rgba(79, 156, 249, 0.1)'
      } : {}}
      className={`glass-card p-8 group hover-trigger ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
