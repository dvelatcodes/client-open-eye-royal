import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import { reset, getPioneerNigerClass } from "../features/classSlice";
import { IoIosPeople } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
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
  const [tests, setTests] = useState(null);
  const [timetable, setTimetable] = useState([]);
  const [year, setYear] = useState({
    startYear: "",
    endYear: "",
  });
  const { startYear, endYear } = year;
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    if (pioneerClasses) {
      const { pioneerClass } = pioneerClasses;
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
      const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
      setYear((prev) => ({ ...prev, startYear: year1, endYear: year2 }));
      const schSection = year1 + "/" + year2;
      pioneerClass || dispatch(getPioneerNigerClass({ _id, schSection }));
      pioneerClass &&
        setClassNum(
          pioneerClass.filter((data) => data.classNaming.match(classes))
        );
      const tests = pioneerClass;
      pioneerClass &&
        setTests(
          pioneerClass.filter(
            (all) =>
              all.classNaming.match("JSS 1") ||
              all.classNaming.match("JSS 2") ||
              all.classNaming.match("JSS 3")
          )
        );
      // tests.map(all=>{

      // })
      tests &&
        tests.map((all) => {
          const rrr = all.courses.map((sing) => Math.random(sing));
          console.log(rrr);
          return all;
        });
    }
  }, []);
  //   console.log(classNum);
  // console.log(tests);

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
            <p style={{ fontFamily: "serif" }}>{startYear}</p>
            <p className="ml-7" style={{ fontFamily: "serif" }}>
              {endYear}
            </p>
          </div>
          <div
            className="md:w-800 md:mt-2 sm:mt-2 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around h-fit"
            style={{ minHeight: "90vh" }}
          >
            {classNum &&
              classNum.map((num) => (
                <div
                  className="h-fit pt-7 pb-2 w-1/4 bg-white rounded-2xl dark:bg-gray-50 ml-5 shadow-xl"
                  key={num._id}
                  style={{ minHeight: "10rem" }}
                >
                  <div className="w-full flex flex-wrap justify-around h-3/5 items-center">
                    <SiGoogleclassroom
                      className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white"
                      style={{ background: currentColor }}
                    />

                    <p style={{ fontFamily: "cursive" }}>{num.classNaming}</p>
                  </div>
                  <div className="w-full flex mt-2 flex-wrap justify-around h-3/5 items-center">
                    <Link to="">
                      <IoIosPeople
                        className="hover:drop-shadow-xl text-2xl w-fit p-2 rounded-md text-black h-11 hover:h-12"
                        // style={{ height: "2.9rem" }}
                      />
                    </Link>
                    <Link to="">
                      <p style={{ fontFamily: "cursive" }}>Students</p>
                    </Link>
                  </div>
                  <div className="w-full flex mt-2 flex-wrap justify-around h-3/5 items-center">
                    <Link to="">
                      <GiBookshelf
                        className="hover:drop-shadow-xl text-2xl w-fit p-2 rounded-md h-11 hover:h-12"
                        style={{ color: "3176DE" }}
                      />
                    </Link>
                    <Link to="">
                      <p style={{ fontFamily: "cursive" }}>Subjects</p>
                    </Link>
                  </div>
                  <div className="w-full flex mt-2 flex-wrap justify-around h-3/5 items-center">
                    <Link to="">
                      <BiNotepad
                        className="hover:drop-shadow-xl text-2xl w-fit p-2 rounded-md text-black h-12 hover:h-14"
                        style={{ color: "FD4462" }}
                        onClick={() => {}}
                      />
                    </Link>
                    <Link to="">
                      <p style={{ fontFamily: "cursive" }}>Timetable</p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneerSingleArm;
