import React, { useState } from 'react';
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

function App() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const content = CONTENT[language];

  return (
    <div className="min-h-screen font-sans">
      <Header
        language={language}
        setLanguage={setLanguage}
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

      <AiAssistant
        content={content.ai}
        language={language}
      />
    </div>
  );
}

export default App;
