export interface SkillItem {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Tools';
  proficiency: string;
  percentage: number;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  keyFeatures: string[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface CodingProfileItem {
  platform: string;
  handle: string;
  stats: string;
  ratingBadge?: string;
  url: string;
  iconName: string;
  type: 'profile' | 'certification';
  issuer?: string;
  date?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}
