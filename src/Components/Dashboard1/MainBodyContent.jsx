import React from "react";
import OwnerProjectsInfo from "./OwnerProjectsInfo";
import UserSearchContent from "./UserSearchContent";
import ScanResult from "./ScanResult";

const MainBodyContent = () => {
  return (
    <div>
      <OwnerProjectsInfo />
      <UserSearchContent />
      <ScanResult />
    </div>
  );
};

export default MainBodyContent;
