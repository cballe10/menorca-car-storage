import React, { useState } from 'react';
import { ContactContent } from '../types';
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

interface ContactProps {
  content: ContactContent;
}

const DIAL_CODES = [
  { code: '+34', flag: '🇪🇸', label: 'ES' },
  { code: '+44', flag: '🇬🇧', label: 'GB' },
  { code: '+33', flag: '🇫🇷', label: 'FR' },
  { code: '+49', flag: '🇩🇪', label: 'DE' },
  { code: '+31', flag: '🇳🇱', label: 'NL' },
  { code: '+32', flag: '🇧🇪', label: 'BE' },
  { code: '+41', flag: '🇨🇭', label: 'CH' },
  { code: '+43', flag: '🇦🇹', label: 'AT' },
  { code: '+39', flag: '🇮🇹', label: 'IT' },
  { code: '+351', flag: '🇵🇹', label: 'PT' },
  { code: '+46', flag: '🇸🇪', label: 'SE' },
  { code: '+47', flag: '🇳🇴', label: 'NO' },
  { code: '+45', flag: '🇩🇰', label: 'DK' },
  { code: '+353', flag: '🇮🇪', label: 'IE' },
  { code: '+1',  flag: '🇺🇸', label: 'US' },
];

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [dialCode, setDialCode] = useState('+34');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    const form = e.currentTarget;
    const data = new FormData(form);
    // Prepend dial code to phone number
    const phone = data.get('phone') as string;
    data.set('phone', `${dialCode} ${phone}`);
    try {
      const res = await fetch('https://formspree.io/f/xdkqrgrb', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormStatus('success');
        form.reset();
        setDialCode('+34');
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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: contact info + map */}
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

            <div className="space-y-8 mb-12">
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

            {/* Google Maps embed */}
            <div className="rounded-sm overflow-hidden border border-navy-800/60 shadow-lg shadow-navy-950/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.1620393649837!2d4.242808587649186!3d39.88401662004279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12958729624911cf%3A0x45e342ff37a10691!2sMahon%20Car%20Storage%20-%20Custodia%20Coches%20Menorca!5e1!3m2!1ses!2ses!4v1774986754858!5m2!1ses!2ses"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahon Car Storage location"
              />
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

                {/* Name */}
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.nameLabel} <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="text" name="name" required
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.emailLabel} <span className="text-gold-500">*</span>
                  </label>
                  <input
                    type="email" name="email" required
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                  />
                </div>

                {/* Phone with dial code */}
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.phoneLabel} <span className="text-gold-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={dialCode}
                      onChange={(e) => setDialCode(e.target.value)}
                      className="px-3 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all cursor-pointer flex-shrink-0"
                    >
                      {DIAL_CODES.map((d) => (
                        <option key={d.code + d.label} value={d.code}>
                          {d.flag} {d.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel" name="phone" required
                      placeholder="611 711 581"
                      className="flex-1 px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all"
                    />
                  </div>
                  <p className="font-sans text-xs text-slate-400 mt-1.5">Include your country dialling code</p>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-sans text-xs text-slate-500 tracking-wide uppercase mb-1.5">
                    {content.messageLabel} <span className="text-gold-500">*</span>
                  </label>
                  <textarea
                    name="message" rows={4} required
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm font-sans text-sm text-navy-900 bg-slate-50 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-300 transition-all resize-none"
                  />
                </div>

                <p className="font-sans text-xs text-slate-400">
                  <span className="text-gold-500">*</span> Required fields
                </p>

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
