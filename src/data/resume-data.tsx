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
    "Data Analyst | GNSS Engineer | Expert in Satellite Navigation and Data Science",
  summary:
    "As a Data Analyst specializing in GNSS and mathematical modeling, I excel at converting complex data into actionable insights. Proficient in Python, I leverage powerful libraries to analyse, visualise, and interpret large datasets. I am driven by a problem-solving mindset and strong analytical skills to support data-driven decision-making and strategy development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "lukehowlett97@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/LukeCHC",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/luke-howlett97/",
        icon: LinkedInIcon,
      },
    ],
    tel: ""
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
      link: "https://ichcgnss.co.uk/",
      badges: [""],
      title: "",
      logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description:[
        "Lead Member of a Small R&D Team: Responsible for a variety of tasks, demonstrating flexibility and efficiency in achieving objectives.",
        "Data Engineering and System Deployment: Designed, built, automated and deployed sophisticated data pipelines and systems. significantly improving efficiency and optimizing processes.",
        "Comprehensive Data and Scientific Analysis: Utilised statistical analysis and machine learning techniques to model and interpret GNSS data. Proficient in applying linear algebra and coordinate transformations to understand satellite dynamics",
        "Data visualisation and Reporting: Developed and presented interactive dashboards and visualisations in both python and javascript to stakeholders. Showcasing real-time data monitoring and valuable insights into GNSS data.", 
        "Professional Development and Industry Engagement: Participated in international business trips, conferences, and expos across Europe, building industry connections and developing business relationships. Collaborated on joint projects with other leading companies and academic institutions, including Imperial College and NASA.",
    ]
      }
    
  ],
  projects: [
    {
      title: "Real-Time Satellite Tracker",
      techStack: [
        "Work Project",
        "Pandas",
        "Streamlit",
        "Kepler's Laws",
        "Coordinate Transformations",
      ],
      description: "GIS tool to visualise live satellite positions and ground reference stations.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "SV Elevation Calculator",
      techStack: ["Work Project", "Numpy", "Matrix Operations"],
      description:
        "Open source tool I optimised to calculate satellite elevation and azimuth.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Group Chat Dashboard",
      techStack: ["Personal Project", "Python", "Containerisation"],
      description:
        "Webapp showcasing visualisations and insights into my friend's groupchat, depoloyed on docker.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
  ],
} as const;
