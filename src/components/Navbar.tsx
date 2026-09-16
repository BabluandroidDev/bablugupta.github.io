import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Smartphone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3.5 shadow-xl shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-sky-400 p-[1.5px] shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center font-extrabold text-sm tracking-wider text-sky-400 group-hover:text-white transition-colors">
              {personalInfo.initials}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight group-hover:text-sky-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1">
              <Smartphone className="w-3 h-3 text-sky-400" />
              Flutter & Android Developer
            </span>
          </div>
        </button>

        {/* Desktop Navigation (> 980px) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-white bg-brand-600/30 text-sky-400 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Bablu_Gupta_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-sky-500 hover:from-brand-500 hover:to-sky-400 shadow-lg shadow-brand-600/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button (< 980px) */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            download="Bablu_Gupta_Resume.pdf"
            className="sm:flex hidden items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-600/20 text-sky-400 font-semibold border-l-4 border-sky-400 pl-3'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={personalInfo.resumeUrl}
                download="Bablu_Gupta_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-sky-500 shadow-md shadow-brand-600/30"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

