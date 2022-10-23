import React, { useState } from "react";
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
import { reset, getPioneerNigerClass } from "../../features/classSlice";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { getAllPioneer } from "../../features/auth/authSlice";

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

  const [schName, setSchName] = useState(null);

  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message, pioneerSchools } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && pioneerSchools) {
      // alert("you have classes");
      setSchName(pioneerSchools);
    }
    if (isError) {
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset, pioneerSchools]);
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
      num: "teacherNum",
      view: "View",
      iconColor: "rgb(0,0,0)",
      iconBg: "rgb(235, 250, 242)",
      link: "/edit-teachers",
    },
    {
      name: "Students",
      icon: <GiSchoolBag />,
      arrow: <FaArrowAltCircleRight />,
      num: "studentNum",
      view: "View",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      link: "/edit-students",
    },
    {
      name: "Exam Results",
      icon: <ImBooks />,
      arrow: <FaArrowAltCircleRight />,
      num: "examResultNum",
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
    // const pioneerClasses = JSON.parse(
    //   localStorage.getItem("pioneerNigerClass")
    // );
    // if (pioneerClasses) {
    //   const { pioneerClass } = pioneerClasses;
    //   pioneerClass || dispatch(getPioneerNigerClass());
    //   pioneerClass &&
    //     schoolData.map((data) => {
    //       if (data.num === "none") {
    //         data.num = pioneerClass.length;
    //       }
    //       return data;
    //     });
    // }
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user.studentEmail){
      alert("Unauthorized, Please Sign-up or Login")
      navigate("/")
    }
    if (user.pioneerId === "none") {
      dispatch(getAllPioneer());
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
                    <p style={{ fontFamily: "cursive" }}>{data.schoolName}</p>
                  </div>
                  <hr />
                  <Link
                    to={"/studentdashboard/StudentAdmissionScreening"}
                    className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                    style={{ fontFamily: "serif" }}
                    onClick={() => {
                      localStorage.setItem("setSchoolStudentSelected", JSON.stringify(data._id))
                      setSchoolStudentSelected(data._id);
                    }}
                  >
                    Apply
                    <GrEdit className="inline-block" />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
