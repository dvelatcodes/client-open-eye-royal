import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDefaultClasses } from "../features/classSlice";
import { reset, regClass } from "../features/classSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { Navbar, ThemeSettings } from "../components";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionPioneer } from "../Dashboard";

const SetupClassAdmin = () => {
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

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/pioneerschool");
    }
    dispatch(reset());
  }, [dispatch, reset, navigate, isSuccess, isError, isLoading, message]);
  // get default classes
  // get default classes
  useEffect(() => {
    const defaultClasses = JSON.parse(localStorage.getItem("defaultclasses"));
    console.log(defaultClasses.find((data) => data.className === "JSS 1A"));
    defaultClasses || dispatch(getDefaultClasses());
  }, []);
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
          <div
            className="mt-9 md:w-800 sm:w-760 lg:w-full min-h-screen h-fit relative"
            // style={{ minHeight: "100vh" }}
          >
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupClassAdmin;