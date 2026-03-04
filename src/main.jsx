import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import WebLogic from "./Store/WebLogic.jsx";
import DashboardOneFullContent from "./Components/DashboardOneFullContent.jsx";
import DashboardTwoFullContent from "./Components/DashboardTwoFullContent.jsx";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "dashboard", element: <DashboardOneFullContent /> },
  { path: "scans", element: <DashboardTwoFullContent /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebLogic>
      <RouterProvider router={router} />
    </WebLogic>
  </StrictMode>
);
