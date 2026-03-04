import React, { useContext } from "react";

import WebContext from "../../Store/WebContext";

const ScanActiveLog = () => {
  const { isScanningDetails, setIsScanningDetails, mode } =
    useContext(WebContext);

  return (
    <div className="scan-active-log flex justify-center rounded-lg ">
      <div
        className={`scan-active-header w-[95%] rounded-lg p-2 flex gap-4 ${
          mode
            ? "bg-black text-white shadow-[0px_0px_3px_0px_white] "
            : " bg-white shadow-[0px_0px_1px_0px_black]"
        } `}
      >
        <h2
          onClick={() => setIsScanningDetails("Active Log")}
          className={`${
            isScanningDetails === "Active Log" ? "text-teal-400 underline" : ""
          }`}
        >
          Active Log
        </h2>
        <h2
          onClick={() => setIsScanningDetails("Verification Loops")}
          className={`${
            isScanningDetails === "Verification Loops"
              ? "text-teal-400 underline"
              : ""
          }`}
        >
          Verification Loops
        </h2>
      </div>
    </div>
  );
};

export default ScanActiveLog;
