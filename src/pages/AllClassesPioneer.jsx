import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { reset, getPioneerNigerClass } from "../features/classSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionPioneer } from "../Dashboard";

const AllClassesPioneer = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();
  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.class
  );
  const dispatch = useDispatch();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess) {
      alert("you have classes");
    }
    if (isError) {
      toast.error(message);
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset]);
  // pioneer class data
  // pioneer class data
  const [classData, setClassData] = useState("");
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
    const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
    const schSection = year1 + "/" + year2;
    // console.log(typeof schSection, schSection);
    dispatch(getPioneerNigerClass({ _id, schSection }));
    const pioneerClass = localStorage.getItem("pioneerNigerClass");
    pioneerClass && setClassData(pioneerClass);
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFractionPioneer
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

export default AllClassesPioneer;
