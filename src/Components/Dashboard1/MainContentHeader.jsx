import React, { useContext } from "react";
import { IoHomeOutline } from "react-icons/io5";
import MainBodyContent from "./MainBodyContent";
import WebContext from "../../Store/WebContext";
const MainContentHeader = () => {
  const { mode, toggleMode } = useContext(WebContext);
  return (
    <header className="w-[80%] max-[1200px]:w-full   ">
      <div
        className={`flex justify-between items-center p-4 shadow-[0px_0px_1px_0px_black] max-[700px]:flex-col ${
          mode ? "bg-black text-white" : ""
        }`}
      >
        <div className="main-header-content flex gap-4  max-[350px]:gap-[0.3rem]  max-[600px]:justify-center items-center">
          <p className="font-semibold flex items-center gap-4  ">
            Scan <IoHomeOutline />
          </p>
          <p>/ Private Asssets /</p>
          <p className="text-[#008080] font-semibold">New Scan </p>
        </div>

        <div className="btns items-center mb-2 flex gap-4 mt-4  max-[600px]:justify-center ">
          <button
            onClick={toggleMode}
            className="p-2 border cursor-pointer rounded-lg"
          >
            {mode ? "Light Mode" : "Dark Mode"}
          </button>
          <button className="p-2 border cursor-pointer rounded-lg">
            Export Report
          </button>

          <button className="p-2 rounded-lg cursor-pointer text-red-400 bg-red-200">
            Stop Scan
          </button>
        </div>
      </div>
      <MainBodyContent />
    </header>
  );
};

export default MainContentHeader;
