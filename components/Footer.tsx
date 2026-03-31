import React from 'react';
import { Instagram } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800/60 text-navy-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold text-white tracking-wide mb-3">
              Mahon Car Storage
            </div>
            <div className="gold-line mb-4" />
            <p className="font-sans text-sm font-light leading-relaxed text-navy-400">
              Professional vehicle storage and airport delivery in Menorca. Trusted by second-home owners across the island.
            </p>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mahoncarstorage/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-navy-400 hover:text-gold-300 transition-colors group"
            >
              <div className="w-8 h-8 bg-navy-800 border border-navy-700 rounded-sm flex items-center justify-center group-hover:border-gold-400/40 transition-colors">
                <Instagram size={15} className="text-gold-400" />
              </div>
              <span className="font-sans text-sm">@mahoncarstorage</span>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-sans text-sm font-light">
              <li>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-gold-300 transition-colors">
                  📞 {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-gold-300 transition-colors">
                  ✉️ {EMAIL_ADDRESS}
                </a>
              </li>
              <li className="text-navy-500 pt-1">📍 Mahón (Maó), Menorca</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 font-sans text-sm font-light">
              {[
                'Car Storage Menorca',
                'Airport Delivery MAH',
                'ITV Management',
                'Battery Care',
                'Vehicle Valet',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-gold-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-sans text-navy-600">
          <p>© {year} Mahon Car Storage. All rights reserved.</p>
          <p>Menorca, Balearic Islands, Spain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
