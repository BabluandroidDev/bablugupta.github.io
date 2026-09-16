import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, Mail, Phone, ArrowUp, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070b14] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-sky-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center font-extrabold text-sm text-sky-400">
                  {personalInfo.initials}
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Mobile Developer specializing in Flutter cross-platform architecture and Native Android systems with 5+ years of software engineering expertise.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-600 hover:text-white flex items-center justify-center text-slate-300 transition-all"
                aria-label="Call Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Download & Jump (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
              Resume Document
            </h4>
            <a
              href={personalInfo.resumeUrl}
              download="Bablu_Gupta_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors w-full justify-center"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Bablu Gupta. All rights reserved.</p>
          <p className="text-slate-400">
            Designed & Built with modern web standards for <span className="text-slate-200 font-semibold">bablugupta.github.io</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

