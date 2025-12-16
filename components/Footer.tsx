import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          {/* Text-based logo for footer to ensure legibility on dark background */}
          <span className="text-slate-200 font-bold text-xl tracking-wider uppercase">Mahon Car Storage</span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Mahon Car Storage. All rights reserved.</p>
          <p className="mt-1">Menorca, Balearic Islands.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;