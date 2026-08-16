import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';

export const Navbar = ({
  onOpenCv,
  isDarkMode,
  onToggleDarkMode,
  lang,
  onLanguageChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.about, href: '#about' },
    { label: t.stack, href: '#stack' },
    { label: t.projects, href: '#projects' },
    { label: t.experience, href: '#experience' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--panel-border)] shadow-lg shadow-black/10 py-3'
          : 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--panel-border)] py-4'
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-12 max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-extrabold text-2xl md:text-3xl text-[var(--text-main)] tracking-tighter hover:text-[var(--accent-purple)] transition-colors flex items-center gap-1.5"
        >
          <span className="bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-cyan)] bg-clip-text text-transparent">
            {PROFILE_INFO.initials}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--text-muted)] hover:text-[var(--accent-purple)] font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-purple)] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls & Availability */}
        <div className="flex items-center gap-3">
      

          {/* Language Switcher pill */}
          <div className="flex items-center bg-[var(--sub-panel)] border border-[var(--panel-border)] rounded-full p-1 text-xs">
            {(['fr', 'en', 'ar']).map((l) => (
              <button
                key={l}
                onClick={() => onLanguageChange(l)}
                className={`px-2.5 py-1 rounded-full font-semibold uppercase transition-all ${
                  lang === l
                    ? 'bg-[var(--accent-cyan)] text-slate-950 font-bold'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--accent-purple)] transition-colors rounded-full hover:bg-[var(--sub-panel)]"
            title={isDarkMode ? t.lightMode : t.darkMode}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>   

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-[var(--text-main)] p-2 md:hidden hover:bg-[var(--sub-panel)] rounded-lg"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--card-bg)] border-b border-[var(--panel-border)] absolute w-full left-0 top-full shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-6 py-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--sub-panel)] border border-[var(--panel-border)] self-start mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 badge-pulse"></span>
              <span className="text-xs font-semibold text-[var(--text-muted)] uppercase">
                {t.available}
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base text-[var(--text-main)] hover:text-[var(--accent-purple)] py-2 border-b border-[var(--panel-border)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

