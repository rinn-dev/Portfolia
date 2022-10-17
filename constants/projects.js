import Image from "next/image";
import React from "react";

export const projects = [
  {
    id: 1,
    url: "https://harness.digitalstacks.net/",
    image: (
      <Image
        className="top-0 w-full h-full left-0"
        src={"/images/harness.png"}
        layout="fill"
        alt="Harness"
      />
    ),
    technologies: "Gatsby Js, Strapi Headless",
    title: "Harness Microsite",
  },
  {
    id: 2,
    url: "https://senpai-anime.vercel.app/",
    image: (
      <Image
        className="top-0 w-full h-full left-0"
        src={"/images/senpai.png"}
        layout="fill"
        alt="Senpai Anime Website"
      />
    ),
    technologies: "Next Js, Chakra UI",
    title: "Senpai Anime",
  },
  {
    id: 3,
    url: "https://acumeninternationalcollege.vercel.app/",
    image: (
      <Image
        className="top-0 w-full h-full left-0"
        src={"/images/ACU.png"}
        layout="fill"
        alt="Acumen Internation College"
      />
    ),
    technologies: "Next Js, Strapi Headless",
    title: "Acumen Internation College",
  },
  {
    id: 4,
    url: "https://dxable.com/",
    image: (
      <Image
        className="top-0 w-full h-full left-0"
        src={"/images/dxable.png"}
        layout="fill"
        alt="Dxable.com"
      />
    ),
    technologies: "Gatsby Js, Sanity Headless",
    title: "Harness Microsite",
  },
];
