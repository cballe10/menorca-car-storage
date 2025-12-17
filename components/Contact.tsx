import React, { useState } from 'react';
import { ContactContent } from '../types';
import { Phone, Mail, MapPin, Send, AlertCircle } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface ContactProps {
  content: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkqrgrb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset state after a few seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        const jsonData = await response.json();
        if (jsonData.errors) {
          setErrorMessage(jsonData.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
        setFormStatus('error');
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your form");
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-32 py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.heading}</h2>
            <p className="text-slate-400 text-lg mb-12">{content.description}</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{content.callUs}</h4>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-slate-300 hover:text-white transition block text-lg">
                    {PHONE_NUMBER}
                  </a>
                  <span className="text-sm text-slate-500 block mt-1">{content.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{content.emailUs}</h4>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-300 hover:text-white transition block text-lg">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 text-brand-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{content.location}</h4>
                  <p className="text-slate-300 text-lg whitespace-pre-line">
                    {content.locationText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600">{content.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    {content.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      {content.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      {content.phoneLabel}
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    {content.messageLabel}
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-slate-50 resize-none"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>
                      {content.submitButton}
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;