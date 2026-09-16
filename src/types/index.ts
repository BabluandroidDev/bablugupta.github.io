export interface Project {
  id: string;
  title: string;
  category: 'Flutter' | 'Android' | 'Enterprise' | 'Full-Stack';
  shortDescription: string;
  longOverview: string;
  keyContributions: string[];
  outcome: string;
  technologies: string[];
  playStoreUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  iconType: 'payment' | 'cart' | 'food' | 'code' | 'mobile';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ProficiencyMetric {
  name: string;
  percentage: number;
  highlight: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

