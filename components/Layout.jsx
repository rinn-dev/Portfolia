import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col overflow-hidden bg-rinn-primary">
      <div className="hidden xl:block xl:w-[20%] h-screen">
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
