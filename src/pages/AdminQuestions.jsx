import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { setAdminQuestions } from "../features/classSlice";
import { useNavigate } from "react-router-dom";
import { reset, getStudentScreenPioneer } from "../features/classSlice";
import { useSelector, useDispatch } from "react-redux";
import { DashboardFraction1 } from "../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GiTeacher, GiSchoolBag } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AdminQuestions = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();

  const [schName, setSchName] = useState("");

  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message, adminQuestions } =
    useSelector((state) => state.class);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && adminQuestions) {
      alert("you have questions");
      setSchName(adminQuestions);
    }
    if (isError) {
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset, adminQuestions]);

  //   questions
  // questions
  const [defaultQuestions, setDefaultQuestions] = useState([
    {
      question: "What is the largest animal living on land?",
      options: [
        { value: "Giraffe", checked: false },
        { value: "Elephant", checked: true },
        { value: "Monkey", checked: false },
        { value: "Cheetah", checked: false },
      ],
    },
    {
      question: "Who is the best programmer on planet earth",
      options: [
        { value: "Love aka dvelat", checked: true },
        { value: "Love aka dvelat", checked: true },
        { value: "Love aka dvelat", checked: true },
        { value: "Love aka dvelat", checked: true },
      ],
    },
    {
      question: "What is use for heating in the laboratory ",
      options: [
        { value: "fire wood", checked: false },
        { value: "stove", checked: false },
        { value: "Bunsen burnet", checked: true },
        { value: "volcano", checked: false },
      ],
    },
    {
      question: "Running is an example of what event ",
      options: [
        { value: "field", checked: false },
        { value: "track", checked: true },
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
        { value: "production of crops and rearing of animals", checked: true },
        { value: "food production and minerals", checked: false },
      ],
    },
    {
      question:
        "A person who welcome and direct visitors to the right person in an organization is called a ____",
      options: [
        { value: "receptionist", checked: true },
        { value: "staff", checked: false },
        { value: "worker", checked: false },
        { value: "ceo", checked: false },
      ],
    },
    {
      question: "_____ involves a change in the chemical composition of rock ",
      options: [
        { value: "chemical weathering", checked: true },
        { value: "topography", checked: false },
        { value: "geography", checked: false },
        { value: "soil", checked: false },
      ],
    },
    {
      question: "____ is a substance that change the way the body works",
      options: [
        { value: "water", checked: false },
        { value: "drug", checked: true },
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
        { value: "mixed farming ", checked: true },
        { value: "pastoral farming", checked: false },
      ],
    },
    {
      question:
        "_____ are primary rocks formed from hot molten rock which has cooled and solidified ",
      options: [
        { value: "sedimentary rocks", checked: false },
        { value: "metamorphic rocks", checked: false },
        { value: "igneous rocks", checked: true },
        { value: "physical weathering", checked: false },
      ],
    },
    {
      question:
        "To find out the truth about things scientist makes guesses and then puts them to the lest, and these guesses is called __ ",
      options: [
        { value: "hypothesis", checked: true },
        { value: "practical", checked: false },
        { value: "conclusion", checked: false },
        { value: "theory", checked: false },
      ],
    },
    {
      question: "One of these is what scientists use for experiment",
      options: [
        { value: "microscope", checked: true },
        { value: "carpet", checked: false },
        { value: "bed", checked: false },
        { value: "dance", checked: false },
      ],
    },
    {
      question: "____ is used for measuring the mass of objects ",
      options: [
        { value: "thermometer", checked: false },
        { value: "balance", checked: true },
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
        { value: "very true", checked: true },
        { value: "", checked: false },
      ],
    },
    {
      question: "Jumps which aim at achieving height are called ?",
      options: [
        { value: "horizontal jumps", checked: false },
        { value: "vertical jumps", checked: false },
        { value: "high jumps", checked: true },
        { value: "long jumps", checked: false },
      ],
    },
    {
      question:
        "_____ disease can be transmitted easily in over-crowded living conditions",
      options: [
        { value: "contagious", checked: true },
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
        { value: "an office", checked: true },
        { value: "bed room", checked: false },
        { value: "kitchen", checked: false },
      ],
    },
    {
      question: "The first stage of soil formation is accomplished by ____ ",
      options: [
        { value: "waethring process", checked: false },
        { value: ") weathering process", checked: true },
        { value: "withering process", checked: false },
        { value: "weuthering process", checked: false },
      ],
    },
    {
      question:
        "Letters, memoranda and telegrams are examples of ___ information",
      options: [
        { value: "oral", checked: false },
        { value: "written", checked: true },
        { value: "thinking", checked: false },
        { value: "shouting", checked: false },
      ],
    },
    {
      question: "When there's a will, there's a way. Do you concur?",
      options: [
        { value: "Yes, absolutely", checked: true },
        { value: "no", checked: false },
        { value: "na lie", checked: false },
        { value: "on the fence", checked: false },
      ],
    },
  ]);
  useEffect(() => {
    // console.log(defaultQuestions);
    // console.log(typeof defaultQuestions);
  });
  // get getStudentScreenPioneer
  // get getStudentScreenPioneer
  const saveQuestions = () => {
    const info = {
      defaultQuestions: defaultQuestions,
    };
    dispatch(setAdminQuestions(info));
  };
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
          <div className="md:w-800 md:mt-7 sm:mt-7 sm:w-760 lg:w-full relative">
            <div className="w-fit h-fit m-auto pt-8 pb-8">
              {/* {defaultQuestions.map((arr, index) => (
                <div key={index} className="w-fit h-fit mb-6">
                  <p>{arr.question}</p>
                  <ul>
                    {arr.options.map((ans, index) => (
                      <li key={index}>
                        <input
                          type="radio"
                          //   checked={ans.checked}
                          className="mr-2"
                        />
                        {ans.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))} */}
              <button
                type="button"
                className="text-black rounded-3xl font-bold hover:text-2xl"
                onClick={() => {
                  saveQuestions();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuestions;
