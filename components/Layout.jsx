import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, toggleSidebar] = useState(true);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      screen.availWidth < 1366 &&
      isSidebarOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <div className="flex flex-col xl:flex-row bg-rinn-primary">
      <div
        className={`overflow-y-auto xl:overflow-hidden shadow-[5px_0px_8px_0px_#2b2b2b]  items-start w-screen fixed top-0 bottom-0 left-0 xl:relative xl:translate-x-0 flex bg-rinn-primary xl:w-[22%] xl:max-h-screen ${
          !isSidebarOpen
            ? "-translate-x-full animate-slideOut"
            : "translage-x-0 animate-slideIn"
        }`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="xl:hidden w-full">
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
