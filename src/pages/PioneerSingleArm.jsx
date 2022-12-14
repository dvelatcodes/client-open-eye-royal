import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import {
  reset,
  getPioneerNigerClass,
  getTimetable,
  getStudentForPioneerNow,
} from "../features/classSlice";
import { GiMaterialsScience } from "react-icons/gi";
import { GoArrowUp } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { ImPencil2 } from "react-icons/im";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { GrEdit } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Navbar, ThemeSettings } from "../components";
// import { Button } from "../components";
import { DashboardFractionPioneer } from "../Dashboard";
// import { icons } from "react-icons/lib";
import "./pioneerSingleArm.scss";
import IsLoading from "../components/isLoading/IsLoading";
// import { set } from "immer/dist/internal";

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
  const {
    isSuccess,
    isError,
    isLoading,
    message,
    singleClassTimetable,
    studentForPioneer,
  } = useSelector((state) => state.class);
  const dispatch = useDispatch();
  const [values, setValues] = useState(null);
  const [showTimetable, setShowTimetable] = useState(null);
  const [showSubjects, setShowSubjects] = useState(null);
  const [showStudents, setShowStudents] = useState(null);
  const [monday, setMonday] = useState(null);
  const [tuesday, setTuesday] = useState(null);
  const [wednesday, setWednesday] = useState(null);
  const [thursday, setThursday] = useState(null);
  const [friday, setFriday] = useState(null);
  const [time, setTime] = useState(null);
  const [nameClass, setNameClass] = useState(null);
  const [classNum, setClassNum] = useState(null);
  const [classType, setClassType] = useState(null);
  const [timetable, setTimetable] = useState(null);
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && singleClassTimetable) {
      if (singleClassTimetable) {
        setTimetable(singleClassTimetable[0]);
        const useTable = singleClassTimetable[0];
        if (useTable) {
          const {
            className,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            classType,
            time,
          } = useTable;
          classType && setClassType(classType);
          monday && setMonday(monday);
          tuesday && setTuesday(tuesday);
          wednesday && setWednesday(wednesday);
          thursday && setThursday(thursday);
          friday && setFriday(friday);
          time && setTime(time);
          className && setNameClass(className);
        }
      }
    }
    if (isSuccess && studentForPioneer) {
    }
    if (isError) {
      toast.error(message);
      // console.log("error");
    }
    dispatch(reset());
  }, [
    isSuccess,
    isError,
    isLoading,
    message,
    dispatch,
    reset,
    singleClassTimetable,
    studentForPioneer,
  ]);
  // get default classes
  // get default classes
  // const [refresh, setRefresh] = useState(1);
  const [year, setYear] = useState({
    startYear: "",
    endYear: "",
  });
  const { startYear, endYear } = year;
  const [pioneerName, setPioneerTitle] = useState(null);
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    setClasses(localStorage.getItem("pSingleClass"));
    const getSeeMode = localStorage.getItem("themeMode");
    getSeeMode && setCurrentMode(getSeeMode);
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    if (pioneerClasses) {
      const { pioneerClass } = pioneerClasses;
      const user = JSON.parse(localStorage.getItem("user"));
      const pSingleClass = JSON.parse(localStorage.getItem("pSingleClass"));
      if (user) {
        const { _id } = user;
        const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
        const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
        if (year1 && year2) {
          setYear((prev) => ({ ...prev, startYear: year1, endYear: year2 }));
          const schSection = year1 + "/" + year2;
          pioneerClass || dispatch(getPioneerNigerClass({ _id, schSection }));
        }
        const { firstName } = user;
        setPioneerTitle(firstName);
      }
      pioneerClass &&
        setClassNum(
          pioneerClass.filter((data) =>
            data.classNaming.match(classes || pSingleClass)
          )
        );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("themeMode", currentMode);
  }, [currentMode]);
  // get timetable
  // get timetable
  useEffect(() => {
    if (values) {
      if (showTimetable) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const { _id } = user;
          dispatch(getTimetable({ _id, showTimetable }));
        }
      }
      if (showStudents) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const { _id } = user;
          dispatch(getStudentForPioneerNow({ _id, showStudents }));
        }
      }
      if (showSubjects) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const { _id } = user;
          dispatch(getTimetable({ _id, showSubjects }));
        }
      }
    }
  }, [showTimetable, values, showStudents, showSubjects]);

  // nameClass && console.log(classType);
  return (
    <div
      className={currentMode === "Dark" ? "dark" : ""}
      style={{ height: "max-content", minHeight: "100vh" }}
    >
      {isLoading ? (
        <IsLoading />
      ) : (
        <div
          className="flex min-h-screen h-fit pioneerSingleStudentCover  bg-neutral-700 relative  dark:bg-main-dark-bg"
          // style={{ height: "150vh" }}
        >
          {themeSettings ? (
            ""
          ) : showTimetable ? (
            ""
          ) : (
            <DashboardFractionPioneer
              activeMenu={activeMenu}
              onClick={() => setThemeSettings(true)}
            />
          )}
          {themeSettings && <ThemeSettings />}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg showSubjectContainer w-full min-h-screen h-fit ${
              activeMenu ? "md:ml-0" : "flex-2"
            }`}
          >
            <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full singleClassNav">
              {themeSettings ? "" : <Navbar name={pioneerName || ""} />}
            </div>
            {values ? (
              showTimetable && timetable ? (
                <div
                  className=" md:mt-2 sm:mt-2 lg:w-full absolute top-0 bottom-0 right-0 left-0 h-fit dark:bg-main-dark-bg bg-main-bg z-20 singleClassMainContainer"
                  style={{
                    background:
                      currentMode === "Light"
                        ? "rgb(250 251 251)"
                        : "rgb(32 35 42)",
                  }}
                >
                  {classType && (
                    <div
                      className="m-auto relative top-9 singleClassTimetableContainer"
                      // style={{ width: "60%" }}
                    >
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl dark:text-white">
                        {nameClass}
                      </div>
                      <div
                        className="absolute flex justify-around items-center left-0 right-0 -bottom-20 m-auto h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-black font-semibold bg-green-200 hover:text-green-200 hover:bg-black"
                        style={{ fontFamily: "serif" }}
                        onClick={() => {
                          setValues(null);
                          setShowTimetable(null);
                        }}
                      >
                        <BiLeftArrow className="absolute top-0 -left-24 right-0 bottom-0 m-auto w-fit" />
                        Go Back
                      </div>
                      <div className="absolute -left-56 top-40 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold timetableSubject">
                        {classType &&
                          classType.map((subject) => (
                            <p
                              key={subject.id}
                              style={{ fontFamily: "serif" }}
                              className="text-black"
                            >
                              {subject.subName}
                            </p>
                          ))}
                      </div>
                      <table className="dark:bg-main-bg singleClassTimetable">
                        <thead>
                          <tr>
                            {time.map((time, index) => (
                              <th
                                key={index}
                                className="w-fit border-1 border-neutral-800 text-sm pt-3"
                              >
                                {time}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="w-fit text-base border-1 border-neutral-800">
                              Monday
                            </td>
                            {monday.map((ar, index) => (
                              <td
                                key={index}
                                className="w-fit border-1 text-base border-neutral-800"
                              >
                                {ar}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="w-fit text-base border-1 border-neutral-800">
                              Tuesday
                            </td>
                            {tuesday.map((ar, index) => (
                              <td
                                key={index}
                                className="w-fit border-1 text-base border-neutral-800"
                              >
                                {ar}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="w-fit text-base border-1 border-neutral-800">
                              Wednesday
                            </td>
                            {wednesday.map((ar, index) => (
                              <td
                                key={index}
                                className="w-fit border-1 text-base border-neutral-800"
                              >
                                {ar}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="w-fit text-base border-1 border-neutral-800">
                              Thursday
                            </td>
                            {thursday.map((ar, index) => (
                              <td
                                key={index}
                                className="w-fit border-1 text-base border-neutral-800"
                              >
                                {ar}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="w-fit text-base border-1 border-neutral-800">
                              Friday
                            </td>
                            {friday.map((ar, index) => (
                              <td
                                key={index}
                                className="w-fit border-1 text-base border-neutral-800"
                              >
                                {ar}
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : values && showSubjects ? (
                showSubjects &&
                classType && (
                  <div>
                    {isLoading ? (
                      <IsLoading />
                    ) : (
                      <div
                        className="m-auto relative top-9 showSubjectMainContainer"
                        style={{ width: "fit-content" }}
                      >
                        <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl dark:text-white">
                          {nameClass}
                        </div>
                        <div className="relative pl-8 pr-8 m-auto h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                          {classType.map((ars) => (
                            <p
                              key={ars.id}
                              style={{ fontFamily: "serif" }}
                              className="text-black"
                            >
                              {ars.subName}
                            </p>
                          ))}
                        </div>
                        <div
                          className="absolute flex justify-around items-center left-0 right-0 -bottom-20 m-auto h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-black font-semibold bg-green-200 hover:text-green-200 hover:bg-black"
                          style={{ fontFamily: "serif" }}
                          onClick={() => {
                            setValues(null);
                            setShowSubjects(null);
                          }}
                        >
                          <BiLeftArrow className="absolute top-0 -left-24 right-0 bottom-0 m-auto w-fit" />
                          Go Back
                        </div>
                      </div>
                    )}
                  </div>
                )
              ) : (
                showStudents &&
                studentForPioneer && (
                  <div
                    className="m-auto w-fit h-fit relative checkNumberOfPioneerStudents"
                    style={{ width: "fit-content" }}
                  >
                    {studentForPioneer.map((data, index) => (
                      <div
                        className="h-fit pt-9 pb-9 w-fit pl-8 pr-8 bg-white rounded-xl dark:bg-gray-50 m-auto shadow-2xl top-20 relative checkNumberOfPioneerStudentsBox"
                        key={index}
                      >
                        <div className="w-full flex justify-around items-center mb-6">
                          <SiGoogleclassroom
                            className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white mr-16"
                            style={{ background: currentColor }}
                          />
                          <p
                            style={{
                              fontFamily: "cursive",
                              fontWeight: "bold",
                            }}
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
                  </div>
                )
              )
            ) : (
              <>
                <p
                  className="academic-title w-fit m-auto font-medium currentAcademicSession"
                  style={{ color: currentMode === "Dark" ? "white" : "black" }}
                >
                  Current Academic Session
                </p>
                <div className="student-year-container bg-main-bg w-fit m-auto top-2 shadow-md rounded-lg startEnd">
                  <p style={{ fontFamily: "serif" }}>{startYear}</p>
                  <p className="ml-7" style={{ fontFamily: "serif" }}>
                    {endYear}
                  </p>
                </div>
                <div className="md:w-800 md:mt-2 sm:mt-2 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around h-fit singleClassBoxCover">
                  {classNum &&
                    classNum.map((num) => (
                      <div
                        className="h-fit pt-7 pb-2 w-1/4 bg-white rounded-2xl dark:bg-gray-50 ml-5 shadow-xl singleClassBox"
                        key={num._id}
                      >
                        <div className="w-full flex flex-wrap justify-around h-3/5 items-center">
                          <SiGoogleclassroom
                            className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white"
                            style={{ background: currentColor }}
                          />
                          <p style={{ fontFamily: "cursive" }}>
                            {num.classNaming}
                          </p>
                        </div>
                        <div
                          className="w-full flex mt-2 flex-wrap justify-around h-3/5 items-center"
                          onClick={() => {
                            setValues(true);
                            setShowStudents(num.classNaming);
                          }}
                        >
                          <Link to="">
                            <IoIosPeople className="hover:drop-shadow-xl text-2xl w-fit p-2 rounded-md text-black h-11 hover:h-12" />
                          </Link>
                          <Link to="">
                            <p style={{ fontFamily: "cursive" }}>Students</p>
                          </Link>
                        </div>
                        <div
                          className="w-full flex mt-2 flex-wrap justify-around h-3/5 items-center"
                          onClick={() => {
                            setValues(true);
                            setShowSubjects(num.classNaming);
                            alert("Please Generate Timetable, if you have not");
                          }}
                        >
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
                              onClick={() => {
                                setValues(true);
                                setShowTimetable(num.classNaming);
                                alert(
                                  "Please Generate Timetable, if you have not"
                                );
                              }}
                            />
                          </Link>
                          <Link to="">
                            <p style={{ fontFamily: "cursive" }}>Timetable</p>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PioneerSingleArm;
