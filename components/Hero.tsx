import React from 'react';
import { HeroContent } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative pt-20 h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1920&auto=format&fit=crop" 
          alt="Cars parked in secure storage" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl relative">
          
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-100 font-medium text-sm mb-6 backdrop-blur-md">
            Menorca's Premium Storage Solution
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="inline-flex items-center justify-center bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/25 group"
            >
              {content.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;