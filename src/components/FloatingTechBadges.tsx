import React from 'react';
import { motion } from 'motion/react';

interface TechBadge {
  name: string;
  color: string;
  bg: string;
  borderColor: string;
  top: string;
  left?: string;
  right?: string;
  duration: number;
  delay: number;
  yOffset: number;
}

const badges: TechBadge[] = [
  {
    name: 'React.js',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.12)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
    top: '8%',
    left: '-8%',
    duration: 4.2,
    delay: 0,
    yOffset: -12
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
    top: '28%',
    right: '-10%',
    duration: 3.8,
    delay: 0.6,
    yOffset: 14
  },
  {
    name: 'TypeScript',
    color: '#60a5fa',
    bg: 'rgba(96, 165, 250, 0.12)',
    borderColor: 'rgba(96, 165, 250, 0.3)',
    top: '68%',
    left: '-6%',
    duration: 4.6,
    delay: 1.2,
    yOffset: -10
  },
  {
    name: 'Node.js',
    color: '#4ade80',
    bg: 'rgba(74, 222, 128, 0.12)',
    borderColor: 'rgba(74, 222, 128, 0.3)',
    top: '84%',
    right: '-4%',
    duration: 3.9,
    delay: 0.4,
    yOffset: 12
  },
  {
    name: 'MongoDB',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.12)',
    borderColor: 'rgba(52, 211, 153, 0.3)',
    top: '48%',
    left: '-14%',
    duration: 4.4,
    delay: 0.8,
    yOffset: -14
  },
  {
    name: 'Python',
    color: '#facc15',
    bg: 'rgba(250, 204, 21, 0.12)',
    borderColor: 'rgba(250, 204, 21, 0.3)',
    top: '5%',
    right: '4%',
    duration: 4.1,
    delay: 1.4,
    yOffset: 10
  }
];

export const FloatingTechBadges: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-visible">
      {badges.map((badge, idx) => (
        <motion.div
          key={idx}
          className="absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code font-semibold shadow-lg backdrop-blur-md"
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            backgroundColor: badge.bg,
            borderColor: badge.borderColor,
            borderWidth: '1px',
            color: badge.color
          }}
          animate={{
            y: [0, badge.yOffset, 0]
          }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: badge.delay
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: badge.color }}
          />
          {badge.name}
        </motion.div>
      ))}
    </div>
  );
};
