import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import { reset, getPioneerNigerClass } from "../features/classSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ImPencil2 } from "react-icons/im";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Navbar, ThemeSettings } from "../components";
import { Button } from "../components";
import { DashboardFractionPioneer } from "../Dashboard";
import { icons } from "react-icons/lib";

const PioneerSingleArm = () => {
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
    classes,
    setClasses,
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
  // get default classes
  // get default classes
  const [classNum, setClassNum] = useState(null);
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    const { pioneerClass } = pioneerClasses;
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
    const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
    const schSection = year1 + "/" + year2;
    pioneerClass || dispatch(getPioneerNigerClass({ _id, schSection }));
    pioneerClass &&
      setClassNum(
        pioneerClass.filter((data) => data.classNaming.match(classes))
      );
  }, []);
  //   console.log(classNum);

  return (
    <div
      className={currentMode === "Dark" ? "dark" : ""}
      style={{ height: "max-content", minHeight: "100vh" }}
    >
      <div
        className="flex min-h-screen h-fit  bg-neutral-700 relative  dark:bg-main-dark-bg"
        // style={{ height: "150vh" }}
      >
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
          <p
            className="academic-title w-fit m-auto font-medium"
            style={{ color: currentMode === "Dark" ? "white" : "black" }}
          >
            Current Academic Session
          </p>
          <div className="student-year-container bg-main-bg w-fit m-auto top-2 shadow-md rounded-lg">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneerSingleArm;
