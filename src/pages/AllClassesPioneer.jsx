import React, { useState, useEffect } from "react";
import { Navbar, ThemeSettings } from "../components";
import {
  reset,
  getPioneerNigerClass,
  createTimetable,
} from "../features/classSlice";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { useStateContext } from "../contexts/ContextProvider";
import { DashboardFractionPioneer } from "../Dashboard";
import { useNavigate } from "react-router-dom";

const AllClassesPioneer = () => {
  const {
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
    setCurrentMode,
    currentMode,
    classes,
    setClasses,
  } = useStateContext();
  const [refresh, setRefresh] = useState(1);
  const [showTimetable, setShowTimetable] = useState(null);
  // science class
  // science class
  const [scienceClass, setScienceClass] = useState(null);
  // art class
  // art class
  const [artClass, setArtClass] = useState(null);
  // commercial class
  // commercial class
  const [commercialClass, setCommercialClass] = useState(null);
  // jss 1a
  // jss 1a
  const [js1aMon, setJs1aMon] = useState([]);
  const [js1aTue, setJs1aTue] = useState([]);
  const [js1aWed, setJs1aWed] = useState([]);
  const [js1aThur, setJs1aThur] = useState([]);
  const [js1aFri, setJs1aFri] = useState([]);
  // jss1b
  // jss1b
  const [js1bMon, setJs1bMon] = useState([]);
  const [js1bTue, setJs1bTue] = useState([]);
  const [js1bWed, setJs1bWed] = useState([]);
  const [js1bThur, setJs1bThur] = useState([]);
  const [js1bFri, setJs1bFri] = useState([]);
  // jss1c
  // jss1c
  const [js1cMon, setJs1cMon] = useState([]);
  const [js1cTue, setJs1cTue] = useState([]);
  const [js1cWed, setJs1cWed] = useState([]);
  const [js1cThur, setJs1cThur] = useState([]);
  const [js1cFri, setJs1cFri] = useState([]);
  // jss1d
  // jss1d
  const [js1dMon, setJs1dMon] = useState([]);
  const [js1dTue, setJs1dTue] = useState([]);
  const [js1dWed, setJs1dWed] = useState([]);
  const [js1dThur, setJs1dThur] = useState([]);
  const [js1dFri, setJs1dFri] = useState([]);
  // jss 2a
  // jss 2a
  const [js2aMon, setJs2aMon] = useState([]);
  const [js2aTue, setJs2aTue] = useState([]);
  const [js2aWed, setJs2aWed] = useState([]);
  const [js2aThur, setJs2aThur] = useState([]);
  const [js2aFri, setJs2aFri] = useState([]);
  // jss2b
  // jss2b
  const [js2bMon, setJs2bMon] = useState([]);
  const [js2bTue, setJs2bTue] = useState([]);
  const [js2bWed, setJs2bWed] = useState([]);
  const [js2bThur, setJs2bThur] = useState([]);
  const [js2bFri, setJs2bFri] = useState([]);
  // jss2c
  // jss2c
  const [js2cMon, setJs2cMon] = useState([]);
  const [js2cTue, setJs2cTue] = useState([]);
  const [js2cWed, setJs2cWed] = useState([]);
  const [js2cThur, setJs2cThur] = useState([]);
  const [js2cFri, setJs2cFri] = useState([]);
  // jss2d
  // jss2d
  const [js2dMon, setJs2dMon] = useState([]);
  const [js2dTue, setJs2dTue] = useState([]);
  const [js2dWed, setJs2dWed] = useState([]);
  const [js2dThur, setJs2dThur] = useState([]);
  const [js2dFri, setJs2dFri] = useState([]);
  // jss 3a
  // jss 3a
  const [js3aMon, setJs3aMon] = useState([]);
  const [js3aTue, setJs3aTue] = useState([]);
  const [js3aWed, setJs3aWed] = useState([]);
  const [js3aThur, setJs3aThur] = useState([]);
  const [js3aFri, setJs3aFri] = useState([]);
  // jss3b
  // jss3b
  const [js3bMon, setJs3bMon] = useState([]);
  const [js3bTue, setJs3bTue] = useState([]);
  const [js3bWed, setJs3bWed] = useState([]);
  const [js3bThur, setJs3bThur] = useState([]);
  const [js3bFri, setJs3bFri] = useState([]);
  // jss3c
  // jss3c
  const [js3cMon, setJs3cMon] = useState([]);
  const [js3cTue, setJs3cTue] = useState([]);
  const [js3cWed, setJs3cWed] = useState([]);
  const [js3cThur, setJs3cThur] = useState([]);
  const [js3cFri, setJs3cFri] = useState([]);
  // jss3d
  // jss3d
  const [js3dMon, setJs3dMon] = useState([]);
  const [js3dTue, setJs3dTue] = useState([]);
  const [js3dWed, setJs3dWed] = useState([]);
  const [js3dThur, setJs3dThur] = useState([]);
  const [js3dFri, setJs3dFri] = useState([]);
  // ss1a
  // ss1a
  const [ss1aMon, setSs1aMon] = useState([]);
  const [ss1aTue, setSs1aTue] = useState([]);
  const [ss1aWed, setSs1aWed] = useState([]);
  const [ss1aThur, setSs1aThur] = useState([]);
  const [ss1aFri, setSs1aFri] = useState([]);
  // ss1b
  // ss1b
  const [ss1bMon, setSs1bMon] = useState([]);
  const [ss1bTue, setSs1bTue] = useState([]);
  const [ss1bWed, setSs1bWed] = useState([]);
  const [ss1bThur, setSs1bThur] = useState([]);
  const [ss1bFri, setSs1bFri] = useState([]);
  // ss1c
  // ss1c
  const [ss1cMon, setSs1cMon] = useState([]);
  const [ss1cTue, setSs1cTue] = useState([]);
  const [ss1cWed, setSs1cWed] = useState([]);
  const [ss1cThur, setSs1cThur] = useState([]);
  const [ss1cFri, setSs1cFri] = useState([]);
  // ss1d
  // ss1d
  const [ss1dMon, setSs1dMon] = useState([]);
  const [ss1dTue, setSs1dTue] = useState([]);
  const [ss1dWed, setSs1dWed] = useState([]);
  const [ss1dThur, setSs1dThur] = useState([]);
  const [ss1dFri, setSs1dFri] = useState([]);
  // ss2a
  // ss2a
  const [ss2aMon, setSs2aMon] = useState([]);
  const [ss2aTue, setSs2aTue] = useState([]);
  const [ss2aWed, setSs2aWed] = useState([]);
  const [ss2aThur, setSs2aThur] = useState([]);
  const [ss2aFri, setSs2aFri] = useState([]);
  // ss2b
  // ss2b
  const [ss2bMon, setSs2bMon] = useState([]);
  const [ss2bTue, setSs2bTue] = useState([]);
  const [ss2bWed, setSs2bWed] = useState([]);
  const [ss2bThur, setSs2bThur] = useState([]);
  const [ss2bFri, setSs2bFri] = useState([]);
  // ss2c
  // ss2c
  const [ss2cMon, setSs2cMon] = useState([]);
  const [ss2cTue, setSs2cTue] = useState([]);
  const [ss2cWed, setSs2cWed] = useState([]);
  const [ss2cThur, setSs2cThur] = useState([]);
  const [ss2cFri, setSs2cFri] = useState([]);
  // ss2d
  // ss2d
  const [ss2dMon, setSs2dMon] = useState([]);
  const [ss2dTue, setSs2dTue] = useState([]);
  const [ss2dWed, setSs2dWed] = useState([]);
  const [ss2dThur, setSs2dThur] = useState([]);
  const [ss2dFri, setSs2dFri] = useState([]);
  // ss3a
  // ss3a
  const [ss3aMon, setSs3aMon] = useState([]);
  const [ss3aTue, setSs3aTue] = useState([]);
  const [ss3aWed, setSs3aWed] = useState([]);
  const [ss3aThur, setSs3aThur] = useState([]);
  const [ss3aFri, setSs3aFri] = useState([]);
  // ss3b
  // ss3b
  const [ss3bMon, setSs3bMon] = useState([]);
  const [ss3bTue, setSs3bTue] = useState([]);
  const [ss3bWed, setSs3bWed] = useState([]);
  const [ss3bThur, setSs3bThur] = useState([]);
  const [ss3bFri, setSs3bFri] = useState([]);
  // ss3c
  // ss3c
  const [ss3cMon, setSs3cMon] = useState([]);
  const [ss3cTue, setSs3cTue] = useState([]);
  const [ss3cWed, setSs3cWed] = useState([]);
  const [ss3cThur, setSs3cThur] = useState([]);
  const [ss3cFri, setSs3cFri] = useState([]);
  // ss3d
  // ss3d
  const [ss3dMon, setSs3dMon] = useState([]);
  const [ss3dTue, setSs3dTue] = useState([]);
  const [ss3dWed, setSs3dWed] = useState([]);
  const [ss3dThur, setSs3dThur] = useState([]);
  const [ss3dFri, setSs3dFri] = useState([]);
  // time
  // time
  // setCursorIsActive
  const [cursorIsActive, setCursorIsActive] = useState(false);
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
  const [scienceTime, setScienceTime] = useState([
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
  ]);
  const [classNum, setClassNum] = useState(null);
  const [tests, setTests] = useState(null);
  // state initialization
  // state initialization
  const { isSuccess, isError, isLoading, message, timetable } = useSelector(
    (state) => state.class
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect for states
  // useEffect for states
  useEffect(() => {
    if (isSuccess) {
      // alert("you have classes");
    }
    if (isError) {
      toast.error(message);
      console.log("error");
    }
    dispatch(reset());
  }, [isSuccess, isError, isLoading, message, dispatch, reset]);
  // pioneer class data
  // pioneer class data
  const [classData, setClassData] = useState(null);
  // fetching pioneer class data from db and local storage
  // fetching pioneer class data from db and local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const { _id } = user;
      const year1 = JSON.parse(localStorage.getItem("startOfAcademicYear"));
      const year2 = JSON.parse(localStorage.getItem("endOfAcademicYear"));
      if (year1 && year2) {
        const schSection = year1 + "/" + year2;
        dispatch(getPioneerNigerClass({ _id, schSection }));
      }
    }
    if (!user) {
      alert("Unauthorized, Please Sign-up or Login");
      navigate("/");
    }
    const pioneerClasses = JSON.parse(
      localStorage.getItem("pioneerNigerClass")
    );
    if (pioneerClasses) {
      const { arr } = pioneerClasses;
      pioneerClasses.pioneerClass && setClassData(arr);
      const singleClass = localStorage.getItem("pSingleClass");
      singleClass && setClasses(singleClass);
      const getSeeMode = localStorage.getItem("themeMode");
      getSeeMode && setCurrentMode(getSeeMode);
      const { pioneerClass } = pioneerClasses;
      pioneerClass && setClassNum(pioneerClass);
      pioneerClass &&
        setTests(
          pioneerClass.filter(
            (all) =>
              all.classNaming.match("JSS 1") ||
              all.classNaming.match("JSS 2") ||
              all.classNaming.match("JSS 3")
          )
        );
      classNum &&
        setScienceClass(
          classNum.filter(
            (arr) =>
              arr.classNaming.match("SSS 1A") ||
              arr.classNaming.match("SSS 1B") ||
              arr.classNaming.match("SSS 2A") ||
              arr.classNaming.match("SSS 2B") ||
              arr.classNaming.match("SSS 3A") ||
              arr.classNaming.match("SSS 3B")
          )
        );
      pioneerClass &&
        setArtClass(
          pioneerClass.filter(
            (arr) =>
              arr.classNaming.match("SSS 1C") ||
              arr.classNaming.match("SSS 2C") ||
              arr.classNaming.match("SSS 3C")
          )
        );
      pioneerClass &&
        setCommercialClass(
          pioneerClass.filter(
            (arr) =>
              arr.classNaming.match("SSS 1D") ||
              arr.classNaming.match("SSS 2D") ||
              arr.classNaming.match("SSS 3D")
          )
        );
    }
  }, []);
  // tests &&
  //   console.log(tests.filter((arr) => arr.classNaming === "JSS 1B")[0].courses);
  useEffect(() => {
    localStorage.setItem("themeMode", currentMode);
  }, [currentMode]);
  // console.log(artClass);
  const saveChanges = () => {
    if (
      js1aMon.length > 0 &&
      js1aTue.length > 0 &&
      js1aWed.length > 0 &&
      js1aThur.length > 0 &&
      js1aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 1A",
        monday: js1aMon,
        tuesday: js1aTue,
        wednesday: js1aWed,
        thursday: js1aThur,
        friday: js1aFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 1A")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js1bMon.length > 0 &&
      js1bTue.length > 0 &&
      js1bWed.length > 0 &&
      js1bThur.length > 0 &&
      js1bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 1B",
        monday: js1bMon,
        tuesday: js1bTue,
        wednesday: js1bWed,
        thursday: js1bThur,
        friday: js1bFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 1B")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js1cMon.length > 0 &&
      js1cTue.length > 0 &&
      js1cWed.length > 0 &&
      js1cThur.length > 0 &&
      js1cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 1C",
        monday: js1cMon,
        tuesday: js1cTue,
        wednesday: js1cWed,
        thursday: js1cThur,
        friday: js1cFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 1C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js1dMon.length > 0 &&
      js1dTue.length > 0 &&
      js1dWed.length > 0 &&
      js1dThur.length > 0 &&
      js1dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 1D",
        monday: js1dMon,
        tuesday: js1dTue,
        wednesday: js1dWed,
        thursday: js1dThur,
        friday: js1dFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 1D")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js2aMon.length > 0 &&
      js2aTue.length > 0 &&
      js2aWed.length > 0 &&
      js2aThur.length > 0 &&
      js2aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 2A",
        monday: js2aMon,
        tuesday: js2aTue,
        wednesday: js2aWed,
        thursday: js2aThur,
        friday: js2aFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 2A")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js2bMon.length > 0 &&
      js2bTue.length > 0 &&
      js2bWed.length > 0 &&
      js2bThur.length > 0 &&
      js2bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 2B",
        monday: js2bMon,
        tuesday: js2bTue,
        wednesday: js2bWed,
        thursday: js2bThur,
        friday: js2bFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 2B")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js2cMon.length > 0 &&
      js2cTue.length > 0 &&
      js2cWed.length > 0 &&
      js2cThur.length > 0 &&
      js2cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 2C",
        monday: js2cMon,
        tuesday: js2cTue,
        wednesday: js2cWed,
        thursday: js2cThur,
        friday: js2cFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 2C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js2dMon.length > 0 &&
      js2dTue.length > 0 &&
      js2dWed.length > 0 &&
      js2dThur.length > 0 &&
      js2dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 2D",
        monday: js2dMon,
        tuesday: js2dTue,
        wednesday: js2dWed,
        thursday: js2dThur,
        friday: js2dFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 2D")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js3aMon.length > 0 &&
      js3aTue.length > 0 &&
      js3aWed.length > 0 &&
      js3aThur.length > 0 &&
      js3aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 3A",
        monday: js3aMon,
        tuesday: js3aTue,
        wednesday: js3aWed,
        thursday: js3aThur,
        friday: js3aFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 3A")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js3bMon.length > 0 &&
      js3bTue.length > 0 &&
      js3bWed.length > 0 &&
      js3bThur.length > 0 &&
      js3bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 3B",
        monday: js3bMon,
        tuesday: js3bTue,
        wednesday: js3bWed,
        thursday: js3bThur,
        friday: js3bFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 3B")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js3cMon.length > 0 &&
      js3cTue.length > 0 &&
      js3cWed.length > 0 &&
      js3cThur.length > 0 &&
      js3cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 3C",
        monday: js3cMon,
        tuesday: js3cTue,
        wednesday: js3cWed,
        thursday: js3cThur,
        friday: js3cFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 3C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      js3dMon.length > 0 &&
      js3dTue.length > 0 &&
      js3dWed.length > 0 &&
      js3dThur.length > 0 &&
      js3dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "JSS 3D",
        monday: js3dMon,
        tuesday: js3dTue,
        wednesday: js3dWed,
        thursday: js3dThur,
        friday: js3dFri,
        classType: classNum.filter((arr) => arr.classNaming === "JSS 3D")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss1aMon.length > 0 &&
      ss1aTue.length > 0 &&
      ss1aWed.length > 0 &&
      ss1aThur.length > 0 &&
      ss1aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 1A",
        monday: ss1aMon,
        tuesday: ss1aTue,
        wednesday: ss1aWed,
        thursday: ss1aThur,
        friday: ss1aFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 1A")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss1bMon.length > 0 &&
      ss1bTue.length > 0 &&
      ss1bWed.length > 0 &&
      ss1bThur.length > 0 &&
      ss1bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 1B",
        monday: ss1bMon,
        tuesday: ss1bTue,
        wednesday: ss1bWed,
        thursday: ss1bThur,
        friday: ss1bFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 1B")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss1cMon.length > 0 &&
      ss1cTue.length > 0 &&
      ss1cWed.length > 0 &&
      ss1cThur.length > 0 &&
      ss1cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 1C",
        monday: ss1cMon,
        tuesday: ss1cTue,
        wednesday: ss1cWed,
        thursday: ss1cThur,
        friday: ss1cFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 1C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss1dMon.length > 0 &&
      ss1dTue.length > 0 &&
      ss1dWed.length > 0 &&
      ss1dThur.length > 0 &&
      ss1dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 1D",
        monday: ss1dMon,
        tuesday: ss1dTue,
        wednesday: ss1dWed,
        thursday: ss1dThur,
        friday: ss1dFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 1D")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss2aMon.length > 0 &&
      ss2aTue.length > 0 &&
      ss2aWed.length > 0 &&
      ss2aThur.length > 0 &&
      ss2aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 2A",
        monday: ss2aMon,
        tuesday: ss2aTue,
        wednesday: ss2aWed,
        thursday: ss2aThur,
        friday: ss2aFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 2A")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss2bMon.length > 0 &&
      ss2bTue.length > 0 &&
      ss2bWed.length > 0 &&
      ss2bThur.length > 0 &&
      ss2bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 2B",
        monday: ss2bMon,
        tuesday: ss2bTue,
        wednesday: ss2bWed,
        thursday: ss2bThur,
        friday: ss2bFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 2B")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss2cMon.length > 0 &&
      ss2cTue.length > 0 &&
      ss2cWed.length > 0 &&
      ss2cThur.length > 0 &&
      ss2cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 2C",
        monday: ss2cMon,
        tuesday: ss2cTue,
        wednesday: ss2cWed,
        thursday: ss2cThur,
        friday: ss2cFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 2C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss2dMon.length > 0 &&
      ss2dTue.length > 0 &&
      ss2dWed.length > 0 &&
      ss2dThur.length > 0 &&
      ss2dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 2D",
        monday: ss2dMon,
        tuesday: ss2dTue,
        wednesday: ss2dWed,
        thursday: ss2dThur,
        friday: ss2dFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 2D")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss3aMon.length > 0 &&
      ss3aTue.length > 0 &&
      ss3aWed.length > 0 &&
      ss3aThur.length > 0 &&
      ss3aFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 3A",
        monday: ss3aMon,
        tuesday: ss3aTue,
        wednesday: ss3aWed,
        thursday: ss3aThur,
        friday: ss3aFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 3A")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss3bMon.length > 0 &&
      ss3bTue.length > 0 &&
      ss3bWed.length > 0 &&
      ss3bThur.length > 0 &&
      ss3bFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 3B",
        monday: ss3bMon,
        tuesday: ss3bTue,
        wednesday: ss3bWed,
        thursday: ss3bThur,
        friday: ss3bFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 3B")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss3cMon.length > 0 &&
      ss3cTue.length > 0 &&
      ss3cWed.length > 0 &&
      ss3cThur.length > 0 &&
      ss3cFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 3C",
        monday: ss3cMon,
        tuesday: ss3cTue,
        wednesday: ss3cWed,
        thursday: ss3cThur,
        friday: ss3cFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 3C")[0]
          .courses,
        time: defaultTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
    if (
      ss3dMon.length > 0 &&
      ss3dTue.length > 0 &&
      ss3dWed.length > 0 &&
      ss3dThur.length > 0 &&
      ss3dFri.length > 0
    ) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { _id } = user;
      const info = {
        className: "SSS 3D",
        monday: ss3dMon,
        tuesday: ss3dTue,
        wednesday: ss3dWed,
        thursday: ss3dThur,
        friday: ss3dFri,
        classType: classNum.filter((arr) => arr.classNaming === "SSS 3D")[0]
          .courses,
        time: scienceTime,
        pioneerId: _id,
      };
      dispatch(createTimetable(info));
    }
  };
  // classNum &&
  //   console.log(
  //     classNum.filter((arr) => arr.classNaming === "JSS 1B")[0].courses
  //   );
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex  bg-neutral-700 relative  dark:bg-main-dark-bg">
        <DashboardFractionPioneer
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
          {classData ? (
            showTimetable ? (
              <div
                className=" md:mt-2 sm:mt-2 lg:w-full absolute top-0 bottom-0 right-0 left-0 h-fit dark:bg-main-dark-bg bg-main-bg z-20 pb-60"
                style={{
                  // minHeight: "200vh",
                  background:
                    currentMode === "Light"
                      ? "rgb(250 251 251)"
                      : "rgb(32 35 42)",
                }}
              >
                <div
                  className="relative left-20 flex justify-around items-center h-14 w-40 border-1 rounded-xl shadow-2xl text-white font-semibold bg-green-500 hover:text-green-500 hover:bg-white"
                  style={{
                    fontFamily: "serif",
                    cursor: cursorIsActive ? "not-allowed" : "pointer",
                  }}
                  onClick={() => {
                    saveChanges();
                    setCursorIsActive(true);
                    setTimeout(() => {
                      alert(
                        "Timetable Successfully Generated, You Can Now View Timetable from Class"
                      );
                    }, 1000);
                  }}
                >
                  Save Changes
                </div>
                <div
                  className="relative flex justify-around items-center left-20 top-2  h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl text-black hover:text-green-200 font-semibold bg-green-200 hover:bg-black"
                  style={{ fontFamily: "serif" }}
                  onClick={() => {
                    setShowTimetable(null);
                  }}
                >
                  <BiLeftArrow className="absolute top-0 -left-24 right-0 bottom-0 m-auto w-fit" />
                  Go Back
                </div>
                {tests &&
                  classNum.filter((data) => data.classNaming === "JSS 1A") &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 1A")
                    .map((all) => {
                      const js1aIni = Math.random();
                      const js1aFinal = Math.floor(
                        js1aIni * all.courses.length
                      );

                      if (!js1aMon.includes(all.courses[js1aFinal].subName)) {
                        js1aMon.push(all.courses[js1aFinal].subName);
                        if (js1aMon.length === 6) {
                          js1aMon.splice(5, 0, "Break");
                        }
                        if (js1aMon.length === 12) {
                          js1aMon.pop();
                        }
                        if (js1aMon.length === 13) {
                          js1aMon.splice(11, 2);
                        }
                        if (js1aMon.length === 14) {
                          js1aMon.splice(11, 3);
                        }
                        if (js1aMon.length === 15) {
                          js1aMon.splice(11, 4);
                        }
                        if (js1aMon.length === 16) {
                          js1aMon.splice(11, 5);
                        }
                      }
                      const js1aIniTue = Math.random();
                      const js1aFinalTue = Math.floor(
                        js1aIniTue * all.courses.length
                      );

                      if (
                        !js1aTue.includes(all.courses[js1aFinalTue].subName)
                      ) {
                        js1aTue.push(all.courses[js1aFinalTue].subName);
                        if (js1aTue.length === 6) {
                          js1aTue.splice(5, 0, "Break");
                        }
                        if (js1aTue.length === 12) {
                          js1aTue.pop();
                        }
                        if (js1aTue.length === 13) {
                          js1aTue.splice(11, 2);
                        }
                        if (js1aTue.length === 14) {
                          js1aTue.splice(11, 3);
                        }
                        if (js1aTue.length === 15) {
                          js1aTue.splice(11, 4);
                        }
                        if (js1aTue.length === 16) {
                          js1aTue.splice(11, 5);
                        }
                      }
                      const js1aIniWed = Math.random();
                      const js1aFinalWed = Math.floor(
                        js1aIniWed * all.courses.length
                      );

                      if (
                        !js1aWed.includes(all.courses[js1aFinalWed].subName)
                      ) {
                        js1aWed.push(all.courses[js1aFinalWed].subName);
                        if (js1aWed.length === 6) {
                          js1aWed.splice(5, 0, "Break");
                        }
                        if (js1aWed.length === 12) {
                          js1aWed.pop();
                        }
                        if (js1aWed.length === 13) {
                          js1aWed.splice(11, 2);
                        }
                        if (js1aWed.length === 14) {
                          js1aWed.splice(11, 3);
                        }
                        if (js1aWed.length === 15) {
                          js1aWed.splice(11, 4);
                        }
                        if (js1aWed.length === 16) {
                          js1aWed.splice(11, 5);
                        }
                      }
                      const js1aIniThur = Math.random();
                      const js1aFinalThur = Math.floor(
                        js1aIniThur * all.courses.length
                      );

                      if (
                        !js1aThur.includes(all.courses[js1aFinalThur].subName)
                      ) {
                        js1aThur.push(all.courses[js1aFinalThur].subName);
                        if (js1aThur.length === 6) {
                          js1aThur.splice(5, 0, "Break");
                        }
                        if (js1aThur.length === 12) {
                          js1aThur.pop();
                        }
                        if (js1aThur.length === 13) {
                          js1aThur.splice(11, 2);
                        }
                        if (js1aThur.length === 14) {
                          js1aThur.splice(11, 3);
                        }
                        if (js1aThur.length === 15) {
                          js1aThur.splice(11, 4);
                        }
                        if (js1aThur.length === 16) {
                          js1aThur.splice(11, 5);
                        }
                      }
                      const js1aIniFri = Math.random();
                      const js1aFinalFri = Math.floor(
                        js1aIniFri * all.courses.length
                      );

                      if (
                        !js1aFri.includes(all.courses[js1aFinalFri].subName)
                      ) {
                        js1aFri.push(all.courses[js1aFinalFri].subName);
                        if (js1aFri.length === 6) {
                          js1aFri.splice(5, 0, "Break");
                        }
                        if (js1aFri.length === 12) {
                          js1aFri.pop();
                        }
                        if (js1aFri.length === 13) {
                          js1aFri.splice(11, 2);
                        }
                        if (js1aFri.length === 14) {
                          js1aFri.splice(11, 3);
                        }
                        if (js1aFri.length === 15) {
                          js1aFri.splice(11, 4);
                        }
                        if (js1aFri.length === 16) {
                          js1aFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-9 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-0 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-16 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 1A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="absolute left-0 right-0 -top-8 m-auto w-fit font-extrabold text-2xl">
                        JSS 1A
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
                            {js1aMon.map((ar, index) => (
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
                            {js1aTue.map((ar, index) => (
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
                            {js1aWed.map((ar, index) => (
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
                            {js1aThur.map((ar, index) => (
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
                            {js1aFri.map((ar, index) => (
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

                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 1B") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 1B")
                    .map((all) => {
                      const js1bIni = Math.random();
                      const js1bFinal = Math.floor(
                        js1bIni * all.courses.length
                      );

                      if (!js1bMon.includes(all.courses[js1bFinal].subName)) {
                        js1bMon.push(all.courses[js1bFinal].subName);
                        if (js1bMon.length === 6) {
                          js1bMon.splice(5, 0, "Break");
                        }
                        if (js1bMon.length === 12) {
                          js1bMon.pop();
                        }
                        if (js1bMon.length === 13) {
                          js1bMon.splice(11, 2);
                        }
                        if (js1bMon.length === 14) {
                          js1bMon.splice(11, 3);
                        }
                        if (js1bMon.length === 15) {
                          js1bMon.splice(11, 4);
                        }
                        if (js1bMon.length === 16) {
                          js1bMon.splice(11, 5);
                        }
                      }
                      const js1bIniTue = Math.random();
                      const js1bFinalTue = Math.floor(
                        js1bIniTue * all.courses.length
                      );

                      if (
                        !js1bTue.includes(all.courses[js1bFinalTue].subName)
                      ) {
                        js1bTue.push(all.courses[js1bFinalTue].subName);
                        if (js1bTue.length === 6) {
                          js1bTue.splice(5, 0, "Break");
                        }
                        if (js1bTue.length === 12) {
                          js1bTue.pop();
                        }
                        if (js1bTue.length === 13) {
                          js1bTue.splice(11, 2);
                        }
                        if (js1bTue.length === 14) {
                          js1bTue.splice(11, 3);
                        }
                        if (js1bTue.length === 15) {
                          js1bTue.splice(11, 4);
                        }
                        if (js1bTue.length === 16) {
                          js1bTue.splice(11, 5);
                        }
                      }
                      const js1bIniWed = Math.random();
                      const js1bFinalWed = Math.floor(
                        js1bIniWed * all.courses.length
                      );

                      if (
                        !js1bWed.includes(all.courses[js1bFinalWed].subName)
                      ) {
                        js1bWed.push(all.courses[js1bFinalWed].subName);
                        if (js1bWed.length === 6) {
                          js1bWed.splice(5, 0, "Break");
                        }
                        if (js1bWed.length === 12) {
                          js1bWed.pop();
                        }
                        if (js1bWed.length === 13) {
                          js1bWed.splice(11, 2);
                        }
                        if (js1bWed.length === 14) {
                          js1bWed.splice(11, 3);
                        }
                        if (js1bWed.length === 15) {
                          js1bWed.splice(11, 4);
                        }
                        if (js1bWed.length === 16) {
                          js1bWed.splice(11, 5);
                        }
                      }
                      const js1bIniThur = Math.random();
                      const js1bFinalThur = Math.floor(
                        js1bIniThur * all.courses.length
                      );

                      if (
                        !js1bThur.includes(all.courses[js1bFinalThur].subName)
                      ) {
                        js1bThur.push(all.courses[js1bFinalThur].subName);
                        if (js1bThur.length === 6) {
                          js1bThur.splice(5, 0, "Break");
                        }
                        if (js1bThur.length === 12) {
                          js1bThur.pop();
                        }
                        if (js1bThur.length === 13) {
                          js1bThur.splice(11, 2);
                        }
                        if (js1bThur.length === 14) {
                          js1bThur.splice(11, 3);
                        }
                        if (js1bThur.length === 15) {
                          js1bThur.splice(11, 4);
                        }
                        if (js1bThur.length === 16) {
                          js1bThur.splice(11, 5);
                        }
                      }
                      const js1bIniFri = Math.random();
                      const js1bFinalFri = Math.floor(
                        js1bIniFri * all.courses.length
                      );

                      if (
                        !js1bFri.includes(all.courses[js1bFinalFri].subName)
                      ) {
                        js1bFri.push(all.courses[js1bFinalFri].subName);
                        if (js1bFri.length === 6) {
                          js1bFri.splice(5, 0, "Break");
                        }
                        if (js1bFri.length === 12) {
                          js1bFri.pop();
                        }
                        if (js1bFri.length === 13) {
                          js1bFri.splice(11, 2);
                        }
                        if (js1bFri.length === 14) {
                          js1bFri.splice(11, 3);
                        }
                        if (js1bFri.length === 15) {
                          js1bFri.splice(11, 4);
                        }
                        if (js1bFri.length === 16) {
                          js1bFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-9 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 1B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 1B
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
                            {js1bMon.map((ar, index) => (
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
                            {js1bTue.map((ar, index) => (
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
                            {js1bWed.map((ar, index) => (
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
                            {js1bThur.map((ar, index) => (
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
                            {js1bFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 1C") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 1C")
                    .map((all) => {
                      const js1cIni = Math.random();
                      const js1cFinal = Math.floor(
                        js1cIni * all.courses.length
                      );

                      if (!js1cMon.includes(all.courses[js1cFinal].subName)) {
                        js1cMon.push(all.courses[js1cFinal].subName);
                        if (js1cMon.length === 6) {
                          js1cMon.splice(5, 0, "Break");
                        }
                        if (js1cMon.length === 12) {
                          js1cMon.pop();
                        }
                        if (js1cMon.length === 13) {
                          js1cMon.splice(11, 2);
                        }
                        if (js1cMon.length === 14) {
                          js1cMon.splice(11, 3);
                        }
                        if (js1cMon.length === 15) {
                          js1cMon.splice(11, 4);
                        }
                        if (js1cMon.length === 16) {
                          js1cMon.splice(11, 5);
                        }
                      }
                      const js1cIniTue = Math.random();
                      const js1cFinalTue = Math.floor(
                        js1cIniTue * all.courses.length
                      );

                      if (
                        !js1cTue.includes(all.courses[js1cFinalTue].subName)
                      ) {
                        js1cTue.push(all.courses[js1cFinalTue].subName);
                        if (js1cTue.length === 6) {
                          js1cTue.splice(5, 0, "Break");
                        }
                        if (js1cTue.length === 12) {
                          js1cTue.pop();
                        }
                        if (js1cTue.length === 13) {
                          js1cTue.splice(11, 2);
                        }
                        if (js1cTue.length === 14) {
                          js1cTue.splice(11, 3);
                        }
                        if (js1cTue.length === 15) {
                          js1cTue.splice(11, 4);
                        }
                        if (js1cTue.length === 16) {
                          js1cTue.splice(11, 5);
                        }
                      }
                      const js1cIniWed = Math.random();
                      const js1cFinalWed = Math.floor(
                        js1cIniWed * all.courses.length
                      );

                      if (
                        !js1cWed.includes(all.courses[js1cFinalWed].subName)
                      ) {
                        js1cWed.push(all.courses[js1cFinalWed].subName);
                        if (js1cWed.length === 6) {
                          js1cWed.splice(5, 0, "Break");
                        }
                        if (js1cWed.length === 12) {
                          js1cWed.pop();
                        }
                        if (js1cWed.length === 13) {
                          js1cWed.splice(11, 2);
                        }
                        if (js1cWed.length === 14) {
                          js1cWed.splice(11, 3);
                        }
                        if (js1cWed.length === 15) {
                          js1cWed.splice(11, 4);
                        }
                        if (js1cWed.length === 16) {
                          js1cWed.splice(11, 5);
                        }
                      }
                      const js1cIniThur = Math.random();
                      const js1cFinalThur = Math.floor(
                        js1cIniThur * all.courses.length
                      );

                      if (
                        !js1cThur.includes(all.courses[js1cFinalThur].subName)
                      ) {
                        js1cThur.push(all.courses[js1cFinalThur].subName);
                        if (js1cThur.length === 6) {
                          js1cThur.splice(5, 0, "Break");
                        }
                        if (js1cThur.length === 12) {
                          js1cThur.pop();
                        }
                        if (js1cThur.length === 13) {
                          js1cThur.splice(11, 2);
                        }
                        if (js1cThur.length === 14) {
                          js1cThur.splice(11, 3);
                        }
                        if (js1cThur.length === 15) {
                          js1cThur.splice(11, 4);
                        }
                        if (js1cThur.length === 16) {
                          js1cThur.splice(11, 5);
                        }
                      }
                      const js1cIniFri = Math.random();
                      const js1cFinalFri = Math.floor(
                        js1cIniFri * all.courses.length
                      );

                      if (
                        !js1cFri.includes(all.courses[js1cFinalFri].subName)
                      ) {
                        js1cFri.push(all.courses[js1cFinalFri].subName);
                        if (js1cFri.length === 6) {
                          js1cFri.splice(5, 0, "Break");
                        }
                        if (js1cFri.length === 12) {
                          js1cFri.pop();
                        }
                        if (js1cFri.length === 13) {
                          js1cFri.splice(11, 2);
                        }
                        if (js1cFri.length === 14) {
                          js1cFri.splice(11, 3);
                        }
                        if (js1cFri.length === 15) {
                          js1cFri.splice(11, 4);
                        }
                        if (js1cFri.length === 16) {
                          js1cFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-9 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 1c")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 1C
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
                            {js1cMon.map((ar, index) => (
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
                            {js1cTue.map((ar, index) => (
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
                            {js1cWed.map((ar, index) => (
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
                            {js1cThur.map((ar, index) => (
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
                            {js1cFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 1D") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 1D")
                    .map((all) => {
                      const js1dIni = Math.random();
                      const js1dFinal = Math.floor(
                        js1dIni * all.courses.length
                      );

                      if (!js1dMon.includes(all.courses[js1dFinal].subName)) {
                        js1dMon.push(all.courses[js1dFinal].subName);
                        if (js1dMon.length === 6) {
                          js1dMon.splice(5, 0, "Break");
                        }
                        if (js1dMon.length === 12) {
                          js1dMon.pop();
                        }
                        if (js1dMon.length === 13) {
                          js1dMon.splice(11, 2);
                        }
                        if (js1dMon.length === 14) {
                          js1dMon.splice(11, 3);
                        }
                        if (js1dMon.length === 15) {
                          js1dMon.splice(11, 4);
                        }
                        if (js1dMon.length === 16) {
                          js1dMon.splice(11, 5);
                        }
                      }
                      const js1dIniTue = Math.random();
                      const js1dFinalTue = Math.floor(
                        js1dIniTue * all.courses.length
                      );

                      if (
                        !js1dTue.includes(all.courses[js1dFinalTue].subName)
                      ) {
                        js1dTue.push(all.courses[js1dFinalTue].subName);
                        if (js1dTue.length === 6) {
                          js1dTue.splice(5, 0, "Break");
                        }
                        if (js1dTue.length === 12) {
                          js1dTue.pop();
                        }
                        if (js1dTue.length === 13) {
                          js1dTue.splice(11, 2);
                        }
                        if (js1dTue.length === 14) {
                          js1dTue.splice(11, 3);
                        }
                        if (js1dTue.length === 15) {
                          js1dTue.splice(11, 4);
                        }
                        if (js1dTue.length === 16) {
                          js1dTue.splice(11, 5);
                        }
                      }
                      const js1dIniWed = Math.random();
                      const js1dFinalWed = Math.floor(
                        js1dIniWed * all.courses.length
                      );

                      if (
                        !js1dWed.includes(all.courses[js1dFinalWed].subName)
                      ) {
                        js1dWed.push(all.courses[js1dFinalWed].subName);
                        if (js1dWed.length === 6) {
                          js1dWed.splice(5, 0, "Break");
                        }
                        if (js1dWed.length === 12) {
                          js1dWed.pop();
                        }
                        if (js1dWed.length === 13) {
                          js1dWed.splice(11, 2);
                        }
                        if (js1dWed.length === 14) {
                          js1dWed.splice(11, 3);
                        }
                        if (js1dWed.length === 15) {
                          js1dWed.splice(11, 4);
                        }
                        if (js1dWed.length === 16) {
                          js1dWed.splice(11, 5);
                        }
                      }
                      const js1dIniThur = Math.random();
                      const js1dFinalThur = Math.floor(
                        js1dIniThur * all.courses.length
                      );

                      if (
                        !js1dThur.includes(all.courses[js1dFinalThur].subName)
                      ) {
                        js1dThur.push(all.courses[js1dFinalThur].subName);
                        if (js1dThur.length === 6) {
                          js1dThur.splice(5, 0, "Break");
                        }
                        if (js1dThur.length === 12) {
                          js1dThur.pop();
                        }
                        if (js1dThur.length === 13) {
                          js1dThur.splice(11, 2);
                        }
                        if (js1dThur.length === 14) {
                          js1dThur.splice(11, 3);
                        }
                        if (js1dThur.length === 15) {
                          js1dThur.splice(11, 4);
                        }
                        if (js1dThur.length === 16) {
                          js1dThur.splice(11, 5);
                        }
                      }
                      const js1dIniFri = Math.random();
                      const js1dFinalFri = Math.floor(
                        js1dIniFri * all.courses.length
                      );

                      if (
                        !js1dFri.includes(all.courses[js1dFinalFri].subName)
                      ) {
                        js1dFri.push(all.courses[js1dFinalFri].subName);
                        if (js1dFri.length === 6) {
                          js1dFri.splice(5, 0, "Break");
                        }
                        if (js1dFri.length === 12) {
                          js1dFri.pop();
                        }
                        if (js1dFri.length === 13) {
                          js1dFri.splice(11, 2);
                        }
                        if (js1dFri.length === 14) {
                          js1dFri.splice(11, 3);
                        }
                        if (js1dFri.length === 15) {
                          js1dFri.splice(11, 4);
                        }
                        if (js1dFri.length === 16) {
                          js1dFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-9 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 1D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 1D
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
                            {js1dMon.map((ar, index) => (
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
                            {js1dTue.map((ar, index) => (
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
                            {js1dWed.map((ar, index) => (
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
                            {js1dThur.map((ar, index) => (
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
                            {js1dFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 2A") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 2A")
                    .map((all) => {
                      const js2aIni = Math.random();
                      const js2aFinal = Math.floor(
                        js2aIni * all.courses.length
                      );

                      if (!js2aMon.includes(all.courses[js2aFinal].subName)) {
                        js2aMon.push(all.courses[js2aFinal].subName);
                        if (js2aMon.length === 6) {
                          js2aMon.splice(5, 0, "Break");
                        }
                        if (js2aMon.length === 12) {
                          js2aMon.pop();
                        }
                        if (js2aMon.length === 13) {
                          js2aMon.splice(11, 2);
                        }
                        if (js2aMon.length === 14) {
                          js2aMon.splice(11, 3);
                        }
                        if (js2aMon.length === 15) {
                          js2aMon.splice(11, 4);
                        }
                        if (js2aMon.length === 16) {
                          js2aMon.splice(11, 5);
                        }
                      }
                      const js2aIniTue = Math.random();
                      const js2aFinalTue = Math.floor(
                        js2aIniTue * all.courses.length
                      );

                      if (
                        !js2aTue.includes(all.courses[js2aFinalTue].subName)
                      ) {
                        js2aTue.push(all.courses[js2aFinalTue].subName);
                        if (js2aTue.length === 6) {
                          js2aTue.splice(5, 0, "Break");
                        }
                        if (js2aTue.length === 12) {
                          js2aTue.pop();
                        }
                        if (js2aTue.length === 13) {
                          js2aTue.splice(11, 2);
                        }
                        if (js2aTue.length === 14) {
                          js2aTue.splice(11, 3);
                        }
                        if (js2aTue.length === 15) {
                          js2aTue.splice(11, 4);
                        }
                        if (js2aTue.length === 16) {
                          js2aTue.splice(11, 5);
                        }
                      }
                      const js2aIniWed = Math.random();
                      const js2aFinalWed = Math.floor(
                        js2aIniWed * all.courses.length
                      );

                      if (
                        !js2aWed.includes(all.courses[js2aFinalWed].subName)
                      ) {
                        js2aWed.push(all.courses[js2aFinalWed].subName);
                        if (js2aWed.length === 6) {
                          js2aWed.splice(5, 0, "Break");
                        }
                        if (js2aWed.length === 12) {
                          js2aWed.pop();
                        }
                        if (js2aWed.length === 13) {
                          js2aWed.splice(11, 2);
                        }
                        if (js2aWed.length === 14) {
                          js2aWed.splice(11, 3);
                        }
                        if (js2aWed.length === 15) {
                          js2aWed.splice(11, 4);
                        }
                        if (js2aWed.length === 16) {
                          js2aWed.splice(11, 5);
                        }
                      }
                      const js2aIniThur = Math.random();
                      const js2aFinalThur = Math.floor(
                        js2aIniThur * all.courses.length
                      );

                      if (
                        !js2aThur.includes(all.courses[js2aFinalThur].subName)
                      ) {
                        js2aThur.push(all.courses[js2aFinalThur].subName);
                        if (js2aThur.length === 6) {
                          js2aThur.splice(5, 0, "Break");
                        }
                        if (js2aThur.length === 12) {
                          js2aThur.pop();
                        }
                        if (js2aThur.length === 13) {
                          js2aThur.splice(11, 2);
                        }
                        if (js2aThur.length === 14) {
                          js2aThur.splice(11, 3);
                        }
                        if (js2aThur.length === 15) {
                          js2aThur.splice(11, 4);
                        }
                        if (js2aThur.length === 16) {
                          js2aThur.splice(11, 5);
                        }
                      }
                      const js2aIniFri = Math.random();
                      const js2aFinalFri = Math.floor(
                        js2aIniFri * all.courses.length
                      );

                      if (
                        !js2aFri.includes(all.courses[js2aFinalFri].subName)
                      ) {
                        js2aFri.push(all.courses[js2aFinalFri].subName);
                        if (js2aFri.length === 6) {
                          js2aFri.splice(5, 0, "Break");
                        }
                        if (js2aFri.length === 12) {
                          js2aFri.pop();
                        }
                        if (js2aFri.length === 13) {
                          js2aFri.splice(11, 2);
                        }
                        if (js2aFri.length === 14) {
                          js2aFri.splice(11, 3);
                        }
                        if (js2aFri.length === 15) {
                          js2aFri.splice(11, 4);
                        }
                        if (js2aFri.length === 16) {
                          js2aFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 2A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="absolute left-0 right-0 -top-8 m-auto w-fit font-extrabold text-2xl">
                        JSS 2A
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
                            {js2aMon.map((ar, index) => (
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
                            {js2aTue.map((ar, index) => (
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
                            {js2aWed.map((ar, index) => (
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
                            {js2aThur.map((ar, index) => (
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
                            {js2aFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 2B") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 2B")
                    .map((all) => {
                      const js2bIni = Math.random();
                      const js2bFinal = Math.floor(
                        js2bIni * all.courses.length
                      );

                      if (!js2bMon.includes(all.courses[js2bFinal].subName)) {
                        js2bMon.push(all.courses[js2bFinal].subName);
                        if (js2bMon.length === 6) {
                          js2bMon.splice(5, 0, "Break");
                        }
                        if (js2bMon.length === 12) {
                          js2bMon.pop();
                        }
                        if (js2bMon.length === 13) {
                          js2bMon.splice(11, 2);
                        }
                        if (js2bMon.length === 14) {
                          js2bMon.splice(11, 3);
                        }
                        if (js2bMon.length === 15) {
                          js2bMon.splice(11, 4);
                        }
                        if (js2bMon.length === 16) {
                          js2bMon.splice(11, 5);
                        }
                      }
                      const js2bIniTue = Math.random();
                      const js2bFinalTue = Math.floor(
                        js2bIniTue * all.courses.length
                      );

                      if (
                        !js2bTue.includes(all.courses[js2bFinalTue].subName)
                      ) {
                        js2bTue.push(all.courses[js2bFinalTue].subName);
                        if (js2bTue.length === 6) {
                          js2bTue.splice(5, 0, "Break");
                        }
                        if (js2bTue.length === 12) {
                          js2bTue.pop();
                        }
                        if (js2bTue.length === 13) {
                          js2bTue.splice(11, 2);
                        }
                        if (js2bTue.length === 14) {
                          js2bTue.splice(11, 3);
                        }
                        if (js2bTue.length === 15) {
                          js2bTue.splice(11, 4);
                        }
                        if (js2bTue.length === 16) {
                          js2bTue.splice(11, 5);
                        }
                      }
                      const js2bIniWed = Math.random();
                      const js2bFinalWed = Math.floor(
                        js2bIniWed * all.courses.length
                      );

                      if (
                        !js2bWed.includes(all.courses[js2bFinalWed].subName)
                      ) {
                        js2bWed.push(all.courses[js2bFinalWed].subName);
                        if (js2bWed.length === 6) {
                          js2bWed.splice(5, 0, "Break");
                        }
                        if (js2bWed.length === 12) {
                          js2bWed.pop();
                        }
                        if (js2bWed.length === 13) {
                          js2bWed.splice(11, 2);
                        }
                        if (js2bWed.length === 14) {
                          js2bWed.splice(11, 3);
                        }
                        if (js2bWed.length === 15) {
                          js2bWed.splice(11, 4);
                        }
                        if (js2bWed.length === 16) {
                          js2bWed.splice(11, 5);
                        }
                      }
                      const js2bIniThur = Math.random();
                      const js2bFinalThur = Math.floor(
                        js2bIniThur * all.courses.length
                      );

                      if (
                        !js2bThur.includes(all.courses[js2bFinalThur].subName)
                      ) {
                        js2bThur.push(all.courses[js2bFinalThur].subName);
                        if (js2bThur.length === 6) {
                          js2bThur.splice(5, 0, "Break");
                        }
                        if (js2bThur.length === 12) {
                          js2bThur.pop();
                        }
                        if (js2bThur.length === 13) {
                          js2bThur.splice(11, 2);
                        }
                        if (js2bThur.length === 14) {
                          js2bThur.splice(11, 3);
                        }
                        if (js2bThur.length === 15) {
                          js2bThur.splice(11, 4);
                        }
                        if (js2bThur.length === 16) {
                          js2bThur.splice(11, 5);
                        }
                      }
                      const js2bIniFri = Math.random();
                      const js2bFinalFri = Math.floor(
                        js2bIniFri * all.courses.length
                      );

                      if (
                        !js2bFri.includes(all.courses[js2bFinalFri].subName)
                      ) {
                        js2bFri.push(all.courses[js2bFinalFri].subName);
                        if (js2bFri.length === 6) {
                          js2bFri.splice(5, 0, "Break");
                        }
                        if (js2bFri.length === 12) {
                          js2bFri.pop();
                        }
                        if (js2bFri.length === 13) {
                          js2bFri.splice(11, 2);
                        }
                        if (js2bFri.length === 14) {
                          js2bFri.splice(11, 3);
                        }
                        if (js2bFri.length === 15) {
                          js2bFri.splice(11, 4);
                        }
                        if (js2bFri.length === 16) {
                          js1bFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 2B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 2B
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
                            {js2bMon.map((ar, index) => (
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
                            {js2bTue.map((ar, index) => (
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
                            {js2bWed.map((ar, index) => (
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
                            {js2bThur.map((ar, index) => (
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
                            {js2bFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 2C") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 2C")
                    .map((all) => {
                      const js2cIni = Math.random();
                      const js2cFinal = Math.floor(
                        js2cIni * all.courses.length
                      );

                      if (!js2cMon.includes(all.courses[js2cFinal].subName)) {
                        js2cMon.push(all.courses[js2cFinal].subName);
                        if (js2cMon.length === 6) {
                          js2cMon.splice(5, 0, "Break");
                        }
                        if (js2cMon.length === 12) {
                          js2cMon.pop();
                        }
                        if (js2cMon.length === 13) {
                          js2cMon.splice(11, 2);
                        }
                        if (js2cMon.length === 14) {
                          js2cMon.splice(11, 3);
                        }
                        if (js2cMon.length === 15) {
                          js2cMon.splice(11, 4);
                        }
                        if (js2cMon.length === 16) {
                          js2cMon.splice(11, 5);
                        }
                      }
                      const js2cIniTue = Math.random();
                      const js2cFinalTue = Math.floor(
                        js2cIniTue * all.courses.length
                      );

                      if (
                        !js2cTue.includes(all.courses[js2cFinalTue].subName)
                      ) {
                        js2cTue.push(all.courses[js2cFinalTue].subName);
                        if (js2cTue.length === 6) {
                          js2cTue.splice(5, 0, "Break");
                        }
                        if (js2cTue.length === 12) {
                          js2cTue.pop();
                        }
                        if (js2cTue.length === 13) {
                          js2cTue.splice(11, 2);
                        }
                        if (js2cTue.length === 14) {
                          js2cTue.splice(11, 3);
                        }
                        if (js2cTue.length === 15) {
                          js2cTue.splice(11, 4);
                        }
                        if (js2cTue.length === 16) {
                          js2cTue.splice(11, 5);
                        }
                      }
                      const js2cIniWed = Math.random();
                      const js2cFinalWed = Math.floor(
                        js2cIniWed * all.courses.length
                      );

                      if (
                        !js2cWed.includes(all.courses[js2cFinalWed].subName)
                      ) {
                        js2cWed.push(all.courses[js2cFinalWed].subName);
                        if (js2cWed.length === 6) {
                          js2cWed.splice(5, 0, "Break");
                        }
                        if (js2cWed.length === 12) {
                          js2cWed.pop();
                        }
                        if (js2cWed.length === 13) {
                          js2cWed.splice(11, 2);
                        }
                        if (js2cWed.length === 14) {
                          js2cWed.splice(11, 3);
                        }
                        if (js2cWed.length === 15) {
                          js2cWed.splice(11, 4);
                        }
                        if (js2cWed.length === 16) {
                          js2cWed.splice(11, 5);
                        }
                      }
                      const js2cIniThur = Math.random();
                      const js2cFinalThur = Math.floor(
                        js2cIniThur * all.courses.length
                      );

                      if (
                        !js2cThur.includes(all.courses[js2cFinalThur].subName)
                      ) {
                        js2cThur.push(all.courses[js2cFinalThur].subName);
                        if (js2cThur.length === 6) {
                          js2cThur.splice(5, 0, "Break");
                        }
                        if (js2cThur.length === 12) {
                          js2cThur.pop();
                        }
                        if (js2cThur.length === 13) {
                          js2cThur.splice(11, 2);
                        }
                        if (js2cThur.length === 14) {
                          js2cThur.splice(11, 3);
                        }
                        if (js2cThur.length === 15) {
                          js2cThur.splice(11, 4);
                        }
                        if (js2cThur.length === 16) {
                          js2cThur.splice(11, 5);
                        }
                      }
                      const js2cIniFri = Math.random();
                      const js2cFinalFri = Math.floor(
                        js2cIniFri * all.courses.length
                      );

                      if (
                        !js2cFri.includes(all.courses[js2cFinalFri].subName)
                      ) {
                        js2cFri.push(all.courses[js2cFinalFri].subName);
                        if (js2cFri.length === 6) {
                          js2cFri.splice(5, 0, "Break");
                        }
                        if (js2cFri.length === 12) {
                          js2cFri.pop();
                        }
                        if (js2cFri.length === 13) {
                          js2cFri.splice(11, 2);
                        }
                        if (js2cFri.length === 14) {
                          js2cFri.splice(11, 3);
                        }
                        if (js2cFri.length === 15) {
                          js2cFri.splice(11, 4);
                        }
                        if (js2cFri.length === 16) {
                          js2cFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 2C")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 2C
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
                            {js2cMon.map((ar, index) => (
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
                            {js2cTue.map((ar, index) => (
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
                            {js2cWed.map((ar, index) => (
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
                            {js2cThur.map((ar, index) => (
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
                            {js2cFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 2D") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 2D")
                    .map((all) => {
                      const js2dIni = Math.random();
                      const js2dFinal = Math.floor(
                        js2dIni * all.courses.length
                      );

                      if (!js2dMon.includes(all.courses[js2dFinal].subName)) {
                        js2dMon.push(all.courses[js2dFinal].subName);
                        if (js2dMon.length === 6) {
                          js2dMon.splice(5, 0, "Break");
                        }
                        if (js2dMon.length === 12) {
                          js2dMon.pop();
                        }
                        if (js2dMon.length === 13) {
                          js2dMon.splice(11, 2);
                        }
                        if (js2dMon.length === 14) {
                          js2dMon.splice(11, 3);
                        }
                        if (js2dMon.length === 15) {
                          js2dMon.splice(11, 4);
                        }
                        if (js2dMon.length === 16) {
                          js2dMon.splice(11, 5);
                        }
                      }
                      const js2dIniTue = Math.random();
                      const js2dFinalTue = Math.floor(
                        js2dIniTue * all.courses.length
                      );

                      if (
                        !js2dTue.includes(all.courses[js2dFinalTue].subName)
                      ) {
                        js2dTue.push(all.courses[js2dFinalTue].subName);
                        if (js2dTue.length === 6) {
                          js2dTue.splice(5, 0, "Break");
                        }
                        if (js2dTue.length === 12) {
                          js2dTue.pop();
                        }
                        if (js2dTue.length === 13) {
                          js2dTue.splice(11, 2);
                        }
                        if (js2dTue.length === 14) {
                          js2dTue.splice(11, 3);
                        }
                        if (js2dTue.length === 15) {
                          js2dTue.splice(11, 4);
                        }
                        if (js2dTue.length === 16) {
                          js2dTue.splice(11, 5);
                        }
                      }
                      const js2dIniWed = Math.random();
                      const js2dFinalWed = Math.floor(
                        js2dIniWed * all.courses.length
                      );

                      if (
                        !js2dWed.includes(all.courses[js2dFinalWed].subName)
                      ) {
                        js2dWed.push(all.courses[js2dFinalWed].subName);
                        if (js2dWed.length === 6) {
                          js2dWed.splice(5, 0, "Break");
                        }
                        if (js2dWed.length === 12) {
                          js2dWed.pop();
                        }
                        if (js2dWed.length === 13) {
                          js2dWed.splice(11, 2);
                        }
                        if (js2dWed.length === 14) {
                          js2dWed.splice(11, 3);
                        }
                        if (js2dWed.length === 15) {
                          js2dWed.splice(11, 4);
                        }
                        if (js2dWed.length === 16) {
                          js2dWed.splice(11, 5);
                        }
                      }
                      const js2dIniThur = Math.random();
                      const js2dFinalThur = Math.floor(
                        js2dIniThur * all.courses.length
                      );

                      if (
                        !js2dThur.includes(all.courses[js2dFinalThur].subName)
                      ) {
                        js2dThur.push(all.courses[js2dFinalThur].subName);
                        if (js2dThur.length === 6) {
                          js2dThur.splice(5, 0, "Break");
                        }
                        if (js2dThur.length === 12) {
                          js2dThur.pop();
                        }
                        if (js2dThur.length === 13) {
                          js2dThur.splice(11, 2);
                        }
                        if (js2dThur.length === 14) {
                          js2dThur.splice(11, 3);
                        }
                        if (js2dThur.length === 15) {
                          js2dThur.splice(11, 4);
                        }
                        if (js2dThur.length === 16) {
                          js2dThur.splice(11, 5);
                        }
                      }
                      const js2dIniFri = Math.random();
                      const js2dFinalFri = Math.floor(
                        js2dIniFri * all.courses.length
                      );

                      if (
                        !js2dFri.includes(all.courses[js2dFinalFri].subName)
                      ) {
                        js2dFri.push(all.courses[js2dFinalFri].subName);
                        if (js2dFri.length === 6) {
                          js2dFri.splice(5, 0, "Break");
                        }
                        if (js2dFri.length === 12) {
                          js2dFri.pop();
                        }
                        if (js2dFri.length === 13) {
                          js2dFri.splice(11, 2);
                        }
                        if (js2dFri.length === 14) {
                          js2dFri.splice(11, 3);
                        }
                        if (js2dFri.length === 15) {
                          js2dFri.splice(11, 4);
                        }
                        if (js2dFri.length === 16) {
                          js2dFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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

                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 2D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 2D
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
                            {js2dMon.map((ar, index) => (
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
                            {js2dTue.map((ar, index) => (
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
                            {js2dWed.map((ar, index) => (
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
                            {js2dThur.map((ar, index) => (
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
                            {js2dFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 3A") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 3A")
                    .map((all) => {
                      const js3aIni = Math.random();
                      const js3aFinal = Math.floor(
                        js3aIni * all.courses.length
                      );

                      if (!js3aMon.includes(all.courses[js3aFinal].subName)) {
                        js3aMon.push(all.courses[js3aFinal].subName);
                        if (js3aMon.length === 6) {
                          js3aMon.splice(5, 0, "Break");
                        }
                        if (js3aMon.length === 12) {
                          js3aMon.pop();
                        }
                        if (js3aMon.length === 13) {
                          js3aMon.splice(11, 2);
                        }
                        if (js3aMon.length === 14) {
                          js3aMon.splice(11, 3);
                        }
                        if (js3aMon.length === 15) {
                          js3aMon.splice(11, 4);
                        }
                        if (js3aMon.length === 16) {
                          js3aMon.splice(11, 5);
                        }
                      }
                      const js3aIniTue = Math.random();
                      const js3aFinalTue = Math.floor(
                        js3aIniTue * all.courses.length
                      );

                      if (
                        !js3aTue.includes(all.courses[js3aFinalTue].subName)
                      ) {
                        js3aTue.push(all.courses[js3aFinalTue].subName);
                        if (js3aTue.length === 6) {
                          js3aTue.splice(5, 0, "Break");
                        }
                        if (js3aTue.length === 12) {
                          js3aTue.pop();
                        }
                        if (js3aTue.length === 13) {
                          js3aTue.splice(11, 2);
                        }
                        if (js3aTue.length === 14) {
                          js3aTue.splice(11, 3);
                        }
                        if (js3aTue.length === 15) {
                          js3aTue.splice(11, 4);
                        }
                        if (js3aTue.length === 16) {
                          js3aTue.splice(11, 5);
                        }
                      }
                      const js3aIniWed = Math.random();
                      const js3aFinalWed = Math.floor(
                        js3aIniWed * all.courses.length
                      );

                      if (
                        !js3aWed.includes(all.courses[js3aFinalWed].subName)
                      ) {
                        js3aWed.push(all.courses[js3aFinalWed].subName);
                        if (js3aWed.length === 6) {
                          js3aWed.splice(5, 0, "Break");
                        }
                        if (js3aWed.length === 12) {
                          js3aWed.pop();
                        }
                        if (js3aWed.length === 13) {
                          js3aWed.splice(11, 2);
                        }
                        if (js3aWed.length === 14) {
                          js3aWed.splice(11, 3);
                        }
                        if (js3aWed.length === 15) {
                          js3aWed.splice(11, 4);
                        }
                        if (js3aWed.length === 16) {
                          js3aWed.splice(11, 5);
                        }
                      }
                      const js3aIniThur = Math.random();
                      const js3aFinalThur = Math.floor(
                        js3aIniThur * all.courses.length
                      );

                      if (
                        !js3aThur.includes(all.courses[js3aFinalThur].subName)
                      ) {
                        js3aThur.push(all.courses[js3aFinalThur].subName);
                        if (js3aThur.length === 6) {
                          js3aThur.splice(5, 0, "Break");
                        }
                        if (js3aThur.length === 12) {
                          js3aThur.pop();
                        }
                        if (js3aThur.length === 13) {
                          js3aThur.splice(11, 2);
                        }
                        if (js3aThur.length === 14) {
                          js3aThur.splice(11, 3);
                        }
                        if (js3aThur.length === 15) {
                          js3aThur.splice(11, 4);
                        }
                        if (js3aThur.length === 16) {
                          js3aThur.splice(11, 5);
                        }
                      }
                      const js3aIniFri = Math.random();
                      const js3aFinalFri = Math.floor(
                        js3aIniFri * all.courses.length
                      );

                      if (
                        !js3aFri.includes(all.courses[js3aFinalFri].subName)
                      ) {
                        js3aFri.push(all.courses[js3aFinalFri].subName);
                        if (js3aFri.length === 6) {
                          js3aFri.splice(5, 0, "Break");
                        }
                        if (js3aFri.length === 12) {
                          js3aFri.pop();
                        }
                        if (js3aFri.length === 13) {
                          js3aFri.splice(11, 2);
                        }
                        if (js3aFri.length === 14) {
                          js3aFri.splice(11, 3);
                        }
                        if (js3aFri.length === 15) {
                          js3aFri.splice(11, 4);
                        }
                        if (js3aFri.length === 16) {
                          js3aFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 3A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 3A
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
                            {js3aMon.map((ar, index) => (
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
                            {js3aTue.map((ar, index) => (
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
                            {js3aWed.map((ar, index) => (
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
                            {js3aThur.map((ar, index) => (
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
                            {js3aFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 3B") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 3B")
                    .map((all) => {
                      const js3bIni = Math.random();
                      const js3bFinal = Math.floor(
                        js3bIni * all.courses.length
                      );

                      if (!js3bMon.includes(all.courses[js3bFinal].subName)) {
                        js3bMon.push(all.courses[js3bFinal].subName);
                        if (js3bMon.length === 6) {
                          js3bMon.splice(5, 0, "Break");
                        }
                        if (js3bMon.length === 12) {
                          js3bMon.pop();
                        }
                        if (js3bMon.length === 13) {
                          js3bMon.splice(11, 2);
                        }
                        if (js3bMon.length === 14) {
                          js3bMon.splice(11, 3);
                        }
                        if (js3bMon.length === 15) {
                          js3bMon.splice(11, 4);
                        }
                        if (js3bMon.length === 16) {
                          js3bMon.splice(11, 5);
                        }
                      }
                      const js3bIniTue = Math.random();
                      const js3bFinalTue = Math.floor(
                        js3bIniTue * all.courses.length
                      );

                      if (
                        !js3bTue.includes(all.courses[js3bFinalTue].subName)
                      ) {
                        js3bTue.push(all.courses[js3bFinalTue].subName);
                        if (js3bTue.length === 6) {
                          js3bTue.splice(5, 0, "Break");
                        }
                        if (js3bTue.length === 12) {
                          js3bTue.pop();
                        }
                        if (js3bTue.length === 13) {
                          js3bTue.splice(11, 2);
                        }
                        if (js3bTue.length === 14) {
                          js3bTue.splice(11, 3);
                        }
                        if (js3bTue.length === 15) {
                          js3bTue.splice(11, 4);
                        }
                        if (js3bTue.length === 16) {
                          js3bTue.splice(11, 5);
                        }
                      }
                      const js3bIniWed = Math.random();
                      const js3bFinalWed = Math.floor(
                        js3bIniWed * all.courses.length
                      );

                      if (
                        !js3bWed.includes(all.courses[js3bFinalWed].subName)
                      ) {
                        js3bWed.push(all.courses[js3bFinalWed].subName);
                        if (js3bWed.length === 6) {
                          js3bWed.splice(5, 0, "Break");
                        }
                        if (js3bWed.length === 12) {
                          js3bWed.pop();
                        }
                        if (js3bWed.length === 13) {
                          js3bWed.splice(11, 2);
                        }
                        if (js3bWed.length === 14) {
                          js3bWed.splice(11, 3);
                        }
                        if (js3bWed.length === 15) {
                          js3bWed.splice(11, 4);
                        }
                        if (js3bWed.length === 16) {
                          js3bWed.splice(11, 5);
                        }
                      }
                      const js3bIniThur = Math.random();
                      const js3bFinalThur = Math.floor(
                        js3bIniThur * all.courses.length
                      );

                      if (
                        !js3bThur.includes(all.courses[js3bFinalThur].subName)
                      ) {
                        js3bThur.push(all.courses[js3bFinalThur].subName);
                        if (js3bThur.length === 6) {
                          js3bThur.splice(5, 0, "Break");
                        }
                        if (js3bThur.length === 12) {
                          js3bThur.pop();
                        }
                        if (js3bThur.length === 13) {
                          js3bThur.splice(11, 2);
                        }
                        if (js3bThur.length === 14) {
                          js3bThur.splice(11, 3);
                        }
                        if (js3bThur.length === 15) {
                          js3bThur.splice(11, 4);
                        }
                        if (js3bThur.length === 16) {
                          js3bThur.splice(11, 5);
                        }
                      }
                      const js3bIniFri = Math.random();
                      const js3bFinalFri = Math.floor(
                        js3bIniFri * all.courses.length
                      );

                      if (
                        !js3bFri.includes(all.courses[js3bFinalFri].subName)
                      ) {
                        js3bFri.push(all.courses[js3bFinalFri].subName);
                        if (js3bFri.length === 6) {
                          js3bFri.splice(5, 0, "Break");
                        }
                        if (js3bFri.length === 12) {
                          js3bFri.pop();
                        }
                        if (js3bFri.length === 13) {
                          js3bFri.splice(11, 2);
                        }
                        if (js3bFri.length === 14) {
                          js3bFri.splice(11, 3);
                        }
                        if (js3bFri.length === 15) {
                          js3bFri.splice(11, 4);
                        }
                        if (js3bFri.length === 16) {
                          js3bFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 3B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 3B
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
                            {js3bMon.map((ar, index) => (
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
                            {js3bTue.map((ar, index) => (
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
                            {js3bWed.map((ar, index) => (
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
                            {js3bThur.map((ar, index) => (
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
                            {js3bFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 3C") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 3C")
                    .map((all) => {
                      const js3cIni = Math.random();
                      const js3cFinal = Math.floor(
                        js3cIni * all.courses.length
                      );

                      if (!js3cMon.includes(all.courses[js3cFinal].subName)) {
                        js3cMon.push(all.courses[js3cFinal].subName);
                        if (js3cMon.length === 6) {
                          js3cMon.splice(5, 0, "Break");
                        }
                        if (js3cMon.length === 12) {
                          js3cMon.pop();
                        }
                        if (js3cMon.length === 13) {
                          js3cMon.splice(11, 2);
                        }
                        if (js3cMon.length === 14) {
                          js3cMon.splice(11, 3);
                        }
                        if (js3cMon.length === 15) {
                          js3cMon.splice(11, 4);
                        }
                        if (js3cMon.length === 16) {
                          js3cMon.splice(11, 5);
                        }
                      }
                      const js3cIniTue = Math.random();
                      const js3cFinalTue = Math.floor(
                        js3cIniTue * all.courses.length
                      );

                      if (
                        !js3cTue.includes(all.courses[js3cFinalTue].subName)
                      ) {
                        js3cTue.push(all.courses[js3cFinalTue].subName);
                        if (js3cTue.length === 6) {
                          js3cTue.splice(5, 0, "Break");
                        }
                        if (js3cTue.length === 12) {
                          js3cTue.pop();
                        }
                        if (js3cTue.length === 13) {
                          js3cTue.splice(11, 2);
                        }
                        if (js3cTue.length === 14) {
                          js3cTue.splice(11, 3);
                        }
                        if (js3cTue.length === 15) {
                          js3cTue.splice(11, 4);
                        }
                        if (js3cTue.length === 16) {
                          js3cTue.splice(11, 5);
                        }
                      }
                      const js3cIniWed = Math.random();
                      const js3cFinalWed = Math.floor(
                        js3cIniWed * all.courses.length
                      );

                      if (
                        !js3cWed.includes(all.courses[js3cFinalWed].subName)
                      ) {
                        js3cWed.push(all.courses[js3cFinalWed].subName);
                        if (js3cWed.length === 6) {
                          js3cWed.splice(5, 0, "Break");
                        }
                        if (js3cWed.length === 12) {
                          js3cWed.pop();
                        }
                        if (js3cWed.length === 13) {
                          js3cWed.splice(11, 2);
                        }
                        if (js3cWed.length === 14) {
                          js3cWed.splice(11, 3);
                        }
                        if (js3cWed.length === 15) {
                          js3cWed.splice(11, 4);
                        }
                        if (js3cWed.length === 16) {
                          js3cWed.splice(11, 5);
                        }
                      }
                      const js3cIniThur = Math.random();
                      const js3cFinalThur = Math.floor(
                        js3cIniThur * all.courses.length
                      );

                      if (
                        !js3cThur.includes(all.courses[js3cFinalThur].subName)
                      ) {
                        js3cThur.push(all.courses[js3cFinalThur].subName);
                        if (js3cThur.length === 6) {
                          js3cThur.splice(5, 0, "Break");
                        }
                        if (js3cThur.length === 12) {
                          js3cThur.pop();
                        }
                        if (js3cThur.length === 13) {
                          js3cThur.splice(11, 2);
                        }
                        if (js3cThur.length === 14) {
                          js3cThur.splice(11, 3);
                        }
                        if (js3cThur.length === 15) {
                          js3cThur.splice(11, 4);
                        }
                        if (js3cThur.length === 16) {
                          js3cThur.splice(11, 5);
                        }
                      }
                      const js3cIniFri = Math.random();
                      const js3cFinalFri = Math.floor(
                        js3cIniFri * all.courses.length
                      );

                      if (
                        !js3cFri.includes(all.courses[js3cFinalFri].subName)
                      ) {
                        js3cFri.push(all.courses[js3cFinalFri].subName);
                        if (js3cFri.length === 6) {
                          js3cFri.splice(5, 0, "Break");
                        }
                        if (js3cFri.length === 12) {
                          js3cFri.pop();
                        }
                        if (js3cFri.length === 13) {
                          js3cFri.splice(11, 2);
                        }
                        if (js3cFri.length === 14) {
                          js3cFri.splice(11, 3);
                        }
                        if (js3cFri.length === 15) {
                          js3cFri.splice(11, 4);
                        }
                        if (js3cFri.length === 16) {
                          js3cFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 3C")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 3C
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
                            {js3cMon.map((ar, index) => (
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
                            {js3cTue.map((ar, index) => (
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
                            {js3cWed.map((ar, index) => (
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
                            {js3cThur.map((ar, index) => (
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
                            {js3cFri.map((ar, index) => (
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
                {tests &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "JSS 3D") return true;
                  }) &&
                  tests
                    .filter((arr) => arr.classNaming === "JSS 3D")
                    .map((all) => {
                      const js3dIni = Math.random();
                      const js3dFinal = Math.floor(
                        js3dIni * all.courses.length
                      );

                      if (!js3dMon.includes(all.courses[js3dFinal].subName)) {
                        js3dMon.push(all.courses[js3dFinal].subName);
                        if (js3dMon.length === 6) {
                          js3dMon.splice(5, 0, "Break");
                        }
                        if (js3dMon.length === 12) {
                          js3dMon.pop();
                        }
                        if (js3dMon.length === 13) {
                          js3dMon.splice(11, 2);
                        }
                        if (js3dMon.length === 14) {
                          js3dMon.splice(11, 3);
                        }
                        if (js3dMon.length === 15) {
                          js3dMon.splice(11, 4);
                        }
                        if (js3dMon.length === 16) {
                          js3dMon.splice(11, 5);
                        }
                      }
                      const js3dIniTue = Math.random();
                      const js3dFinalTue = Math.floor(
                        js3dIniTue * all.courses.length
                      );

                      if (
                        !js3dTue.includes(all.courses[js3dFinalTue].subName)
                      ) {
                        js3dTue.push(all.courses[js3dFinalTue].subName);
                        if (js3dTue.length === 6) {
                          js3dTue.splice(5, 0, "Break");
                        }
                        if (js3dTue.length === 12) {
                          js3dTue.pop();
                        }
                        if (js3dTue.length === 13) {
                          js3dTue.splice(11, 2);
                        }
                        if (js3dTue.length === 14) {
                          js3dTue.splice(11, 3);
                        }
                        if (js3dTue.length === 15) {
                          js3dTue.splice(11, 4);
                        }
                        if (js3dTue.length === 16) {
                          js3dTue.splice(11, 5);
                        }
                      }
                      const js3dIniWed = Math.random();
                      const js3dFinalWed = Math.floor(
                        js3dIniWed * all.courses.length
                      );

                      if (
                        !js3dWed.includes(all.courses[js3dFinalWed].subName)
                      ) {
                        js3dWed.push(all.courses[js3dFinalWed].subName);
                        if (js3dWed.length === 6) {
                          js3dWed.splice(5, 0, "Break");
                        }
                        if (js3dWed.length === 12) {
                          js3dWed.pop();
                        }
                        if (js3dWed.length === 13) {
                          js3dWed.splice(11, 2);
                        }
                        if (js3dWed.length === 14) {
                          js3dWed.splice(11, 3);
                        }
                        if (js3dWed.length === 15) {
                          js3dWed.splice(11, 4);
                        }
                        if (js3dWed.length === 16) {
                          js3dWed.splice(11, 5);
                        }
                      }
                      const js3dIniThur = Math.random();
                      const js3dFinalThur = Math.floor(
                        js3dIniThur * all.courses.length
                      );

                      if (
                        !js3dThur.includes(all.courses[js3dFinalThur].subName)
                      ) {
                        js3dThur.push(all.courses[js3dFinalThur].subName);
                        if (js3dThur.length === 6) {
                          js3dThur.splice(5, 0, "Break");
                        }
                        if (js3dThur.length === 12) {
                          js3dThur.pop();
                        }
                        if (js3dThur.length === 13) {
                          js3dThur.splice(11, 2);
                        }
                        if (js3dThur.length === 14) {
                          js3dThur.splice(11, 3);
                        }
                        if (js3dThur.length === 15) {
                          js3dThur.splice(11, 4);
                        }
                        if (js3dThur.length === 16) {
                          js3dThur.splice(11, 5);
                        }
                      }
                      const js3dIniFri = Math.random();
                      const js3dFinalFri = Math.floor(
                        js3dIniFri * all.courses.length
                      );

                      if (
                        !js3dFri.includes(all.courses[js3dFinalFri].subName)
                      ) {
                        js3dFri.push(all.courses[js3dFinalFri].subName);
                        if (js3dFri.length === 6) {
                          js3dFri.splice(5, 0, "Break");
                        }
                        if (js3dFri.length === 12) {
                          js3dFri.pop();
                        }
                        if (js3dFri.length === 13) {
                          js3dFri.splice(11, 2);
                        }
                        if (js3dFri.length === 14) {
                          js3dFri.splice(11, 3);
                        }
                        if (js3dFri.length === 15) {
                          js3dFri.splice(11, 4);
                        }
                        if (js3dFri.length === 16) {
                          js3dFri.splice(11, 5);
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-56 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold ">
                        {tests &&
                          tests
                            .filter((arr) => arr.classNaming === "JSS 3D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        JSS 3D
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
                            {js3dMon.map((ar, index) => (
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
                            {js3dTue.map((ar, index) => (
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
                            {js3dWed.map((ar, index) => (
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
                            {js3dThur.map((ar, index) => (
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
                            {js3dFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 1A") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 1A")
                    .map((all) => {
                      const ss1aIni = Math.random();
                      const ss1aFinal = Math.floor(
                        ss1aIni * all.courses.length
                      );

                      if (!ss1aMon.includes(all.courses[ss1aFinal].subName)) {
                        ss1aMon.push(all.courses[ss1aFinal].subName);
                        if (ss1aMon.length === 6) {
                          ss1aMon.splice(5, 0, "Break");
                        }
                      }
                      const ss1aIniTue = Math.random();
                      const ss1aFinalTue = Math.floor(
                        ss1aIniTue * all.courses.length
                      );

                      if (
                        !ss1aTue.includes(all.courses[ss1aFinalTue].subName)
                      ) {
                        ss1aTue.push(all.courses[ss1aFinalTue].subName);
                        if (ss1aTue.length === 6) {
                          ss1aTue.splice(5, 0, "Break");
                        }
                      }
                      const ss1aIniWed = Math.random();
                      const ss1aFinalWed = Math.floor(
                        ss1aIniWed * all.courses.length
                      );

                      if (
                        !ss1aWed.includes(all.courses[ss1aFinalWed].subName)
                      ) {
                        ss1aWed.push(all.courses[ss1aFinalWed].subName);
                        if (ss1aWed.length === 6) {
                          ss1aWed.splice(5, 0, "Break");
                        }
                      }
                      const ss1aIniThur = Math.random();
                      const ss1aFinalThur = Math.floor(
                        ss1aIniThur * all.courses.length
                      );

                      if (
                        !ss1aThur.includes(all.courses[ss1aFinalThur].subName)
                      ) {
                        ss1aThur.push(all.courses[ss1aFinalThur].subName);
                        if (ss1aThur.length === 6) {
                          ss1aThur.splice(5, 0, "Break");
                        }
                      }
                      const ss1aIniFri = Math.random();
                      const ss1aFinalFri = Math.floor(
                        ss1aIniFri * all.courses.length
                      );

                      if (
                        !ss1aFri.includes(all.courses[ss1aFinalFri].subName)
                      ) {
                        ss1aFri.push(all.courses[ss1aFinalFri].subName);
                        if (ss1aFri.length === 6) {
                          ss1aFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 1A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 1A
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss1aMon.map((ar, index) => (
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
                            {ss1aTue.map((ar, index) => (
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
                            {ss1aWed.map((ar, index) => (
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
                            {ss1aThur.map((ar, index) => (
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
                            {ss1aFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 1B") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 1B")
                    .map((all) => {
                      const ss1bIni = Math.random();
                      const ss1bFinal = Math.floor(
                        ss1bIni * all.courses.length
                      );

                      if (!ss1bMon.includes(all.courses[ss1bFinal].subName)) {
                        ss1bMon.push(all.courses[ss1bFinal].subName);
                        if (ss1bMon.length === 6) {
                          ss1bMon.splice(5, 0, "Break");
                        }
                      }
                      const ss1bIniTue = Math.random();
                      const ss1bFinalTue = Math.floor(
                        ss1bIniTue * all.courses.length
                      );

                      if (
                        !ss1bTue.includes(all.courses[ss1bFinalTue].subName)
                      ) {
                        ss1bTue.push(all.courses[ss1bFinalTue].subName);
                        if (ss1bTue.length === 6) {
                          ss1bTue.splice(5, 0, "Break");
                        }
                      }
                      const ss1bIniWed = Math.random();
                      const ss1bFinalWed = Math.floor(
                        ss1bIniWed * all.courses.length
                      );

                      if (
                        !ss1bWed.includes(all.courses[ss1bFinalWed].subName)
                      ) {
                        ss1bWed.push(all.courses[ss1bFinalWed].subName);
                        if (ss1bWed.length === 6) {
                          ss1bWed.splice(5, 0, "Break");
                        }
                      }
                      const ss1bIniThur = Math.random();
                      const ss1bFinalThur = Math.floor(
                        ss1bIniThur * all.courses.length
                      );

                      if (
                        !ss1bThur.includes(all.courses[ss1bFinalThur].subName)
                      ) {
                        ss1bThur.push(all.courses[ss1bFinalThur].subName);
                        if (ss1bThur.length === 6) {
                          ss1bThur.splice(5, 0, "Break");
                        }
                      }
                      const ss1bIniFri = Math.random();
                      const ss1bFinalFri = Math.floor(
                        ss1bIniFri * all.courses.length
                      );

                      if (
                        !ss1bFri.includes(all.courses[ss1bFinalFri].subName)
                      ) {
                        ss1bFri.push(all.courses[ss1bFinalFri].subName);
                        if (ss1bFri.length === 6) {
                          ss1bFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 1B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 1B
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss1bMon.map((ar, index) => (
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
                            {ss1bTue.map((ar, index) => (
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
                            {ss1bWed.map((ar, index) => (
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
                            {ss1bThur.map((ar, index) => (
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
                            {ss1bFri.map((ar, index) => (
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
                {artClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 1C") return true;
                  }) &&
                  artClass
                    .filter((arr) => arr.classNaming === "SSS 1C")
                    .map((all) => {
                      const ss1cIni = Math.random();
                      const ss1cFinal = Math.floor(
                        ss1cIni * all.courses.length
                      );

                      if (!ss1cMon.includes(all.courses[ss1cFinal].subName)) {
                        ss1cMon.push(all.courses[ss1cFinal].subName);
                        if (ss1cMon.length === 6) {
                          ss1cMon.splice(5, 0, "Break");
                        }
                      }
                      const ss1cIniTue = Math.random();
                      const ss1cFinalTue = Math.floor(
                        ss1cIniTue * all.courses.length
                      );

                      if (
                        !ss1cTue.includes(all.courses[ss1cFinalTue].subName)
                      ) {
                        ss1cTue.push(all.courses[ss1cFinalTue].subName);
                        if (ss1cTue.length === 6) {
                          ss1cTue.splice(5, 0, "Break");
                        }
                      }
                      const ss1cIniWed = Math.random();
                      const ss1cFinalWed = Math.floor(
                        ss1cIniWed * all.courses.length
                      );

                      if (
                        !ss1cWed.includes(all.courses[ss1cFinalWed].subName)
                      ) {
                        ss1cWed.push(all.courses[ss1cFinalWed].subName);
                        if (ss1cWed.length === 6) {
                          ss1cWed.splice(5, 0, "Break");
                        }
                      }
                      const ss1cIniThur = Math.random();
                      const ss1cFinalThur = Math.floor(
                        ss1cIniThur * all.courses.length
                      );

                      if (
                        !ss1cThur.includes(all.courses[ss1cFinalThur].subName)
                      ) {
                        ss1cThur.push(all.courses[ss1cFinalThur].subName);
                        if (ss1cThur.length === 6) {
                          ss1cThur.splice(5, 0, "Break");
                        }
                      }
                      const ss1cIniFri = Math.random();
                      const ss1cFinalFri = Math.floor(
                        ss1cIniFri * all.courses.length
                      );

                      if (
                        !ss1cFri.includes(all.courses[ss1cFinalFri].subName)
                      ) {
                        ss1cFri.push(all.courses[ss1cFinalFri].subName);
                        if (ss1cFri.length === 6) {
                          ss1cFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {artClass &&
                          artClass
                            .filter((arr) => arr.classNaming === "SSS 1C")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 1C
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
                            {ss1cMon.map((ar, index) => (
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
                            {ss1cTue.map((ar, index) => (
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
                            {ss1cWed.map((ar, index) => (
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
                            {ss1cThur.map((ar, index) => (
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
                            {ss1cFri.map((ar, index) => (
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
                {commercialClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 1D") return true;
                  }) &&
                  commercialClass
                    .filter((arr) => arr.classNaming === "SSS 1D")
                    .map((all) => {
                      const ss1dIni = Math.random();
                      const ss1dFinal = Math.floor(
                        ss1dIni * all.courses.length
                      );

                      if (!ss1dMon.includes(all.courses[ss1dFinal].subName)) {
                        ss1dMon.push(all.courses[ss1dFinal].subName);
                        if (ss1dMon.length === 6) {
                          ss1dMon.splice(5, 0, "Break");
                        }
                      }
                      const ss1dIniTue = Math.random();
                      const ss1dFinalTue = Math.floor(
                        ss1dIniTue * all.courses.length
                      );

                      if (
                        !ss1dTue.includes(all.courses[ss1dFinalTue].subName)
                      ) {
                        ss1dTue.push(all.courses[ss1dFinalTue].subName);
                        if (ss1dTue.length === 6) {
                          ss1dTue.splice(5, 0, "Break");
                        }
                      }
                      const ss1dIniWed = Math.random();
                      const ss1dFinalWed = Math.floor(
                        ss1dIniWed * all.courses.length
                      );

                      if (
                        !ss1dWed.includes(all.courses[ss1dFinalWed].subName)
                      ) {
                        ss1dWed.push(all.courses[ss1dFinalWed].subName);
                        if (ss1dWed.length === 6) {
                          ss1dWed.splice(5, 0, "Break");
                        }
                      }
                      const ss1dIniThur = Math.random();
                      const ss1dFinalThur = Math.floor(
                        ss1dIniThur * all.courses.length
                      );

                      if (
                        !ss1dThur.includes(all.courses[ss1dFinalThur].subName)
                      ) {
                        ss1dThur.push(all.courses[ss1dFinalThur].subName);
                        if (ss1dThur.length === 6) {
                          ss1dThur.splice(5, 0, "Break");
                        }
                      }
                      const ss1dIniFri = Math.random();
                      const ss1dFinalFri = Math.floor(
                        ss1dIniFri * all.courses.length
                      );

                      if (
                        !ss1dFri.includes(all.courses[ss1dFinalFri].subName)
                      ) {
                        ss1dFri.push(all.courses[ss1dFinalFri].subName);
                        if (ss1dFri.length === 6) {
                          ss1dFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {commercialClass &&
                          commercialClass
                            .filter((arr) => arr.classNaming === "SSS 1D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 1D
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss1dMon.map((ar, index) => (
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
                            {ss1dTue.map((ar, index) => (
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
                            {ss1dWed.map((ar, index) => (
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
                            {ss1dThur.map((ar, index) => (
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
                            {ss1dFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 2A") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 2A")
                    .map((all) => {
                      const ss2aIni = Math.random();
                      const ss2aFinal = Math.floor(
                        ss2aIni * all.courses.length
                      );

                      if (!ss2aMon.includes(all.courses[ss2aFinal].subName)) {
                        ss2aMon.push(all.courses[ss2aFinal].subName);
                        if (ss2aMon.length === 6) {
                          ss2aMon.splice(5, 0, "Break");
                        }
                      }
                      const ss2aIniTue = Math.random();
                      const ss2aFinalTue = Math.floor(
                        ss2aIniTue * all.courses.length
                      );

                      if (
                        !ss2aTue.includes(all.courses[ss2aFinalTue].subName)
                      ) {
                        ss2aTue.push(all.courses[ss2aFinalTue].subName);
                        if (ss2aTue.length === 6) {
                          ss2aTue.splice(5, 0, "Break");
                        }
                      }
                      const ss2aIniWed = Math.random();
                      const ss2aFinalWed = Math.floor(
                        ss2aIniWed * all.courses.length
                      );

                      if (
                        !ss2aWed.includes(all.courses[ss2aFinalWed].subName)
                      ) {
                        ss2aWed.push(all.courses[ss2aFinalWed].subName);
                        if (ss2aWed.length === 6) {
                          ss2aWed.splice(5, 0, "Break");
                        }
                      }
                      const ss2aIniThur = Math.random();
                      const ss2aFinalThur = Math.floor(
                        ss2aIniThur * all.courses.length
                      );

                      if (
                        !ss2aThur.includes(all.courses[ss2aFinalThur].subName)
                      ) {
                        ss2aThur.push(all.courses[ss2aFinalThur].subName);
                        if (ss2aThur.length === 6) {
                          ss2aThur.splice(5, 0, "Break");
                        }
                      }
                      const ss2aIniFri = Math.random();
                      const ss2aFinalFri = Math.floor(
                        ss2aIniFri * all.courses.length
                      );

                      if (
                        !ss2aFri.includes(all.courses[ss2aFinalFri].subName)
                      ) {
                        ss2aFri.push(all.courses[ss2aFinalFri].subName);
                        if (ss2aFri.length === 6) {
                          ss2aFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 2A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 2A
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss2aMon.map((ar, index) => (
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
                            {ss2aTue.map((ar, index) => (
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
                            {ss2aWed.map((ar, index) => (
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
                            {ss2aThur.map((ar, index) => (
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
                            {ss2aFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 2B") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 2B")
                    .map((all) => {
                      const ss2bIni = Math.random();
                      const ss2bFinal = Math.floor(
                        ss2bIni * all.courses.length
                      );

                      if (!ss2bMon.includes(all.courses[ss2bFinal].subName)) {
                        ss2bMon.push(all.courses[ss2bFinal].subName);
                        if (ss2bMon.length === 6) {
                          ss2bMon.splice(5, 0, "Break");
                        }
                      }
                      const ss2bIniTue = Math.random();
                      const ss2bFinalTue = Math.floor(
                        ss2bIniTue * all.courses.length
                      );

                      if (
                        !ss2bTue.includes(all.courses[ss2bFinalTue].subName)
                      ) {
                        ss2bTue.push(all.courses[ss2bFinalTue].subName);
                        if (ss2bTue.length === 6) {
                          ss2bTue.splice(5, 0, "Break");
                        }
                      }
                      const ss2bIniWed = Math.random();
                      const ss2bFinalWed = Math.floor(
                        ss2bIniWed * all.courses.length
                      );

                      if (
                        !ss2bWed.includes(all.courses[ss2bFinalWed].subName)
                      ) {
                        ss2bWed.push(all.courses[ss2bFinalWed].subName);
                        if (ss2bWed.length === 6) {
                          ss2bWed.splice(5, 0, "Break");
                        }
                      }
                      const ss2bIniThur = Math.random();
                      const ss2bFinalThur = Math.floor(
                        ss2bIniThur * all.courses.length
                      );

                      if (
                        !ss2bThur.includes(all.courses[ss2bFinalThur].subName)
                      ) {
                        ss2bThur.push(all.courses[ss2bFinalThur].subName);
                        if (ss2bThur.length === 6) {
                          ss2bThur.splice(5, 0, "Break");
                        }
                      }
                      const ss2bIniFri = Math.random();
                      const ss2bFinalFri = Math.floor(
                        ss2bIniFri * all.courses.length
                      );

                      if (
                        !ss2bFri.includes(all.courses[ss2bFinalFri].subName)
                      ) {
                        ss2bFri.push(all.courses[ss2bFinalFri].subName);
                        if (ss2bFri.length === 6) {
                          ss2bFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 2B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 2B
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss2bMon.map((ar, index) => (
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
                            {ss2bTue.map((ar, index) => (
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
                            {ss2bWed.map((ar, index) => (
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
                            {ss2bThur.map((ar, index) => (
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
                            {ss2bFri.map((ar, index) => (
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
                {artClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 2C") return true;
                  }) &&
                  artClass
                    .filter((arr) => arr.classNaming === "SSS 2C")
                    .map((all) => {
                      const ss2cIni = Math.random();
                      const ss2cFinal = Math.floor(
                        ss2cIni * all.courses.length
                      );

                      if (!ss2cMon.includes(all.courses[ss2cFinal].subName)) {
                        ss2cMon.push(all.courses[ss2cFinal].subName);
                        if (ss2cMon.length === 6) {
                          ss2cMon.splice(5, 0, "Break");
                        }
                      }
                      const ss2cIniTue = Math.random();
                      const ss2cFinalTue = Math.floor(
                        ss2cIniTue * all.courses.length
                      );

                      if (
                        !ss2cTue.includes(all.courses[ss2cFinalTue].subName)
                      ) {
                        ss2cTue.push(all.courses[ss2cFinalTue].subName);
                        if (ss2cTue.length === 6) {
                          ss2cTue.splice(5, 0, "Break");
                        }
                      }
                      const ss2cIniWed = Math.random();
                      const ss2cFinalWed = Math.floor(
                        ss2cIniWed * all.courses.length
                      );

                      if (
                        !ss2cWed.includes(all.courses[ss2cFinalWed].subName)
                      ) {
                        ss2cWed.push(all.courses[ss2cFinalWed].subName);
                        if (ss2cWed.length === 6) {
                          ss2cWed.splice(5, 0, "Break");
                        }
                      }
                      const ss2cIniThur = Math.random();
                      const ss2cFinalThur = Math.floor(
                        ss2cIniThur * all.courses.length
                      );

                      if (
                        !ss2cThur.includes(all.courses[ss2cFinalThur].subName)
                      ) {
                        ss2cThur.push(all.courses[ss2cFinalThur].subName);
                        if (ss2cThur.length === 6) {
                          ss2cThur.splice(5, 0, "Break");
                        }
                      }
                      const ss2cIniFri = Math.random();
                      const ss2cFinalFri = Math.floor(
                        ss2cIniFri * all.courses.length
                      );

                      if (
                        !ss2cFri.includes(all.courses[ss2cFinalFri].subName)
                      ) {
                        ss2cFri.push(all.courses[ss2cFinalFri].subName);
                        if (ss2cFri.length === 6) {
                          ss2cFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {artClass &&
                          artClass
                            .filter((arr) => arr.classNaming === "SSS 2C")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 2C
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
                            {ss2cMon.map((ar, index) => (
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
                            {ss2cTue.map((ar, index) => (
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
                            {ss2cWed.map((ar, index) => (
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
                            {ss2cThur.map((ar, index) => (
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
                            {ss2cFri.map((ar, index) => (
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
                {commercialClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 2D") return true;
                  }) &&
                  commercialClass
                    .filter((arr) => arr.classNaming === "SSS 2D")
                    .map((all) => {
                      const ss2dIni = Math.random();
                      const ss2dFinal = Math.floor(
                        ss2dIni * all.courses.length
                      );

                      if (!ss2dMon.includes(all.courses[ss2dFinal].subName)) {
                        ss2dMon.push(all.courses[ss2dFinal].subName);
                        if (ss2dMon.length === 6) {
                          ss2dMon.splice(5, 0, "Break");
                        }
                      }
                      const ss2dIniTue = Math.random();
                      const ss2dFinalTue = Math.floor(
                        ss2dIniTue * all.courses.length
                      );

                      if (
                        !ss2dTue.includes(all.courses[ss2dFinalTue].subName)
                      ) {
                        ss2dTue.push(all.courses[ss2dFinalTue].subName);
                        if (ss2dTue.length === 6) {
                          ss2dTue.splice(5, 0, "Break");
                        }
                      }
                      const ss2dIniWed = Math.random();
                      const ss2dFinalWed = Math.floor(
                        ss2dIniWed * all.courses.length
                      );

                      if (
                        !ss2dWed.includes(all.courses[ss2dFinalWed].subName)
                      ) {
                        ss2dWed.push(all.courses[ss2dFinalWed].subName);
                        if (ss2dWed.length === 6) {
                          ss2dWed.splice(5, 0, "Break");
                        }
                      }
                      const ss2dIniThur = Math.random();
                      const ss2dFinalThur = Math.floor(
                        ss2dIniThur * all.courses.length
                      );

                      if (
                        !ss2dThur.includes(all.courses[ss2dFinalThur].subName)
                      ) {
                        ss2dThur.push(all.courses[ss2dFinalThur].subName);
                        if (ss2dThur.length === 6) {
                          ss2dThur.splice(5, 0, "Break");
                        }
                      }
                      const ss2dIniFri = Math.random();
                      const ss2dFinalFri = Math.floor(
                        ss2dIniFri * all.courses.length
                      );

                      if (
                        !ss2dFri.includes(all.courses[ss2dFinalFri].subName)
                      ) {
                        ss2dFri.push(all.courses[ss2dFinalFri].subName);
                        if (ss2dFri.length === 6) {
                          ss2dFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {commercialClass &&
                          commercialClass
                            .filter((arr) => arr.classNaming === "SSS 2D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 2D
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss2dMon.map((ar, index) => (
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
                            {ss2dTue.map((ar, index) => (
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
                            {ss2dWed.map((ar, index) => (
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
                            {ss2dThur.map((ar, index) => (
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
                            {ss2dFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 3A") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 3A")
                    .map((all) => {
                      const ss3aIni = Math.random();
                      const ss3aFinal = Math.floor(
                        ss3aIni * all.courses.length
                      );

                      if (!ss3aMon.includes(all.courses[ss3aFinal].subName)) {
                        ss3aMon.push(all.courses[ss3aFinal].subName);
                        if (ss3aMon.length === 6) {
                          ss3aMon.splice(5, 0, "Break");
                        }
                      }
                      const ss3aIniTue = Math.random();
                      const ss3aFinalTue = Math.floor(
                        ss3aIniTue * all.courses.length
                      );

                      if (
                        !ss3aTue.includes(all.courses[ss3aFinalTue].subName)
                      ) {
                        ss3aTue.push(all.courses[ss3aFinalTue].subName);
                        if (ss3aTue.length === 6) {
                          ss3aTue.splice(5, 0, "Break");
                        }
                      }
                      const ss3aIniWed = Math.random();
                      const ss3aFinalWed = Math.floor(
                        ss3aIniWed * all.courses.length
                      );

                      if (
                        !ss3aWed.includes(all.courses[ss3aFinalWed].subName)
                      ) {
                        ss3aWed.push(all.courses[ss3aFinalWed].subName);
                        if (ss3aWed.length === 6) {
                          ss3aWed.splice(5, 0, "Break");
                        }
                      }
                      const ss3aIniThur = Math.random();
                      const ss3aFinalThur = Math.floor(
                        ss3aIniThur * all.courses.length
                      );

                      if (
                        !ss3aThur.includes(all.courses[ss3aFinalThur].subName)
                      ) {
                        ss3aThur.push(all.courses[ss3aFinalThur].subName);
                        if (ss3aThur.length === 6) {
                          ss3aThur.splice(5, 0, "Break");
                        }
                      }
                      const ss3aIniFri = Math.random();
                      const ss3aFinalFri = Math.floor(
                        ss3aIniFri * all.courses.length
                      );

                      if (
                        !ss3aFri.includes(all.courses[ss3aFinalFri].subName)
                      ) {
                        ss3aFri.push(all.courses[ss3aFinalFri].subName);
                        if (ss3aFri.length === 6) {
                          ss3aFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 MB-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 3A")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 3A
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss3aMon.map((ar, index) => (
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
                            {ss3aTue.map((ar, index) => (
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
                            {ss3aWed.map((ar, index) => (
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
                            {ss3aThur.map((ar, index) => (
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
                            {ss3aFri.map((ar, index) => (
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
                {scienceClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 3B") return true;
                  }) &&
                  scienceClass
                    .filter((arr) => arr.classNaming === "SSS 3B")
                    .map((all) => {
                      const ss3bIni = Math.random();
                      const ss3bFinal = Math.floor(
                        ss3bIni * all.courses.length
                      );

                      if (!ss3bMon.includes(all.courses[ss3bFinal].subName)) {
                        ss3bMon.push(all.courses[ss3bFinal].subName);
                        if (ss3bMon.length === 6) {
                          ss3bMon.splice(5, 0, "Break");
                        }
                      }
                      const ss3bIniTue = Math.random();
                      const ss3bFinalTue = Math.floor(
                        ss3bIniTue * all.courses.length
                      );

                      if (
                        !ss3bTue.includes(all.courses[ss3bFinalTue].subName)
                      ) {
                        ss3bTue.push(all.courses[ss3bFinalTue].subName);
                        if (ss3bTue.length === 6) {
                          ss3bTue.splice(5, 0, "Break");
                        }
                      }
                      const ss3bIniWed = Math.random();
                      const ss3bFinalWed = Math.floor(
                        ss3bIniWed * all.courses.length
                      );

                      if (
                        !ss3bWed.includes(all.courses[ss3bFinalWed].subName)
                      ) {
                        ss3bWed.push(all.courses[ss3bFinalWed].subName);
                        if (ss3bWed.length === 6) {
                          ss3bWed.splice(5, 0, "Break");
                        }
                      }
                      const ss3bIniThur = Math.random();
                      const ss3bFinalThur = Math.floor(
                        ss3bIniThur * all.courses.length
                      );

                      if (
                        !ss3bThur.includes(all.courses[ss3bFinalThur].subName)
                      ) {
                        ss3bThur.push(all.courses[ss3bFinalThur].subName);
                        if (ss3bThur.length === 6) {
                          ss3bThur.splice(5, 0, "Break");
                        }
                      }
                      const ss3bIniFri = Math.random();
                      const ss3bFinalFri = Math.floor(
                        ss3bIniFri * all.courses.length
                      );

                      if (
                        !ss3bFri.includes(all.courses[ss3bFinalFri].subName)
                      ) {
                        ss3bFri.push(all.courses[ss3bFinalFri].subName);
                        if (ss3bFri.length === 6) {
                          ss3bFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {scienceClass &&
                          scienceClass
                            .filter((arr) => arr.classNaming === "SSS 3B")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 3B
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss3bMon.map((ar, index) => (
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
                            {ss3bTue.map((ar, index) => (
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
                            {ss3bWed.map((ar, index) => (
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
                            {ss3bThur.map((ar, index) => (
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
                            {ss3bFri.map((ar, index) => (
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
                {artClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 3C") return true;
                  }) &&
                  artClass
                    .filter((arr) => arr.classNaming === "SSS 3C")
                    .map((all) => {
                      const ss3cIni = Math.random();
                      const ss3cFinal = Math.floor(
                        ss3cIni * all.courses.length
                      );

                      if (!ss3cMon.includes(all.courses[ss3cFinal].subName)) {
                        ss3cMon.push(all.courses[ss3cFinal].subName);
                        if (ss3cMon.length === 6) {
                          ss3cMon.splice(5, 0, "Break");
                        }
                      }
                      const ss3cIniTue = Math.random();
                      const ss3cFinalTue = Math.floor(
                        ss3cIniTue * all.courses.length
                      );

                      if (
                        !ss3cTue.includes(all.courses[ss3cFinalTue].subName)
                      ) {
                        ss3cTue.push(all.courses[ss3cFinalTue].subName);
                        if (ss3cTue.length === 6) {
                          ss3cTue.splice(5, 0, "Break");
                        }
                      }
                      const ss3cIniWed = Math.random();
                      const ss3cFinalWed = Math.floor(
                        ss3cIniWed * all.courses.length
                      );

                      if (
                        !ss3cWed.includes(all.courses[ss3cFinalWed].subName)
                      ) {
                        ss3cWed.push(all.courses[ss3cFinalWed].subName);
                        if (ss3cWed.length === 6) {
                          ss3cWed.splice(5, 0, "Break");
                        }
                      }
                      const ss3cIniThur = Math.random();
                      const ss3cFinalThur = Math.floor(
                        ss3cIniThur * all.courses.length
                      );

                      if (
                        !ss3cThur.includes(all.courses[ss3cFinalThur].subName)
                      ) {
                        ss3cThur.push(all.courses[ss3cFinalThur].subName);
                        if (ss3cThur.length === 6) {
                          ss3cThur.splice(5, 0, "Break");
                        }
                      }
                      const ss3cIniFri = Math.random();
                      const ss3cFinalFri = Math.floor(
                        ss3cIniFri * all.courses.length
                      );

                      if (
                        !ss3cFri.includes(all.courses[ss3cFinalFri].subName)
                      ) {
                        ss3cFri.push(all.courses[ss3cFinalFri].subName);
                        if (ss3cFri.length === 6) {
                          ss3cFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {artClass &&
                          artClass
                            .filter((arr) => arr.classNaming === "SSS 3C")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 3C
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
                            {ss3cMon.map((ar, index) => (
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
                            {ss3cTue.map((ar, index) => (
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
                            {ss3cWed.map((ar, index) => (
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
                            {ss3cThur.map((ar, index) => (
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
                            {ss3cFri.map((ar, index) => (
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
                {commercialClass &&
                  classNum.some((arr) => {
                    if (arr.classNaming === "SSS 3D") return true;
                  }) &&
                  commercialClass
                    .filter((arr) => arr.classNaming === "SSS 3D")
                    .map((all) => {
                      const ss3dIni = Math.random();
                      const ss3dFinal = Math.floor(
                        ss3dIni * all.courses.length
                      );

                      if (!ss3dMon.includes(all.courses[ss3dFinal].subName)) {
                        ss3dMon.push(all.courses[ss3dFinal].subName);
                        if (ss3dMon.length === 6) {
                          ss3dMon.splice(5, 0, "Break");
                        }
                      }
                      const ss3dIniTue = Math.random();
                      const ss3dFinalTue = Math.floor(
                        ss3dIniTue * all.courses.length
                      );

                      if (
                        !ss3dTue.includes(all.courses[ss3dFinalTue].subName)
                      ) {
                        ss3dTue.push(all.courses[ss3dFinalTue].subName);
                        if (ss3dTue.length === 6) {
                          ss3dTue.splice(5, 0, "Break");
                        }
                      }
                      const ss3dIniWed = Math.random();
                      const ss3dFinalWed = Math.floor(
                        ss3dIniWed * all.courses.length
                      );

                      if (
                        !ss3dWed.includes(all.courses[ss3dFinalWed].subName)
                      ) {
                        ss3dWed.push(all.courses[ss3dFinalWed].subName);
                        if (ss3dWed.length === 6) {
                          ss3dWed.splice(5, 0, "Break");
                        }
                      }
                      const ss3dIniThur = Math.random();
                      const ss3dFinalThur = Math.floor(
                        ss3dIniThur * all.courses.length
                      );

                      if (
                        !ss3dThur.includes(all.courses[ss3dFinalThur].subName)
                      ) {
                        ss3dThur.push(all.courses[ss3dFinalThur].subName);
                        if (ss3dThur.length === 6) {
                          ss3dThur.splice(5, 0, "Break");
                        }
                      }
                      const ss3dIniFri = Math.random();
                      const ss3dFinalFri = Math.floor(
                        ss3dIniFri * all.courses.length
                      );

                      if (
                        !ss3dFri.includes(all.courses[ss3dFinalFri].subName)
                      ) {
                        ss3dFri.push(all.courses[ss3dFinalFri].subName);
                        if (ss3dFri.length === 6) {
                          ss3dFri.splice(5, 0, "Break");
                        }
                      }
                    }) && (
                    <div
                      className="m-auto relative top-20 mb-16"
                      style={{ width: "60%" }}
                    >
                      <div
                        className="absolute -left-48 flex justify-around items-center top-12 h-14 w-40 border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg text-white font-bold"
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
                      <div className="absolute -left-48 top-28 h-fit w-fit border-1 rounded-xl cursor-pointer shadow-2xl dark:bg-main-bg  font-semibold pt-2 pb-2">
                        {commercialClass &&
                          commercialClass
                            .filter((arr) => arr.classNaming === "SSS 3D")[0]
                            .courses.map((subject) => (
                              <p
                                key={subject.id}
                                style={{ fontFamily: "serif" }}
                                className="text-black"
                              >
                                {subject.subName}
                              </p>
                            ))}
                      </div>
                      <div className="relative left-0 right-0 top-0 m-auto w-fit font-extrabold text-2xl">
                        SSS 3D
                      </div>
                      <table className="dark:bg-main-bg">
                        <thead>
                          <tr>
                            {scienceTime.map((time, index) => (
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
                            {ss3dMon.map((ar, index) => (
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
                            {ss3dTue.map((ar, index) => (
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
                            {ss3dWed.map((ar, index) => (
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
                            {ss3dThur.map((ar, index) => (
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
                            {ss3dFri.map((ar, index) => (
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
              <div
                className="md:w-800  sm:w-760 lg:w-full relative flex justify-around flex-wrap content-around"
                style={{ minHeight: "90vh" }}
              >
                {classData.map((data, index) => (
                  <div
                    className="min-h-fit h-40 w-1/4 bg-white rounded-xl dark:bg-gray-50 ml-5 shadow-xl"
                    key={index}
                  >
                    <div className="w-full flex justify-around h-3/5 items-center">
                      <SiGoogleclassroom className="hover:drop-shadow-xl text-2xl h-9 w-fit p-2 rounded-md bg-black dark:bg-black text-white" />
                      <p style={{ fontFamily: "cursive" }}>{data}</p>
                    </div>
                    <hr />
                    <Link
                      to={`/pioneerschool/allclassespioneer/${data}`}
                      className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-gray-50 cursor-pointer relative top-3 hover:drop-shadow-xl dark:shadow-md block"
                      style={{ fontFamily: "serif" }}
                      onClick={() => {
                        setClasses(data);
                        localStorage.setItem(
                          "pSingleClass",
                          JSON.stringify(data)
                        );
                        // console.log(classes);
                      }}
                    >
                      View <FaEye className="inline-block" />
                    </Link>
                  </div>
                ))}
                <div className="min-h-fit h-40 w-1/4 bg-green-500 rounded-xl ml-5 shadow-xl">
                  <div className="w-full flex justify-around h-3/5 items-center">
                    <BiNotepad
                      className="drop-shadow-xl bg-green-400 text-2xl w-fit p-2 rounded-md text-black h-12 hover:h-14 cursor-pointer"
                      style={{ color: "white" }}
                    />
                    <p
                      style={{
                        fontFamily: "serif",
                        fontWeight: "bolder",
                        fontSize: "1.5rem",
                      }}
                      className="text-white"
                    >
                      Timetable
                    </p>
                  </div>
                  <hr />
                  <div
                    className="m-auto w-fit h-fit pl-5 pr-4 pt-2 pb-2 rounded-xl bg-green-400 text-white hover:text-black cursor-pointer relative top-3 drop-shadow-xl dark:shadow-md block"
                    style={{
                      fontFamily: "cursive",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    }}
                    onClick={() => {
                      setShowTimetable(true);
                      setTimeout(() => {
                        alert(
                          `Click "Complete Timetable" Multiple times to complete subjects`
                        );
                      }, 1000);
                    }}
                  >
                    Generate <FaEye className="inline-block" />
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="relative top-12 m-auto w-fit">
              No Class Yet, Please Create Class
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllClassesPioneer;
