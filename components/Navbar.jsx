import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="min-h-[78px]">
      <nav className="flex justify-between p-6 px-8 md:p-8 items-center border-b-2 border-rinn-border fixed w-full min-h-[78px] top-0 left-0 bg-rinn-primary z-10">
      <h1 className="text-xl md:text-2xl font-main tracking-widest text-rinn-text-primary font-medium">
        Rinn
      </h1>
      <button
        className="cursor-pointer"
        onClick={() => toggleSidebar((value) => !value)}
      >
        <RiMenu2Fill className="text-rinn-text-primary text-2xl md:text-3xl" />
      </button>
    </nav>
    </div>
  );
};

export default Navbar;
