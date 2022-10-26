import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import { reset, getStudentForPioneerNow } from "../features/classSlice";
import { useNavigate } from "react-router-dom";
import { GiMaterialsScience } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { BiLeftArrow } from "react-icons/bi";
import { toast } from "react-toastify";
import { SiGoogleclassroom } from "react-icons/si";
import { Navbar, ThemeSettings } from "../components";
import { Button } from "../components";
import { DashboardFractionPioneer } from "../Dashboard";
import { icons } from "react-icons/lib";

const Customers = () => {
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
  const { isSuccess, isError, isLoading, message, studentForPioneer } =
    useSelector((state) => state.class);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const [showTimetable, setShowTimetable] = useState(null);
  const [showSubjects, setShowSubjects] = useState(null);
  const [showStudents, setShowStudents] = useState(null);
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && studentForPioneer) {
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [
    isSuccess,
    isError,
    isLoading,
    message,
    dispatch,
    reset,
    studentForPioneer,
  ]);

  useEffect(() => {
    localStorage.setItem("themeMode", currentMode);
  }, [currentMode]);
  // get timetable
  // get timetable
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const { _id } = user;
      dispatch(getStudentForPioneerNow({ _id }));
    }
    if (!user) {
      alert("Not-Authorized");
      navigate("/");
    }
  }, []);
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
          {studentForPioneer ? (
            <>
              {studentForPioneer && (
                <div
                  className="m-auto w-fit h-fit relative"
                  style={{ width: "fit-content" }}
                >
                  {studentForPioneer.map((data, index) => (
                    <div
                      className="h-fit pt-9 pb-9 w-fit pl-8 pr-8 bg-white rounded-xl dark:bg-gray-50 m-auto shadow-2xl top-20 relative"
                      key={index}
                    >
                      <div className="w-full flex justify-around items-center mb-6">
                        <SiGoogleclassroom
                          className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white mr-16"
                          style={{ background: currentColor }}
                        />
                        <p
                          style={{ fontFamily: "cursive", fontWeight: "bold" }}
                        >
                          {data.studentFirstName} {data.studentLastName}
                        </p>
                      </div>
                      <div className="w-full flex justify-around items-center mb-6">
                        <GiMaterialsScience className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white mr-24" />
                        <p style={{ fontFamily: "cursive" }}>
                          {data.studentClass}
                        </p>
                      </div>
                      <div className="w-full flex justify-around items-center">
                        <div
                          className="mr-14"
                          style={{ fontFamily: "cursive" }}
                        >
                          <GoArrowUp className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-green-400 dark:bg-black text-white inline-block" />
                        </div>
                        <p style={{ fontFamily: "cursive" }}>
                          {data.studentPhoneNumber}
                        </p>
                      </div>
                    </div>
                  ))}
                  <Link to="/pioneerschool">
                    <div
                      className="absolute flex justify-around items-center left-0 right-0 -bottom-44 m-auto h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-black font-semibold bg-green-200 hover:text-green-200 hover:bg-black"
                      style={{ fontFamily: "serif" }}
                      onClick={() => {
                        setValues(null);
                        setShowStudents(null);
                      }}
                    >
                      <BiLeftArrow className="absolute top-0 -left-24 right-0 bottom-0 m-auto w-fit" />
                      Go Back
                    </div>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="m-auto w-fit font-bold italic">
                You Don't Have any Student Yet, Please Wait for Students To
                Register
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
