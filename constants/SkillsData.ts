import { IconType } from "react-icons";
import { DiReact, DiMongodb, DiSass, DiJavascript1 } from "react-icons/di";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";

export interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

export const SkillsData: Skill[] = [
  {
    icon: DiReact,
    name: "ReactJs",
    color: "#53c1de",
  },
  {
    icon: SiNodedotjs,
    name: "NodeJS",
    color: "#4caf50",
  },
  {
    icon: DiMongodb,
    name: "MongoDB",
    color: "#4caf50",
  },
  {
    icon: FaBootstrap,
    name: "Bootstrap",
    color: "#673ab7",
  },
  {
    icon: SiMui,
    name: "Mui",
    color: "#29b6f6",
  },
  {
    icon: SiNextdotjs,
    name: "NextJS",
    color: "#53c1de",
  },
  {
    icon: DiJavascript1,
    name: "JavaScript",
    color: "#ffd600",
  },
  {
    icon: SiRedux,
    name: "Redux",
    color: "#7e57c2",
  },
  {
    icon: SiExpress,
    name: "ExpressJS",
    color: "#555555",
  },
  {
    icon: DiSass,
    name: "Sass",
    color: "#f06292",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
    color: "#4caf50",
  },
  {
    icon: AiFillHtml5,
    name: "HTML5",
    color: "#fa6700",
  },
  {
    icon: FaCss3Alt,
    name: "CSS3",
    color: "#039be5",
  },
  {
    icon: BsGit,
    name: "Git",
    color: "#f4511e",
  },
  {
    icon: BsGithub,
    name: "GitHub",
    color: "#c9d1d9",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    color: "#53c1de",
  },
  {
    icon: SiNetlify,
    name: "Netlify",
    color: "#31b5ba",
  },
];
