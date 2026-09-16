import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowRight, Sparkles, CreditCard, ShoppingBag, Utensils, Code2, Smartphone } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Flutter' | 'Android' | 'Enterprise'>('All');

  const categories = ['All', 'Flutter', 'Android', 'Enterprise'] as const;

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const renderIcon = (type: string) => {
    switch (type) {
      case 'payment':
        return <CreditCard className="w-5 h-5 text-sky-400" />;
      case 'cart':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'food':
        return <Utensils className="w-5 h-5 text-amber-400" />;
      case 'code':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-sky-400 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Applications & Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            Selected mobile applications, payment workflows, and RFID hardware solutions developed for active commercial use.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 relative shadow-lg"
            >
              <div>
                {/* Top Row: Icon & Category */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600/20 transition-all duration-300">
                    {renderIcon(project.iconType)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-sky-400 border border-brand-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Title & Short Summary */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Technologies pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-lg text-xs font-medium text-slate-400">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Action: Explore Project Modal Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-white transition-colors group/btn"
                >
                  <span>Explore Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

