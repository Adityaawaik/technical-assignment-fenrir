import React from "react";

const Header = () => {
  return (
    <header className="flex items-center gap-4 p-4">
      <div className="company-logo">
        <div className="company-logo-outer  w-14 h-14 bg-[#0CC8A8] rounded-[50%] flex justify-center items-center">
          <div className="company-logo-inner w-6 h-6 bg-white rounded-[50%] "></div>
        </div>
      </div>
      <h1 className={`text-2xl font-semibold text-white`}>aps</h1>
    </header>
  );
};

export default Header;
