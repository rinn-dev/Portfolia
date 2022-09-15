import Link from "next/link";
import React from "react";

const LongButton = ({ anchorId, title, icon }) => {
  return (
    <a
      href={anchorId}
      className="flex items-center justify-center bg-rinn-primary shadow-rounded w-full py-3 rounded-full font-main gap-2 hover:scale-[0.97] transition-all duration-300 ease-in-out cursor-pointer active:shadow-rounded-click"
    >
      <span className="text-rinn-text-primary">{icon}</span>
      <span className="text-rinn-text-primary text-sm tracking-widest">
        {title}
      </span>
    </a>
  );
};

export default LongButton;
