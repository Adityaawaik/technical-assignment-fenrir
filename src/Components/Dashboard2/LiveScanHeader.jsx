import React, { useContext } from "react";
import { LuClock12 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import WebContext from "../../Store/WebContext";

const LiveScanHeader = () => {
  const { mode } = useContext(WebContext);
  return (
    <header
      className={`flex justify-center items-center   mb-4 
      }`}
    >
      <div
        className={`w-[95%] flex justify-between rounded-lg mt-4   ${
          mode
            ? "bg-black text-white font-bold shadow-[0px_0px_3px_0px_white] "
            : " bg-gray-300 "
        }`}
      >
        <div className="flex items-center max-[450px]:flex-col">
          <div className="flex items-center gap-2 p-4">
            <div className="green-dot w-2 h-2 bg-teal-500 rounded-[50%]"></div>
            <p>Live Scan Console</p>
          </div>
          <div className="running-section">
            <p className="flex items-center gap-1 p-1 bg-gray-200 w-30 rounded-2xl justify-center">
              <LuClock12 /> Running
            </p>
          </div>
        </div>
        <div className="btns flex gap-4 mr-8">
          <button>
            <IoIosArrowDown />
          </button>
          <button>
            <IoMdClose />
          </button>
        </div>
      </div>
    </header>
  );
};

export default LiveScanHeader;
