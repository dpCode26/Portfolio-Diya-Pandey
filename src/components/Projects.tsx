import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Sparkles, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects Portfolio"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Soft Glow Blob */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 'var(--blob-opacity, 0.35)'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header with Title and Outlined Arrow Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#8B5CF6] font-bold mb-2 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
              PORTFOLIO
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--text-primary)]">
              My Featured <span className="text-[#C4A5FF]">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-xl">
              Production web platforms engineered with modern full-stack architectures, real-time telemetry, and AI integrations.
            </p>
          </div>

          {/* Circular Outlined Prev / Next Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              id="projects-carousel-prev"
              aria-label="Previous project cards"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-primary)] hover:text-[#C4A5FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              id="projects-carousel-next"
              aria-label="Next project cards"
              className="w-11 h-11 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#8B5CF6]/20 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-primary)] hover:text-[#C4A5FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel with Swipe Support */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="w-[300px] sm:w-[350px] lg:w-[380px] shrink-0 snap-start glass-panel rounded-3xl border border-[var(--card-border)] hover:border-[#8B5CF6]/60 shadow-lg hover:shadow-[0_15px_35px_rgba(139,92,246,0.3)] transition-all flex flex-col justify-between overflow-hidden cursor-pointer group"
              onClick={() => onSelectProject(project)}
            >
              <div>
                {/* Screenshot in rounded frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#180c2e] p-3 pb-0">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative border border-[var(--card-border)] bg-[#120722]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B24]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Number badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#150B24]/90 backdrop-blur-md border border-[#8B5CF6]/40 text-[11px] font-mono-code font-bold text-[#22D3EE]">
                      {project.number}
                    </div>

                    {/* Date badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#150B24]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono-code text-[var(--text-muted)]">
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-xl text-[var(--text-primary)] group-hover:text-[#C4A5FF] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono-code text-[#C4A5FF] mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-code bg-white/5 border border-[var(--card-border)] text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-code bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#C4A5FF]">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div
                className="px-6 py-4 border-t border-[var(--card-border)] flex items-center justify-between gap-2 bg-white/[0.02]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live demo of ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-medium shadow-sm transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open source code of ${project.title}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[var(--card-border)] text-[var(--text-primary)] text-xs font-medium transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono-code text-[#C4A5FF] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}

          {/* 04: "More on GitHub" Final Violet Gradient Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="w-[280px] sm:w-[320px] shrink-0 snap-start rounded-3xl p-6 bg-gradient-to-br from-[#8B5CF6]/40 via-[#3A1768]/80 to-[#150B24] border border-[#8B5CF6]/50 shadow-xl flex flex-col justify-between group cursor-pointer"
            onClick={() => window.open(personalInfo.socials.github, '_blank')}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10 border border-white/20 text-white mb-6 group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-6 h-6 text-[#22D3EE]" />
              </div>

              <span className="text-xs font-mono-code text-[#C4A5FF] tracking-wider uppercase">
                Explore More
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white mt-1 mb-3">
                More on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                Discover additional full-stack repositories, DSA problem solutions in Java/C++, and algorithmic experiments on my GitHub profile.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono-code text-white group-hover:underline">
                github.com/dpCode26
              </span>
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white group-hover:bg-[#8B5CF6] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
