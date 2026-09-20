import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience and Campus Leadership"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Soft Glow Blob */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            JOURNEY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Experience & <span className="text-[#C4A5FF]">Leadership</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            Practical engineering experience leading web architecture, high-traffic fest portals, and cross-functional teams at KIIT.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gradient ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {/* Timeline background gradient line */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-0.5 bg-gradient-to-b from-[#8B5CF6] via-[#C4A5FF] to-transparent pointer-events-none" />

          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Glowing violet dot on the line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-4 h-4 rounded-full bg-[#150B24] border-2 border-[#8B5CF6] shadow-[0_0_12px_#8B5CF6] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              </div>

              {/* Glass Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-[var(--card-border)] relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4A5FF] shrink-0">
                      <Briefcase className="w-5 h-5 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#C4A5FF] flex items-center gap-1.5 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                        <span>{item.organization}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:self-start">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono-code bg-white/5 border border-[var(--card-border)] text-[var(--text-muted)]">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono-code bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 text-[#22D3EE]">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mt-4">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small note at bottom */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#8B5CF6]/30 text-xs sm:text-sm font-mono-code text-[#C4A5FF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span>Open to SDE internship opportunities.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
