import { createDirectus, readItems, rest } from '@directus/sdk';

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
  profile: Profile[];
  skills: Skill[];
  work_experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  awards: Award[];
  certificates: Certificate[];
  languages: Language[];
};

// Initialize the Directus client
const directus = createDirectus<Collections>(import.meta.env.DIRECTUS_URL)
  .with(rest({
    onRequest: (options) => ({
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${import.meta.env.DIRECTUS_TOKEN}`
      }
    })
  }));

// Helper functions to fetch data
export async function getProfile() {
  try {
    const profiles = await directus.request(readItems('profile'));
    return profiles[0];
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export async function getSkills() {
  try {
    return await directus.request(readItems('skills'));
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

export async function getWorkExperience() {
  try {
    return await directus.request(readItems('work_experience', {
      sort: ['-start_date']
    }));
  } catch (error) {
    console.error('Error fetching work experience:', error);
    return [];
  }
}

export async function getProjects() {
  try {
    return await directus.request(readItems('projects', {
      sort: ['-date']
    }));
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getEducation() {
  try {
    return await directus.request(readItems('education', {
      sort: ['-end_date']
    }));
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
}

export async function getAwards() {
  try {
    return await directus.request(readItems('awards'));
  } catch (error) {
    console.error('Error fetching awards:', error);
    return [];
  }
}

export async function getCertificates() {
  try {
    return await directus.request(readItems('certificates', {
      sort: ['-date']
    }));
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return [];
  }
}

export async function getLanguages() {
  try {
    return await directus.request(readItems('languages'));
  } catch (error) {
    console.error('Error fetching languages:', error);
    return [];
  }
}