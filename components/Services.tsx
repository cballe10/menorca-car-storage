import React from 'react';
import { ServicesContent } from '../types';
import { Warehouse, Car, Battery, Sparkles, Plane, Wrench } from 'lucide-react';

interface ServicesProps {
  content: ServicesContent;
}

const icons = [
  Warehouse, Car, Battery, Sparkles, Plane, Wrench
];

const Services: React.FC<ServicesProps> = ({ content }) => {
  return (
    <section id="services" className="scroll-mt-32 py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs text-gold-600 tracking-widest uppercase font-semibold mb-3">
            {content.sectionTitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4 leading-tight">
            {content.heading}
          </h2>
          <div className="gold-line mx-auto mb-5" />
          <p className="font-sans text-slate-500 text-lg font-light leading-relaxed">
            {content.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, index) => {
            const Icon = icons[index] || Car;
            return (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-sm p-8 hover:border-gold-300 hover:shadow-xl hover:shadow-gold-100/40 transition-all duration-400 overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-12 h-12 bg-navy-950 rounded-sm flex items-center justify-center mb-6 group-hover:bg-navy-800 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>

                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-slate-500 text-sm leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Bottom gold bar on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300 group-hover:w-full transition-all duration-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
