import React, { useState } from 'react';
import { ContactContent } from '../types';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface ContactProps {
  content: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/xdkqrgrb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 6000);
      } else {
        const json = await res.json();
        setErrorMessage(json.errors?.map((e: any) => e.message).join(', ') || 'Something went wrong.');
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setFormStatus('error');
    }
  };

  const infos = [
    {
      icon: <Phone size={18} />,
      label: content.callUs,
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
      sub: content.whatsapp,
    },
    {
      icon: <Mail size={18} />,
      label: content.emailUs,
      value: EMAIL_ADDRESS,
      href: `mailto:${EMAIL_ADDRESS}`,
    },
    {
      icon: <MapPin size={18} />,
      label: content.location,
      value: content.locationText,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-32 py-28 bg-navy-950 relative">
      {/* Subtle top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <div>
            <p className="font-sans text-xs text-gold-500 tracking-widest uppercase font-semibold mb-3">
              {content.heading}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {content.heading}
            </h2>
            <div className="gold-line mb-6" />
            <p className="font-sans text-navy-400 text-lg font-light mb-12 leading-relaxed">
              {content.description}
            </p>

            <div className="space-y-8">
              {infos.map((info, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 bg-navy-800 border border-navy-700 rounded-sm flex items-center justify-center flex-shrink-0 text-gold-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-sans text-xs text-navy-500 tracking-widest uppercase mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-sans text-navy-200 hover:text-gold-300 transition-colors text-base whitespace-pre-line font-light">
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-sans text-navy-200 text-base whitespace-pre-line font-light">{info.value}</p>
                    )}
                    {info.sub && (
                      <span className="font-sans text-xs text-navy-500 mt-0.5 block">{info.sub}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-sm shadow-2xl shadow-navy-950/50 p-8 md:p-10">
            {formStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-5">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Message Sent</h3>
                <p className="font-sans text-slate-500 font-light">{content.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.nameLabel}
                  </label>
                  <input
                    type="text" name="name" required
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                      {content.emailLabel}
                    </label>
                    <input
                      type="email" name="email" required
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                      {content.phoneLabel}
                    </label>
                    <input
                      type="tel" name="phone"
                      className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.messageLabel}
                  </label>
                  <textarea
                    name="message" rows={4} required
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all resize-none"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 p-3 rounded-sm text-sm font-sans">
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-gold w-full text-navy-950 py-4 rounded-sm font-sans font-semibold text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {formStatus === 'submitting' ? 'Sending...' : (
                    <>{content.submitButton} <Send size={15} /></>
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
