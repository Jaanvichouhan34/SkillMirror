import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('.hover-trigger')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Ring */}
      <motion.div
        className="absolute border-2 border-accent-blue rounded-full"
        animate={{
          x: position.x - (isHovering ? 25 : isClicking ? 15 : 17),
          y: position.y - (isHovering ? 25 : isClicking ? 15 : 17),
          width: isHovering ? 50 : isClicking ? 30 : 34,
          height: isHovering ? 50 : isClicking ? 30 : 34,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: position.x - (isHovering ? 8 : isClicking ? 3 : 5),
          y: position.y - (isHovering ? 8 : isClicking ? 3 : 5),
          width: isHovering ? 16 : isClicking ? 6 : 10,
          height: isHovering ? 16 : isClicking ? 6 : 10,
          backgroundColor: isHovering ? '#a78bfa' : isClicking ? '#34d399' : '#4f9cf9',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
