import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../common/CustomCursor';
import AuthModal from '../ui/AuthModal';

const Layout = () => {
  const { pathname } = useLocation();
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'signin' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openAuth = (type) => setAuthModal({ isOpen: true, type });
  const closeAuth = () => setAuthModal({ isOpen: false, type: 'signin' });

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <CustomCursor />
      <Navbar onOpenAuth={openAuth} />
      
      {/* Background Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="orb orb-blue top-[-10%] right-[-10%] animate-pulse" />
        <div className="orb orb-purple bottom-[-10%] left-[-10%] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <main className="relative z-10 pt-16">
        <Outlet context={{ openAuth }} />
      </main>

      <Footer />
      
      {authModal.isOpen && (
        <AuthModal 
          type={authModal.type} 
          onClose={closeAuth} 
          onSwitch={(type) => setAuthModal({ isOpen: true, type })}
        />
      )}
    </div>
  );
};

export default Layout;
