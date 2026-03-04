import React, { createContext } from "react";

const defaultContext = {
  activeTab: "Dashboard",
  setActiveTab: () => {},
  toggleBurgerMenu: () => {},
  isBurgerMenuOpen: false,
  setIsBurgerMenuOpen: () => {},

  toggleIsScanningDetails: () => {},
  isScanningDetails: "Active Log",
  setIsScanningDetails: () => {},

  toggleMode: () => {},
  setMode: () => {},
  mode: false,
};

const WebContext = createContext(defaultContext);

export default WebContext;
