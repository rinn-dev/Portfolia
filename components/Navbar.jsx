import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="flex justify-between p-6 md:p-8 items-center shadow-rounded">
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
  );
};

export default Navbar;
