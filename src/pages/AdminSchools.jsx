import React, { useState } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher, GiSchoolBag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AdminSchools = () => {
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
  const [schoolData, setSchoolData] = useState([
    {
      name: "Classes",
      icon: <SiGoogleclassroom />,
      arrow: <FaArrowAltCircleRight />,
      num: classNum,
      view: "View",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "#5798EE",
      link: "/allClasses",
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

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFraction1
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
            <div className="mt-12 w-screen md:w-800 sm:w-760">
              <div className="flex w-full flex-wrap lg:flex-nowrap justify-center">
                <div className="w-full">
                  <div className="flex m-1 w-full flex-wrap gap-1 justify-around items-center gap-y-4">
                    {schoolData.map((item) => (
                      <div className="w-fit" key={item.name}>
                        <div className="bg-white dark:text-gray-200 w-full dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl flex justify-around flex-wrap">
                          <div className="w-3/6">
                            <button
                              type="button"
                              style={{
                                color: item.iconColor,
                                backgroundColor: item.iconBg,
                              }}
                              className="text-xl opacity-0.9 rounded-full hover:drop-shadow-xl p-4"
                            >
                              {item.icon}
                            </button>
                          </div>
                          <p className="mt-3 w-3/6">
                            <span className="text-lg font-semibold block">
                              {item.name}
                            </span>
                            <span
                              className={`text-sm text-${item.pcColor} m-2 ml-12 block`}
                            >
                              {item.num}
                            </span>
                          </p>
                          <p className="w-full h-px bg-slate-300"></p>
                          <p className="text-sm text-gray-400 mt-3">
                            <Link to={`${item.link}`}>
                              <span className="cursor-pointer">
                                {item.arrow}
                              </span>
                            </Link>
                            <Link to={`${item.link}`}>
                              <span className="cursor-pointer">
                                {item.view}
                              </span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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

export default AdminSchools;
