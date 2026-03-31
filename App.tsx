import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import SeoSection from './components/SeoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { CONTENT } from './constants';
import { Language } from './types';

const pathToLanguage: Record<string, Language> = {
  '/':   Language.EN,
  '/es': Language.ES,
  '/fr': Language.FR,
};

const languageToPath: Record<Language, string> = {
  [Language.EN]: '/',
  [Language.ES]: '/es',
  [Language.FR]: '/fr',
};

function SitePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = pathToLanguage[location.pathname] ?? Language.EN;
  const content = CONTENT[currentLanguage];

  const handleSetLanguage = (lang: Language) => {
    navigate(languageToPath[lang]);
  };

  // Update <html lang> for SEO on every route change
  useEffect(() => {
    document.documentElement.lang = currentLanguage.toLowerCase();
  }, [currentLanguage]);

  return (
    <div className="min-h-screen font-sans">
      <Header
        language={currentLanguage}
        setLanguage={handleSetLanguage}
        texts={content.nav}
      />
      <main>
        <Hero content={content.hero} />
        <TrustBar content={content.trustBar} />
        <Services content={content.services} />
        <HowItWorks content={content.howItWorks} />
        <SeoSection content={content.seoSection} />
        <Contact content={content.contact} />
      </main>
      <Footer />
      <AiAssistant content={content.ai} language={currentLanguage} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"   element={<SitePage />} />
        <Route path="/es" element={<SitePage />} />
        <Route path="/fr" element={<SitePage />} />
        <Route path="*"   element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
