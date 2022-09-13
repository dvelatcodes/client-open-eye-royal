import React, { useState } from "react";
import SchoolStates from "../SchoolStates";
import "./index.scss";

const SchoolSetup = () => {
  const [school, setSchool] = useState({
    schoolName: "",
    schoolType: "",
    schoolState: "",
    exactSchoolAddress: "",
  });

  const { schoolName, exactSchoolAddress, schoolType, schoolState } = school;

  const updateSchoolValues = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const type = e.target.type;
    const checked = e.target.checked;
    setSchool((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(school);
  };
  return (
    <>
      <div className="schoolSetupContainer">
        <div className="schoolsetupimage"></div>
        <div className="schSetupImgBg"></div>
        <form
          className="schoolSetupForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ul className="schoolRegForm-ul">
            <li className="schoolRegForm-li">
              <select
                name={schoolType}
                className="schoolType"
                onChange={updateSchoolValues}
              >
                <option className="schTypeOption" value="">
                  Type of School
                </option>
                <option className="schTypeOption" value="Primary School">
                  Primary School
                </option>
                <option className="schTypeOption" value="Secondary School">
                  Secondary School
                </option>
                <option
                  className="schTypeOption"
                  value="Primary School & Secondary School"
                >
                  Primary School & Secondary School
                </option>
              </select>
            </li>
            <li className="schoolRegForm-li">
              <input
                type="text"
                placeholder="School Name"
                value={schoolName}
                name="schoolName"
                onChange={updateSchoolValues}
              />
            </li>
            <li className="schoolRegForm-li">
              <SchoolStates
                name={schoolState}
                onChange={updateSchoolValues}
                className={"schoption"}
              />
            </li>
            <li className="schoolRegForm-li">
              <textarea
                name="exactSchoolAddress"
                id=""
                placeholder="Exact-Address"
                value={exactSchoolAddress}
                onChange={updateSchoolValues}
              ></textarea>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default SchoolSetup;
