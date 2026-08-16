import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { Layers, ShieldCheck, Zap } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export const AboutSection = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <section id="about" className="px-5 md:px-12 py-20 bg-[var(--surface-bg)] border-y border-[var(--panel-border)] relative">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)]">{t.title}</h2>
          <div className="w-12 h-1 bg-[var(--accent-purple)] rounded-full" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Headshot Photo - ALWAYS in full original color */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden glass-panel p-2.5 relative group shadow-xl">
              <img
                src={PROFILE_INFO.aboutImage}
                alt={PROFILE_INFO.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 rounded-2xl pointer-events-none" />
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-main)] leading-snug">
              {t.headlinePart1}{' '}
              <span className="font-serif-italic font-normal text-[var(--accent-purple)]">
                {t.headlineHighlight}
              </span>{' '}
              {t.headlinePart2}
            </h3>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              {t.bio1}
            </p>

            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
              {t.bio2}
            </p>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-[var(--panel-border)] hover:border-[var(--accent-purple)]/40 transition-all">
                <div className="p-2 rounded-lg bg-[var(--accent-purple)]/10 text-[var(--accent-purple)]">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)]">{t.card1Title}</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.card1Sub}</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-[var(--panel-border)] hover:border-[var(--accent-cyan)]/40 transition-all">
                <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)]">{t.card2Title}</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.card2Sub}</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3 border border-[var(--panel-border)] hover:border-[var(--accent-purple)]/40 transition-all">
                <div className="p-2 rounded-lg bg-[var(--accent-purple)]/10 text-[var(--accent-purple)]">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-main)]">{t.card3Title}</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{t.card3Sub}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

