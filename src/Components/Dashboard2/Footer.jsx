import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between  p-4 bg-[#80808012] max-[900px]:flex-col">
      <div className="flex items-center gap-8 max-[900px]:justify-center max-[500px]:flex-col max-[500px]:gap-2 max-[500px]:block ">
        <div className=" flex gap-2 items-center ml-4 max-[500px]:ml-0">
          <p className="w-2 h-2 rounded-[50%] bg-gray-400"></p>
          <p className="text-gray-400">Sub-Agent: 0</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="w-2 h-2 rounded-[50%] bg-gray-400"></p>
          <p className="text-gray-400">Parallel Execution: 2</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="w-2 h-2 rounded-[50%] bg-gray-400"></p>
          <p className="text-gray-400">Opertaions: 1</p>
        </div>
      </div>

      <div className="flex items-center gap-8 max-[900px]:justify-center mt-4 max-[500px]:block">
        <div className=" flex gap-2 items-center ml-4 max-[500px]:ml-0">
          <p className="text-red-400">Critical: 0</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-orange-400">High: 0</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-yellow-400">Medium: 0</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p className="text-green-400">Low: 0</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
