import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c0514]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-[#8B5CF6]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white border border-[var(--card-border)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header info */}
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-code font-bold text-xs text-[#8B5CF6] tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-muted)]" />
            <span className="text-xs text-[var(--text-muted)] font-mono-code flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.date}
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--text-primary)] mb-1">
            {project.title}: <span className="text-[#C4A5FF]">{project.subtitle}</span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Project Screenshot Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] mb-6 aspect-video bg-[#1a0c30]">
            <img
              src={project.image}
              alt={`${project.title} live screenshot`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150B24]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Architecture and Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#C4A5FF] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
              Architectural & Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4A5FF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--card-border)]">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-[var(--card-border)] hover:border-[#8B5CF6] text-[var(--text-primary)] text-xs sm:text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
