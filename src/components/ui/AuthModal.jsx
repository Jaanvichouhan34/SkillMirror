import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from './Button';

const AuthModal = ({ type, onClose, onSwitch }) => {
  const { login, signup } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    if (type === 'signup') {
      if (!formData.name) newErrors.name = 'Name is required';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    if (type === 'signin') {
      login(formData.email);
    } else {
      signup(formData.name, formData.email);
    }
    
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-md glass-card p-8 border-accent-blue/20"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors">
          <X size={24} />
        </button>

        <h2 className="text-3xl font-syne font-extrabold mb-2 gradient-text">
          {type === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-text-secondary mb-8">
          {type === 'signin' ? 'Enter your details to continue your journey.' : 'Get started with your skill assessment today.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <div className="space-y-1">
              <label className="text-sm font-medium text-text-secondary ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  className={`w-full bg-surface/40 border ${errors.name ? 'border-red-500' : 'border-card-border'} rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent-blue transition-colors`}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name}</span>}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-text-secondary ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full bg-surface/40 border ${errors.email ? 'border-red-500' : 'border-card-border'} rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent-blue transition-colors`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email}</span>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-text-secondary ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full bg-surface/40 border ${errors.password ? 'border-red-500' : 'border-card-border'} rounded-xl py-3 pl-12 pr-12 text-white focus:outline-none focus:border-accent-blue transition-colors`}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="text-xs text-red-500 ml-1">{errors.password}</span>}
          </div>

          {type === 'signup' && (
            <div className="space-y-1">
              <label className="text-sm font-medium text-text-secondary ml-1">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                <input
                  type="password"
                  placeholder="••••••••"
                  className={`w-full bg-surface/40 border ${errors.confirmPassword ? 'border-red-500' : 'border-card-border'} rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent-blue transition-colors`}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
              {errors.confirmPassword && <span className="text-xs text-red-500 ml-1">{errors.confirmPassword}</span>}
            </div>
          )}

          <div className="pt-4">
            <Button 
              type="submit" 
              loading={loading}
              className="w-full py-4 text-lg"
            >
              {type === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-text-secondary">
          {type === 'signin' ? (
            <p>Don't have an account? <button onClick={() => onSwitch('signup')} className="text-accent-blue font-bold hover:underline">Sign Up</button></p>
          ) : (
            <p>Already have an account? <button onClick={() => onSwitch('signin')} className="text-accent-blue font-bold hover:underline">Sign In</button></p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
