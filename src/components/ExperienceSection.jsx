import React from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, Building2 } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export const ExperienceSection = ({ lang }) => {
  const t = TRANSLATIONS[lang].experience;

  return (
    <section id="experience" className="px-5 md:px-12 py-20 border-b border-[var(--panel-border)] max-w-[1280px] mx-auto">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)]">
          {t.titlePart1}{' '}
          <span className="font-serif-italic font-normal text-[var(--accent-purple)]">
            {t.titleHighlight}
          </span>
        </h2>
        <div className="w-12 h-1 bg-[var(--accent-purple)] rounded-full mt-2" />
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 md:pl-8">
        {/* Vertical Line */}
        <div className="absolute left-2.5 md:left-3 top-2 bottom-2 w-0.5 bg-[var(--panel-border)]" />

        <div className="flex flex-col gap-12">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Animated Timeline Node */}
              <div
                className={`absolute -left-[23px] md:-left-[25px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-main)] border-2 ${
                  item.color === 'primary' ? 'border-[var(--accent-purple)] shadow-[0_0_12px_rgba(208,188,255,0.6)]' : 'border-[var(--accent-cyan)] shadow-[0_0_12px_rgba(76,215,246,0.6)]'
                } z-10 transition-transform group-hover:scale-125`}
              />

              {/* Card Container */}
              <div className="glass-panel p-6 rounded-2xl border border-[var(--panel-border)] hover:border-[var(--accent-purple)]/40 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[var(--text-muted)] bg-[var(--sub-panel)] px-3 py-1 rounded-full border border-[var(--panel-border)] flex items-center gap-1.5">
                    {item.type === 'experience' ? <Briefcase size={12} className="text-[var(--accent-purple)]" /> : <GraduationCap size={12} className="text-[var(--accent-cyan)]" />}
                    {item.type === 'experience' ? t.proExp : t.eduExp}
                  </span>

                  {item.period && (
                    <span className="text-xs font-semibold text-[var(--accent-cyan)] bg-[var(--accent-cyan)]/10 px-3 py-1 rounded-full border border-[var(--accent-cyan)]/20 flex items-center gap-1">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-main)] flex items-center gap-2">
                  <Building2 size={20} className={item.color === 'primary' ? 'text-[var(--accent-purple)]' : 'text-[var(--accent-cyan)]'} />
                  {item.organization}
                </h3>

                <p className={`text-sm font-bold mt-1 ${item.color === 'primary' ? 'text-[var(--accent-purple)]' : 'text-[var(--accent-cyan)]'}`}>
                  {item.role}
                </p>

                <p className="text-sm md:text-base text-[var(--text-muted)] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

