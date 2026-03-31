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

// Per-language SEO meta data
const META: Record<Language, { title: string; description: string; canonical: string }> = {
  [Language.EN]: {
    title: 'Mahon Car Storage — Secure Vehicle Storage & Airport Delivery in Menorca',
    description: 'Professional car storage in Menorca. Secure indoor & outdoor vehicle storage near Mahón with airport delivery to MAH. ITV management, battery care & valet. From 550€/year.',
    canonical: 'https://www.mahoncarstorage.com/',
  },
  [Language.ES]: {
    title: 'Mahon Car Storage — Custodia de Vehículos y Entrega en Aeropuerto en Menorca',
    description: 'Custodia profesional de vehículos en Menorca. Almacenamiento seguro cerca de Mahón con entrega en el aeropuerto MAH. Gestión de ITV, mantenimiento de batería y lavado. Desde 550€/año.',
    canonical: 'https://www.mahoncarstorage.com/es',
  },
  [Language.FR]: {
    title: 'Mahon Car Storage — Garde-Auto Sécurisé & Livraison Aéroport à Minorque',
    description: 'Garde-auto professionnel à Minorque. Stockage sécurisé intérieur et extérieur près de Mahón avec livraison à l\'aéroport MAH. Contrôle technique, entretien batterie et nettoyage. À partir de 550€/an.',
    canonical: 'https://www.mahoncarstorage.com/fr',
  },
};

function SitePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = pathToLanguage[location.pathname] ?? Language.EN;
  const content = CONTENT[currentLanguage];
  const meta = META[currentLanguage];

  const handleSetLanguage = (lang: Language) => {
    navigate(languageToPath[lang]);
  };

  // Update all meta tags on route change
  useEffect(() => {
    // Language attribute
    document.documentElement.lang = currentLanguage.toLowerCase();

    // Title
    document.title = meta.title;

    // Meta description
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', meta.canonical);

    // OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

  }, [currentLanguage, meta]);

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
