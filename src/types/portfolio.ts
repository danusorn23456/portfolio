export interface Profile {
  name: string;
  age: number;
  location: string;
  description: string;
}

export interface Contact {
  phone: string;
  email: string;
  resume: string;
}

export interface ExperiencePeriod {
  start: string;
  end: string;
}

export interface Experience {
  company: string;
  role: string;
  period: ExperiencePeriod;
  overview: string;
  keyContributions: string[];
  techStack: string[];
  countsTowardYears?: boolean;
  workType?: string;
}

export interface Education {
  school: string;
  program: string;
  period?: {
    start?: string;
    end?: string;
  };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioData {
  profile: Profile;
  contact: Contact;
  main_skills: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
}
