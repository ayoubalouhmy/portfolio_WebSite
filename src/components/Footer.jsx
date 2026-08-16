import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--surface-bg)] border-t border-[var(--panel-border)] py-10 mt-auto relative transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <a
            href="#"
            className="text-2xl font-extrabold text-[var(--text-main)] tracking-tighter hover:text-[var(--accent-purple)] transition-colors"
          >
            {PROFILE_INFO.initials}
          </a>
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 {PROFILE_INFO.name}. Crafted with Technical Minimalism.
          </p>
        </div>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ayoubalouhmy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/ayoubalouhmy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2.5 rounded-full bg-[var(--sub-panel)] border border-[var(--panel-border)] text-[var(--text-muted)] hover:text-[var(--accent-purple)] hover:bg-[var(--card-bg)] transition-all"
            title="Haut de page"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
      {/* Fixed WhatsApp floating badge */}
      <a
        href="https://wa.me/212780651508"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20b558] shadow-lg flex items-center justify-center text-white transition-transform transform hover:-translate-y-1"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6">
          <path fill="currentColor" d="M16.01 3.2C9.08 3.2 3.6 8.68 3.6 15.61c0 2.74.9 5.27 2.43 7.34L3 29l6.19-3.06c1.94 1.06 4.22 1.65 6.82 1.65 6.93 0 12.41-5.48 12.41-12.41S22.94 3.2 16.01 3.2zm6.95 18.13c-.27.77-1.6 1.5-2.2 1.6-.6.11-1.31.15-2.7-.33-3.49-1.13-5.73-4.53-5.9-4.78-.17-.25-1.4-1.9-1.4-3.62 0-1.72.91-2.56 1.24-2.91.33-.35.72-.44 1.01-.44.27 0 .54 0 .78.01.25.01.58-.09.9.68.32.77 1.1 2.66 1.2 2.86.11.2.18.44.02.7-.16.26-.24.41-.48.66-.24.25-.5.53-.72.7-.24.2-.49.37-.2.73.29.36 1.28 2.08 2.74 3.36 1.89 1.58 3.47 2.03 3.85 2.25.38.22.6.18.82-.11.22-.29.98-1.14 1.25-1.53.26-.39.52-.33.9-.2.38.13 2.37 1.12 2.77 1.33.4.21.67.32.77.5.1.18.1 1.03-.17 1.8z"/>
        </svg>
      </a>
    </footer>
  );
};

