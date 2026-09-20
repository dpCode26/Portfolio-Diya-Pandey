import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  MapPin,
  Send,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowUp,
  ExternalLink,
  Code2,
  Terminal,
  Github,
  Linkedin
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate sending message or preparing mailto link
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Optional fallback: open user's email client if requested
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" aria-label="Contact and Footer" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Soft Glow Blob */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(58, 23, 104, 0.1) 60%, transparent 80%)',
          filter: 'blur(90px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            GET IN TOUCH
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Let's Build Something <span className="text-[#C4A5FF]">Together</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            I am actively seeking SDE internship and full-time opportunities for 2026/2027. Feel free to reach out for roles, project collaborations, or tech discussions!
          </p>
        </div>

        {/* Large Glass Panel with Violet Gradient Border */}
        <div className="relative p-1 rounded-3xl sm:rounded-[36px] bg-gradient-to-tr from-[#8B5CF6]/50 via-[#C4A5FF]/30 to-[#3A1768] shadow-2xl mb-16">
          <div className="glass-panel p-6 sm:p-10 lg:p-12 rounded-[28px] sm:rounded-[32px] grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct Info, Socials, Resume Button */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-xs font-medium text-[#C4A5FF] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
                  <span>Currently open to SDE internships and full-time roles</span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[var(--text-primary)] mb-3">
                  Diya Pandey
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-8">
                  3rd-Year B.Tech Student (CSE) at KIIT Bhubaneswar. Available for in-office or remote engineering roles starting Summer/Fall 2026.
                </p>

                {/* Contact Rows */}
                <div className="space-y-4 mb-8">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-2xl glass-panel glass-panel-hover border border-[var(--card-border)] text-xs sm:text-sm text-[var(--text-primary)] group"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 group-hover:bg-[#8B5CF6] text-[#C4A5FF] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)] block">Email Me Directly</span>
                      <span className="font-medium truncate block text-[#C4A5FF] group-hover:underline">
                        {personalInfo.email}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl glass-panel border border-[var(--card-border)] text-xs sm:text-sm text-[var(--text-primary)]">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 text-[#22D3EE] shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-code text-[var(--text-muted)] block">Current Location</span>
                      <span className="font-medium">{personalInfo.location}</span>
                    </div>
                  </div>

                  {/* Social Profile Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl glass-panel glass-panel-hover border border-[var(--card-border)] text-xs text-[var(--text-muted)] hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077b5]" />
                      <span className="truncate">LinkedIn</span>
                    </a>

                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl glass-panel glass-panel-hover border border-[var(--card-border)] text-xs text-[var(--text-muted)] hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                      <span className="truncate">GitHub</span>
                    </a>

                    <a
                      href={personalInfo.socials.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl glass-panel glass-panel-hover border border-[var(--card-border)] text-xs text-[var(--text-muted)] hover:text-amber-400 transition-colors"
                    >
                      <Code2 className="w-4 h-4 text-amber-400" />
                      <span className="truncate">LeetCode</span>
                    </a>

                    <a
                      href={personalInfo.socials.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2.5 rounded-xl glass-panel glass-panel-hover border border-[var(--card-border)] text-xs text-[var(--text-muted)] hover:text-orange-400 transition-colors"
                    >
                      <Terminal className="w-4 h-4 text-orange-400" />
                      <span className="truncate">CodeChef</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Filled Download Resume Button */}
              <button
                onClick={onOpenResumeModal}
                id="contact-btn-download-resume"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF / TXT)</span>
              </button>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[var(--card-border)] bg-white/[0.02]">
                <h4 className="font-heading font-bold text-xl text-[var(--text-primary)] mb-2">
                  Send a Direct Message
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                  Have an open role or internship position? Leave your message below and I will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#22D3EE] mx-auto animate-bounce" />
                    <h5 className="font-heading font-bold text-lg text-white">
                      Thank You, Message Prepared!
                    </h5>
                    <p className="text-xs text-[var(--text-muted)]">
                      Your default mail client has opened to send your inquiry directly to {personalInfo.email}.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 text-white transition-all mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono-code text-[var(--text-muted)] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono-code text-[var(--text-muted)] mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono-code text-[var(--text-muted)] mb-1.5">
                        Subject / Opportunity
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. SDE Summer 2026 Internship Opportunity"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono-code text-[var(--text-muted)] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write a message about the role, team, or project..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 text-xs sm:text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-btn-submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-xs sm:text-sm shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm bg-gradient-to-r from-[#8B5CF6] to-[#C4A5FF] bg-clip-text text-transparent">
              Diya Pandey
            </span>
            <span>·</span>
            <span>© 2026 All rights reserved</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              LeetCode
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Circular Back to Top Button */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
