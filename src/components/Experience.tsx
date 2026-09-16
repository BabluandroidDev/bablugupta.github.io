import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-sky-400 text-xs sm:text-sm font-semibold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
            My professional progression engineering production mobile and web software across collaborative Agile teams.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-7 sm:p-9 relative border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-xl"
            >
              {/* Header row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{item.role}</h3>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Present
                      </span>
                    )}
                  </div>
                  <div className="text-lg font-semibold text-sky-400">{item.company}</div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs sm:text-sm text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="pt-6 text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-medium">
                {item.summary}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 mb-8">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack used in this role */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 items-center">
                <span className="text-xs uppercase font-bold text-slate-400 mr-2">Key Stack:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-sky-300 border border-white/5"
                  >
                    {tech}
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
