import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

import { ResumeDataType, ProjectType } from './resume-data.types';

export const RESUME_DATA: ResumeDataType = {

  name: "Luke Howlett",
  initials: "LH",
  location: "Norwich, UK",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Data Analyst with a satellite navigation background.",
  summary:
    "As a Data Analyst with a robust understanding of GNSS and mathematical modelling, I excel in transforming complex data into actionable insights. My expertise is in utilizing Python and its powerful libraries to analyse, visualise, and interpret large datasets. I bring a problem-solving mindset and analytical prowess to drive data-driven decisions and strategies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "lukehowlett97@gmail.com",
    tel: "+4811111111",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/LukeHowlett97",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of East Anglia",
      degree: "Bachelor's Degree in Mathematics",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "CHC Nav",
      link: "https://chcnav.com",
      badges: ["In-Office"],
      title: "GNSS Engineer/ Data Analyst",
      logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description:[
        "Lead Member of a Small R&D Team in Satellite Navigation: Spearheaded multiple roles, demonstrating exceptional adaptability and expertise in handling complex projects under the satellite navigation domain",
        "Advanced Data Management and Visualization: Developed and managed extensive data pipelines encompassing data retrieval, formatting, processing, analysis, visualization, and automation. Specialized in crafting presentation-worthy visualizations and interactive dashboards for insghtful data exploration.",
        "Scientific Modeling and Mathematical Analysis: Proficient in modeling intricate physical phenomena, including satellite orbits and atmospheric effects on electromagnetic waves. Applied advanced mathematics to perform precise coordinate transformations and matrix calculations, leveraging my strong mathematical background.", 
        "Professional Development and Industry Engagement: Actively participated in international business trips, conferences, and expos across Europe, fostering industry connections and staying abreast of emerging trends. Collaborated on joint projects with other leading companies and academic institutions, including Imperial College and NASA, to enhance project outcomes and promote knowledge exchange.",
    ]
      }
    
  ],
  skills: [
    "Python",
    "Pandas",
    "SQL",
    "Javascript",
    "HTML/PHP/CSS",
  ],
  projects: [
    {
      title: "Sky Map",
      techStack: [
        "Work Project",
        "GNSS",
        "Python",
        "Pandas",
        "Streamlit",
        "Coordinate Transformations",
      ],
      description: "Downloads GPS broadcast ephemeris and plots satellite positions",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Bla Bla",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "I haven't decided what I am putting here yet",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Group Chat Dashboard",
      techStack: ["Personal Project", "Python", ""],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
