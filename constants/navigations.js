import { BsPersonCircle, BsInfoCircle } from "react-icons/bs";
import { BiCodeBlock, BiGitBranch } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

export const sidebarItems = [
  {
    id: 1,
    title: "Home",
    icon: <BsPersonCircle />,
    anchorId: "#home",
  },
  {
    id: 2,
    title: "About",
    icon: <BsInfoCircle />,
    anchorId: "#rinn",
  },
  {
    id: 3,
    title: "Recent Works",
    icon: <BiGitBranch />,
    anchorId: "#recent-works",
  },
  {
    id: 4,
    title: "Services",
    icon: <BiCodeBlock />,
    anchorId: "#services",
  },
  {
    id: 5,
    title: "Contact Me",
    icon: <MdConnectWithoutContact />,
    anchorId: "#contact",
  },
];

export const socialNetworks = [
  {
    id: 1,
    link: "https://www.facebook.com/thegod.rin/",
    icon: <FaFacebookF size={18} color="#14a1f9" />,
  },
  {
    id: 2,
    link: "https://github.com/rinn-dev",
    icon: <FaGithub size={18} color="#ffffff" />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/htet-myat-rinn/",
    icon: <FaLinkedin size={18} color="#0a66c2" />,
  },
];
