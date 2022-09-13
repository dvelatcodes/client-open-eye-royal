import React from "react";
import { Navbar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";

const SetTeachers = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFraction1
          activeMenu={activeMenu}
          onClick={() => setThemeSettings(true)}
        />
        {themeSettings && <ThemeSettings />}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg w-full min-h-screen ${
            activeMenu ? "md:ml-0" : "flex-2"
          }`}
        >
          <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div className="mt-12 md:w-800 sm:w-760 lg:w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SetTeachers;
