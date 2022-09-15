import React from "react";

const CircularButton = ({ classes, icon, link }) => {
  return (
    <a
      href={link}
      target={"_blank"}
      className={`flex items-center justify-center bg-rinn-primary shadow-rounded rounded-full font-main hover:scale-[0.94] transition-all duration-300 ease-in-out cursor-pointer active:shadow-rounded-click ${classes}`}
    >
      <span className="text-rinn-text-primary">{icon}</span>
    </a>
  );
};

export default CircularButton;
