import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { Navbar, ThemeSettings } from "../components";
import { DashboardFractionPioneer } from "../Dashboard";

const SetupClassPioneer = () => {
  // my contexts
  // my contexts
  const {
    activeMenu,
    currentColor,
    setCurrentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
    setCurrentMode,
    preClass,
    setPreClass,
  } = useStateContext();
  // class data
  // class data
  const [classData, setClassData] = useState([
    {
      name: "JSS 1",
      edit: "Edit",
      link: "/setup-classPioneer/generalclass/jss1",
    },
    {
      name: "JSS 2",
      edit: "Edit",
      link: "/setup-classPioneer/generalclass/jss2",
    },
    {
      name: "JSS 3",
      edit: "Edit",
      link: "/generalclass/jss3",
    },
    {
      name: "SSS 1",
      edit: "Edit",
      link: "/setup-classPioneer/generalclass/sss1",
    },
    {
      name: "SSS 2",
      edit: "Edit",
      link: "/setup-classPioneer/generalclass/sss2",
    },
    {
      name: "SSS 3",
      edit: "Edit",
      link: "/setup-classPioneer/generalclass/sss3",
    },
  ]);
  return (
    <div
      className={currentMode === "Dark" ? "dark" : ""}
      style={{ height: "max-content", minHeight: "100vh" }}
    >
      <div className="flex min-h-screen h-fit  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFractionPioneer
          activeMenu={activeMenu}
          onClick={() => setThemeSettings(true)}
        />
        {themeSettings && <ThemeSettings />}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg w-full min-h-screen h-fit ${
            activeMenu ? "md:ml-0" : "flex-2"
          }`}
        >
          <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div
            className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around"
            style={{ minHeight: "70vh" }}
          >
            {classData.map((data, index) => (
              <div
                className="min-h-fit h-40 w-1/4 bg-white rounded-xl dark:bg-gray-50 ml-5 shadow-xl"
                key={index}
              >
                <div className="w-full flex justify-around h-3/5 items-center">
                  <SiGoogleclassroom className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white" />
                  <p style={{ fontFamily: "cursive" }}>{data.name}</p>
                </div>
                <hr />
                <Link
                  to={data.link}
                  className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                  style={{ fontFamily: "serif" }}
                  onClick={() => setPreClass(data.name)}
                >
                  {data.edit} <GrEdit className="inline-block" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupClassPioneer;
