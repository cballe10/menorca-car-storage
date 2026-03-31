import React from 'react';
import { HowItWorksContent } from '../types';
import { Phone, KeyRound, ShieldCheck, PlaneLanding } from 'lucide-react';

interface HowItWorksProps {
  content: HowItWorksContent;
}

const stepIcons = [Phone, KeyRound, ShieldCheck, PlaneLanding];

const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #e0ac32 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-sans text-xs text-gold-500 tracking-widest uppercase font-semibold mb-3">
            {content.sectionTitle}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            {content.heading}
          </h2>
          <div className="gold-line mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent z-0" />

          {content.steps.map((step, i) => {
            const Icon = stepIcons[i] || Phone;
            return (
              <div key={i} className="relative z-10 text-center group">
                {/* Step number ring */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-navy-800 border border-navy-700 group-hover:border-gold-400/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon size={24} className="text-gold-400" />
                  </div>
                  {/* Step label */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold-400 text-navy-950 rounded-full text-[10px] font-bold font-sans flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {step.title}
                </h3>
                <p className="font-sans text-navy-400 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
