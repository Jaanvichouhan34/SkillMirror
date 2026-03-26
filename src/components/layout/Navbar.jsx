import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useMusic } from '../../context/MusicContext';
import { Sun, Moon, Monitor, Music, Menu, X, User, ChevronDown, LogOut } from 'lucide-react';

const Navbar = ({ onOpenAuth }) => {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { isPlaying, toggleMusic } = useMusic();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setProfileDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Learn', path: '/learn' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 h-16 z-[100] transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        
        {/* FAR LEFT: Logo */}
        <div className="flex-1 flex items-center justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-main flex items-center justify-center text-white font-bold italic shadow-lg group-hover:scale-110 transition-transform">
              S
            </div>
            <span className="hidden sm:block font-syne font-extrabold text-xl gradient-text">SkillMirror</span>
          </Link>
        </div>

        {/* CENTER: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 flex-[2] justify-center">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path}
              className={({ isActive }) => `text-sm font-medium hover:text-accent-blue transition-colors relative group ${isActive ? 'text-accent-blue' : 'text-text-secondary'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* FAR RIGHT: Controls & User Profile */}
        <div className="flex-1 flex items-center justify-end gap-4">
          
          <div className="hidden sm:flex items-center gap-4 border-r border-card-border pr-4">
            {/* Music Button */}
            <button 
              onClick={toggleMusic}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isPlaying ? 'bg-accent-green/20 text-accent-green shadow-[0_0_10px_rgba(52,211,153,0.3)]' : 'bg-surface/60 text-text-secondary hover:bg-surface/80 border border-card-border'}`}
            >
              <div className="flex items-end gap-0.5 h-4">
                {[1, 2, 3].map(i => (
                  <motion.div 
                    key={i}
                    animate={isPlaying ? { height: [4, 16, 8, 14, 6] } : { height: 6 }}
                    transition={isPlaying ? { repeat: Infinity, duration: 0.6, delay: i * 0.1 } : {}}
                    className="w-1 bg-current rounded-full"
                  />
                ))}
              </div>
            </button>

            {/* Theme Toggle */}
            <div className="flex bg-surface/40 p-1 rounded-full border border-card-border">
              {[
                { id: 'light', icon: <Sun size={14} /> },
                { id: 'system', icon: <Monitor size={14} /> },
                { id: 'dark', icon: <Moon size={14} /> }
              ].map(mode => (
                <button
                  key={mode.id}
                  onClick={() => setTheme(mode.id)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${theme === mode.id ? 'bg-accent-blue text-white shadow-lg' : 'text-text-secondary hover:text-text-primary'}`}
                >
                  {mode.icon}
                </button>
              ))}
            </div>
          </div>

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 group p-1 pr-2 rounded-full bg-surface/40 border border-card-border hover:border-accent-blue transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-main flex items-center justify-center text-white font-bold text-xs">
                  {user.initials}
                </div>
                <ChevronDown size={14} className={`text-text-secondary transition-transform duration-300 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {profileDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-0" onClick={() => setProfileDropdownOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-12 right-0 w-56 glass-card p-2 z-10 shadow-2xl"
                    >
                      <div className="px-4 py-3 border-b border-card-border mb-2">
                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Signed in as</p>
                        <p className="text-sm font-bold truncate">{user.email}</p>
                      </div>
                      <Link 
                        to="/profile" 
                        onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-text-primary/10 rounded-lg text-sm transition-colors"
                    >
                      <User size={16} /> My Profile
                    </Link>
                    <button 
                      onClick={handleLogout} 
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-500/10 rounded-lg text-sm transition-colors text-red-500"
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => onOpenAuth('signin')}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => user ? navigate('/profile') : onOpenAuth('signup')}
                className="px-5 py-2 rounded-lg bg-gradient-main text-sm font-bold text-white hover:shadow-glow transition-all active:scale-95"
              >
                Get Started
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-text-primary ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] glass flex flex-col p-8 pt-24 gap-8 lg:hidden"
          >
            <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-syne font-bold hover:text-accent-blue transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex items-center justify-between border-t border-card-border pt-6">
                <span className="text-text-secondary">Theme</span>
                <div className="flex bg-surface/40 p-1 rounded-full border border-card-border">
                  {['light', 'system', 'dark'].map(mode => (
                    <button key={mode} onClick={() => setTheme(mode)} className={`px-4 py-2 rounded-full text-xs font-bold ${theme === mode ? 'bg-accent-blue text-white' : 'text-text-secondary'}`}>
                      {mode.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={toggleMusic} 
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-4 font-bold border ${isPlaying ? 'bg-accent-green/10 border-accent-green text-accent-green' : 'border-card-border text-text-secondary'}`}
              >
                <Music /> {isPlaying ? 'Ambient Music ON' : 'Ambient Music OFF'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
