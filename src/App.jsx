import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TechStack } from './components/TechStack';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [lang]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans flex flex-col selection:bg-[var(--accent-purple)]/30 selection:text-[var(--accent-purple)] transition-colors duration-300">
      {/* Top Header Navbar */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenCv={() => setIsCvOpen(true)} lang={lang} />

        {/* About Section */}
        <AboutSection lang={lang} />

        {/* Tech Stack Section */}
        <TechStack lang={lang} />

        {/* Selected Projects Section */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} lang={lang} />

        {/* Experience & Timeline Section */}
        <ExperienceSection lang={lang} />

        {/* Contact Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

