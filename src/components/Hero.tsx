import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, ArrowUpRight, Sparkles, Terminal, Code2, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { FloatingTechBadges } from './FloatingTechBadges';
import { TypewriterSubtitle } from './TypewriterSubtitle';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction & Hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Large blurred violet glow blob behind the hero (top-left) */}
      <div
        className="absolute -top-24 -left-24 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(58, 23, 104, 0.15) 50%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      {/* Secondary accent glow */}
      <div
        className="absolute top-1/2 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(58, 23, 104, 0.4) 0%, rgba(196, 165, 255, 0.08) 60%, transparent 80%)',
          filter: 'blur(80px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Information, Socials, CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Row of small circular social icons above heading */}
          <div className="flex items-center gap-2.5 mb-6 flex-wrap">
            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-github"
              aria-label="Diya's GitHub Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-white transition-all duration-200 group shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-linkedin"
              aria-label="Diya's LinkedIn Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-white transition-all duration-200 group shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-leetcode"
              aria-label="Diya's LeetCode Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-amber-400 transition-all duration-200 group shadow-sm"
              title="LeetCode (400+ Solved)"
            >
              <Code2 className="w-4 h-4" />
            </a>

            {/* CodeChef */}
            <a
              href={personalInfo.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-codechef"
              aria-label="Diya's CodeChef Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-orange-400 transition-all duration-200 group shadow-sm"
              title="CodeChef (3-Star)"
            >
              <Terminal className="w-4 h-4" />
            </a>

            {/* Codeforces */}
            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-social-codeforces"
              aria-label="Diya's Codeforces Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-muted)] hover:text-sky-400 transition-all duration-200 group shadow-sm"
              title="Codeforces"
            >
              <span className="font-mono font-bold text-xs">CF</span>
            </a>

            {/* Status Pill Badge */}
            <div className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-medium text-[#C4A5FF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span>{personalInfo.statusBadge}</span>
            </div>
          </div>

          {/* Heading: "Hi, I'm Diya" */}
          <h1
            id="hero-main-title"
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#C4A5FF] to-[#22D3EE] bg-clip-text text-transparent">
              Diya
            </span>
          </h1>

          {/* Monospace Subtitle with Typing/Rotating effect */}
          <div className="flex items-center gap-2 mb-6 text-lg sm:text-2xl font-mono-code min-h-[36px]">
            <span className="text-[var(--text-muted)]">›</span>
            <TypewriterSubtitle phrases={personalInfo.heroSubtitlePhrases} />
          </div>

          {/* Short Intro */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl mb-8">
            3rd-year B.Tech student at KIIT building full-stack products, sharpening DSA, and exploring AI/ML. Looking for top SDE internships and roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResumeModal}
              id="hero-btn-download-resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-sm sm:text-base shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_28px_rgba(139,92,246,0.7)] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:ring-offset-2 focus:ring-offset-[#150B24]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              id="hero-btn-hire-me"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent hover:bg-white/5 text-[var(--text-primary)] border border-[#8B5CF6]/50 hover:border-[#8B5CF6] font-medium text-sm sm:text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              <Mail className="w-4 h-4 text-[#C4A5FF]" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Quick Metrics Chip Row */}
          <div className="mt-10 pt-6 border-t border-[var(--card-border)] w-full flex items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[var(--text-muted)]">
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl text-white block">9.5 CGPA</span>
              <span>KIIT University</span>
            </div>
            <div className="h-8 w-px bg-[var(--card-border)]" />
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl text-white block">3+ Live Apps</span>
              <span>Full-Stack Web</span>
            </div>
            <div className="h-8 w-px bg-[var(--card-border)]" />
            <div>
              <span className="font-heading font-bold text-lg sm:text-xl text-[#22D3EE] block">SDE 2026/27</span>
              <span>Internship Ready</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Portrait with Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Glowing Radial Halo behind photo */}
          <div
            className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full -z-10 animate-pulse pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.45) 0%, rgba(196, 165, 255, 0.15) 50%, transparent 70%)',
              filter: 'blur(45px)'
            }}
          />

          {/* Floating Container */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="relative w-64 sm:w-80 md:w-88 aspect-square"
          >
            {/* Soft rounded/blob frame with violet gradient border */}
            <div className="relative w-full h-full p-1.5 rounded-3xl sm:rounded-[36px] bg-gradient-to-tr from-[#8B5CF6] via-[#C4A5FF] to-[#22D3EE] shadow-2xl">
              <div className="w-full h-full rounded-[22px] sm:rounded-[32px] overflow-hidden bg-[#1a0c30] relative">
                <img
                  src={personalInfo.heroPhoto}
                  alt="Diya Pandey - Full-Stack Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image path fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Subtle gradient overlay at bottom of photo for seamless blending */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#150B24] via-[#150B24]/40 to-transparent pointer-events-none" />

                {/* Corner Sparkle indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#150B24]/80 backdrop-blur-md border border-[#8B5CF6]/30 text-xs font-mono text-[#C4A5FF]">
                  <Sparkles className="w-3 h-3 text-[#22D3EE]" />
                  <span>Diya Pandey</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges that bob around photo */}
            <FloatingTechBadges />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
