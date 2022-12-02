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
import { getStudentTimetable, reset } from "../features/auth/authSlice";
import "./studentSubjects.scss";
import IsLoading from "../components/isLoading/IsLoading";

const StudentSubjects = () => {
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
  const { isSuccess, isError, isLoading, message, studentTimetable } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && studentTimetable) {
      setSchName(studentTimetable);
      //   console.log(studentTimetable);
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
    studentTimetable,
  ]);

  // username
  // username
  const [userName, setUserName] = useState(null);
  // get default classes
  // get default classes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (!user) {
      alert("Unauthorized, Please Sign-up or Login");
      navigate("/");
    }
    if (user) {
      setUserName(user.studentFirstName);
      if (user.pioneerId === "none") {
        //   dispatch(getAllPioneer());
        setSchName(null);
      }
      if (user.pioneerId !== "none") {
        const { pioneerId, studentClass } = user;
        dispatch(getStudentTimetable({ pioneerId, studentClass }));
      }
    }
  }, []);
  return (
    <div
      className={
        currentMode === "Dark"
          ? "dark studentSubjectMainContainer"
          : " studentSubjectMainContainer"
      }
    >
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg studentSubjectContainer">
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
            className={`dark:bg-main-dark-bg childContainer bg-main-bg w-full min-h-screen ${
              activeMenu ? "md:ml-0" : "flex-2"
            }`}
          >
            <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
              {themeSettings ? "" : <Navbar name={userName} />}
            </div>
            {schName === null ? (
              <>
                <div className="m-auto w-fit font-bold italic noSubjectMessage">
                  You Don't Have a Class Yet, Please Click on Available Schools
                  for Screening
                </div>
              </>
            ) : (
              <>
                <div
                  className="m-auto relative top-9 subjectGrandParentContainer "
                  style={{ width: "fit-content" }}
                >
                  <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl dark:text-white">
                    {schName.className}
                  </div>
                  <div className="relative pl-8 pr-8 m-auto h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                    {schName.classType.map((ars, index) => (
                      <p
                        key={index}
                        style={{ fontFamily: "serif" }}
                        className="text-black"
                      >
                        {ars.subName}
                      </p>
                    ))}
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

export default StudentSubjects;
