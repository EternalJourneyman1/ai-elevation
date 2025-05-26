import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollUtils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            AI Elevation
          </span>
        </div>
        <button
          onClick={() => scrollToSection('signup')}
          className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Sign Up for June 8th
        </button>
      </div>
    </nav>
  );
};

export default Navbar;