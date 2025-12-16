import React from 'react';
import { ServicesContent } from '../types';
import { Warehouse, Car, Battery, Sparkles, Plane, Wrench } from 'lucide-react';

interface ServicesProps {
  content: ServicesContent;
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const icons = [
    <Warehouse className="w-8 h-8 text-brand-600" />,
    <Car className="w-8 h-8 text-brand-600" />,
    <Battery className="w-8 h-8 text-brand-600" />,
    <Sparkles className="w-8 h-8 text-brand-600" />,
    <Plane className="w-8 h-8 text-brand-600" />,
    <Wrench className="w-8 h-8 text-brand-600" />
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{content.heading}</h3>
          <p className="text-lg text-slate-600">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-brand-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-brand-50 rounded-full group-hover:bg-brand-100 transition-colors z-0"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {icons[index] || <Car className="w-8 h-8 text-brand-600" />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;