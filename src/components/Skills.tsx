import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Brain, Cpu, Check, Zap, Layers } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools'] as const;

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Technologies"
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Soft Glow Blob */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            EXPERTISE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-[var(--text-primary)]">
            Skills & <span className="text-[#C4A5FF]">Technologies</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            A comprehensive overview of programming languages, modern frameworks, APIs, and cloud developer tools I use to build scalable digital systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`skill-filter-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] ${
                  isSelected
                    ? 'text-white bg-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-[var(--text-muted)] bg-white/5 hover:bg-white/10 hover:text-[var(--text-primary)] border border-[var(--card-border)]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Two-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl border border-[var(--card-border)] flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Rounded-square icon container */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#8B5CF6]/15 group-hover:bg-[#8B5CF6]/25 border border-[#8B5CF6]/30 text-[#C4A5FF] transition-colors shrink-0">
                      <TechIcon name={skill.iconName} className="w-5 h-5 text-[#8B5CF6] group-hover:text-[#C4A5FF]" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-[var(--text-muted)] font-mono-code">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Proficiency Badge */}
                  <div className="text-right">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#22D3EE]">
                      {skill.proficiency}
                    </span>
                  </div>
                </div>

                {/* Slim violet-to-cyan progress bar */}
                <div className="w-full">
                  <div className="flex justify-between items-center text-[10px] font-mono-code text-[var(--text-muted)] mb-1">
                    <span>Proficiency</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#C4A5FF] to-[#22D3EE]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Highlighted Glowing Card: "Currently Exploring: AI/ML" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#3A1768]/60 via-[#150B24]/90 to-[#3A1768]/60 border border-[#8B5CF6]/40 shadow-[0_0_35px_rgba(139,92,246,0.25)] backdrop-blur-xl"
        >
          {/* Subtle glowing radial background inside card */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#8B5CF6]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#22D3EE] shrink-0 shadow-lg">
                <Brain className="w-7 h-7 animate-pulse text-[#C4A5FF]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 text-xs font-mono-code text-[#22D3EE] mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
                  <span>Active Learning Track</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--text-primary)]">
                  Currently Exploring: <span className="text-[#C4A5FF]">AI & Machine Learning</span>
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-2xl mt-1 leading-relaxed">
                  Deepening expertise in multimodal LLM integration (Gemini API, LangChain), Retrieval-Augmented Generation (RAG), vector embeddings, and neural network foundations with PyTorch.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-2 shrink-0">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-[#8B5CF6]/30 text-[#F5EFFF] flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-400" />
                Gemini API
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-[#8B5CF6]/30 text-[#F5EFFF] flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-[#22D3EE]" />
                RAG Architecture
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-[#8B5CF6]/30 text-[#F5EFFF] flex items-center gap-1.5">
                <Layers className="w-3 h-3 text-[#C4A5FF]" />
                Prompt Engineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
