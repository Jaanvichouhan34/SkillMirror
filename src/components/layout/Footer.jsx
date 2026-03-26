import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ), 
      url: 'https://github.com/Jaanvichouhan34' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      url: 'https://www.linkedin.com/in/jaanvi-chouhan' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ), 
      url: 'https://www.instagram.com/jaanvi_chouhan18' 
    },
    { icon: <Mail size={20} />, url: 'mailto:jaanvichouhan18805@gmail.com' },
  ];

  return (
    <footer className="bg-surface border-t border-card-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-main flex items-center justify-center text-white font-bold italic">S</div>
              <span className="font-syne font-extrabold text-2xl gradient-text">SkillMirror</span>
            </Link>
            <p className="text-text-secondary leading-relaxed">
              Know exactly where your skills stand. The precision diagnostic platform for ambitious students.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-card-border flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all transform hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold">Platform</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-text-secondary hover:text-accent-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-accent-blue transition-colors">About</Link></li>
              <li><Link to="/features" className="text-text-secondary hover:text-accent-blue transition-colors">Features</Link></li>
              <li><Link to="/how-it-works" className="text-text-secondary hover:text-accent-blue transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/help" className="text-text-secondary hover:text-accent-blue transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-accent-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/terms" className="text-text-secondary hover:text-accent-blue transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-text-secondary hover:text-accent-blue transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-secondary">
          <p>© {currentYear} SkillMirror · Built by Jaanvi Chouhan</p>
          <div className="flex gap-4 opacity-50">
            <span>React</span>
            <span>·</span>
            <span>Tailwind</span>
            <span>·</span>
            <span>Framer Motion</span>
            <span>·</span>
            <span>Flask</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
