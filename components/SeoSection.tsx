import React from 'react';
import { SeoSectionContent } from '../types';

interface SeoSectionProps {
  content: SeoSectionContent;
}

const SeoSection: React.FC<SeoSectionProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Heading — left column */}
          <div className="md:w-1/3 flex-shrink-0">
            <div className="gold-line mb-5" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 leading-tight">
              {content.heading}
            </h2>
          </div>

          {/* Body — right column */}
          <div className="md:w-2/3 space-y-5">
            {content.body.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-slate-500 text-base leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
