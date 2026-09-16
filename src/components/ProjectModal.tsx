import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Smartphone, CreditCard, ShoppingBag, Utensils, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <CreditCard className="w-6 h-6 text-sky-400" />;
      case 'cart':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'food':
        return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      default:
        return <Smartphone className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border-white/15 bg-slate-900/95 z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
              {renderIcon(project.iconType)}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">{project.title}</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-500/20 text-sky-300 border border-brand-500/30">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-slate-300">{project.shortDescription}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6 max-h-[65vh] overflow-y-auto pr-1">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold text-sky-400 tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.longOverview}
            </p>
          </div>

          {/* Key Contributions */}
          <div>
            <h4 className="text-xs uppercase font-bold text-sky-400 tracking-wider mb-3">
              Key Contributions & Architecture
            </h4>
            <ul className="space-y-2.5">
              {project.keyContributions.map((contribution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-normal">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="p-4 rounded-2xl bg-brand-600/10 border border-brand-500/20">
            <h4 className="text-xs uppercase font-bold text-sky-300 tracking-wider mb-1">
              Outcome & Business Impact
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-sky-300 border border-sky-400/20 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
              >
                <span>View on Play Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 glass-card hover:text-white transition-colors"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors ml-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

