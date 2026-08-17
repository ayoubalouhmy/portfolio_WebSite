import React from 'react';
import { Download, ArrowRight, Mail, Sparkles, Code2 } from 'lucide-react';
import { PROFILE_INFO, HERO_STATS } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';

export const Hero = ({ onOpenCv, lang }) => {
  const t = TRANSLATIONS[lang].hero;
  const navT = TRANSLATIONS[lang].nav;

  const statsLabels = [t.stats.projects, t.stats.experience, t.stats.tech];

  return (
    <section id="hero" className="px-5 md:px-12 pt-28 pb-16 md:pt-36 md:pb-24 max-w-[1280px] mx-auto relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--accent-purple)]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[var(--accent-cyan)]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[var(--sub-panel)] border border-[var(--panel-border)] hidden sm:flex w-34">
            <span className="w-2 h-2 rounded-full bg-emerald-400 badge-pulse"></span>
            <span className="text-xs font-semibold text-[var(--text-muted)] tracking-wider uppercase">
              {navT.available}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[var(--text-main)] tracking-tight leading-[1.1]">
            {t.rolePrefix}<br />
            <span className="font-serif-italic font-normal text-[var(--accent-purple)] hover:text-[var(--accent-cyan)] transition-colors">
              {t.roleHighlight}
            </span>
          </h1>

          {/* Subtitle / Bio summary */}
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl font-normal leading-relaxed">
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="bg-[#d0bcff] hover:bg-[#e9ddff] text-[#3c0091] font-bold py-3.5 px-6 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d0bcff]/20 active:scale-[0.98]"
            >
              <span>{t.seeProjects}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="bg-transparent border border-[var(--accent-purple)] text-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/10 font-bold py-3.5 px-6 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Mail size={18} />
              <span>{t.contactMe}</span>
            </a>

            <a href="/AyoubAlouhmy (2).pdf" download className="bg-[var(--sub-panel)] border border-[var(--panel-border)] text-[var(--text-main)] hover:border-[var(--accent-purple)]/40 font-bold py-3.5 px-6 rounded-xl transition-all duration-200 text-center flex items-center justify-center gap-2 active:scale-[0.98]">
              <Download size={18} />
              <span>{t.downloadCv}</span>
            </a>
              
            
              
            
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-[var(--panel-border)]">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-[var(--text-muted)] font-medium mt-1">
                  {statsLabels[idx] || stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Hero Image Card Column */}
        <div className="lg:col-span-5 relative z-10">
          <div className="w-full relative rounded-2xl overflow-hidden glass-panel p-2.5 group transition-transform duration-500 hover:scale-[1.01]">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={PROFILE_INFO.heroImage}
                alt="Ayoub Alouhmy Full Stack Illustration"
                decoding="async"
                loading="lazy"
                className="h-140 w-full rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 surface-glass p-3 rounded-xl backdrop-blur-md flex items-center justify-between border border-[var(--panel-border)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#4cd7f6]/20 flex items-center justify-center text-[#4cd7f6]">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-main)]">{t.floatingBadgeTitle}</p>
                    <p className="text-[11px] text-[var(--text-muted)]">{t.floatingBadgeSub}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4cd7f6] bg-[#004e5c]/40 px-2.5 py-1 rounded-full border border-[#4cd7f6]/30">
                  <Sparkles size={12} />
                  Modern UI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

