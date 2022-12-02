import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionStudent } from "../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { GoArrowUp } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStudentSpecificClass, reset } from "../features/auth/authSlice";
import "./studentSpecificClass.scss";
import IsLoading from "../components/isLoading/IsLoading";

const StudentSpecificClass = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();
  // all schNames
  // all schNames
  const [schName, setSchName] = useState(null);
  // state initialization
  // state initialization
  const {
    isSuccess,
    isError,
    isLoading,
    message,
    studentSpecificClass,
    studentTimetable,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && studentSpecificClass) {
      setSchName(studentSpecificClass);
    }
    if (isError) {
      console.log("error");
    }
    dispatch(reset());
  }, [
    isSuccess,
    isError,
    isLoading,
    message,
    dispatch,
    reset,
    studentSpecificClass,
  ]);
  // studentName
  // studentName
  const [studentName, setStudentName] = useState(null);
  // get default classes
  // get default classes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (!user) {
      alert("Unauthorized, Please Sign-up or Login");
      navigate("/");
    }
    if (user) {
      if (user.pioneerId === "none") {
        //   dispatch(getAllPioneer());
        setSchName(null);
      }
      if (user.pioneerId !== "none") {
        const { pioneerId, studentClass } = user;
        dispatch(getStudentSpecificClass({ pioneerId, studentClass }));
      }
      const { studentFirstName } = user;
      setStudentName(studentFirstName);
    }
  }, []);
  return (
    <div className={currentMode === "Dark" ? "dark heads" : " heads"}>
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg subHead">
          {themeSettings ? (
            ""
          ) : (
            <DashboardFractionStudent
              activeMenu={activeMenu}
              onClick={() => setThemeSettings(true)}
            />
          )}
          {themeSettings && <ThemeSettings />}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg w-full min-h-screen ${
              activeMenu ? "md:ml-0" : "flex-2"
            }`}
          >
            <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
              {themeSettings ? "" : <Navbar name={studentName || ""} />}
            </div>
            {schName === null ? (
              <>
                <div className="m-auto w-fit font-bold italic noClassMessage">
                  You Don't Have a Class Yet, Please Click on Available Schools
                  for Screening
                </div>
              </>
            ) : (
              <>
                <div className="h-fit pt-9 pb-9 w-fit pl-8 pr-8 bg-white rounded-xl dark:bg-gray-50 m-auto shadow-2xl top-20 relative">
                  <div className="w-full flex justify-around items-center mb-6">
                    <SiGoogleclassroom
                      className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white mr-16"
                      style={{ background: currentColor }}
                    />
                    <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
                      {schName.classNaming}
                    </p>
                  </div>
                  <div className="w-full flex justify-around items-center mb-6">
                    <GiMaterialsScience className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white mr-5" />
                    <p style={{ fontFamily: "cursive" }}>
                      {schName.classCategory}
                    </p>
                  </div>
                  <div className="w-full flex justify-around items-center">
                    <div className="mr-10" style={{ fontFamily: "cursive" }}>
                      <GoArrowUp className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-green-400 dark:bg-black text-white inline-block" />
                      <span className="ml-1">{schName.courses.length}</span>
                    </div>
                    <p style={{ fontFamily: "cursive" }}>Subjects</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentSpecificClass;
