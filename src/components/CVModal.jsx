import React from 'react';
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO, TECH_STACK, TIMELINE } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';

export const CVModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

  const t = TRANSLATIONS[lang].hero;
  const expT = TRANSLATIONS[lang].experience;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[var(--bg-main)] border border-[var(--panel-border)] rounded-2xl w-full max-w-4xl my-8 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 bg-[var(--surface-bg)] border-b border-[var(--panel-border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--accent-purple)] text-slate-950 font-black flex items-center justify-center">
              AA
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-main)]">
                Curriculum Vitae — {PROFILE_INFO.name}
              </h2>
              <p className="text-xs text-[var(--text-muted)]">{PROFILE_INFO.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-[var(--accent-purple)] hover:opacity-90 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Download size={14} />
              <span>PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--sub-panel)] rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable CV Container */}
        <div className="p-6 md:p-8 overflow-y-auto bg-[var(--bg-main)] text-[var(--text-main)] space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Header Info */}
          <div className="border-b border-[var(--panel-border)] pb-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-main)]">
                {PROFILE_INFO.name}
              </h1>
              <p className="text-lg font-semibold text-[var(--accent-purple)] mt-1">
                {PROFILE_INFO.title}
              </p>
              <p className="text-xs text-[var(--text-muted)] max-w-xl mt-2 leading-relaxed">
                {PROFILE_INFO.subtitle}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[var(--text-muted)]">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-[var(--accent-purple)]" />
                <span>{PROFILE_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-[var(--accent-cyan)]" />
                <span>{PROFILE_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-[var(--accent-purple)]" />
                <span>{PROFILE_INFO.location}</span>
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Experience & Education */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-base font-bold text-[var(--accent-purple)] flex items-center gap-2 border-b border-[var(--panel-border)] pb-2 mb-4">
                  <Briefcase size={18} />
                  <span>{expT.proExp}</span>
                </h3>

                <div className="space-y-4">
                  {TIMELINE.filter((t) => t.type === 'experience').map((exp, idx) => (
                    <div key={idx} className="bg-[var(--sub-panel)] p-4 rounded-xl border border-[var(--panel-border)]">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[var(--text-main)] text-sm">{exp.role}</h4>
                        <span className="text-[11px] text-[var(--accent-cyan)] font-semibold">Stage</span>
                      </div>
                      <p className="text-xs font-semibold text-[var(--accent-purple)] mt-0.5">{exp.organization}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[var(--accent-cyan)] flex items-center gap-2 border-b border-[var(--panel-border)] pb-2 mb-4">
                  <GraduationCap size={18} />
                  <span>{expT.eduExp}</span>
                </h3>

                <div className="space-y-4">
                  {TIMELINE.filter((t) => t.type === 'education').map((edu, idx) => (
                    <div key={idx} className="bg-[var(--sub-panel)] p-4 rounded-xl border border-[var(--panel-border)]">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-[var(--text-main)] text-sm">{edu.role}</h4>
                        <span className="text-[11px] text-[var(--accent-cyan)] font-semibold">{edu.period}</span>
                      </div>
                      <p className="text-xs font-semibold text-[var(--accent-cyan)] mt-0.5">{edu.organization}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Highlights */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-main)] flex items-center gap-2 border-b border-[var(--panel-border)] pb-2 mb-4">
                  <Code size={18} />
                  <span>Compétences</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-1 bg-[var(--sub-panel)] text-xs font-semibold text-[var(--text-main)] rounded-lg border border-[var(--panel-border)]"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[var(--text-main)] border-b border-[var(--panel-border)] pb-2 mb-4">
                  Points Forts
                </h3>

                <ul className="space-y-2 text-xs text-[var(--text-muted)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent-purple)]" />
                    <span>Développement Full Stack avec React & Laravel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent-purple)]" />
                    <span>Conception d'interfaces responsive & accessibles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent-purple)]" />
                    <span>Gestion de bases de données MySQL & MongoDB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent-purple)]" />
                    <span>Optimisation des performances web & SEO</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[var(--surface-bg)] border-t border-[var(--panel-border)] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[var(--sub-panel)] hover:bg-[var(--card-bg)] text-[var(--text-main)] font-bold rounded-xl text-xs transition-colors border border-[var(--panel-border)]"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

