import React from 'react';
import { HeroContent } from '../types';
import { ArrowRight, Shield, MapPin } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '148px' }}
    >
      {/* Background image */}
      {/* 
        IMAGE RECOMMENDATION:
        Replace the Unsplash URL below with one of these options for a much more relevant feel:
        
        OPTION 1 (luxury indoor car storage): 
        https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1920&auto=format&fit=crop
        
        OPTION 2 (car keys / handover concept):
        https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop
        
        OPTION 3 (clean luxury car in facility):
        https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop

        BEST: Use your own photo of the actual storage facility — nothing beats authenticity for SEO and trust.
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1920&auto=format&fit=crop"
          alt="Secure indoor car storage facility in Menorca"
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'slowZoom 18s ease-in-out infinite alternate' }}
        />
        {/* Strong left overlay so text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
        {/* Top-to-bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/50" />
        {/* Subtle gold accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.0); }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-2xl">

          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gold-400/10 border border-gold-400/30 mb-8">
            <MapPin size={13} className="text-gold-400" />
            <span className="font-sans text-gold-300 text-xs font-medium tracking-widest uppercase">
              {content.tagline}
            </span>
          </div>

          {/* H1 — display serif */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {content.title}
          </h1>

          {/* Gold divider */}
          <div className="gold-line mb-6" />

          <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl font-light">
            {content.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="btn-gold inline-flex items-center justify-center text-navy-950 px-8 py-4 rounded-sm font-sans font-semibold text-sm tracking-wide group"
            >
              {content.cta}
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleScroll(e, 'services')}
              className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-sans font-medium text-sm tracking-wide hover:bg-white/10 hover:border-gold-400/40 transition-all"
            >
              {content.viewServices}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: <Shield size={14} />, text: 'Fully Secure Facility' },
              { icon: <MapPin size={14} />, text: 'Mahón, Menorca' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-navy-300/70">
                <span className="text-gold-400">{badge.icon}</span>
                <span className="font-sans text-xs tracking-wide">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50">
        <div className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
