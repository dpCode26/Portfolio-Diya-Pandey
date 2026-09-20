import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ExternalLink, GraduationCap, Award, Trophy, Star, CheckCircle } from 'lucide-react';
import { profilesAndAchievements, personalInfo } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Profiles: React.FC = () => {
  return (
    <section
      id="profiles"
      aria-label="Profiles and Certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            ACHIEVEMENTS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Profiles & <span className="text-[#C4A5FF]">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto">
            Competitive programming credentials, algorithmic problem solving milestones, and verified industry technical certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: List of Glass Rows (Profiles & Certs) */}
          <div className="lg:col-span-7 space-y-3.5">
            {profilesAndAchievements.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-[var(--card-border)] flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Rounded-square icon container */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 group-hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 text-[#C4A5FF] shrink-0 transition-colors">
                    <TechIcon name={item.iconName} className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#C4A5FF]" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[var(--text-primary)] truncate">
                        {item.platform}
                      </h4>
                      {item.ratingBadge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-code font-semibold bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE]">
                          {item.ratingBadge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">
                      {item.stats}
                    </p>
                  </div>
                </div>

                {/* Right link */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-full text-xs font-medium bg-[#8B5CF6]/10 hover:bg-[#8B5CF6] border border-[#8B5CF6]/30 hover:border-[#8B5CF6] text-[#C4A5FF] hover:text-white transition-all flex items-center gap-1"
                >
                  <span>{item.type === 'certification' ? 'Verify' : 'View'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right: Large Glowing Academic Visual (Graduation Cap & CGPA 9.5 Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Soft violet radial halo */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none -z-10 animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(58, 23, 104, 0.2) 60%, transparent 80%)',
                  filter: 'blur(50px)'
                }}
              />

              {/* Large Academic Card */}
              <div className="relative glass-panel rounded-3xl p-8 border border-[#8B5CF6]/40 shadow-2xl text-center overflow-hidden">
                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Large Graduation Cap Icon Container */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-tr from-[#8B5CF6]/30 to-[#C4A5FF]/10 border border-[#8B5CF6]/50 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/20">
                  <GraduationCap className="w-12 h-12 text-[#C4A5FF]" />
                </div>

                {/* Academic Distinction Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-xs font-mono-code text-[#22D3EE] font-semibold mb-4">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Academic Rank: Top 1%</span>
                </div>

                {/* Big CGPA Display */}
                <div className="mb-2">
                  <span className="font-heading font-black text-6xl sm:text-7xl bg-gradient-to-r from-white via-[#C4A5FF] to-[#22D3EE] bg-clip-text text-transparent">
                    9.5
                  </span>
                  <span className="font-mono-code text-xl sm:text-2xl text-[#C4A5FF] ml-1 font-bold">
                    / 10
                  </span>
                </div>

                <p className="font-heading font-bold text-lg text-[var(--text-primary)]">
                  Cumulative Grade Point Average
                </p>
                <p className="text-xs font-mono-code text-[#22D3EE] mt-0.5">
                  Through 4th Semester (B.Tech CSE)
                </p>

                {/* University Details */}
                <div className="mt-6 pt-6 border-t border-[var(--card-border)] text-xs text-[var(--text-muted)] flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Kalinga Institute of Industrial Technology (KIIT)
                  </span>
                  <span>Bhubaneswar, Odisha · Class of 2027</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
