export interface Link {
  id: number;
  name: string;
  icon: string;
  link: string;
}

export interface TechUsed {
  skills_id: {
    id: number;
    name: string;
  };
}

export interface Responsibility {
  id: number;
  description: string;
}

export interface WorkExperience {
  resume_work_experience_id: {
    id: number;
    company: string;
    start_date: string;
    end_date: string | null;
    website: string;
    tech_used: TechUsed[];
    responsibilities: Responsibility[];
    title: string;
    location: string;
    description: string;
  };
}

export interface Feature {
  id: number;
  resume_project_features_id: {
    description: string;
  };
}

export interface Project {
  resume_projects_id: {
    id: number;
    title: string;
    date: string;
    website: string;
    image: string;
    features: Feature[];
  };
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  resume_skills_id: {
    id: number;
    category: string;
    skills: Skill[];
  };
}

export interface Education {
  resume_education_id: {
    id: number;
    degree: string;
    institution: string;
    location: string;
    start_date: string;
    end_date: string;
    score: string;
    focus: string;
  };
}

export interface Certificate {
  resume_certificates_id: {
    id: number;
    title: string;
    organization: string;
    date: string;
    link: string;
  };
}

export interface Award {
  resume_awards_id: {
    id: number;
    title: string;
    organization: string;
    description: string;
    link: string;
    date: string;
  };
}

export interface Resume {
  id: number;
  name: string;
  title: string;
  summary: string;
  links: Link[];
  work_experience: WorkExperience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  certificates: Certificate[];
  awards: Award[];
  location: string;
  profile_image: string;
}

export interface Schema {
  resumes: Resume[];
}
