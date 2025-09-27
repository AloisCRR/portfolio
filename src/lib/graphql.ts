import { createDirectus, graphql, staticToken } from "@directus/sdk";
import type { Resume, Schema } from "../types/directus";

const directus = createDirectus<Schema>(import.meta.env.DIRECTUS_URL)
	.with(staticToken(import.meta.env.DIRECTUS_TOKEN))
	.with(graphql());

const getResumeQuery = `
query GetResume {
  resumes(filter: { id: { _eq: 1 } }) {
    id
    name
    title
    summary
    location
    profile_image
    links {
      id
      name
      icon
      link
    }
    work_experience {
      resume_work_experience_id {
        id
        company
        title
        location
        start_date
        end_date
        website
        tech_used {
          skills_id {
            id
            name
          }
        }
        responsibilities {
          id
          description
        }
      }
    }
    projects(sort: ["-resume_projects_id.date"]) {
      resume_projects_id {
        id
        title
        date
        website
        image
        features {
          id
          resume_project_features_id {
            description
          }
        }
      }
    }
    skills {
      resume_skills_id {
        id
        category
        skills {
          name
        }
      }
    }
    education {
      resume_education_id {
        id
        degree
        institution
        location
        start_date
        end_date
        score
        focus
      }
    }
    certificates {
      resume_certificates_id {
        id
        title
        organization
        date
        link
      }
    }
    awards {
      resume_awards_id {
        id
        title
        organization
        description
        link
        date
      }
    }
  }
}
`;

export async function getResumeData(): Promise<Resume | null> {
	try {
		const result = await directus.query<{ resumes: Resume[] }>(getResumeQuery);
		if (result && result.resumes && result.resumes.length > 0) {
			return result.resumes[0];
		}
		return null;
	} catch (error) {
		console.error("Error fetching resume data:", error);
		return null;
	}
}
