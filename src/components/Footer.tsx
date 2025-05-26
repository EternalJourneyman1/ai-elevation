import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Logo className="h-8 w-auto" />
          <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            AI Elevation
          </span>
        </div>
        
        <div className="text-slate-400 text-sm">
          © {year} AI Elevation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;