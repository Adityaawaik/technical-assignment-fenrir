import React, { useContext } from "react";
import ScanningSteps from "./ScanningSteps";
import WebContext from "../../Store/WebContext";

const ScanProgress = () => {
  const { mode } = useContext(WebContext);
  return (
    <div
      className={`scan-progress-details flex flex-col  p-4  ${
        mode ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="flex max-[900px]:flex-col gap-6">
        <div
          className={`flex flex-col justify-center items-center min-w-30 h-30 rounded-full ${
            mode ? "bg-white" : "bg-black"
          }  text-teal-500`}
        >
          <p className="font-bold text-2xl sm:text-3xl">0%</p>
          <p className="text-sm sm:text-base">In progress</p>
        </div>

        <div className="w-full overflow-x-auto max-[900px]:overflow-x-auto">
          <ScanningSteps />
        </div>
      </div>
    </div>
  );
};

export default ScanProgress;
