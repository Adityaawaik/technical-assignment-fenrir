import React, { useContext } from "react";
import LiveScanHeader from "./LiveScanHeader";
import ScanActiveLog from "./ScanActiveLog";
import WebContext from "../../Store/WebContext";
import AcitveLogContent from "./AcitveLogContent";
import VerificationLoops from "./VerificationLoops";
import FindingLog from "./FindingLog";
import Footer from "./Footer";

const LiveScan = () => {
  const { isScanningDetails, mode } = useContext(WebContext);
  return (
    <div
      className={`live-scan-content  ${mode ? "bg-black" : "bg-[#80808012]"}`}
    >
      <LiveScanHeader />
      <ScanActiveLog />
      <div className=" flex justify-center rounded-lg bg-[#80808012] max-[800px]:flex-col ">
        <div className="scan-active-header mt-4 mb-4 w-[50%] bg-white shadow-[0px_0px_1px_0px_black] rounded-lg  flex gap-4 ml-4 mr-4 max-[800px]:w-[95%] ">
          {isScanningDetails === "Active Log" ? (
            <AcitveLogContent />
          ) : (
            <VerificationLoops />
          )}
        </div>

        <FindingLog />
      </div>
      <Footer />
    </div>
  );
};

export default LiveScan;
