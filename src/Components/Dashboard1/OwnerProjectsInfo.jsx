import React, { useContext } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import SeverityStatus from "./SeverityStatus";
import WebContext from "../../Store/WebContext";

const OwnerProjectsInfo = () => {
  const { mode } = useContext(WebContext); // true = dark, false = light

  return (
    <div
      className={`owner-project-info p-4 border-b ${
        mode
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black border-gray-200"
      }`}
    >
      <div
        className="
          flex 
          flex-nowrap 
          items-center 
          gap-8 
          px-6 
          py-3
          overflow-x-auto
          whitespace-nowrap
        "
      >
        <p className="text-gray-400 shrink-0">
          Org : <b className="font-semibold">Project X</b>
        </p>

        <span className="text-gray-400 shrink-0">|</span>

        <p className="text-gray-400 shrink-0">
          Owner : <b className="font-semibold">Nammagiri</b>
        </p>

        <span className="text-gray-400 shrink-0">|</span>

        <p className="text-gray-400 shrink-0">
          Total Scans : <b className="font-semibold">100</b>
        </p>

        <span className="text-gray-400 shrink-0">|</span>

        <p className="text-gray-400 shrink-0">
          Scheduled : <b className="font-semibold">1000</b>
        </p>

        <span className="text-gray-400 shrink-0">|</span>

        <p className="text-gray-400 shrink-0">
          Rescans : <b className="font-semibold">100</b>
        </p>

        <span className="text-gray-400 shrink-0">|</span>

        <p className="text-gray-400 shrink-0">
          Failed Scans : <b className="font-semibold">100</b>
        </p>

        <p className="flex items-center gap-2 shrink-0 text-gray-400">
          <BsArrowRepeat className={mode ? "text-gray-500" : "text-gray-600"} />
          10 mins ago
        </p>
      </div>

      <SeverityStatus />
    </div>
  );
};

export default OwnerProjectsInfo;
