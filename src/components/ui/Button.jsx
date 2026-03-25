import React, { useState, useEffect, useRef } from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', 
  type = 'button',
  disabled = false,
  loading = false,
}) => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const createRipple = (e) => {
    if (disabled || loading) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples([...ripples, newRipple]);
    
    if (onClick) onClick(e);
  };

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(ripples.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const variants = {
    primary: "bg-gradient-main text-white hover:shadow-glow",
    outline: "border border-card-border text-text-primary hover:bg-white/5",
    secondary: "bg-surface text-text-secondary hover:text-white border border-card-border",
    ghost: "text-text-secondary hover:text-white hover:bg-white/5"
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled || loading}
      onClick={createRipple}
      className={`relative overflow-hidden px-6 py-3 rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover-trigger ${variants[variant]} ${className}`}
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : children}

      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </button>
  );
};

export default Button;
