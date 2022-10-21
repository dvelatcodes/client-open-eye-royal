import React, { useState } from "react";
import { Navbar, ThemeSettings } from "../../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import { DashboardFractionStudent } from "../../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher, GiSchoolBag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { reset, getPioneerNigerClass } from "../../features/classSlice";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

const StudentDashboard = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();

  const [schName, setSchName] = useState("");
  const [classNum, setClassNum] = useState(0);
  const [teacherNum, setTeacherNum] = useState(0);
  const [studentNum, setStudentNum] = useState(0);
  const [examResultNum, setExamResultNum] = useState(0);
  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.class
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess) {
      alert("you have classes");
    }
    if (isError) {
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset]);
  // school data
  // school data
  const [schoolData, setSchoolData] = useState([
    {
      name: "Classes",
      icon: <SiGoogleclassroom />,
      arrow: <FaArrowAltCircleRight />,
      num: "none",
      view: "View",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#5798EE",
      link: "/pioneerschool/allclassespioneer",
    },
    {
      name: "Teachers",
      icon: <GiTeacher />,
      arrow: <FaArrowAltCircleRight />,
      num: teacherNum,
      view: "View",
      iconColor: "rgb(0,0,0)",
      iconBg: "rgb(235, 250, 242)",
      link: "/edit-teachers",
    },
    {
      name: "Students",
      icon: <GiSchoolBag />,
      arrow: <FaArrowAltCircleRight />,
      num: studentNum,
      view: "View",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      link: "/edit-students",
    },
    {
      name: "Exam Results",
      icon: <ImBooks />,
      arrow: <FaArrowAltCircleRight />,
      num: examResultNum,
      view: "View",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      link: "",
    },
  ]);
  // get default classes
  // get default classes
  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (!user.schoolName) {
    //   alert("Unauthorized Please SignUp/Login as A Proprietor");
    //   navigate("/");
    // }
    // if (!user) {
    //   alert("Unauthorized, Please SignUP/SignIn AS A Proprietor");
    //   navigate("/");
    // }
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    if (pioneerClasses) {
      const { pioneerClass } = pioneerClasses;
      pioneerClass || dispatch(getPioneerNigerClass());
      pioneerClass &&
        schoolData.map((data) => {
          if (data.num === "none") {
            data.num = pioneerClass.length;
          }
          return data;
        });
    }
  }, []);

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
          <div>
            <div className="m-auto relative top-12 w-screen md:w-800 sm:w-760">
              <div className="flex w-full flex-wrap lg:flex-nowrap justify-center m-auto">
                <div className="w-full">
                  <div className="flex m-1 w-full flex-wrap gap-1 justify-around items-center gap-y-4"></div>
                </div>
              </div>
              {}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
