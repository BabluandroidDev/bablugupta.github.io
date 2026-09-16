import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Clock, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Project Inquiry',
    message: '',
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const subjectOptions = [
    'Job Opportunity / Hiring',
    'Cover Letter / Project Details',
    'Mobile Application Development',
    'Freelance / Technical Consulting',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct prefilled mailto URL
    const subjectEncoded = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'Visitor'}: ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Bablu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    );

    // Trigger mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Display exact toast message from reference site
    setToastMessage('Your email app will open with this message ready to send.');
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-sky-400 text-xs sm:text-sm font-semibold mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-sky-400">
            Let's build something great together.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
            Tell me about your project or opportunity. I am currently available for full-time engineering positions and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10 hover:border-sky-500/30 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-slate-400 font-medium mb-0.5">Email Address</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors block truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-white mt-2 font-medium"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied to clipboard!' : 'Copy email address'}</span>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10 hover:border-sky-500/30 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium mb-0.5">Phone / WhatsApp</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <div className="text-xs text-slate-400 mt-1">Direct inquiries & calls welcome</div>
              </div>
            </div>

            {/* Location & Notice Period Card */}
            <div className="glass-card rounded-2xl p-6 border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm font-bold text-white">{personalInfo.location}</div>
                  <div className="text-xs text-slate-400">Open to: {personalInfo.preferredLocations}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Notice Period & Availability</div>
                  <div className="text-sm font-bold text-white">{personalInfo.noticePeriod}</div>
                  <div className="text-xs text-emerald-400 font-semibold">{personalInfo.availability}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border-white/10 shadow-2xl relative">
            
            {/* Toast notification banner */}
            {toastMessage && (
              <div className="mb-6 p-4 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-200 text-sm flex items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span>{toastMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                    Your Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                  Subject / Topic
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-2">
                  Project Details / Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Share details about your project, team, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-sky-500 to-cyan-400 hover:from-brand-500 hover:to-cyan-300 shadow-xl shadow-brand-600/30 hover:shadow-brand-500/50 flex items-center justify-center gap-2 text-base transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <p className="text-center text-xs text-slate-400">
                Direct mailto connection. Your default email client will launch with these details prepared.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

