import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";

const AllClassesAdmin = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();
  const [classData, setClassData] = useState("");
  useEffect(() => {
    const data = localStorage.getItem("newClass");
    const parsedClassData = JSON.parse(data);
    parsedClassData && setClassData(parsedClassData);
  }, []);
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
          {classData || (
            <div className="relative top-12 m-auto w-fit">
              No Class Yet, Please Create Class
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllClassesAdmin;
