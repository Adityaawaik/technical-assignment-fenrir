import React from "react";
import { RxGlobe2 } from "react-icons/rx";
import { TbSitemapFilled } from "react-icons/tb";
import { GrTest } from "react-icons/gr";
import { LuBookOpenCheck } from "react-icons/lu";
import { HiOutlineDocumentReport } from "react-icons/hi";
import ScanningTypeDetails from "./ScanningTypeDetails";

const ScanningSteps = () => {
  return (
    <div className="flex flex-col gap-6 min-w-175">
      <div className="flex items-center gap-10 justify-around">
        <Step icon={<RxGlobe2 />} label="Spidering" active />
        <Step icon={<TbSitemapFilled />} label="Mapping" />
        <Step icon={<GrTest />} label="Testing" />
        <Step icon={<LuBookOpenCheck />} label="Validation" />
        <Step icon={<HiOutlineDocumentReport />} label="Reports" />
      </div>

      <ScanningTypeDetails />
    </div>
  );
};

const Step = ({ icon, label, active }) => {
  return (
    <div className="flex flex-col items-center min-w-25">
      <div
        className={`flex justify-center items-center w-15 h-15 rounded-full 
        ${
          active
            ? "bg-teal-600 text-white"
            : "border border-gray-300 text-gray-400"
        }`}
      >
        {icon}
      </div>
      <p className="mt-2 text-sm whitespace-nowrap">{label}</p>
    </div>
  );
};

export default ScanningSteps;
