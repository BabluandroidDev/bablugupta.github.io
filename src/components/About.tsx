import React from 'react';
import { Code2, ShieldCheck, Cpu, GraduationCap, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutHighlights, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  const cardIcons = [
    <Code2 className="w-6 h-6 text-sky-400" />,
    <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    <Cpu className="w-6 h-6 text-indigo-400" />,
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-sky-400 text-xs sm:text-sm font-semibold mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafting Scalable Mobile & Web Experiences
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl">
            Passionate Mobile Developer with 5+ years of software engineering experience and 4+ years dedicated to building production-ready Android & Flutter solutions with modular architecture and reliable hardware/payment workflows.
          </p>
        </div>

        {/* 3 Signature Highlight Cards (Matches Reference Site UX) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="glass-card rounded-2xl p-7 flex flex-col hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-600/20 transition-all duration-300">
                {cardIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Professional Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Professional Background Details (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-400 text-sm font-bold tracking-wide uppercase mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Professional Strengths</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Full Lifecycle Mobile Ownership
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                From initial requirements grooming and architecture design to API contracts, hardware SDK orchestration, automated testing, and Play Console release management. Deeply committed to writing clean, maintainable Kotlin, Java, and Dart code that scales effortlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-100">{personalInfo.location}</div>
                    <div className="text-xs text-slate-400">Preferred: {personalInfo.preferredLocations}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Availability</div>
                    <div className="text-sm font-semibold text-slate-100">{personalInfo.noticePeriod}</div>
                    <div className="text-xs text-emerald-400 font-medium">Open for hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Qualifications (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-8 flex flex-col">
            <div className="flex items-center gap-2 text-sky-400 text-sm font-bold tracking-wide uppercase mb-4">
              <GraduationCap className="w-5 h-5" />
              <span>Education</span>
            </div>

            <div className="flex flex-col gap-6">
              {educationData.map((edu) => (
                <div key={edu.degree} className="flex flex-col border-l-2 border-sky-500/40 pl-4 py-0.5">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                      {edu.score}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium mb-1">{edu.institution}</div>
                  <div className="text-xs text-slate-400 mb-2">{edu.period}</div>
                  {edu.details && (
                    <p className="text-xs text-slate-400 leading-relaxed">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

