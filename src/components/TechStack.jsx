import React, { useState } from 'react';
import { Code, Database, Wrench, Terminal, Cloud } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';

export const TechStack = ({ lang }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const t = TRANSLATIONS[lang].stack;

  const frontendSkills = TECH_STACK.filter((item) => item.category === 'frontend');
  const backendSkills = TECH_STACK.filter((item) => item.category === 'backend');
  const toolSkills = TECH_STACK.filter((item) => item.category === 'tools');

  return (
    <section id="stack" className="px-5 md:px-12 py-20 border-b border-[var(--panel-border)] max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)]">
            {t.titlePart1}{' '}
            <span className="font-serif-italic font-normal text-[var(--accent-cyan)]">
              {t.titleHighlight}
            </span>
          </h2>
          <div className="w-12 h-1 bg-[var(--accent-cyan)] rounded-full mt-2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: t.filterAll },
            { id: 'frontend', label: t.filterFrontend },
            { id: 'backend', label: t.filterBackend },
            { id: 'tools', label: t.filterTools },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === filter.id
                  ? 'bg-[var(--accent-cyan)] text-slate-950 shadow-md font-bold'
                  : 'bg-[var(--sub-panel)] text-[var(--text-muted)] border border-[var(--panel-border)] hover:border-[var(--accent-cyan)]/40'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Categories Grid */}
      <div className="flex flex-col gap-10">
        {/* Frontend Section */}
        {(selectedFilter === 'all' || selectedFilter === 'frontend') && (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent-purple)] flex items-center gap-2.5 border-b border-[var(--panel-border)] pb-3">
              <Code size={22} className="text-[var(--accent-purple)]" />
              <span>{t.frontend}</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 glass-panel px-4 py-2.5 rounded-full border border-[var(--panel-border)] hover:border-[var(--accent-purple)]/40 hover:scale-105 transition-all duration-200 cursor-default group"
                >
                  {tech.iconClass && <i className={`${tech.iconClass} text-xl`} />}
                  <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-purple)]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Backend & BDD Section */}
        {(selectedFilter === 'all' || selectedFilter === 'backend') && (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--accent-cyan)] flex items-center gap-2.5 border-b border-[var(--panel-border)] pb-3">
              <Database size={22} className="text-[var(--accent-cyan)]" />
              <span>{t.backend}</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 glass-panel px-4 py-2.5 rounded-full border border-[var(--panel-border)] hover:border-[var(--accent-cyan)]/40 hover:scale-105 transition-all duration-200 cursor-default group"
                >
                  {tech.iconClass && <i className={`${tech.iconClass} text-xl`} />}
                  <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-cyan)]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Outils & DevOps Section */}
        {(selectedFilter === 'all' || selectedFilter === 'tools') && (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[var(--text-main)] flex items-center gap-2.5 border-b border-[var(--panel-border)] pb-3">
              <Wrench size={22} className="text-[var(--text-main)]" />
              <span>{t.tools}</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {toolSkills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 glass-panel px-4 py-2.5 rounded-full border border-[var(--panel-border)] hover:border-[var(--text-main)]/30 hover:scale-105 transition-all duration-200 cursor-default group"
                >
                  {tech.iconClass ? (
                    <i className={`${tech.iconClass} text-xl`} />
                  ) : tech.materialIcon === 'terminal' ? (
                    <Terminal size={18} className="text-[var(--accent-cyan)]" />
                  ) : (
                    <Cloud size={18} className="text-emerald-400" />
                  )}
                  <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[var(--accent-purple)]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

