// Define the structure for each work experience entry
export type WorkExperienceType = {
    company: string;
    link: string;
    badges: string[]; // Assuming badges is an array of strings
    title: string;
    logo: any; // Replace 'any' with the specific type if you have one for logos
    start: string;
    end: string;
    description: string[]; // Since description is an array of strings
  };

  // Define the structure for the entire resume data
export type ResumeDataType = {
    name: string;
    initials: string;
    location: string;
    locationLink: string;
    about: string;
    summary: string;
    avatarUrl: string;
    personalWebsiteUrl: string;
    contact: {
      email: string;
      tel: string;
      social: Array<{
        name: string;
        url: string;
        icon: any; // Replace 'any' with the specific type if you have one for icons
      }>;
    };
    education: Array<{
      school: string;
      degree: string;
      start: string;
      end: string;
    }>;
    work: WorkExperienceType[]; // Array of work experience entries
    skills: string[];
    projects: ProjectType[]; // Ensure this line is present
  };

// Define the structure for each project entry
export type ProjectType = {
  title: string;
  techStack: string[]; // Assuming techStack is an array of strings
  description: string;
  logo?: any; // Optional property, replace 'any' with the specific type for logos
  link?: { // Optional property
    label: string;
    href: string;
  };
};

  
