import React from "react";
import Sidebar from "./Dashboard1/Sidebar";
import MainContentHeader2 from "./Dashboard2/MainContentHeader-2";

const DashboardTwoFullContent = () => {
  return (
    <>
      <div className="dashboard flex bg-gray-50 max-[1200px]:hidden">
        <Sidebar />
        <MainContentHeader2 />
      </div>
      <div className="dashboard flex flex-col bg-gray-50 min-[1201px]:hidden">
        <Sidebar />
        <MainContentHeader2 />
      </div>
    </>
  );
};

export default DashboardTwoFullContent;
