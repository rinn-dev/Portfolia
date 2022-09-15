import Link from "next/link";
import React from "react";

const LongButton = ({ anchorId, title, icon }) => {
  return (
    <a
      href={anchorId}
      className="max-w-[500px] border-2 border-rinn-border mx-auto flex items-center justify-center bg-rinn-primary w-full py-[10px] rounded-full font-main gap-2 hover:scale-[0.97] transition-all duration-300 ease-in-out cursor-pointer active:shadow-rounded-click"
    >
      <span className="text-rinn-text-primary">{icon}</span>
      <span className="text-rinn-text-primary text-sm md:text-base xl:text-sm tracking-widest">
        {title}
      </span>
    </a>
  );
};

export default LongButton;
