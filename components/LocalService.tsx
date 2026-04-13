import React from 'react';
import { LocalServiceContent } from '../types';
import { ArrowRight, MapPin, Car, PlaneLanding, CalendarDays } from 'lucide-react';

interface LocalServiceProps {
  content: LocalServiceContent;
}

const LocalService: React.FC<LocalServiceProps> = ({ content }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const stepIcons = [PlaneLanding, Car, CalendarDays];

  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      {/* Dotted background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e0ac32 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-sans text-xs text-gold-500 tracking-widest uppercase font-semibold mb-3">
              {content.sectionTitle}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {content.heading}
            </h2>
            <div className="gold-line mb-6" />
            <p className="font-sans text-navy-400 text-lg font-light leading-relaxed">
              {content.subheading}
            </p>
          </div>

          {/* Price card */}
          <div className="flex justify-start lg:justify-end">
            <div className="bg-navy-800/60 border border-gold-400/20 rounded-sm p-8 text-center min-w-[220px]">
              <p className="font-sans text-xs text-gold-500 tracking-widest uppercase mb-3">{content.priceLabel}</p>
              <div className="font-display text-5xl font-bold text-gold-400 mb-1">
                40€
              </div>
              <p className="font-sans text-navy-400 text-sm">{content.priceUnit}</p>
              <div className="mt-6 pt-6 border-t border-navy-700/60">
                <p className="font-sans text-xs text-navy-400 leading-relaxed">{content.priceNote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Towns */}
        <div className="flex flex-wrap gap-3 mb-16">
          {content.towns.map((town) => (
            <div
              key={town}
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/50 border border-navy-700/60 rounded-sm hover:border-gold-400/30 transition-colors"
            >
              <MapPin size={12} className="text-gold-400" />
              <span className="font-sans text-sm text-navy-200">{town}</span>
            </div>
          ))}
        </div>

        {/* How it works steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {content.steps.map((step, i) => {
            const Icon = stepIcons[i] || Car;
            return (
              <div
                key={i}
                className="relative bg-navy-800/40 border border-navy-700/50 rounded-sm p-7 hover:border-gold-400/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-950 border border-navy-700 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/40 transition-colors">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-gold-500 font-semibold tracking-widest uppercase block mb-1">
                      0{i + 1}
                    </span>
                    <h4 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h4>
                    <p className="font-sans text-navy-400 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Bottom gold bar on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 group-hover:w-full transition-all duration-400 rounded-sm" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            onClick={handleScroll}
            className="btn-gold inline-flex items-center gap-2 text-navy-950 px-8 py-4 rounded-sm font-sans font-semibold text-sm tracking-wide group"
          >
            {content.cta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default LocalService;
