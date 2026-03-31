import React from 'react';
import { TrustBarContent } from '../types';

interface TrustBarProps {
  content: TrustBarContent;
}

const TrustBar: React.FC<TrustBarProps> = ({ content }) => {
  return (
    <div className="bg-navy-900 border-y border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-800/60">
          {content.stats.map((stat, i) => (
            <div
              key={i}
              className="py-7 px-6 text-center group hover:bg-navy-800/30 transition-colors duration-300"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-gold-400 mb-1 group-hover:text-gold-300 transition-colors">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-navy-400 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
