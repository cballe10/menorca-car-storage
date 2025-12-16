import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { CONTENT } from './constants';
import { Language } from './types';

function App() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const content = CONTENT[language];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        texts={content.nav} 
      />
      
      <main>
        <Hero content={content.hero} />
        <Services content={content.services} />
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