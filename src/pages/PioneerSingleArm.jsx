import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import { reset, getPioneerNigerClass } from "../features/classSlice";
import { IoIosPeople } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
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
  const [refresh, setRefresh] = useState(1);
  const [showTimetable, setShowTimetable] = useState(null);
  const [mon, setMon] = useState([]);
  const [tue, setTue] = useState([]);
  const [wed, setWed] = useState([]);
  const [thur, setThur] = useState([]);
  const [fri, setFri] = useState([]);
  const [defaultTime, setDefaultTime] = useState([
    "",
    "8am-8:40am",
    "8:40am-9:20am",
    "9:20am-10am",
    "10am-10:40am",
    "10:40am-11:20am",
    "11:20am-12pm",
    "12pm-12:40pm",
    "12:40pm-1:20pm",
    "1:20pm-2pm",
    "2pm-2:40pm",
    "2:40pm-3:30pm",
  ]);
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
    setClasses(localStorage.getItem("pSingleClass"));
    console.log(classes);
    const getSeeMode = localStorage.getItem("themeMode");
    getSeeMode && setCurrentMode(getSeeMode);
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    if (pioneerClasses) {
      const { pioneerClass } = pioneerClasses;
      const user = JSON.parse(localStorage.getItem("user"));
      const pSingleClass = JSON.parse(localStorage.getItem("pSingleClass"));
      const { _id } = user;
      const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
      const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
      setYear((prev) => ({ ...prev, startYear: year1, endYear: year2 }));
      const schSection = year1 + "/" + year2;
      pioneerClass || dispatch(getPioneerNigerClass({ _id, schSection }));
      pioneerClass &&
        setClassNum(
          pioneerClass.filter((data) =>
            data.classNaming.match(classes || pSingleClass)
          )
        );
      pioneerClass &&
        setTests(
          pioneerClass.filter(
            (all) =>
              all.classNaming.match("JSS 1") ||
              all.classNaming.match("JSS 2") ||
              all.classNaming.match("JSS 3")
          )
        );
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("themeMode", currentMode);
  }, [currentMode]);
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
          {showTimetable === classes ? (
            <div
              className=" md:mt-2 sm:mt-2 lg:w-full absolute top-0 bottom-0 right-0 left-0 h-fit dark:bg-main-dark-bg bg-main-bg z-20"
              style={{
                minHeight: "120vh",
                background:
                  currentMode === "Light"
                    ? "rgb(250 251 251)"
                    : "rgb(32 35 42)",
              }}
            >
              {tests &&
                tests.map((all) => {
                  const ini = Math.random();
                  const final = Math.floor(ini * all.courses.length);

                  if (!mon.includes(all.courses[final].subName)) {
                    mon.push(all.courses[final].subName);
                    if (mon.length === 6) {
                      mon.splice(5, 0, "Break");
                    }
                    if (mon.length === 12) {
                      mon.pop();
                    }
                    if (mon.length === 13) {
                      mon.splice(11, 2);
                    }
                    if (mon.length === 14) {
                      mon.splice(11, 3);
                    }
                    if (mon.length === 15) {
                      mon.splice(11, 4);
                    }
                    if (mon.length === 16) {
                      mon.splice(11, 5);
                    }
                    // console.log(mon);
                  }
                  const iniTue = Math.random();
                  const finalTue = Math.floor(iniTue * all.courses.length);

                  if (!tue.includes(all.courses[finalTue].subName)) {
                    tue.push(all.courses[finalTue].subName);
                    if (tue.length === 6) {
                      tue.splice(5, 0, "Break");
                    }
                    if (tue.length === 12) {
                      tue.pop();
                    }
                    if (tue.length === 13) {
                      tue.splice(11, 2);
                    }
                    if (tue.length === 14) {
                      tue.splice(11, 3);
                    }
                    if (tue.length === 15) {
                      tue.splice(11, 4);
                    }
                    if (tue.length === 16) {
                      tue.splice(11, 5);
                    }
                    // console.log(mon);
                  }
                  const iniWed = Math.random();
                  const finalWed = Math.floor(iniWed * all.courses.length);

                  if (!wed.includes(all.courses[finalWed].subName)) {
                    wed.push(all.courses[finalWed].subName);
                    if (wed.length === 6) {
                      wed.splice(5, 0, "Break");
                    }
                    if (wed.length === 12) {
                      wed.pop();
                    }
                    if (wed.length === 13) {
                      wed.splice(11, 2);
                    }
                    if (wed.length === 14) {
                      wed.splice(11, 3);
                    }
                    if (wed.length === 15) {
                      wed.splice(11, 4);
                    }
                    if (wed.length === 16) {
                      wed.splice(11, 5);
                    }
                    // console.log(mon);
                  }
                  const iniThur = Math.random();
                  const finalThur = Math.floor(iniThur * all.courses.length);

                  if (!thur.includes(all.courses[finalThur].subName)) {
                    thur.push(all.courses[finalThur].subName);
                    if (thur.length === 6) {
                      thur.splice(5, 0, "Break");
                    }
                    if (thur.length === 12) {
                      thur.pop();
                    }
                    if (thur.length === 13) {
                      thur.splice(11, 2);
                    }
                    if (thur.length === 14) {
                      thur.splice(11, 3);
                    }
                    if (thur.length === 15) {
                      thur.splice(11, 4);
                    }
                    if (thur.length === 16) {
                      thur.splice(11, 5);
                    }
                    // console.log(mon);
                  }
                  const iniFri = Math.random();
                  const finalFri = Math.floor(iniFri * all.courses.length);

                  if (!fri.includes(all.courses[finalFri].subName)) {
                    fri.push(all.courses[finalFri].subName);
                    if (fri.length === 6) {
                      fri.splice(5, 0, "Break");
                    }
                    if (fri.length === 12) {
                      fri.pop();
                    }
                    if (fri.length === 13) {
                      fri.splice(11, 2);
                    }
                    if (fri.length === 14) {
                      fri.splice(11, 3);
                    }
                    if (fri.length === 15) {
                      fri.splice(11, 4);
                    }
                    if (fri.length === 16) {
                      fri.splice(11, 5);
                    }
                    // console.log(mon);
                  }
                }) && (
                  <div
                    className="m-auto relative top-9"
                    style={{ width: "60%" }}
                  >
                    <div
                      className="absolute -left-48 flex justify-around items-center top-4 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
                      onClick={() => {
                        setRefresh(refresh + 1);
                      }}
                      style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        background: currentColor,
                        fontWeight: "bolder",
                      }}
                    >
                      Complete Timetable
                    </div>
                    <div
                      className="absolute -left-48 flex justify-around items-center top-20 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-white font-semibold bg-green-500"
                      style={{ fontFamily: "serif" }}
                    >
                      Save Changes
                    </div>
                    <div
                      className="absolute flex justify-around items-center left-0 right-0 -bottom-20 m-auto h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-black font-semibold bg-green-200"
                      style={{ fontFamily: "serif" }}
                      onClick={() => {
                        setShowTimetable(null);
                      }}
                    >
                      <BiLeftArrow className="absolute top-0 -left-24 right-0 bottom-0 m-auto w-fit" />
                      Go Back
                    </div>
                    <div className="absolute -left-56 top-40 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                      {tests &&
                        tests[0].courses.map((subject) => (
                          <p
                            key={subject.id}
                            style={{ fontFamily: "serif" }}
                            className="text-black"
                          >
                            {subject.subName}
                          </p>
                        ))}
                    </div>
                    <table className="dark:bg-main-bg">
                      <thead>
                        <tr>
                          {defaultTime.map((time, index) => (
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
                          {mon.map((ar, index) => (
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
                          {tue.map((ar, index) => (
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
                          {wed.map((ar, index) => (
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
                          {thur.map((ar, index) => (
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
                          {fri.map((ar, index) => (
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
          ) : (
            <>
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
                        <p style={{ fontFamily: "cursive" }}>
                          {num.classNaming}
                        </p>
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
                            onClick={() => {
                              setShowTimetable(classes);
                              console.log(classes);
                              // window.location.reload();
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
    </div>
  );
};

export default PioneerSingleArm;
