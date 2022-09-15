import Image from "next/image";
import React from "react";
import LongButton from "@components/Buttons/LongButton";
import { sidebarItems, socialNetworks } from "@constants/navigations";
import CircularButton from "./Buttons/CircularButton";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="min-h-full relative w-full flex justify-center items-center py-16">
      <button
        onClick={() => toggleSidebar((value) => !value)}
        className="xl:hidden absolute right-7 top-7 flex items-center justify-center bg-rinn-primary text-rinn-text-primary shadow-rounded rounded-full font-main hover:scale-[0.94] transition-all duration-300 ease-in-out cursor-pointer active:shadow-rounded-click w-[40px] h-[40px]"
      >
        <FaTimes className="text-lg" />
      </button>
      <div className="w-full px-8 flex flex-col items-center">
        <div className="mb-6 rounded-full overflow-hidden w-[190px] h-[190px] md:w-[230px] md:h-[230px] xl:w-[180px] xl:h-[180px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 border-2 border-rinn-border">
          <Image
            src="/images/rinn.png"
            width={230}
            height={230}
            alt="Fullstack Developer Htet Myat Linn"
          />
        </div>
        <h1 className="text-rinn-text-primary font-main text-xl md:text-3xl xl:text-xl font-medium tracking-widest mb-2">
          Htet Myat Linn
        </h1>
        <h2 className="mb-8 font-main text-sm md:text-base xl:text-sm tracking-widest text-rinn-text-primary">
          Fullstack Web Developer
        </h2>
        <ul className="w-full flex flex-col gap-y-3 md:gap-y-4 xl:gap-y-3">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <LongButton
                anchorId={item.anchorId}
                icon={item.icon}
                title={item.title}
              />
            </li>
          ))}
        </ul>
        <hr className="my-6 md:my-10 xl:my-6 w-full h-[2px] bg-rinn-shadow-dark border-none" />
        <ul className="w-full justify-center flex gap-x-4 mb-4 md:mb-6 xl:mb-4">
          {socialNetworks.map((item) => (
            <li key={item.id}>
              <CircularButton
                classes={`w-[45px] h-[45px] md:w-[50px] md:h-[50px] xl:w-[45px] xl:h-[45px]`}
                link={item.link}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
        <p className="text-xs md:text-sm xl:text-xs font-main tracking-widest text-rinn-text-primary">
          © 2022 All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
