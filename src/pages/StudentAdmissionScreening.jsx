import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionStudent } from "../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GrEdit } from "react-icons/gr";
import { GiTeacher, GiSchoolBag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
  reset,
  getStudentScreenPioneer,
  getAdminQuestions,
} from "../features/classSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllPioneer,
  studentAdmittedClass,
} from "../features/auth/authSlice";
import "./studentAdmissionScreening.scss";
import IsLoading from "../components/isLoading/IsLoading";

const StudentAdmissionScreening = () => {
  // show questions
  // show questions
  const [showQuestions, setShowQuestions] = useState(null);
  //   questions
  // questions
  const [studentQuestions, setStudentQuestions] = useState([
    {
      question: "What is the largest animal living on land?",
      options: [
        { value: "Giraffe", checked: false },
        { value: "Elephant", checked: false },
        { value: "Monkey", checked: false },
        { value: "Cheetah", checked: false },
      ],
    },
    {
      question: "Who is the best programmer on planet earth",
      options: [
        { value: "Love aka dvelat", checked: false },
        { value: "Love aka dvelat", checked: false },
        { value: "Love aka dvelat", checked: false },
        { value: "Love aka dvelat", checked: false },
      ],
    },
    {
      question: "What is use for heating in the laboratory ",
      options: [
        { value: "fire wood", checked: false },
        { value: "stove", checked: false },
        { value: "Bunsen burnet", checked: false },
        { value: "volcano", checked: false },
      ],
    },
    {
      question: "Running is an example of what event ",
      options: [
        { value: "field", checked: false },
        { value: "track", checked: false },
        { value: "sport", checked: false },
        { value: "swimming", checked: false },
      ],
    },
    {
      question:
        "Agricultural science deals with ______ and ____ for man and industrial use",
      options: [
        {
          value: "production of copper and rearing of animals",
          checked: false,
        },
        { value: "building and crop production ", checked: false },
        { value: "production of crops and rearing of animals", checked: false },
        { value: "food production and minerals", checked: false },
      ],
    },
    {
      question:
        "A person who welcome and direct visitors to the right person in an organization is called a ____",
      options: [
        { value: "receptionist", checked: false },
        { value: "staff", checked: false },
        { value: "worker", checked: false },
        { value: "ceo", checked: false },
      ],
    },
    {
      question: "_____ involves a change in the chemical composition of rock ",
      options: [
        { value: "chemical weathering", checked: false },
        { value: "topography", checked: false },
        { value: "geography", checked: false },
        { value: "soil", checked: false },
      ],
    },
    {
      question: "____ is a substance that change the way the body works",
      options: [
        { value: "water", checked: false },
        { value: "drug", checked: false },
        { value: "perfume", checked: false },
        { value: "none of the above", checked: false },
      ],
    },

    {
      question:
        "___ is a method engaged by farmers in the cultivation of crops and rearing of animals ",
      options: [
        { value: "agriculture", checked: false },
        { value: "farming system", checked: false },
        { value: "mixed farming ", checked: false },
        { value: "pastoral farming", checked: false },
      ],
    },
    {
      question:
        "_____ are primary rocks formed from hot molten rock which has cooled and solidified ",
      options: [
        { value: "sedimentary rocks", checked: false },
        { value: "metamorphic rocks", checked: false },
        { value: "igneous rocks", checked: false },
        { value: "physical weathering", checked: false },
      ],
    },
    {
      question:
        "To find out the truth about things scientist makes guesses and then puts them to the test, and these guesses is called __ ",
      options: [
        { value: "hypothesis", checked: false },
        { value: "practical", checked: false },
        { value: "conclusion", checked: false },
        { value: "theory", checked: false },
      ],
    },
    {
      question: "One of these is what scientists use for experiment",
      options: [
        { value: "microscope", checked: false },
        { value: "carpet", checked: false },
        { value: "bed", checked: false },
        { value: "dance", checked: false },
      ],
    },
    {
      question: "____ is used for measuring the mass of objects ",
      options: [
        { value: "thermometer", checked: false },
        { value: "balance", checked: false },
        { value: "computer", checked: false },
        { value: "table", checked: false },
      ],
    },
    {
      question:
        "With internet, you can send a message to someone in new York and get your reply within a very short period",
      options: [
        { value: "na lie", checked: false },
        { value: "nor be magic na", checked: false },
        { value: "very true", checked: false },
        { value: "Maybe", checked: false },
      ],
    },
    {
      question: "Jumps which aim at achieving height are called ?",
      options: [
        { value: "horizontal jumps", checked: false },
        { value: "vertical jumps", checked: false },
        { value: "high jumps", checked: false },
        { value: "long jumps", checked: false },
      ],
    },
    {
      question:
        "_____ disease can be transmitted easily in over-crowded living conditions",
      options: [
        { value: "contagious", checked: false },
        { value: "sexually transmitted", checked: false },
        { value: "cholera", checked: false },
        { value: "drinking", checked: false },
      ],
    },
    {
      question:
        "_____ is defined as a place where business is done or service is provided",
      options: [
        { value: "class room", checked: false },
        { value: "an office", checked: false },
        { value: "bed room", checked: false },
        { value: "kitchen", checked: false },
      ],
    },
    {
      question: "The first stage of soil formation is accomplished by ____ ",
      options: [
        { value: "waethring process", checked: false },
        { value: "weathering process", checked: false },
        { value: "withering process", checked: false },
        { value: "weuthering process", checked: false },
      ],
    },
    {
      question:
        "Letters, memoranda and telegrams are examples of ___ information",
      options: [
        { value: "oral", checked: false },
        { value: "written", checked: false },
        { value: "thinking", checked: false },
        { value: "shouting", checked: false },
      ],
    },
    // {
    //   question: "When there's a will, there's a way. Do you concur?",
    //   options: [
    //     { value: "Yes, absolutely", checked: false },
    //     { value: "no", checked: false },
    //     { value: "na lie", checked: false },
    //     { value: "on the fence", checked: false },
    //   ],
    // },
  ]);
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
    schoolStudentSelected,
    setSchoolStudentSelected,
  } = useStateContext();
  // schName
  // schName
  const [schName, setSchName] = useState(null);
  // student selected Class
  // student selected Class
  //   correct Answers
  //   correct Answers
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [studentPickedClass, setStudentPickedClass] = useState(null);
  // state initialization
  // state initialization
  const {
    isSuccess,
    isError,
    isLoading,
    message,
    student,
    studentScreenPioneer,
    getQuestions,
  } = useSelector((state) => state.class);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // check all pioneer schools
  // check all pioneer schools
  useEffect(() => {
    const allPioneerSchools = JSON.parse(
      localStorage.getItem("studentScreenPioneer")
    );
    if (allPioneerSchools) {
      setSchName(allPioneerSchools);
    }
  }, []);
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (student && isSuccess) {
      navigate("/studentdashboard");
    }
    if (isSuccess && getQuestions) {
      setCorrectAnswers(getQuestions);
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
    studentScreenPioneer,
    getQuestions,
    schName,
  ]);
  // setStudentName
  // setStudentName
  const [studentName, setStudentName] = useState(null);
  // get getStudentScreenPioneer
  // get getStudentScreenPioneer
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (user) {
      dispatch(getAdminQuestions());
      dispatch(getStudentScreenPioneer({ schoolStudentSelected }));
      const { studentFirstName } = user;
      setStudentName(studentFirstName);
    }
    if (!user) {
      alert("Unauthorized, Please Sign-up or Login");
      navigate("/");
    }
  }, []);
  const [runnerChecker, setRunnerChecker] = useState(0);
  const [time, setTime] = useState(true);
  var interval = null;
  var timeInterval = null;
  useEffect(() => {
    if (showQuestions) {
      interval = setInterval(() => {
        setRunnerChecker((prev) => prev + 1);
      }, 10000);
    }
    if (runnerChecker === 18) {
      // console.log(studentQuestions);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showQuestions, runnerChecker]);

  useEffect(() => {
    if (showQuestions) {
      timeInterval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
    if (runnerChecker === 18) {
      clearInterval(timeInterval);
    }
    return () => clearInterval(timeInterval);
  }, [showQuestions, runnerChecker]);
  const [result, setResult] = useState([]);
  const [ansQ, setAnsQ] = useState([]);
  const [showResult, setShowResult] = useState(null);

  // const checkAns=()=>{
  // studentQuestions.map(arr=>
  //      {if(arr.options.some(ans=>ans.checked===true)){
  //       setAnsQ(prev=>[...prev,"checks"])}
  //     }
  //     );
  // }
  const submitAnswer = () => {
    var i = 0;
    while (i < 18) {
      if (
        studentQuestions[i].options.filter((arr) => arr.checked === true)[0]
          .value ===
        correctAnswers[i].options.filter((arr) => arr.checked === true)[0].value
      ) {
        setResult((prev) => [...prev, "valid"]);
      }
      i++;
    }
  };
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);
  //  things to save on data base
  // studentPicked Class
  const showTests = () => {
    if (studentPickedClass !== "" && studentPickedClass !== null) {
      setShowQuestions(true);
      alert("You only have 10 seconds to answer a question, best of luck");
    } else {
      alert("Please Pick a Class before Writing the Test");
    }
  };
  // determine wether to admit student
  // determine wether to admit student
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    const getP = JSON.parse(localStorage.getItem("setSchoolStudentSelected"));
    setSchoolStudentSelected(getP);
    if (result.length >= 9 && showResult && user) {
      setTimeout(() => {
        const info = {
          pioneerId: schoolStudentSelected,
          studentId: user._id,
          studentClass: studentPickedClass,
        };
        dispatch(studentAdmittedClass(info));
      }, 5000);
      setTimeout(() => {
        navigate("/studentdashboard");
      }, 8000);
    }
  }, [showResult]);
  return (
    <div
      className={
        currentMode === "Dark"
          ? "dark studentScreenContainer"
          : "studentScreenContainer"
      }
    >
      {isLoading ? (
        <IsLoading />
      ) : (
        <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
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
            className={`dark:bg-main-dark-bg  bg-main-bg studentScreenContainerRight w-full min-h-screen ${
              activeMenu ? "md:ml-0" : "flex-2"
            }`}
          >
            <div className="fixed md:static inline-block bg-main-dark dark:bg-main-dark-bg navbar w-full">
              {themeSettings ? "" : <Navbar name={studentName || ""} />}
            </div>
            {showQuestions ? (
              <>
                <div
                  className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around screeningContainer"
                  // style={{ minHeight: "70vh" }}
                >
                  {showResult ? (
                    <div className="m-auto top-0 relative w-fit h-fit showScreeningScoreContainer">
                      <p className="text-2xl font-bold dark:text-white">
                        Your score is
                      </p>
                      <p className="text-2xl font-bold dark:text-white">
                        {result.length} over 19
                      </p>
                      <p className="dark:text-white">
                        {result.length >= 9
                          ? "You Passed!, ....proceeding to school"
                          : "You failed!!!, you can rewrite test"}
                      </p>
                    </div>
                  ) : (
                    <div className="m-auto w-fit h-fit studentScreeningQuestions">
                      <div className="w-fit m-auto h-fit pl-4 pr-4 pt-4 pb-4 rounded-lg shadow-2xl bg-white">
                        <span
                          className="font-bold text-2xl"
                          style={{ fontFamily: "serif" }}
                        >
                          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
                        </span>
                        <span className="ml-2 mr-2">:</span>
                        <span
                          className="font-bold text-2xl"
                          style={{ fontFamily: "serif" }}
                        >
                          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                        </span>
                      </div>

                      <div className="m-auto top-8 relative w-fit">
                        <span className="dark:text-white">
                          {studentQuestions[runnerChecker].question}
                        </span>
                        <ul>
                          {studentQuestions[runnerChecker].options.map(
                            (ans, index) => (
                              <li
                                key={index}
                                className="font-bold text-2xl flex items-center"
                                style={{ fontFamily: "serif" }}
                              >
                                <input
                                  type="radio"
                                  name="clicker"
                                  className="mr-2 w-8 h-9 dark:text-white"
                                  checked={ans.checked}
                                  onChange={(e) => {
                                    studentQuestions[
                                      runnerChecker
                                    ].options[0].checked = false;
                                    studentQuestions[
                                      runnerChecker
                                    ].options[1].checked = false;
                                    studentQuestions[
                                      runnerChecker
                                    ].options[2].checked = false;
                                    studentQuestions[
                                      runnerChecker
                                    ].options[3].checked = false;
                                    ans.checked = e.target.checked;
                                  }}
                                />
                                <div
                                  className="font-bold text-2xl dark:text-white"
                                  style={{ fontFamily: "serif" }}
                                >
                                  {ans.value}
                                </div>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      {runnerChecker === 18 && (
                        <button
                          className=" w-fit h-fit pl-8 pr-8 pt-4 pb-4 rounded-xl cursor-pointer relative top-10 -right-24 hover:drop-shadow-xl dark:shadow-md block font-extrabold"
                          style={{
                            fontFamily: "serif",
                            background: currentColor,
                          }}
                          onClick={() => {
                            setShowResult(true);
                            submitAnswer();
                          }}
                        >
                          Submit
                          <GrEdit className="inline-block" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : schName === null ? (
              <div className="w-screen">
                <div
                  className="m-auto w-fit initialWelcome font-bold"
                  style={{
                    fontFamily: "serif",
                  }}
                >
                  Please Refresh Page
                </div>
              </div>
            ) : (
              <>
                <div className="w-fit m-auto relative top-3 font-bold text-2xl pickClassHeading dark:text-white">
                  Pick desired Class and click Write test for{" "}
                  <span
                    style={{
                      color: currentColor,
                    }}
                  >
                    {schName && schName[0].schoolNaming}
                  </span>{" "}
                  school
                </div>
                <div
                  className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around pickClassContainer"
                  style={{ minHeight: "70vh" }}
                >
                  {schName && (
                    <div className="h-fit w-fit bg-white pickClassBox rounded-xl dark:bg-gray-50 ml-5 shadow-xl pt-8 pb-8 pl-8 pr-8">
                      <div className="w-full flex justify-around h-3/5 items-center mb-4">
                        <SiGoogleclassroom className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white" />
                        <p style={{ fontFamily: "cursive" }}>
                          {schName[0].schoolNaming}
                        </p>
                      </div>
                      <div className="w-full flex justify-around h-fit items-center mb-4 numberOfClasses">
                        <p style={{ fontFamily: "cursive" }}>
                          {schName.length}
                        </p>
                        <p style={{ fontFamily: "cursive" }}>Classes</p>
                      </div>
                      <select
                        className="mb-4 hover:drop-shadow-xl dark:shadow-md pickClass"
                        onChange={(e) => {
                          setStudentPickedClass(e.target.value);
                        }}
                      >
                        <option value="">Pick Class</option>
                        {schName.map((arr) => (
                          <option value={arr.classNaming} key={arr._id}>
                            {arr.classNaming}
                          </option>
                        ))}
                      </select>
                      <hr />
                      <button
                        className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                        style={{ fontFamily: "serif" }}
                        onClick={() => {
                          showTests();
                        }}
                      >
                        Write Test
                        <GrEdit className="inline-block" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentAdmissionScreening;
