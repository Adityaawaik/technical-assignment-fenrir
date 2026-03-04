import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { FiColumns } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import WebContext from "../../Store/WebContext";

const UserSearchContent = () => {
  const { mode } = useContext(WebContext); // true = dark

  return (
    <div
      className={`flex justify-center items-center ${
        mode ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`p-4 flex flex-col lg:flex-row items-center gap-4 px-4 w-[99%] ${
          mode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Search Input */}
        <div
          className={`flex items-center gap-2 w-full lg:w-[80%] p-2 rounded-md border ${
            mode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <CiSearch
            className={`text-lg ${mode ? "text-gray-400" : "text-gray-500"}`}
          />
          <input
            className={`w-full outline-none bg-transparent ${
              mode ? "text-white placeholder-gray-400" : "text-black"
            }`}
            type="text"
            placeholder="Search scans by name"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center justify-between w-full lg:w-[40%] max-[1000px]:justify-start">
          {/* Filter Button */}
          <button
            className={`flex-1 sm:flex-none p-2 flex items-center justify-center gap-2 rounded-md transition text-[2vmin] max-[600px]:text-[3vmin] ${
              mode
                ? "border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800"
                : "border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <IoFilterOutline />
            Filter
          </button>

          {/* Column Button */}
          <button
            className={`flex-1 sm:flex-none p-2 flex items-center justify-center gap-2 rounded-md transition text-[2vmin] max-[600px]:text-[3vmin] ${
              mode
                ? "border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800"
                : "border border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <FiColumns />
            Column
          </button>

          {/* New Scan Button */}
          <button className="flex-1 sm:flex-none p-2 bg-teal-600 flex items-center justify-center gap-2 rounded-md text-white hover:bg-teal-700 transition text-[2vmin] max-[600px]:text-[3vmin]">
            <IoMdAdd />
            New scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSearchContent;
