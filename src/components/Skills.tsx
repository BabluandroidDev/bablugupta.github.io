import React from 'react';
import { proficiencyMetrics, skillCategories } from '../data/portfolioData';
import { Cpu, Smartphone, Layers, CreditCard, Cloud, CheckSquare } from 'lucide-react';

export const Skills: React.FC = () => {
  const categoryIcons = [
    <Smartphone className="w-5 h-5 text-sky-400" />,
    <Layers className="w-5 h-5 text-indigo-400" />,
    <CreditCard className="w-5 h-5 text-emerald-400" />,
    <Cloud className="w-5 h-5 text-sky-300" />,
    <CheckSquare className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-sky-400 text-xs sm:text-sm font-semibold mb-3">
            <Cpu className="w-4 h-4" />
            <span>My Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Engineering Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            A comprehensive overview of my technical stack across native Android development, Flutter cross-platform architecture, and enterprise payment/hardware integrations.
          </p>
        </div>

        {/* Top Animated Proficiency Meters (Matches Reference Site UX) */}
        <div className="glass-card rounded-2xl p-8 mb-16 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>Core Technical Proficiencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {proficiencyMetrics.map((metric) => (
              <div key={metric.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-semibold text-slate-200">{metric.name}</span>
                  <span className="text-sm font-bold text-sky-400">{metric.percentage}%</span>
                </div>
                {/* Progress bar container */}
                <div className="w-full h-2.5 bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-brand-600 via-sky-500 to-cyan-300 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                    style={{ width: `${metric.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-slate-400">{metric.highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-600/20 transition-colors">
                    {categoryIcons[index % categoryIcons.length]}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {category.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-white/10 hover:border-sky-400/50 hover:text-sky-300 hover:bg-brand-900/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

