import React, { useState, useEffect } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, registerPioneer } from "../../../features/auth/authSlice";
import { useStateContext } from "../../../contexts/ContextProvider";

// import Button from "../../Buttons";

const PioneerRegPage = () => {
  // input fields
  const [pioneer, setPioneer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    schoolName: "",
  });
  // redux panels
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, message, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  // used to change classname and validation statements
  const [Pchecker, setPchecker] = useState({
    pFirst: false,
    pSecond: false,
    pThird: false,
    pFourth: false,
    pFifth: false,
    pSixth: false,
  });
  // used to switch between displays
  const [display, setDisplay] = useState({
    display1: "none",
    display2: "none",
    display3: "none",
    display4: "none",
    display5: "none",
    display6: "none",
  });
  // used to show password strength
  const [strength, setStrength] = useState("");

  // objects destructuring
  const { firstName, lastName, email, password, phoneNumber, schoolName } =
    pioneer;
  const { pFirst, pSecond, pThird, pFourth, pFifth, pSixth } = Pchecker;
  const { display1, display2, display3, display4, display5, display6 } =
    display;
  // function to change the empty inputs
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPioneer({ ...pioneer, [name]: value });
  };
  // function to validate pioneer
  const checkFirst = () => {
    // validation for first name
    if (
      firstName.match(/[a-zA-Z]\S/) &&
      firstName.length >= 3 &&
      firstName.length < 15
    ) {
      setPchecker({ ...Pchecker, pFirst: true });
      setDisplay({ ...display, display1: "block" });
    }
    if (
      firstName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) ||
      firstName.length < 3 ||
      firstName.length > 15 ||
      firstName === ""
    ) {
      setPchecker({ ...Pchecker, pFirst: false });
      setDisplay({ ...display, display1: "block" });
    }
  };
  // validation for last name
  const checkSecond = () => {
    if (
      lastName.match(/[a-zA-Z]\S/) &&
      lastName.length >= 3 &&
      lastName.length < 15
    ) {
      setPchecker({ ...Pchecker, pSecond: true });
      setDisplay({ ...display, display2: "block" });
    }
    if (
      lastName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) ||
      lastName.length < 3 ||
      lastName.length > 15 ||
      lastName === ""
    ) {
      setPchecker({ ...Pchecker, pSecond: false });
      setDisplay({ ...display, display2: "block" });
    }
  };
  // validation for school name
  const checkSchName = () => {
    if (
      schoolName.match(/[a-zA-Z]/) &&
      schoolName.length >= 3 &&
      schoolName.length < 15
    ) {
      setPchecker({ ...Pchecker, pSixth: true });
      setDisplay({ ...display, display6: "block" });
    }
    if (
      schoolName.match(/[!-@]|[\[-`]|[\{-~}]/) ||
      schoolName.length < 3 ||
      schoolName.length > 15 ||
      schoolName === ""
    ) {
      setPchecker({ ...Pchecker, pSixth: false });
      setDisplay({ ...display, display6: "block" });
    }
  };
  // validation for email
  const checkEmail = () => {
    if (email.match(/[a-z][0-9]@gmail.com/) && email.length >= 12) {
      setPchecker({ ...Pchecker, pThird: true });
      setDisplay({ ...display, display3: "block" });
    }
    if (email.match(/[a-z]@gmail.com/) && email.length >= 12) {
      setPchecker({ ...Pchecker, pThird: true });
      setDisplay({ ...display, display3: "block" });
    }
    if (
      (!email.match(/[a-z]@gmail.com/) &&
        !email.match(/[a-z][0-9]@gmail.com/)) ||
      email.match(/[!-\-]|\/|[:-\?]|[\[-`]|[\{-~}]|\s/) ||
      email.length < 12
    ) {
      setPchecker({ ...Pchecker, pThird: false });
      setDisplay({ ...display, display3: "block" });
    }
  };
  // validation for password
  const checkPassword = () => {
    if (password.match(/[a-zA-Z]\S/) && password.length >= 4) {
      setPchecker({ ...Pchecker, pFourth: true });
      setDisplay({ ...display, display4: "block" });
      setStrength("weak");
    }
    if (password.match(/[a-zA-Z][0-9]\S/) && password.length > 7) {
      setPchecker({ ...Pchecker, pFourth: true });
      setDisplay({ ...display, display4: "block" });
      setStrength("strong");
    }
    if (password.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)) {
      setPchecker({ ...Pchecker, pFourth: false });
      setDisplay({ ...display, display4: "block" });
      setStrength("specialCharacter");
    }
    if (password.length < 4 || password.length > 15) {
      setPchecker({ ...Pchecker, pFourth: false });
      setDisplay({ ...display, display4: "block" });
      setStrength("invalid");
    }
  };
  // validation for phone number
  const checkDial = () => {
    if (
      phoneNumber.match(/[0-9]/) &&
      phoneNumber.length >= 11 &&
      phoneNumber.length <= 15
    ) {
      setPchecker({ ...Pchecker, pFifth: true });
      setDisplay({ ...display, display5: "block" });
    }
    if (phoneNumber.match(/[!-\*]|[,-\/]|[:-~]|\s/) || phoneNumber === "") {
      setPchecker({ ...Pchecker, pFifth: false });
      setDisplay({ ...display, display5: "block" });
    }
  };

  const submitPioneer = async () => {
    if (pFirst && pSecond && pThird && pFourth && pFifth && pSixth) {
      try {
        const userData = {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          schoolName,
        };
        dispatch(registerPioneer(userData));
      } catch (error) {
        alert("There's an invalid input field, unable to submit");
      }
    }
  };

  return (
    <>
      <form
        className="pioneerRegForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ul className="pioneerRegForm-ul">
          <li className="pioneerRegForm-li">
            <label htmlFor="firstName">First-Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="enter first name"
              value={firstName}
              onChange={onChange}
              onKeyUp={checkFirst}
            />
            <p
              className={pFirst ? "green" : "red"}
              style={{ display: display1 }}
            >
              {pFirst ? "valid" : "invalid"}
            </p>
          </li>
          <li className="pioneerRegForm-li">
            <label htmlFor="lastName">Last-Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="enter last name"
              value={lastName}
              onInput={onChange}
              onKeyUp={checkSecond}
            />
            <p
              className={pSecond ? "green" : "red"}
              style={{ display: display2 }}
            >
              {pSecond ? "valid" : "invalid"}
            </p>
          </li>
          <li className="pioneerRegForm-li">
            <label htmlFor="email">Gmail</label>
            <input
              type="email"
              name="email"
              placeholder="enter email"
              value={email}
              onInput={onChange}
              onKeyUp={checkEmail}
            />
            <p
              className={pThird ? "green" : "red"}
              style={{ display: display3 }}
            >
              {pThird ? "valid" : "invalid"}
            </p>
          </li>
          <li className="pioneerRegForm-li">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              value={password}
              onInput={onChange}
              onKeyUp={checkPassword}
            />
            <p
              className={pFourth ? "green" : "red"}
              style={{ display: display4 }}
            >
              {pFourth
                ? strength === "weak"
                  ? "weak"
                  : strength === "strong"
                  ? "strong"
                  : "valid"
                : strength === "specialCharacter"
                ? "special characters not allowed"
                : "invalid"}
            </p>
          </li>
          <li className="pioneerRegForm-li">
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="enter your phone number"
              value={phoneNumber}
              onInput={onChange}
              onKeyUp={checkDial}
            />
            <p
              className={pFifth ? "green" : "red"}
              style={{ display: display5 }}
            >
              {pFifth ? "valid" : "invalid"}
            </p>
          </li>
          <li className="pioneerRegForm-li">
            <label htmlFor="schoolName">School-Name</label>
            <input
              type="text"
              name="schoolName"
              placeholder="enter school name"
              value={schoolName}
              onInput={onChange}
              onKeyUp={checkSchName}
            />
            <p
              className={pSixth ? "green" : "red"}
              style={{ display: display6 }}
            >
              {pSixth ? "valid" : "invalid"}
            </p>
          </li>
          <button type="button" onClick={submitPioneer}>
            Submit
          </button>
        </ul>
      </form>
    </>
  );
};

export default PioneerRegPage;
