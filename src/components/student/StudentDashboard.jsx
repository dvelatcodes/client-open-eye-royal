import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { DashboardFractionStudent } from "../../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GrEdit } from "react-icons/gr";
import { GiTeacher, GiSchoolBag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { reset,  } from "../../features/classSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPioneer,
  getStudentTimetable,
  getStudentSpecificClass,
  reset,
} from "../../features/auth/authSlice";

const StudentDashboard = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
    schoolStudentSelected,
    setSchoolStudentSelected,
  } = useStateContext();
  // all schNames
  // all schNames
  const [schName, setSchName] = useState(null);
  // student granted class
  // student granted class
  const [myClass, setMyClass] = useState(null);
  // state initialization
  // state initialization
  const {
    isSuccess,
    isError,
    isLoading,
    message,
    pioneerSchools,
    studentSpecificClass,
    studentTimetable,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && pioneerSchools) {
      // alert("you have classes");
      setSchName(pioneerSchools);
    }
    if (isSuccess && studentSpecificClass) {
      setMyClass(studentSpecificClass);
      setSchName(null);
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
    pioneerSchools,
    studentSpecificClass,
    studentTimetable,
  ]);

  // get default classes
  // get default classes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (user) {
      if (user.pioneerId === "none") {
        dispatch(getAllPioneer());
      }
      if (user.pioneerId !== "none") {
        setSchName(null);
        const { pioneerId, studentClass } = user;
        dispatch(getStudentSpecificClass({ pioneerId, studentClass }));
      }
    }
  }, []);
  // console.log(schName);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFractionStudent
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
          {schName === null ? (
            <>
              {myClass === null ? (
                <div>Welcome Please Reload</div>
              ) : (
                <div className="w-fit m-auto relative top-3">
                  <div
                    className="w-fit m-auto relative top-10"
                    style={{
                      fontFamily: "serif",
                      fontSize: "2.3rem",
                      fontWeight: "bold",
                      color: currentColor,
                    }}
                  >
                    Welcome to {myClass.schoolNaming}
                  </div>
                  <div
                    className="w-fit m-auto relative top-14 h-fit bg-white pt-4 pb-4 pr-5 pl-5 rounded-2xl shadow-xl hover:shadow-2xl hover:text-white hover:bg-slate-800"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {myClass.calenderSection}
                  </div>
                  <div
                    className="w-fit m-auto relative top-20 text-green-400"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                      fontFamily: "'Times New Roman', Times, serif",
                    }}
                  >
                    We are Delighted to Have You
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-fit m-auto relative top-3">
                List Of All Registered Schools
              </div>
              <div
                className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around"
                style={{ minHeight: "70vh" }}
              >
                {schName &&
                  schName.map((data) => (
                    <div
                      className="min-h-fit h-40 w-1/4 bg-white rounded-xl dark:bg-gray-50 ml-5 shadow-xl"
                      key={data._id}
                    >
                      <div className="w-full flex justify-around h-3/5 items-center">
                        <SiGoogleclassroom className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white" />
                        <p style={{ fontFamily: "cursive" }}>
                          {data.schoolName}
                        </p>
                      </div>
                      <hr />
                      <Link
                        to={"/studentdashboard/StudentAdmissionScreening"}
                        className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                        style={{ fontFamily: "serif" }}
                        onClick={() => {
                          localStorage.setItem(
                            "setSchoolStudentSelected",
                            JSON.stringify(data._id)
                          );
                          setSchoolStudentSelected(data._id);
                        }}
                      >
                        Apply
                        <GrEdit className="inline-block" />
                      </Link>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
