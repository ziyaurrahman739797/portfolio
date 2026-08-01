export interface NavLink {
  label: string;
  href: string;
}

export interface EducationMilestone {
  id: string;
  title: string;
  institution: string;
  field: string;
  status: "completed" | "in-progress";
  badge?: string;
}

export type SkillCategory = "SAP" | "Programming" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  learning: boolean;
}

export interface JourneyNode {
  id: string;
  label: string;
  description: string;
}

export interface WhyHireCard {
  id: string;
  title: string;
  description: string;
}

export interface RecruiterHighlight {
  icon: string;
  label: string;
}

export interface ProjectFeature {
  label: string;
}

export interface Project {
  name: string;
  badge: string;
  description: string;
  techStack: string[];
  features: ProjectFeature[];
  githubUrl: string;
  liveUrl?: string;
}

export type LearningStatus = "learning" | "upcoming" | "completed";

export interface LearningItem {
  name: string;
  status: LearningStatus;
}

export interface ContactMethod {
  type: "email" | "phone" | "location" | "github";
  label: string;
  value: string;
  href?: string;
}

export interface Stat {
  label: string;
  value: string;
  numeric?: number;
}
