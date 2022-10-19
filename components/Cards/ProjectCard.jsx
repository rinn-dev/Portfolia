import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <a href={data.url} rel="noreferrer" target="_blank" className="group w-full max-w-[450px] md:max-w-none md:w-[325px] lg:w-[420px] 2xl:w-[530px] h-[250px] 2xl:h-[300px] mx-auto md:mx-0 lg:mx-auto block">
        <div className="relative w-full h-full flex items-end rounded-xl overflow-hidden group-hover:[&_img]:scale-[1.16] [&_img]:transition-all [&_img]:duration-500 [&_img]:ease-out">
          {data.image}
          <div className="relative w-full min-h-[80px] xl:min-h-[75px]">
            <div className="bg-rinn-primary opacity-[0.75] w-full h-full z-[2] absolute top-0 left-0 text-rinn-text-primary px-6 py-4">
              <p className="text-sm mb-1 opacity-80">{data.technologies}</p>
              <h4 className="text-base "> {data.title}</h4>
            </div>
          </div>
        </div>
    </a>
  );
};

export default ProjectCard;
