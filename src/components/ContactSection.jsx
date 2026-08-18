import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MapPin } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import axios from 'axios';

export const ContactSection = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const t = TRANSLATIONS[lang].contact;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/send-email',{name,email,message,});
      console.log(response.data);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l’envoi:', error);
      alert(error.response?.data?.error ||"Échec de l'envoi du message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 md:px-12 py-20 max-w-[1280px] mx-auto">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden border border-[var(--panel-border)] shadow-2xl">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-purple)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-cyan)]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-main)] leading-tight">
                {t.titlePart1} <br />
                <span className="font-serif-italic font-normal text-[var(--accent-purple)]">
                  {t.titleHighlight}
                </span>
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                {t.sub}
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-[var(--text-main)] group">
                <div className="w-12 h-12 rounded-2xl bg-[var(--sub-panel)] flex items-center justify-center border border-[var(--panel-border)] group-hover:border-[var(--accent-purple)]/50 transition-colors shrink-0">
                  <Mail size={20} className="text-[var(--accent-purple)]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">{t.emailLabel}</p>
                  <a href={`mailto:${PROFILE_INFO.email}`} className="text-sm font-bold hover:text-[var(--accent-purple)] transition-colors">
                    {PROFILE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[var(--text-main)] group">
                <div className="w-12 h-12 rounded-2xl bg-[var(--sub-panel)] flex items-center justify-center border border-[var(--panel-border)] group-hover:border-[var(--accent-cyan)]/50 transition-colors shrink-0">
                  <Phone size={20} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">{t.phoneLabel}</p>
                  <a href={`tel:${PROFILE_INFO.phone}`} className="text-sm font-bold hover:text-[var(--accent-cyan)] transition-colors">
                    {PROFILE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[var(--text-main)]">
                <div className="w-12 h-12 rounded-2xl bg-[var(--sub-panel)] flex items-center justify-center border border-[var(--panel-border)] shrink-0">
                  <MapPin size={20} className="text-[var(--accent-purple)]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-muted)]">{t.locationLabel}</p>
                  <p className="text-sm font-bold">{PROFILE_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-4 rounded-xl bg-[var(--sub-panel)] border border-[var(--panel-border)] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 badge-pulse shrink-0" />
              <p className="text-xs text-[var(--text-muted)]">
                <strong className="text-[var(--text-main)]">{t.statusLabel} :</strong> {t.statusText}
              </p>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--card-bg)] p-6 sm:p-8 rounded-2xl border border-[var(--panel-border)] shadow-xl">
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-main)]">{t.sentSuccessTitle}</h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-md">
                    {t.sentSuccessMsg}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-[var(--text-muted)] mb-1">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder={t.placeholderName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-0 mt-1 border-b border-[var(--panel-border)] text-[var(--text-main)] focus:ring-0 focus:border-[var(--accent-cyan)] input-glow transition-colors pl-2 pr-0 py-1 text-sm placeholder:text-[var(--text-muted)]/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-[var(--text-muted)] mb-1">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder={t.placeholderEmail}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-[var(--panel-border)] text-[var(--text-main)] focus:ring-0 focus:border-[var(--accent-cyan)] input-glow transition-colors pl-2 pr-0 py-1 mt-1 text-sm placeholder:text-[var(--text-muted)]/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-[var(--text-muted)] mb-1">
                      {t.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder={t.placeholderMessage}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-0 mt-1 border-b border-[var(--panel-border)] text-[var(--text-main)] focus:ring-0 focus:border-[var(--accent-cyan)] input-glow transition-colors pl-2 pr-0 py-1 text-sm placeholder:text-[var(--text-muted)]/40 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#d0bcff] hover:bg-[#e9ddff] text-[#3c0091] font-bold rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-[#3c0091] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>{t.send}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

