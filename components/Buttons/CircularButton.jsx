import React from "react";

const CircularButton = ({ classes, icon, link }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className={`flex items-center justify-center bg-rinn-primary border-2 border-rinn-border rounded-full font-main hover:scale-[0.94] transition-all duration-300 ease-in-out cursor-pointer ${classes}`}
    >
      <span className="text-rinn-text-primary">{icon}</span>
    </a>
  );
};

export default CircularButton;
