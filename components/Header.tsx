import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Language, NavContent } from '../types';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  texts: NavContent;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, texts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: texts.home, href: '#home' },
    { name: texts.services, href: '#services' },
    { name: texts.contact, href: '#contact' },
  ];

  const langs: Language[] = [Language.EN, Language.ES, Language.FR];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/97 backdrop-blur-md shadow-lg shadow-navy-950/30'
          : 'bg-navy-950'
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-navy-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-xs">
          <div className="flex gap-5">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 text-gold-300/80 hover:text-gold-300 transition-colors"
            >
              <Phone size={12} />
              <span className="hidden sm:inline tracking-wide">{PHONE_NUMBER}</span>
            </a>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-1.5 text-gold-300/80 hover:text-gold-300 transition-colors"
            >
              <Mail size={12} />
              <span className="hidden sm:inline tracking-wide">{EMAIL_ADDRESS}</span>
            </a>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-1 font-sans text-xs font-medium tracking-widest">
            {langs.map((l, i) => (
              <React.Fragment key={l}>
                {i > 0 && <span className="text-navy-600">·</span>}
                <button
                  onClick={() => setLanguage(l)}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    language === l
                      ? 'text-gold-400 font-semibold'
                      : 'text-navy-400 hover:text-gold-300'
                  }`}
                >
                  {l}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-28">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="Mahon Car Storage"
              className="h-12 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-navy-200 hover:text-gold-300 font-sans font-medium text-sm tracking-wide transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-gold text-navy-950 px-6 py-2.5 rounded-sm font-sans font-semibold text-sm tracking-wide shadow-md"
            >
              {texts.contact}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy-200 hover:text-gold-300 p-2 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-950 border-t border-navy-800/60 absolute w-full shadow-xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-navy-200 hover:text-gold-300 font-sans font-medium tracking-wide transition-colors border-b border-navy-800/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-gold block text-center text-navy-950 px-6 py-3 rounded-sm font-sans font-semibold text-sm tracking-wide"
              >
                {texts.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
