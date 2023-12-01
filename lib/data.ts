import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "Give a short description about project 1",
    link: "https://github.com/",
  },
  {
    title: "Project 2",
    description: "Give a short description about project 2",
    link: "https://github.com/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Company 2",
    logo: "/company-logo.png",
    position: "Company 2 Position",
    description: "Amet consetetur labore iriure ut voluptua sed no aliquam sed lorem dolores.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Amet consetetur labore iriure ut voluptua sed no aliquam sed lorem dolores.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Amet consetetur labore iriure ut voluptua sed no aliquam sed lorem dolores.",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Your Name",
  description:
    "👋 Hi, Amet consetetur labore iriure ut voluptua sed no aliquam sed lorem dolores..",
  yearsOfExperience: "x years",
  location: "Your Place",
  email: "johndoe@mail",
};

export const logoText = "@yourname";

export const marketingHeadlines = {
  mainHeadline: "This is the MAIN headline.",
  subHeadline: "Bottom. Sub. Headline.",
};

export const websiteMetadata = {
  title: "Your Name | Designation",
  description: "👋 Hey, Amet consetetur labore iriure ut voluptua sed no aliquam sed lorem dolores.",
};
