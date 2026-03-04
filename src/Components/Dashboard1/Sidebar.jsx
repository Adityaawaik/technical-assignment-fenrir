import React, { useContext } from "react";

import { MdDashboardCustomize } from "react-icons/md";
import { FaPenToSquare } from "react-icons/fa6";
import { BsFileBarGraph } from "react-icons/bs";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import WebContext from "../../Store/WebContext";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const {
    activeTab,
    setActiveTab,
    toggleBurgerMenu,
    setIsBurgerMenuOpen,
    isBurgerMenuOpen,
    mode,
  } = useContext(WebContext);
  console.log(isBurgerMenuOpen);

  const navigation = useNavigate();

  return (
    <div
      className={`side-content w-[20%] h-[9vh] min-[1200px]:min-h-[stretch]   border-r-2 border-gray-200 ${
        mode ? "bg-black" : "bg-white"
      } max-[1200px]:w-full`}
    >
      <header className="flex items-center gap-4 justify-between p-2 ">
        <div className="company-logo flex items-center gap-2">
          <div className="company-logo-outer  w-12 h-12 bg-[#0CC8A8] rounded-[50%] flex justify-center items-center">
            <div className="company-logo-inner w-5 h-5 bg-white rounded-[50%] "></div>
          </div>
          <h1 className={`text-2xl font-semibold text-teal-500`}>aps</h1>
        </div>
        <div className="menu-btn  items-center hidden max-[1200px]:flex">
          <button
            onClick={toggleBurgerMenu}
            className="text-3xl text-teal-500 font-semibold  cursor-pointer"
          >
            <IoMenu />
          </button>
        </div>
      </header>

      <div className="dashboard-side-content border-b border-gray-300 flex justify-center max-[1200px]:hidden ">
        <ul className="w-[80%]">
          <li
            onClick={() => {
              setActiveTab("Dashboard"), navigation("/dashboard");
            }}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-2 mb-2 ${
              activeTab === "Dashboard"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            } `}
          >
            <MdDashboardCustomize /> Dashboard
          </li>
          <li
            onClick={() => setActiveTab("Projects")}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Projects"
                ? "bg-[#0080803d] text-[#008080]"
                : "bg-white"
            }`}
          >
            <FaPenToSquare /> Projects
          </li>
          <li
            onClick={() => {
              setActiveTab("Scans");
              navigation("/scans");
            }}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Scans"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <BsFileBarGraph /> Scans
          </li>
          <li
            onClick={() => setActiveTab("Schedule")}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Schedule"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <IoCalendarClearOutline /> Schedule
          </li>
        </ul>
      </div>

      <div className="dashboard-side-content-2 max-[1200px]:hidden  flex justify-center">
        <ul className="w-[80%]">
          <li
            onClick={() => setActiveTab("Notification")}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Notification"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <CiBellOn /> Notification
          </li>
          <li
            onClick={() => setActiveTab("Settings")}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Settings"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <IoMdSettings /> Settings
          </li>
          <li
            onClick={() => setActiveTab("Support")}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ${
              activeTab === "Support"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <MdOutlineContactSupport /> Support
          </li>
        </ul>
      </div>

      <div
        className={`dashboard-side-content border-b border-gray-300 flex justify-center max- ${
          isBurgerMenuOpen ? "flex" : "hidden"
        }  bg-black `}
      >
        <ul className={`w-full z-1 ${mode ? "bg-black" : "bg-white"}`}>
          <li
            onClick={() => {
              setActiveTab("Dashboard"),
                setIsBurgerMenuOpen(false),
                navigation("/dashboard");
            }}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4   ml-4 mr-4 ${
              activeTab === "Dashboard"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <MdDashboardCustomize /> Dashboard
          </li>
          <li
            onClick={() => {
              setActiveTab("Projects"), setIsBurgerMenuOpen(false);
            }}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4  ml-4 mr-4  ${
              activeTab === "Projects"
                ? "bg-[#0080803d] text-[#008080]"
                : "bg-white"
            }`}
          >
            <FaPenToSquare /> Projects
          </li>
          <li
            onClick={() => {
              setActiveTab("Scans"),
                setIsBurgerMenuOpen(false),
                navigation("/scans");
            }}
            className={` flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4  ml-4 mr-4  ${
              activeTab === "Scans"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <BsFileBarGraph /> Scans
          </li>
          <li
            onClick={() => {
              setActiveTab("Schedule"), setIsBurgerMenuOpen(false);
            }}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4  ml-4 mr-4  ${
              activeTab === "Schedule"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <IoCalendarClearOutline /> Schedule
          </li>

          <li
            onClick={() => {
              setActiveTab("Notification"), setIsBurgerMenuOpen(false);
            }}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4  ml-4 mr-4  ${
              activeTab === "Notification"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <CiBellOn /> Notification
          </li>
          <li
            onClick={() => {
              setActiveTab("Settings"), setIsBurgerMenuOpen(false);
            }}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4   ml-4 mr-4 ${
              activeTab === "Settings"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <IoMdSettings /> Settings
          </li>
          <li
            onClick={() => {
              setActiveTab("Support"), setIsBurgerMenuOpen(false);
            }}
            className={`flex items-center gap-2  p-4 text-[2vmin] cursor-pointer rounded-[3rem] mt-4 mb-4 ml-4 mr-4 ${
              activeTab === "Support"
                ? "bg-[#0080803d]  text-[#008080]"
                : "bg-white"
            }`}
          >
            <MdOutlineContactSupport /> Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
