import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { reset, getPioneerNigerClass } from "../features/classSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionPioneer } from "../Dashboard";

const AllClassesPioneer = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
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
      // alert("you have classes");
    }
    if (isError) {
      toast.error(message);
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset]);
  // pioneer class data
  // pioneer class data
  const [classData, setClassData] = useState(["1", "2", "3"]);
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    // console.log(arr);
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
    const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
    const schSection = year1 + "/" + year2;
    // console.log(typeof schSection, schSection);
    dispatch(getPioneerNigerClass({ _id, schSection }));
    const pioneerClass = JSON.parse(localStorage.getItem("pioneerNigerClass"));
    const { arr } = pioneerClass;
    pioneerClass.pioneerClass && setClassData(arr);
  }, []);
  // console.log(classData);
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
          {classData ? (
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
                    <p style={{ fontFamily: "cursive" }}>{data}</p>
                  </div>
                  <hr />
                  <Link
                    to={`/allclassespioneer/${data}`}
                    className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                    style={{ fontFamily: "serif" }}
                    onClick={() => {
                      setClasses(data);
                      // console.log(classes);
                    }}
                  >
                    View <FaEye className="inline-block" />
                  </Link>
                </div>
              ))}
            </div>
          ) : (
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
