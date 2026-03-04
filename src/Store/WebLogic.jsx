import React, { useState } from "react";
import WebContext from "./WebContext";

const WebLogic = ({ children }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [isScanningDetails, setIsScanningDetails] = useState("Active Log");

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const toggleIsScanningDetails = () => {
    setIsScanningDetails(!isScanningDetails);
  };

  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <WebContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isBurgerMenuOpen,
        toggleBurgerMenu,
        setIsBurgerMenuOpen,

        toggleIsScanningDetails,
        isScanningDetails,
        setIsScanningDetails,

        toggleMode,
        setMode,
        mode,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

export default WebLogic;
