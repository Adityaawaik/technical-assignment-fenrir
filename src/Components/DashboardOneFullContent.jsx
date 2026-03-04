import React from "react";
import Sidebar from "./Dashboard1/Sidebar";
import MainContentHeader from "./Dashboard1/MainContentHeader";

const DashboardOneFullContent = () => {
  return (
    <>
      <div className="dashboard flex bg-gray-50 max-[1200px]:hidden">
        <Sidebar />
        <MainContentHeader />
      </div>
      <div className="dashboard flex flex-col bg-gray-50 min-[1201px]:hidden">
        <Sidebar />
        <MainContentHeader />
      </div>
    </>
  );
};

export default DashboardOneFullContent;
