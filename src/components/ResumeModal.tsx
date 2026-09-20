import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a downloadable text/markdown resume file blob for instant offline access
    const resumeText = `DIYA PANDEY
Full-Stack Developer & SDE Aspirant
Bhubaneswar, Odisha | Email: ${personalInfo.email}
GitHub: ${personalInfo.socials.github} | LinkedIn: ${personalInfo.socials.linkedin}
LeetCode: ${personalInfo.socials.leetcode}

EDUCATION
- Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, Odisha
  B.Tech in Computer Science & Engineering (2023 - 2027)
  CGPA: 9.5 / 10 (through 4th semester)
  Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP, Software Engineering

TECHNICAL SKILLS
- Languages: Java, C, Python, JavaScript, TypeScript, SQL, HTML/CSS
- Frontend: React.js, Next.js, Tailwind CSS, Bootstrap, EJS
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, MVC
- Databases: MongoDB, MySQL
- Developer Tools: Git, GitHub, VS Code, Postman, AWS, Vercel, Render

PROJECTS
1. Rupix - Stock Trading Platform (May 2026)
   - Built full-stack trading application with MVC architecture, JWT auth, and Alpha Vantage API.
   - Integrated Gemini API for AI-powered portfolio telemetry and P&L risk summaries.
2. WanderStay - Property Rental Marketplace (Dec 2025)
   - Created booking marketplace with Mapbox discovery, Cloudinary storage, and Mongoose validations.
3. MaatriCare - AI Maternal Healthcare Platform (June 2026)
   - Engineered role-segregated Next.js healthcare portal with real-time Socket.io emergency alerts.

EXPERIENCE
- Web Developer | K1000 (Aug 2024 - Present)
  - Developed full-stack registration web modules serving 3,000+ university students.
- Core Team Member | KSAC Web Development Team (Oct 2023 - Present)
  - Architected high-traffic fest portals, MongoDB ticketing schemas, and real-time updates.

ACHIEVEMENTS & CERTIFICATIONS
- LeetCode: Knight Candidate (400+ Problems Solved, Rating 1840+)
- CodeChef: 3-Star (Rating 1685) | Codeforces: Pupil (Rating 1350+)
- AWS Academy Cloud Foundations (Dec 2024)
- Postman API Fundamentals Student Expert (Oct 2024)
`;

    const blob = new Blob([resumeText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Diya_Pandey_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0c0514]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl glass-panel p-6 sm:p-8 rounded-3xl border border-[#8B5CF6]/40 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close resume preview"
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-[var(--text-muted)] hover:text-white border border-[var(--card-border)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--card-border)]">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4A5FF]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-[var(--text-primary)]">
                Diya Pandey – Resume
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono-code">
                B.Tech CSE · KIIT Bhubaneswar · 9.5 CGPA · SDE Intern / New Grad 2027
              </p>
            </div>
          </div>

          {/* Resume Snapshot Preview */}
          <div className="space-y-6 text-sm">
            {/* Education */}
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#8B5CF6] font-bold flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#22D3EE]" />
                Education
              </h4>
              <div className="glass-panel p-3.5 rounded-xl border border-[var(--card-border)]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-[var(--text-primary)]">{personalInfo.college}</p>
                    <p className="text-xs text-[var(--text-muted)]">{personalInfo.degree}</p>
                  </div>
                  <span className="text-xs font-mono-code text-[#22D3EE] font-semibold bg-[#22D3EE]/10 px-2.5 py-1 rounded-full border border-[#22D3EE]/20">
                    CGPA 9.5 / 10
                  </span>
                </div>
              </div>
            </div>

            {/* Core Tech Stack */}
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#8B5CF6] font-bold flex items-center gap-2 mb-2">
                <Code className="w-4 h-4 text-[#22D3EE]" />
                Technical Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="glass-panel p-3 rounded-xl border border-[var(--card-border)]">
                  <span className="text-[var(--text-muted)] font-mono-code block mb-1">Languages:</span>
                  <span className="text-[var(--text-primary)] font-medium">Java, C, Python, JavaScript, TypeScript, SQL</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-[var(--card-border)]">
                  <span className="text-[var(--text-muted)] font-mono-code block mb-1">Web & Backend:</span>
                  <span className="text-[var(--text-primary)] font-medium">React, Next.js, Node.js, Express, MongoDB, REST APIs</span>
                </div>
              </div>
            </div>

            {/* Experience Summary */}
            <div>
              <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#8B5CF6] font-bold flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-[#22D3EE]" />
                Experience & Roles
              </h4>
              <div className="space-y-2 text-xs">
                <div className="glass-panel p-3 rounded-xl border border-[var(--card-border)]">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>Web Developer — K1000</span>
                    <span className="text-[var(--text-muted)] font-mono-code font-normal">Aug 2024 – Present</span>
                  </div>
                  <p className="text-[var(--text-muted)] mt-1">Full-stack web modules and event registration pipelines for 3,000+ students.</p>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-[var(--card-border)]">
                  <div className="flex justify-between font-bold text-[var(--text-primary)]">
                    <span>Core Team Member — KSAC Web Development Team</span>
                    <span className="text-[var(--text-muted)] font-mono-code font-normal">Oct 2023 – Present</span>
                  </div>
                  <p className="text-[var(--text-muted)] mt-1">University cultural and technical fest web portals, MongoDB database architecture.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Action */}
          <div className="mt-8 pt-4 border-t border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[var(--text-muted)]">
              Last updated: September 2026 · Ready for offline review
            </span>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Clean Copy</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
