import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
            Elevate Your AI Journey
          </span>
          <br />
          with AI Elevation!
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-10 leading-relaxed">
          A friendly, cutting-edge community for AI enthusiasts. 
          <span className="text-orange-400 font-medium"> Join our inaugural event on June 8th (details TBD)</span> and shape the future with us!
        </p>

        <button 
          onClick={() => scrollToSection('signup')}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-white font-semibold text-lg shadow-lg hover:shadow-orange-500/30 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center">
            Sign Up for June 8th 
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;