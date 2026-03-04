import React, { useContext } from "react";
import WebContext from "../../Store/WebContext";

const ScanResult = () => {
  const progress = 100;

  const { mode } = useContext(WebContext);

  return (
    <div className="">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="min-w-300 bg-white rounded-md shadow-sm">
          <div
            className={`flex  px-6 py-3 border-b text-gray-400 font-medium ${
              mode ? "bg-black" : "bg-white"
            }`}
          >
            <div className="flex-1 min-w-12.5">Scan Name</div>
            <div className="flex-1 min-w-30">Type</div>
            <div className="flex-1 min-w-30">Status</div>
            <div className="flex-1 min-w-62.5">Progress</div>
            <div className="flex-1 min-w-62.5">Vulnerability</div>
            <div className="flex-1 min-w-30">Last Scan</div>
          </div>

          <div>
            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-md">
                  Completed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md">
                  Schedule
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md">
                  Schedule
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-teal-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {progress}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex  gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                4 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-md">
                  Failed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${10}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {10}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex  gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                3 days ago
              </div>
            </div>

            <div
              className={`flex px-6 py-4  items-center ${
                mode ? "bg-black text-white" : "bg-white"
              }`}
            >
              <div className="flex-1 min-w-30">Web App Servers</div>
              <div className="flex-1 min-w-30">Greybox</div>
              <div className="flex-1 min-w-30">
                <span className="px-3 py-1 bg-red-100 text-red-600 rounded-md">
                  Failed
                </span>
              </div>

              <div className="flex-1 min-w-65 flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-red-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${10}%` }}
                  ></div>
                </div>
                <p
                  className={`text-sm mt-1  mr-4 ${
                    mode ? "text-white" : "text-black"
                  }`}
                >
                  {10}%
                </p>
              </div>

              <div className="flex-1 min-w-62.5 flex  gap-2">
                <div className="bg-red-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  5
                </div>
                <div className="bg-orange-400 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  12
                </div>
                <div className="bg-yellow-500 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  23
                </div>
                <div className="bg-green-600 text-white h-8 w-8 flex justify-center items-center rounded-md text-sm">
                  18
                </div>
              </div>

              <div
                className={`flex-1 min-w-30 text-gray-600  ${
                  mode ? "text-white" : "text-black"
                }`}
              >
                3 days ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanResult;
