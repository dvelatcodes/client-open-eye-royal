import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reset, regClass } from "../features/classSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cryptoRandomStringAsync } from "crypto-random-string";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { Navbar, ThemeSettings } from "../components";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFraction1 } from "../Dashboard";
import { SelectClass } from "../components/student/StudentRegPage";

const SetupClass = () => {
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
  } = useStateContext();
  // initialize my states
  // initialize my states
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading, message, newClass } = useSelector(
    (state) => state.class
  );
  // hover state
  //  hover state
  const [hover, setHover] = useState({
    hoverAdd: false,
    hoverSave: false,
  });
  // hover state destructuring
  //  hover state destructuring
  const { hoverAdd, hoverSave } = hover;
  // subject states
  // subject states
  const [subjects, setSubjects] = useState([]);
  // class state
  // class state
  const [newClasses, setNewClasses] = useState({
    className: "Select Class",
    classType: "Class Type",
  });
  // class destructuring
  // class destructuring
  const { className, classType } = newClasses;
  // retrieve subjects to local Storage
  // retrieve subjects to local Storage
  useEffect(() => {
    // subject
    const retrievedSubjects = localStorage.getItem("subjects");
    const parsedSubject = JSON.parse(retrievedSubjects);
    // className
    const retrievedClassName = localStorage.getItem("className");
    const parsedClassName = JSON.parse(retrievedClassName);
    // classType
    const retrievedClassType = localStorage.getItem("classType");
    const parsedClassType = JSON.parse(retrievedClassType);
    // current color
    const retrieveCurrentColor = localStorage.getItem("colorMode");
    // current mode
    const retrieveCurrentMode = localStorage.getItem("themeMode");
    // set subject
    parsedSubject && setSubjects(parsedSubject);
    // set color
    retrieveCurrentColor && setCurrentColor(retrieveCurrentColor);
    // set mode
    retrieveCurrentMode && setCurrentMode(retrieveCurrentMode);
    // set className
    parsedClassName
      ? (newClasses.className = parsedClassName)
      : (newClasses.className = className);
    // newClasses.className = parsedClassName;
    // set classType
    parsedClassType &&
      setNewClasses({ ...newClasses, classType: parsedClassType });
  }, []);
  // save subjects to local Storage
  // save subjects to local Storage
  useEffect(() => {
    const subjectsContainer = JSON.stringify(subjects);
    localStorage.setItem("subjects", subjectsContainer);
  }, [subjects]);
  // save className to local Storage
  // save className to local Storage
  useEffect(() => {
    const classNameString = JSON.stringify(className);
    localStorage.setItem("className", classNameString);
  }, [className]);
  // save classType to local Storage
  // save classType to local Storage
  useEffect(() => {
    const classTypeString = JSON.stringify(classType);
    localStorage.setItem("classType", classTypeString);
  }, [classType]);
  // edit states
  // edit states
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  // my inputs
  // my inputs
  const [input, setInput] = useState("");
  // handle submit
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // handleAdd
  // handleAdd
  const handleAdd = async () => {
    if (input === "" || input.match(/[!-\/]|[:-\?]|[\[-`]|[\{-~]/)) return;
    const newTodo = {
      id: await cryptoRandomStringAsync({ length: 10 }),
      subName: input,
      completed: false,
    };
    setSubjects((prevItems) => [...prevItems, newTodo]);
    setInput("");
  };
  // deleteTodos
  // deleteTodos
  const deleteTodos = (id) => {
    const newTodos = subjects.filter((subject) => subject.id !== id);
    setSubjects(newTodos);
  };
  // toggleTodo
  // toggleTodo
  const toggleTodo = (id) => {
    const completedTodos = subjects.map((subject) => {
      if (subject.id === id) {
        subject.completed = !subject.completed;
      }
      return subject;
    });
    setSubjects(completedTodos);
  };
  // saveEditTodo
  // saveEditTodo
  const saveEditTodo = (id) => {
    const updatedSubject = subjects.map((subject) => {
      if (subject.id === id) {
        subject.subName = editingText;
      }
      return subject;
    });
    setSubjects(updatedSubject);
    setEditingText("");
    setTodoEditing(null);
  };
  // handle mouse enter
  // handle mouse enter
  const handleMouseEnter = (e) => {
    if (e.target.id === "addButton") setHover({ ...hover, hoverAdd: true });
    if (e.target.id === "saveButton") setHover({ ...hover, hoverSave: true });
  };

  // handle mouse leave
  // handle mouse leave
  const handleMouseLeave = (e) => {
    if (e.target.id === "addButton") setHover({ ...hover, hoverAdd: false });
    if (e.target.id === "saveButton") setHover({ ...hover, hoverSave: false });
  };
  // isError
  // isError
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/allClasses");
    }
    dispatch(reset());
  }, [reset, isError, isSuccess, newClass, message, navigate, dispatch]);
  // submitClass
  // submitClass
  const submitClass = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const myClass = {
      className,
      classType,
      subjects,
      pioneerId: user._id,
    };
    // console.log(myClass);

    dispatch(regClass(myClass));
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
        <DashboardFraction1
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
          <div
            className="mt-9 md:w-800 sm:w-760 lg:w-full min-h-screen h-fit relative"
            // style={{ minHeight: "100vh" }}
          >
            <form
              onSubmit={handleSubmit}
              className="min-h-screen h-fit w-2/3 translate-x-1/4 bg-white dark:bg-secondary-dark-bg rounded-2xl relative block pb-20"
              // style={{ Height: "fit-content" }}
            >
              <div className="m-auto top-9 text-xs relative font-extrabold tracking-tight dark:text-white text-slate-900 w-fit">
                Create New Class
              </div>
              <div className="bg-white m-auto relative top-16 dark:bg-secondary-dark-bg rounded-2xl h-fit w-3/4">
                <SelectClass
                  name={className}
                  value={className}
                  onChange={() => {}}
                  style={{ background: currentColor, color: "white" }}
                  data-id="select-class"
                  className="w-full h-20 dark:bg-main-dark-bg bg-main-bg lg:pl-40 sm:pl-0 shadow-md focus:outline-none block relative"
                  onClick={(e) => {
                    setNewClasses({ ...newClasses, className: e.target.value });
                    // console.log(className);
                  }}
                />
                <select
                  name={classType}
                  data-id="class-type"
                  className="w-full h-20 dark:bg-main-dark-bg mt-5 bg-main-bg lg:pl-40 sm:pl-0 shadow-md focus:outline-none"
                  onClick={(e) => {
                    setNewClasses({ ...newClasses, classType: e.target.value });
                  }}
                  style={{ color: currentColor }}
                >
                  <option value={classType}>{classType}</option>
                  <option
                    value="Science Class"
                    style={{ background: currentColor, color: "white" }}
                  >
                    Science Class
                  </option>
                  <option
                    value="Art Class"
                    style={{ background: currentColor, color: "white" }}
                  >
                    Art Class
                  </option>
                </select>
                <div
                  className="h-fit dark:bg-main-dark-bg mt-5 bg-main-bg shadow-md rounded-lg pb-4"
                  style={{ minHeight: "13vh" }}
                >
                  <div className="pl-5">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value);
                      }}
                      name="text"
                      className={`w-2/3 focus:outline-none mt-4 dark:border-color-white`}
                      style={{
                        border: `1px solid ${currentColor}`,
                      }}
                    />
                    <button
                      style={{
                        background:
                          (hoverAdd && currentColor) ||
                          (currentMode === "Light" ? "black" : "white"),
                        // color: hoverAdd ? "black" : "white",
                      }}
                      className={`font-bold w-1/5 ml-4 mt-4 dark:text-black hover:text-white dark:hover:text-white text-white`}
                      type="button"
                      id="addButton"
                      onClick={handleAdd}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Add
                    </button>
                  </div>
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="mt-5 ml-6 w-fit rounded-xl bg-white pt-2 pl-4 pr-4 pb-2 shadow-sm block relative"
                      style={{
                        background:
                          currentMode === "Dark" ? currentColor : "white",
                      }}
                    >
                      {todoEditing === subject.id ? (
                        <input
                          type="text"
                          onChange={(e) => setEditingText(e.target.value)}
                          value={editingText}
                          className={`focus:outline-none dark:border-color-white`}
                          style={{
                            border: `1px solid ${currentColor}`,
                          }}
                        />
                      ) : (
                        <p className="inline-block dark:text-white">
                          {subject.subName}
                        </p>
                      )}
                      <span className="ml-3 text-sm">
                        {"Teacher-Id : " + subject.id}
                      </span>
                      <input
                        type="checkbox"
                        checked={subject.completed}
                        onChange={() => toggleTodo(subject.id)}
                        className="inline-block ml-3 cursor-pointer"
                      />
                      {todoEditing === subject.id ? (
                        <span
                          className="inline-block ml-3 cursor-pointer"
                          onClick={() => saveEditTodo(subject.id)}
                        >
                          Submit Edits
                        </span>
                      ) : (
                        <span
                          className="inline-block ml-3 cursor-pointer"
                          onClick={() => setTodoEditing(subject.id)}
                        >
                          <GrEdit />
                        </span>
                      )}

                      <span
                        className="inline-block ml-3 cursor-pointer"
                        onClick={() => {
                          deleteTodos(subject.id);
                        }}
                      >
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  className=" dark:bg-main-dark-bg mt-5 bg-main-bg text-black h-12 shadow-md rounded-lg w-fit m-auto block pl-8 pr-8 text-base font-bold"
                  style={{
                    color: hoverSave ? "white" : currentColor,
                    background: hoverSave ? currentColor : "rgb(250 251 251",
                  }}
                  id="saveButton"
                  onClick={submitClass}
                  content="Submit"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupClass;
