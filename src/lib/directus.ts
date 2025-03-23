import { createDirectus, readItems, readSingleton, rest, staticToken } from '@directus/sdk';

// Types for our Directus collections
export type Profile = {
  id: string;
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  profile_image?: string;
};

export type Skill = {
  id: string;
  category: string;
  skills: string[];
};

export type WorkExperience = {
  id: string;
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string | null;
  website: string;
  skills: string;
  responsibilities: string[];
};

export type Project = {
  id: string;
  title: string;
  date: string;
  website: string;
  features: string[];
  image?: string;
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  location: string;
  start_date: string;
  end_date: string;
  grade: string;
  focus: string;
};

export type Award = {
  id: string;
  title: string;
  organization: string;
  description: string;
  link: string;
  date: string;
};

export type Certificate = {
  id: string;
  title: string;
  organization: string;
  date: string;
  link: string;
};

export type Language = {
  id: string;
  name: string;
  level: string;
};

export type Collections = {
  portfolio_profile: Profile;
  portfolio_skills: Skill[];
  portfolio_work_experience: WorkExperience[];
  portfolio_projects: Project[];
  portfolio_education: Education[];
  portfolio_awards: Award[];
  portfolio_certificates: Certificate[];
  portfolio_languages: Language[];
};

// Initialize the Directus client
const directus = createDirectus<Collections>(import.meta.env.DIRECTUS_URL)
  .with(staticToken(import.meta.env.DIRECTUS_TOKEN))
  .with(rest());

// Helper functions to fetch data
export async function getProfile() {
  try {
    const profiles = await directus.request(readSingleton('portfolio_profile'));
    return profiles;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function getSkills() {
  try {
    return await directus.request(readItems('portfolio_skills'));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function getWorkExperience() {
  try {
    return await directus.request(readItems('portfolio_work_experience', {
      sort: ['-start_date']
    }));
  } catch (error) {
    console.error('Error fetching work experience:', error);
    return [];
  }
}

export async function getProjects() {
  try {
    return await directus.request(readItems('portfolio_projects', {
      sort: ['-date']
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getEducation() {
  try {
    return await directus.request(readItems('portfolio_education', {
      sort: ['-end_date']
    }));
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
}

export async function getAwards() {
  try {
    return await directus.request(readItems('portfolio_awards'));
  } catch (error) {
    console.error('Error fetching awards:', error);
    return [];
  }
}

export async function getCertificates() {
  try {
    return await directus.request(readItems('portfolio_certificates', {
      sort: ['-date']
    }));
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return [];
  }
}

export async function getLanguages() {
  try {
    return await directus.request(readItems('portfolio_languages'));
  } catch (error) {
    console.error('Error fetching languages:', error);
    return [];
  }
}