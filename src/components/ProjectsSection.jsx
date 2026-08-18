import { ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';

export const ProjectsSection = ({ onSelectProject, lang }) => {
  const t = TRANSLATIONS[lang].projects;

  return (
    <section id="projects" className="px-5 md:px-12 py-20 border-b border-[var(--panel-border)] bg-[var(--surface-bg)] relative">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-main)]">
            {t.titlePart1}{' '}
            <span className="font-serif-italic font-normal text-[var(--accent-purple)]">
              {t.titleHighlight}
            </span>
          </h2>
          <div className="w-12 h-1 bg-[var(--accent-purple)] rounded-full mt-2" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col border border-[var(--panel-border)] hover:border-[var(--accent-purple)]/40 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Project Card Image Container */}
              <div className="bg-[var(--sub-panel)] h-64 md:h-72 relative overflow-hidden border-b border-[var(--panel-border)]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 surface-glass px-3 py-1 rounded-full text-xs font-bold text-[var(--accent-purple)] border border-[var(--panel-border)]">
                  {t.projectTag} {project.number}
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="bg-[var(--accent-purple)] hover:opacity-90 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                  >
                    <Eye size={16} />
                    <span>{t.explore}</span>
                  </button>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
                <div>
                  <div className="text-xs font-bold text-[var(--accent-purple)] tracking-wider uppercase mb-1">
                    {project.number} • {project.tagline}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[var(--accent-purple)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-xs font-semibold rounded-full border border-[var(--accent-cyan)]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Card Action */}
                <div className="pt-2 border-t border-[var(--panel-border)] flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-[var(--accent-purple)] hover:text-[var(--text-main)] font-bold text-sm transition-all group-hover:translate-x-1"
                  >
                    <span>{t.detailsDemo}</span>
                    <ArrowRight size={16} />
                  </button>

                  <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                    <Sparkles size={12} className="text-[var(--accent-cyan)]" />
                    {t.interactiveDemo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

