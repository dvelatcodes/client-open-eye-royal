import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Dashboard = () => {
  // use a useEffect to check authentication via cookie storage.
  const { activeMenu, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <DashboardFraction1
        activeMenu={activeMenu}
        onClick={() => setThemeSettings(true)}
      />
      <DashboardFraction2 activeMenu={activeMenu} />
    </div>
  );
};

export const DashboardFraction1 = ({ activeMenu, onClick }) => {
  const { currentColor } = useStateContext();
  return (
    <>
      <div className="absolute right-28 bottom-4">
        <div className="fixed bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              onClick={onClick}
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </div>
      {activeMenu ? (
        <div className="relative w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
    </>
  );
};

const DashboardFraction2 = ({ activeMenu }) => {
  return (
    <>
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen w-full${
          activeMenu ? "md:ml-0" : "flex-2"
        }`}
      >
        <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
