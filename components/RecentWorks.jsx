import React from "react";
import ProjectCard from "@components/Cards/ProjectCard";

const RecentWorks = ({projects}) => {
  return (
    <div
      className={`min-h-screen flex items-center px-8 xl:px-16 py-12 lg:py-20`}
      id="recent-works"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 lg:gap-y-8 w-full">
        <div className="block md:hidden col-span-1">
          <RecentWorksTitle />
        </div>
        <ProjectCard data={projects[0]} />
        <ProjectCard data={projects[1]} />
        <div className="hidden md:flex col-span-2 justify-center">
          <RecentWorksTitle />
        </div>
        <ProjectCard data={projects[2]} />
        <ProjectCard data={projects[3]} />
      </div>
    </div>
  );
};

const RecentWorksTitle = () => (
  <h3 className="text-3xl text-rinn-text-primary md:text-2xl 2xl:text-3xl font-bold capitalize font-title fancy-font tracking-wide text-center lg:rotate-90">
    <span className="hidden md:inline-block">Cool&nbsp;&nbsp;&nbsp;</span>Recent&nbsp;&nbsp;<span className="gradient-text from-[#5f99ff] to-[#53db67]">Works</span>
  </h3>
);

export default RecentWorks;
