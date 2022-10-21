import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStateContext } from "../contexts/ContextProvider";
import {
  getDefaultClasses,
  registerPioneerNClass,
  reset,
  regClass,
} from "../features/classSlice";
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

const PioneerGeneralClassSetup = () => {
  // my contexts
  // my contexts
  const {
    activeMenu,
    setActiveMenu,
    currentColor,
    setCurrentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
    setCurrentMode,
    preClass,
    setPreClass,
  } = useStateContext();
  // calender year variables
  // calender year variables
  const [year, setYear] = useState({
    startOfAcademicYear: "",
    endOfAcademicYear: "",
  });
  const [stChecker, setStChecker] = useState({
    stEleven: false,
  });
  const [stDisplay, setStDisplay] = useState({
    display11: "none",
  });
  const { display11 } = stDisplay;
  const { stEleven } = stChecker;
  // class destructuring
  // class destructuring
  const { startOfAcademicYear, endOfAcademicYear } = year;
  // get from local storage
  // get from local storage
  useEffect(() => {
    const start = JSON.parse(localStorage.getItem("startOfAcademicYear"));
    const end = JSON.parse(localStorage.getItem("endOfAcademicYear"));
    if (start && end) {
      setYear({ ...year, startOfAcademicYear: start, endOfAcademicYear: end });
    }
  }, []);
  // store on local storage
  // store on local storage
  useEffect(() => {
    if (stEleven) {
      localStorage.setItem(
        "startOfAcademicYear",
        JSON.stringify(startOfAcademicYear)
      );
      localStorage.setItem(
        "endOfAcademicYear",
        JSON.stringify(endOfAcademicYear)
      );
    }
  }, [stEleven]);
  // onchange
  // onchange
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setYear((prevState) => ({ ...prevState, [name]: value }));
  };
  const changeAll = (e) => {
    const all = e.target.getAttribute("data-id");
    switch (all) {
      case "startyear":
        setStChecker({
          ...stChecker,
          stEleven: startOfAcademicYear && endOfAcademicYear ? true : false,
        });
      case "endyear":
        setStChecker({
          ...stChecker,
          stEleven: startOfAcademicYear < endOfAcademicYear ? true : false,
        });
        setStDisplay({
          ...stDisplay,
          display11:
            startOfAcademicYear && endOfAcademicYear ? "block" : "block",
        });
        break;
      default:
        break;
    }
  };
  // initialize my states
  // initialize my states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading, message, newClass } = useSelector(
    (state) => state.class
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      console.log("error");
    }
    if (isSuccess) {
      navigate("/pioneerschool");
      // console.log("success");
    }
    dispatch(reset());
  }, [dispatch, reset, navigate, isSuccess, isError, isLoading, message]);
  // get default classes
  // get default classes
  const [classData, setClassData] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user.schoolName) {
      alert("Unauthorized, Please SignIn/SignUp as a Proprietor");
      navigate("/");
    }
    if (!user) {
      alert("Unauthorized, Please SignUP/SignIn AS A Proprietor");
      navigate("/");
    }
    const defaultClasses = JSON.parse(localStorage.getItem("defaultclasses"));

    defaultClasses || dispatch(getDefaultClasses());
    if (defaultClasses) {
      setClassData(
        defaultClasses.filter((data) => data.className.match(preClass))
      );
    }
  }, []);

  // classType editing
  // classType editing
  const [classType, setClassType] = useState(null);
  const [classTypeInput, setClassTypeInput] = useState("");

  // save class Type
  // save class Type
  const saveClassType = (id) => {
    const newClassType = classData.map((cData) => {
      if (cData._id === id) {
        if (
          classTypeInput === "" ||
          classTypeInput.match(/[!-\/]|[:-\?]|[\[-`]|[\{-~]/)
        )
          return cData;
        cData.classType = classTypeInput;
      }
      return cData;
    });
    setClassData(newClassType);
    setClassType(null);
    setClassTypeInput("");
  };
  // show subjects
  // show subjects
  const [showSubjects, setShowSubjects] = useState(null);
  const [editSubject, setEditSubject] = useState(null);
  const [subjectInput, setSubjectInput] = useState("");
  const saveSubject = (id) => {
    const newSub = classData.map((data) => {
      data.subjects.map((subject) => {
        if (subject.id === id) {
          if (
            subjectInput === "" ||
            subjectInput.match(/[!-\/]|[:-\?]|[\[-`]|[\{-~]/)
          )
            return subject;
          subject.subName = subjectInput;
        }
        return subject;
      });
      return data;
    });
    setClassData(newSub);
    setEditSubject(null);
    setSubjectInput("");
  };
  // delete subject
  // delete subject
  const deleteSub = (id) => {
    const deleted = classData.map((data) => {
      data.subjects = data.subjects.filter((subject) => id !== subject.id);
      return data;
    });
    setClassData(deleted);
  };

  // delete arm
  // delete arm
  const deleteArm = (id) => {
    const deletedArm = classData.filter((data) => data._id !== id);
    setClassData(deletedArm);
  };
  // save/post class
  // save/post class
  const saveClass = (id) => {
    const known = classData.filter((data) => data._id === id);
    const totalData = known[0];
    const { className, classType, subjects } = totalData;
    const { _id, schoolName } = JSON.parse(localStorage.getItem("user"));
    if (startOfAcademicYear < endOfAcademicYear) {
      // console.log(startOfAcademicYear + "/" + endOfAcademicYear);
      const info = {
        classNaming: className,
        classCategory: classType,
        courses: subjects,
        calenderSection: startOfAcademicYear + "/" + endOfAcademicYear,
        pioneerIdNum: _id,
        schoolNaming: schoolName,
      };
      dispatch(registerPioneerNClass(info));
    }
    // console.log(startOfAcademicYear + "/" + endOfAcademicYear);
  };

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
            <p className="initial-academic-Session w-2/4 flex justify-around">
              <label htmlFor="academic-Session" className="to mr-1">
                From
              </label>
              <input
                type="number"
                min="2022"
                max="2040"
                name="startOfAcademicYear"
                value={startOfAcademicYear}
                onChange={onChange}
                onClick={changeAll}
                data-id="startyear"
                className="w-fit"
                style={{ paddingLeft: "0.5rem", minWidth: "4rem" }}
              />
            </p>
            <p className="end-academic-Session mr-7 flex justify-around">
              <label
                htmlFor="end-academic-Session"
                className="to ml-3 mr-2 md:ml-6 sm:ml-9 inline-block"
              >
                To
              </label>
              <input
                type="number"
                min="2022"
                max="2040"
                name="endOfAcademicYear"
                value={endOfAcademicYear}
                onChange={onChange}
                onClick={changeAll}
                data-id="endyear"
                className="yearinput w-fit"
                style={{ paddingLeft: "0.5rem", minWidth: "4rem" }}
              />
            </p>
            <span
              className={stEleven ? "green" : "red"}
              style={{ display: display11, marginLeft: "5rem" }}
            >
              {stEleven ? "valid" : "invalid"}
            </span>
          </div>
          <div
            className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around h-fit"
            style={{ minHeight: "80vh" }}
          >
            {classData.map((data, index) => (
              <div
                className="h-fit pt-7 pb-2 w-1/4 bg-white rounded-xl dark:bg-gray-50 ml-5 shadow-xl"
                key={index}
                style={{ minHeight: "10rem" }}
              >
                <div className="w-full flex flex-wrap justify-around h-3/5 items-center">
                  <SiGoogleclassroom className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white" />
                  <p style={{ fontFamily: "cursive" }}>{data.className}</p>
                </div>
                <div className="w-full pt-5 pl-4 flex flex-wrap justify-around h-3/5 items-center cursor-pointer">
                  {classType === data._id ? (
                    <GiCheckMark
                      className="text-2xl h-5 w-fit hover:h-6"
                      onClick={() => saveClassType(data._id)}
                    />
                  ) : (
                    <GrEdit
                      className="text-2xl h-5 w-fit hover:h-6"
                      onClick={() => {
                        setClassType(data._id);
                      }}
                    />
                  )}

                  {classType === data._id ? (
                    <input
                      type="text"
                      value={classTypeInput}
                      placeholder={data.classType}
                      onChange={(e) => setClassTypeInput(e.target.value)}
                      style={{
                        fontFamily: "cursive",
                        borderWidth: "thin",
                        borderColor: "#777",
                        borderRadius: "7px",
                      }}
                      className="bg-main-bg w-2/3 pl-2"
                    />
                  ) : (
                    <p style={{ fontFamily: "cursive" }}>{data.classType}</p>
                  )}
                </div>
                <div className="w-full pt-5 pl-1 flex flex-wrap justify-around h-3/5 items-center ">
                  <FaEye
                    className="text-2xl h-5 w-fit hover:h-6 cursor-pointer"
                    onClick={() => {
                      setShowSubjects(data._id);
                      setActiveMenu(false);
                    }}
                  />
                  <p style={{ fontFamily: "cursive" }}>Subjects</p>
                </div>
                {showSubjects === data._id && (
                  <div
                    className="w-screen left-0 pb-5 bottom-0 absolute bg-main-bg right-0 dark:bg-main-dark-bg pt-8"
                    style={{
                      top: "-5rem",
                      zIndex: "20",
                      minHeight: "100vh",
                      height: "fit-content",
                      maxWidth: "1440px",
                    }}
                  >
                    <FaEyeSlash
                      className="h-7 w-fit hover:h-8 cursor-pointer m-auto"
                      onClick={() => {
                        setShowSubjects(null);
                        setActiveMenu(true);
                      }}
                      style={{
                        color: currentMode === "Dark" ? currentColor : "black",
                      }}
                    />
                    {data.subjects.map((subject) => (
                      <div
                        className="flex h-14 flex-wrap w-fit justify-between items-center bg-main-bg m-auto dark:bg-main-dark-bg"
                        key={subject.id}
                        style={{ minWidth: "50%" }}
                      >
                        <p
                          style={{ fontFamily: "cursive" }}
                          className="relative  text-orange font-semibold text-xl dark:text-white"
                        >
                          {subject.subName}
                        </p>
                        <div className="w-fit">
                          <RiDeleteBin6Line
                            className="text-2xl h-5 w-fit hover:h-6 pl-3 pr-3 text-red-600 inline-block cursor-pointer"
                            onClick={() => {
                              deleteSub(subject.id);
                            }}
                          />
                          {editSubject === subject.id ? (
                            <div className="inline-block">
                              <input
                                type="text"
                                placeholder={subject.subName}
                                value={subjectInput}
                                style={{
                                  fontFamily: "cursive",
                                  borderWidth: "thin",
                                  borderColor: "#777",
                                  borderRadius: "7px",
                                }}
                                className="outline-none pl-2 w-48"
                                onChange={(e) =>
                                  setSubjectInput(e.target.value)
                                }
                              />
                              <GiCheckMark
                                className="text-2xl h-5 w-fit hover:h-6 inline-block ml-4 cursor-pointer"
                                onClick={() => {
                                  saveSubject(subject.id);
                                }}
                                style={{
                                  color:
                                    currentMode === "Dark"
                                      ? currentColor
                                      : "black",
                                }}
                              />
                            </div>
                          ) : (
                            <ImPencil2
                              className="text-2xl h-5 w-fit hover:h-6 pl-3 cursor-pointer pr-3 inline-block"
                              onClick={() => setEditSubject(subject.id)}
                              style={{
                                color:
                                  currentMode === "Dark"
                                    ? currentColor
                                    : "black",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <hr className="mt-2" />
                <div className="w-full pt-2 pl-1 flex flex-wrap justify-around h-3/5 items-center ">
                  <button
                    className="w-fit pt-1 pb-1 pl-4 pr-4 hover:pr-5 hover:pl-5 rounded-xl drop-shadow-2xl text-white hover:drop-shadow-lg"
                    style={{ fontFamily: "cursive", background: currentColor }}
                    onClick={() => {
                      saveClass(data._id);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="w-fit pt-1 pb-1 pl-3 pr-3 hover:pr-4 hover:pl-4 rounded-xl drop-shadow-2xl text-white bg-red-600 hover:drop-shadow-xl"
                    style={{ fontFamily: "cursive" }}
                    onClick={() => {
                      deleteArm(data._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneerGeneralClassSetup;
