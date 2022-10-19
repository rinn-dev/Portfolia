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
        className={`z-20 overflow-y-auto xl:overflow-hidden border-2 border-rinn-border  items-start w-screen fixed xl:sticky top-0 bottom-0 left-0 xl:translate-x-0 flex bg-rinn-primary xl:w-[25%] xl:max-h-screen ${
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
