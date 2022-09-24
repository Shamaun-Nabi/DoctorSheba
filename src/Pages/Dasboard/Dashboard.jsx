import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashBoardNav from "./DashBoardNav";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  // console.log(sidebar);
  return (
    <>
      {/* Main warapper */}
      <div className="min-h-screen bg-slate-200">
        {/* Navbar */}
        <DashBoardNav setSidebar={setSidebar} sideBar={sidebar} />
        {/* Sidebar */}
        <Sidebar setSidebar={setSidebar} sideBar={sidebar} />
        {/* Sidebar END*/}

        {/* Main Content Area Start */}
        <div className="pt-8 pr-8 pl-8 lg:pl-80 ">
          <Outlet />
        </div>
        {/* Main Content End */}
      </div>
    </>
  );
}
