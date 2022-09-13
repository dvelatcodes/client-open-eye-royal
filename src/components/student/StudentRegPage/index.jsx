import React, { useState, useEffect } from "react";
import { regStudent, reset } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.scss";
import { useStateContext } from "../../../contexts/ContextProvider";
// import Button from "../../Buttons";

export const SelectClass = ({
  onChange,
  name,
  onClick,
  value,
  className,
  style,
}) => {
  const { currentColor } = useStateContext();
  return (
    <select
      name={name}
      onChange={onChange}
      onClick={onClick}
      style={{ color: currentColor }}
      className={className}
    >
      <option value={value}>{value}</option>
      <optgroup label="JSS-1" className="schoolType">
        <option value="JSS 1A" className="schTypeOption" style={style}>
          JSS 1A
        </option>
        <option value="JSS 1B" className="schTypeOption" style={style}>
          JSS 1B
        </option>
        <option value="JSS 1C" className="schTypeOption" style={style}>
          JSS 1C
        </option>
        <option value="JSS 1D" className="schTypeOption" style={style}>
          JSS 1D
        </option>
      </optgroup>
      <optgroup label="JSS-2" className="schoolType">
        <option value="JSS 2A" className="schTypeOption" style={style}>
          JSS 2A
        </option>
        <option value="JSS 2B" className="schTypeOption" style={style}>
          JSS 2B
        </option>
        <option value="JSS 2C" className="schTypeOption" style={style}>
          JSS 2C
        </option>
        <option value="JSS 2D" className="schTypeOption" style={style}>
          JSS 2D
        </option>
      </optgroup>
      <optgroup label="JSS-3" className="schoolType">
        <option value="JSS 3A" className="schTypeOption" style={style}>
          JSS 3A
        </option>
        <option value="JSS 3B" className="schTypeOption" style={style}>
          JSS 3B
        </option>
        <option value="JSS 3C" className="schTypeOption" style={style}>
          JSS 3C
        </option>
        <option value="JSS 3D" className="schTypeOption" style={style}>
          JSS 3D
        </option>
      </optgroup>
      <optgroup label="SSS-1" className="schoolType">
        <option value="SSS 1A" className="schTypeOption" style={style}>
          SSS 1A
        </option>
        <option value="SSS 1B" className="schTypeOption" style={style}>
          SSS 1B
        </option>
        <option value="SSS 1C" className="schTypeOption" style={style}>
          SSS 1C
        </option>
        <option value="SSS 1D" className="schTypeOption" style={style}>
          SSS 1D
        </option>
      </optgroup>
      <optgroup label="SSS-2" className="schoolType">
        <option value="SSS 2A" className="schTypeOption" style={style}>
          SSS 2A
        </option>
        <option value="SSS 2B" className="schTypeOption" style={style}>
          SSS 2B
        </option>
        <option value="SSS 2C" className="schTypeOption" style={style}>
          SSS 2C
        </option>
        <option value="SSS 2D" className="schTypeOption" style={style}>
          SSS 2D
        </option>
      </optgroup>
      <optgroup label="SSS-3" className="schoolType">
        <option value="SSS 3A" className="schTypeOption" style={style}>
          SSS 3A
        </option>
        <option value="SSS 3B" className="schTypeOption" style={style}>
          SSS 3B
        </option>
        <option value="SSS 3C" className="schTypeOption" style={style}>
          SSS 3C
        </option>
        <option value="SSS 3D" className="schTypeOption" style={style}>
          SSS 3D
        </option>
      </optgroup>
    </select>
  );
};
const StudentRegPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, studentUser, isError, message } = useSelector(
    (state) => state.auth
  );
  // input fields
  const [student, setStudent] = useState({
    studentSchool: "",
    studentFirstName: "",
    studentLastName: "",
    studentEmail: "",
    studentPassword: "",
    male: "false",
    female: "false",
    studentPhoneNumber: "",
    studentClass: "",
    schoolAccessId: "",
    studentClassId: "",
    startOfAcademicYear: "",
    endOfAcademicYear: "",
  });
  // used to change classname and validation statements
  const [stChecker, setStchecker] = useState({
    stFirst: false,
    stSecond: false,
    stThird: false,
    stFourth: false,
    stFifth: false,
    stSixth: false,
    stSeven: false,
    stEight: false,
    stNine: false,
    stTen: false,
    stEleven: false,
  });
  // used to switch between displays
  const [stDisplay, setStDisplay] = useState({
    display1: "none",
    display2: "none",
    display3: "none",
    display4: "none",
    display5: "none",
    display6: "none",
    display7: "none",
    display8: "none",
    display9: "none",
    display10: "none",
    display11: "none",
    display12: "none",
  });
  // used to show password strength
  const [stStrength, setStStrength] = useState("");

  // objects destructuring
  const {
    studentSchool,
    studentFirstName,
    studentLastName,
    studentEmail,
    studentPassword,
    studentPhoneNumber,
    male,
    female,
    studentClass,
    schoolAccessId,
    studentClassId,
    startOfAcademicYear,
    endOfAcademicYear,
  } = student;
  // console.log(student);
  // console.log(female);
  const {
    stFirst,
    stSecond,
    stThird,
    stFourth,
    stFifth,
    stSixth,
    stSeven,
    stEight,
    stNine,
    stTen,
    stEleven,
  } = stChecker;
  const {
    display1,
    display2,
    display3,
    display4,
    display5,
    display6,
    display7,
    display8,
    display9,
    display10,
    display11,
  } = stDisplay;
  // function to change the empty inputs
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const changeSex = (e) => {
    let checked = e.target.checked;
    let gender = e.target.getAttribute("data-id");
    switch (gender) {
      case "male":
        setStudent({
          ...student,
          male: checked,
          female: false,
        });
        break;
      case "female":
        setStudent({
          ...student,
          female: checked,
          male: false,
        });
        break;

      default:
        break;
    }
  };

  const changeAll = (e) => {
    const all = e.target.getAttribute("data-id");
    let checked = e.target.checked;
    switch (all) {
      case "male":
        setStchecker({ ...stChecker, stSeven: checked ? true : false });
        setStDisplay({ ...stDisplay, display7: checked ? "block" : "block" });
        break;
      case "female":
        setStchecker({ ...stChecker, stSeven: checked ? true : false });
        setStDisplay({ ...stDisplay, display7: checked ? "block" : "block" });
        break;
      case "select-class":
        setStchecker({ ...stChecker, stEight: studentClass ? true : false });
        setStDisplay({
          ...stDisplay,
          display8: studentClass ? "block" : "block",
        });
        break;
      case "skull-access":
        setStchecker({ ...stChecker, stNine: schoolAccessId ? true : false });
        setStDisplay({
          ...stDisplay,
          display9: schoolAccessId ? "block" : "block",
        });
        break;
      case "classid":
        setStchecker({ ...stChecker, stTen: studentClassId ? true : false });
        setStDisplay({
          ...stDisplay,
          display10: studentClassId ? "block" : "block",
        });
        break;
      case "startyear":
        setStchecker({
          ...stChecker,
          stEleven: startOfAcademicYear && endOfAcademicYear ? true : false,
        });
      case "endyear":
        setStchecker({
          ...stChecker,
          stEleven: startOfAcademicYear && endOfAcademicYear ? true : false,
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

  const checkStSchool = () => {
    if (
      studentSchool.match(/[a-zA-Z]\S/) &&
      studentSchool.length >= 3 &&
      studentSchool.length < 15
    ) {
      setStchecker({ ...stChecker, stFirst: true });
      setStDisplay({ ...stDisplay, display1: "block" });
    }
    if (
      studentSchool.match(/[!-@]|[\[-`]|[\{-~}]|\s/) ||
      studentSchool.length < 3 ||
      studentSchool.length > 15 ||
      studentSchool === ""
    ) {
      setStchecker({ ...stChecker, stFirst: false });
      setStDisplay({ ...stDisplay, display1: "block" });
    }
  };
  // validation for first name
  const checkStFirstName = () => {
    if (
      studentFirstName.match(/[a-zA-Z]\S/) &&
      studentFirstName.length >= 3 &&
      studentFirstName.length < 15
    ) {
      setStchecker({ ...stChecker, stSecond: true });
      setStDisplay({ ...stDisplay, display2: "block" });
    }
    if (
      studentFirstName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) ||
      studentFirstName.length < 3 ||
      studentFirstName.length > 15 ||
      studentFirstName === ""
    ) {
      setStchecker({ ...stChecker, stSecond: false });
      setStDisplay({ ...stDisplay, display2: "block" });
    }
  };
  // validation for last name
  const checkStLast = () => {
    if (
      studentLastName.match(/[a-zA-Z]\S/) &&
      studentLastName.length >= 3 &&
      studentLastName.length < 15
    ) {
      setStchecker({ ...stChecker, stThird: true });
      setStDisplay({ ...stDisplay, display3: "block" });
    }
    if (
      studentLastName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) ||
      studentLastName.length < 3 ||
      studentLastName.length > 15 ||
      studentLastName === ""
    ) {
      setStchecker({ ...stChecker, stThird: false });
      setStDisplay({ ...stDisplay, display3: "block" });
    }
  };
  // validation for email
  const checkStEmail = () => {
    if (
      studentEmail.match(/[a-z][0-9]@gmail.com/) &&
      studentEmail.length >= 12
    ) {
      setStchecker({ ...stChecker, stFourth: true });
      setStDisplay({ ...stDisplay, display4: "block" });
    }
    if (studentEmail.match(/[a-z]@gmail.com/) && studentEmail.length >= 12) {
      setStchecker({ ...stChecker, stFourth: true });
      setStDisplay({ ...stDisplay, display4: "block" });
    }
    if (
      (!studentEmail.match(/[a-z]@gmail.com/) &&
        !studentEmail.match(/[a-z][0-9]@gmail.com/)) ||
      studentEmail.match(/[!-\-]|\/|[:-\?]|[\[-`]|[\{-~}]|\s/) ||
      studentEmail.length < 12
    ) {
      setStchecker({ ...stChecker, stFourth: false });
      setStDisplay({ ...stDisplay, display4: "block" });
    }
  };
  // validation for password
  const checkStPassword = () => {
    if (studentPassword.match(/[a-zA-Z]\S/) && studentPassword.length >= 4) {
      setStchecker({ ...stChecker, stFifth: true });
      setStDisplay({ ...stDisplay, display5: "block" });
      setStStrength("weak");
    }
    if (
      studentPassword.match(/[a-zA-Z][0-9]\S/) &&
      studentPassword.length > 7
    ) {
      setStchecker({ ...stChecker, stFifth: true });
      setStDisplay({ ...stDisplay, display5: "block" });
      setStStrength("strong");
    }
    if (studentPassword.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)) {
      setStchecker({ ...stChecker, stFifth: false });
      setStDisplay({ ...stDisplay, display5: "block" });
      setStStrength("specialCharacter");
    }
    if (studentPassword.length < 4 || studentPassword.length > 15) {
      setStchecker({ ...stChecker, stFifth: false });
      setStDisplay({ ...stDisplay, display5: "block" });
      setStStrength("invalid");
    }
  };
  // validation for phone number
  const checkStDial = () => {
    if (
      studentPhoneNumber.match(/[0-9]/) &&
      studentPhoneNumber.length >= 11 &&
      studentPhoneNumber.length <= 15
    ) {
      setStchecker({ ...stChecker, stSixth: true });
      setStDisplay({ ...stDisplay, display6: "block" });
    }
    if (
      studentPhoneNumber.match(/[!-\*]|[,-\/]|[:-~]|\s/) ||
      studentPhoneNumber === ""
    ) {
      setStchecker({ ...stChecker, stSixth: false });
      setStDisplay({ ...stDisplay, display6: "block" });
    }
  };
  useEffect(() => {
    if (isSuccess || studentUser) {
      navigate("/");
    }
    if (isError) {
      toast.error(message);
    }
    dispatch(reset());
  }, [message, dispatch, navigate, studentUser, isSuccess, isError]);
  const submitStudent = async () => {
    if (
      stFirst &&
      stSecond &&
      stThird &&
      stFourth &&
      stFifth &&
      stSixth &&
      stSeven &&
      stEight &&
      stNine &&
      stTen &&
      stEleven
    ) {
      try {
        alert("Registered successfully");
        dispatch(regStudent(student));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form
        className="studentRegForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ul className="studentRegForm-ul">
          <li className="studentRegForm-li">
            <input
              type="text"
              name="studentSchool"
              placeholder="Enter School Name"
              value={studentSchool}
              onChange={onChange}
              onKeyUp={checkStSchool}
            />
            <p
              className={stFirst ? "green" : "red"}
              style={{ display: display1 }}
            >
              {stFirst ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="text"
              name="studentFirstName"
              placeholder="enter first name"
              value={studentFirstName}
              onChange={onChange}
              onKeyUp={checkStFirstName}
            />
            <p
              className={stSecond ? "green" : "red"}
              style={{ display: display2 }}
            >
              {stSecond ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="text"
              name="studentLastName"
              placeholder="enter last name"
              value={studentLastName}
              onInput={onChange}
              onKeyUp={checkStLast}
            />
            <p
              className={stThird ? "green" : "red"}
              style={{ display: display3 }}
            >
              {stThird ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="email"
              name="studentEmail"
              placeholder="enter email"
              value={studentEmail}
              onInput={onChange}
              onKeyUp={checkStEmail}
            />
            <p
              className={stFourth ? "green" : "red"}
              style={{ display: display4 }}
            >
              {stFourth ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="password"
              name="studentPassword"
              placeholder="enter your password"
              value={studentPassword}
              onInput={onChange}
              onKeyUp={checkStPassword}
            />
            <p
              className={stFifth ? "green" : "red"}
              style={{ display: display5 }}
            >
              {stFifth
                ? stStrength === "weak"
                  ? "weak"
                  : stStrength === "strong"
                  ? "strong"
                  : "valid"
                : stStrength === "specialCharacter"
                ? "special characters not allowed"
                : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="tel"
              name="studentPhoneNumber"
              placeholder="enter your phone number"
              value={studentPhoneNumber}
              onInput={onChange}
              onKeyUp={checkStDial}
            />
            <p
              className={stSixth ? "green" : "red"}
              style={{ display: display6 }}
            >
              {stSixth ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <h4 className="male">
              <p>Male</p>
              <input
                type="radio"
                data-id="male"
                name="gender"
                value={male}
                id="Male"
                onInput={changeSex}
                onClick={changeAll}
              />
            </h4>
            <h4 className="female">
              <p>Female</p>
              <input
                type="radio"
                data-id="female"
                name="gender"
                value={female}
                id="Female"
                onInput={changeSex}
                onClick={changeAll}
              />
            </h4>
            <p
              className={stSeven ? "green" : "red"}
              style={{ display: display7 }}
            >
              {stSeven ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <SelectClass
              onChange={(e) => {
                const newClass = e.target.value;
                setStudent({ ...student, studentClass: newClass });
              }}
              data-id="select-class"
              onClick={changeAll}
              className="schoolType"
            />
            <p
              className={stEight ? "green" : "red"}
              style={{ display: display8 }}
            >
              {stEight ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="text"
              name="schoolAccessId"
              placeholder="School-Access-Id"
              value={schoolAccessId}
              onChange={onChange}
              onKeyUp={changeAll}
              data-id="skull-access"
            />
            <p
              className={stNine ? "green" : "red"}
              style={{ display: display9 }}
            >
              {stNine ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-li">
            <input
              type="text"
              name="studentClassId"
              placeholder="Student-Class-Id"
              value={studentClassId}
              onChange={onChange}
              onKeyDown={changeAll}
              data-id="classid"
            />
            <p
              className={stTen ? "green" : "red"}
              style={{ display: display10 }}
            >
              {stTen ? "valid" : "invalid"}
            </p>
          </li>
          <li className="studentRegForm-year">
            <p className="academic-title ">Current Academic Session</p>
            <div className="student-year-container">
              <p className="initial-academic-Session">
                <label htmlFor="academic-Session">From</label>
                <input
                  type="number"
                  min="2022"
                  max="2040"
                  name="startOfAcademicYear"
                  value={startOfAcademicYear}
                  onChange={onChange}
                  onClick={changeAll}
                  data-id="startyear"
                />
              </p>
              <p className="end-academic-Session">
                <label htmlFor="end-academic-Session" className="to">
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
                />
              </p>
              <span
                className={stEleven ? "green" : "red"}
                style={{ display: display11 }}
              >
                {stEleven ? "valid" : "invalid"}
              </span>
            </div>
          </li>

          <button type="button" className="studentbtn" onClick={submitStudent}>
            Submit
          </button>
        </ul>
      </form>
    </>
  );
};

export default StudentRegPage;
