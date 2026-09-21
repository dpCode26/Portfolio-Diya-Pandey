import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, ArrowRight, Sparkles, Building, Calendar, CheckCircle } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';

export const About: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="About Diya Pandey"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, transparent 70%)',
          filter: 'blur(70px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 sm:w-88 md:w-96 aspect-square">
            <div
              className="absolute inset-0 rounded-full -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(196, 165, 255, 0.1) 60%, transparent 80%)',
                filter: 'blur(40px)'
              }}
            />

            {/* Organic blob container with violet gradient border */}
            <div className="w-full h-full p-2 bg-gradient-to-tr from-[#8B5CF6] via-[#C4A5FF] to-[#3A1768] blob-shape shadow-2xl transition-all duration-700">
              <div className="w-full h-full blob-shape overflow-hidden bg-[#180d2c] relative">
                <img
                  src={personalInfo.aboutPhoto}
                  alt="Diya Pandey - Full-Stack Developer at KIIT"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150B24]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#150B24]/85 backdrop-blur-md border border-[#8B5CF6]/40 text-xs font-mono text-[#C4A5FF] whitespace-nowrap shadow-lg flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <span>KIIT Bhubaneswar · 9.5 CGPA</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio, Education Card, Stat Cards, Coursework */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Eyebrow */}
          <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            ABOUT ME
          </span>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 text-[var(--text-primary)]">
            Turning Ideas Into{' '}
            <span className="text-[#C4A5FF]">Working Products</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
            {personalInfo.bio}
          </p>

          <div className="w-full glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[var(--card-border)]">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4A5FF] shrink-0">
                <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-[var(--text-primary)]">
                  {personalInfo.college}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] flex items-center gap-2 mt-0.5">
                  <span>{personalInfo.degree}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
                  <span>Graduation {personalInfo.graduationYear}</span>
                </p>
              </div>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs sm:text-sm font-semibold text-[#22D3EE] shrink-0 self-start sm:self-center">
              CGPA {personalInfo.cgpa} ({personalInfo.cgpaSemesters})
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-4 rounded-2xl border border-[var(--card-border)] flex flex-col justify-center text-center sm:text-left"
              >
                <span className="text-2xl sm:text-3xl text-white font-heading font-extrabold flex items-center justify-center sm:justify-start gap-1 text-gradient bg-gradient-to-r from-white to-[#C4A5FF] bg-clip-text text-transparent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </span>
                <span className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[var(--text-muted)] mt-0.5">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>

          {/* Core Coursework Chips */}
          <div className="w-full mb-8">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#8B5CF6]" />
              Foundational Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.coursework.map((course, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-[#8B5CF6]/15 border border-[var(--card-border)] hover:border-[#8B5CF6]/40 text-[var(--text-primary)] transition-colors cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Let's Talk Pill Button */}
          {/* <a
            href="#contact"
            onClick={handleScrollToContact}
            id="about-btn-lets-talk"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-sm sm:text-base shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(139,92,246,0.6)] transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};
