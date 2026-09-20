import React from 'react';
import { ArrowRight, Download, Mail, Smartphone, Award, Layers, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 -left-20 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) - order-2 on mobile, order-1 on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand-500/30 text-sky-400 text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>Hello, I'm</span>
              <span className="text-white font-bold tracking-wide">Bablu Gupta</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
              Building <span className="text-gradient-brand">digital solutions</span> that make an impact.
            </h1>

            {/* Sub-headline */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-200 mb-6">
              <Smartphone className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <span>Flutter & Android Mobile Developer</span>
            </div>

            {/* Narrative summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Key feature pills */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Clean Architecture & MVVM</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Secure Payments & RFID/QR</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
                <Award className="w-4 h-4 text-amber-400" />
                <span>5+ Years Engineering</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 to-sky-500 hover:from-brand-500 hover:to-sky-400 shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Bablu_Gupta_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-slate-200 glass-card hover:bg-white/10 hover:text-white border-white/15 hover:border-sky-400/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sky-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Hire Me  -&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Floating Stat Cards (5 cols) - order-1 on mobile, order-2 on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Outer glowing frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600 via-sky-400 to-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card border-2 border-white/15 shadow-2xl bg-slate-900/80">
                <img
                  src={personalInfo.portraitUrl}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover object-top filter contrast-[1.03] hover:scale-[1.02] transition-transform duration-500"
                  style={{ maxHeight: '520px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Stat Card 1: Experience */}
              <div className="absolute -top-5 -left-4 sm:-left-8 glass-card border-sky-400/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float backdrop-blur-xl">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-500 to-brand-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">5+ Years</div>
                  <div className="text-xs text-slate-300 font-medium">Software Engineering</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Apps Delivered */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 glass-card border-emerald-400/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float backdrop-blur-xl [animation-delay:1.5s]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">15+ Projects</div>
                  <div className="text-xs text-slate-300 font-medium">Delivered & Integrated</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

