import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionStudent } from "../Dashboard";
import { SiGoogleclassroom } from "react-icons/si";
import { GiMaterialsScience } from "react-icons/gi";
import { GoArrowUp } from "react-icons/go";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStudentTimetable, reset } from "../features/auth/authSlice";

const StudentTimetable = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    currentMode,
  } = useStateContext();
  // all schNames
  // all schNames
  const [schName, setSchName] = useState(null);
  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message, studentTimetable } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess && studentTimetable) {
      setSchName(studentTimetable);
      //   console.log(studentTimetable);
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
    studentTimetable,
  ]);

  // get default classes
  // get default classes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("student"));
    if (!user) {
      alert("Unauthorized, Please Sign-up or Login");
      navigate("/");
    }
    if (user) {
      if (user.pioneerId === "none") {
        //   dispatch(getAllPioneer());
        setSchName(null);
      }
      if (user.pioneerId !== "none") {
        const { pioneerId, studentClass } = user;
        dispatch(getStudentTimetable({ pioneerId, studentClass }));
      }
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
          {schName === null ? (
            <>
              <div className="m-auto w-fit font-bold italic">
                You Don't Have a Class Yet, Please Click on Available Schools
                for Screening
              </div>
            </>
          ) : (
            <>
              <div className="m-auto relative" style={{ width: "fit-content" }}>
                <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl dark:text-white">
                  {schName.className}
                </div>
                <div className="absolute left-0 right-0 flex -bottom-20 m-auto h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold bg-black">
                  {schName.classType
                    .filter((arr) => arr.classNaming === schName.className)[0]
                    .courses.map((ars) => (
                      <p
                        key={ars.id}
                        style={{ fontFamily: "serif" }}
                        className="text-white dark:text-black mr-3"
                      >
                        {ars.subName}
                      </p>
                    ))}
                </div>
                <table className="dark:bg-main-bg">
                  <thead>
                    <tr>
                      {schName.time.map((time, index) => (
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
                      {schName.monday.map((ar, index) => (
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
                      {schName.tuesday.map((ar, index) => (
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
                      {schName.wednesday.map((ar, index) => (
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
                      {schName.thursday.map((ar, index) => (
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
                      {schName.friday.map((ar, index) => (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentTimetable;
