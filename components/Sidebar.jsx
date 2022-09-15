import Image from "next/image";
import React from "react";
import LongButton from "./LongButton";
import { BsInfoCircle, BsPersonCircle } from "react-icons/bs";
import { sidebarItems } from "@constants/navigations";

const Sidebar = () => {
  return (
    <div className="shadow-[5px_0px_8px_0px_#2b2b2b] w-full h-full flex justify-center items-center">
      <div className="w-full px-8 flex flex-col items-center">
        <div className="mb-6 rounded-full overflow-hidden w-[190px] h-[190px] shadow-rounded cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
          <Image src="/images/rinn.png" width={200} height={200} />
        </div>
        <h1 className="text-rinn-text-primary font-main text-xl font-medium tracking-widest mb-2">
          Htet Myat Linn
        </h1>
        <h2 className="mb-8 font-main text-sm tracking-widest text-rinn-text-primary">
          Fullstack Web Developer
        </h2>
        <ul className="w-full flex flex-col gap-y-3">
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
      </div>
    </div>
  );
};

export default Sidebar;
