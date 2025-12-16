import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { Language, NavContent } from '../types';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  texts: NavContent;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, texts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjusts for the fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsOpen(false);
  };

  const navLinks = [
    { name: texts.home, href: "#home" },
    { name: texts.services, href: "#services" },
    { name: texts.contact, href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      {/* Top Bar for Contact Info */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-brand-100 transition">
              <Phone size={14} />
              <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 hover:text-brand-100 transition">
              <Mail size={14} />
              <span className="hidden sm:inline">{EMAIL_ADDRESS}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <button 
              onClick={() => setLanguage(Language.EN)}
              className={`${language === Language.EN ? 'text-white' : 'text-brand-300'} hover:text-white`}
            >
              EN
            </button>
            <span className="text-brand-500">|</span>
            <button 
              onClick={() => setLanguage(Language.ES)}
              className={`${language === Language.ES ? 'text-white' : 'text-brand-300'} hover:text-white`}
            >
              ES
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center"
          >
            <img 
              src="logo.png" 
              alt="Mahon Car Storage" 
              className="h-14 w-auto object-contain" 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {texts.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-500 hover:text-slate-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;