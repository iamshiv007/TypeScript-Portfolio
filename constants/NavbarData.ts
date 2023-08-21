import { AiTwotoneHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { GiRailRoad } from "react-icons/gi";
import { CgClapperBoard } from "react-icons/cg";
import { BsPenFill } from "react-icons/bs";
import { IoMdAppstore } from "react-icons/io";
import { IconType } from "react-icons";

export interface Navbar {
  name: string;
  link: string;
  icon: IconType;
}

export const NavbarData: Navbar[] = [
  {
    name: "Home",
    link: "#home",
    icon: AiTwotoneHome,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: FaLaptopCode,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: CgClapperBoard,
  },
  {
    name: "Blogs",
    link: "#blogs",
    icon: BsPenFill,
  },
  {
    name: "My Journey",
    link: "#myJourney",
    icon: GiRailRoad,
  },
  {
    name: "apps",
    link: "#apps",
    icon: IoMdAppstore,
  },
];
