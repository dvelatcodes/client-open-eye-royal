import { useState, useEffect } from "react";
import "./index.scss";
import eye from "../../Assets/Images/eye.png";
import { MdSouthEast, MdZoomIn, MdZoomOut } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { SiDarkreader } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Home() {
  const [headerBlack, setHeaderBlack] = useState("header-color-img");
  const [studentColor, setStudentColor] = useState("rgb(203, 255, 255)");
  const [proprietorColor, setProprietorColor] = useState("rgb(187, 255, 255)");
  const [checker, setChecker] = useState(false);
  const [btnShow, setBtnShow] = useState({
    firstbtn: false,
    secondbtn: false,
    thirdbtn: false,
  });

  const words = [
    "The",
    "World's",
    "Most",
    "Modern",
    "Online",
    "Learning",
    "Platform",
  ];

  const changeHead = () => {
    if (headerBlack === "header-color-img") {
      setHeaderBlack("first-header-img");
    }
    if (headerBlack === "first-header-img") {
      setHeaderBlack("header-color-img");
    }
  };

  // console.log(btnShow[0].firstbtn);
  const changeFirst = () => {
    if (btnShow.secondbtn === false && btnShow.thirdbtn === false) {
      setBtnShow({ ...btnShow, firstbtn: true, secondbtn: true });
    }
    if (btnShow.firstbtn === true) {
      setBtnShow({ ...btnShow, firstbtn: false, secondbtn: false });
    }
    if (btnShow.thirdbtn === true) {
      setBtnShow({ ...btnShow, firstbtn: true, thirdbtn: false });
    }
  };
  const changeSecond = () => {
    if (btnShow.firstbtn === true) {
      setBtnShow({ ...btnShow, secondbtn: false, firstbtn: false });
    }
    if (btnShow.thirdbtn === true) {
      setBtnShow({ ...btnShow, secondbtn: false, thrirdbtn: false });
    }
    if (btnShow.secondbtn === false) {
      setBtnShow({ ...btnShow, secondbtn: true, thirdbtn: true });
    }
    if (btnShow.secondbtn === true) {
      setBtnShow({
        ...btnShow,
        secondbtn: false,
        thirdbtn: false,
        firstbtn: false,
      });
    }
  };
  const changeThird = () => {
    if (btnShow.secondbtn === false && btnShow.firstbtn === false) {
      setBtnShow({ ...btnShow, thirdbtn: true, secondbtn: true });
    }
    if (btnShow.thirdbtn === true) {
      setBtnShow({ ...btnShow, thirdbtn: false, secondbtn: false });
    }
    if (btnShow.firstbtn === true) {
      setBtnShow({ ...btnShow, thirdbtn: true, firstbtn: false });
    }
    // else{
    //     setBtnShow({...btnShow, thirdbtn : false});
    // }
  };

  useEffect(() => {
    changeHead();
    setChecker(true);
  }, []);

  return (
    <>
      <div className="home-container">
        <div className={headerBlack}>
          <div
            className={checker ? "explore" : "initial-explore"}
            onMouseOver={changeHead}
            onClick={changeHead}
          ></div>
          <div className="header-group">
            <div className="header-up-container">
              <div className="header-up">
                <h1>OPEN</h1>
                <img src={eye} alt="title icon" />
                <h1>ROYAL</h1>
              </div>
            </div>
            {/* There are other schools in Birmingham; Ulster University, Aston university, university of Wolverhampton, Coventry university, university of Birmingham et */}
            <div className="header-down">
              <div className="header-down-color"></div>
              <div className="auto-words">
                <h4 className={checker ? "auto-1st" : ""}>{words[0]}</h4>
                <h4 className={checker ? "auto-2nd" : ""}>{words[1]}</h4>
                <h4 className={checker ? "auto-3rd" : ""}>{words[2]}</h4>
                <h4 className={checker ? "auto-4th" : ""}>{words[3]}</h4>
                <h4 className={checker ? "auto-5th" : ""}>{words[4]}</h4>
                <h4 className={checker ? "auto-6th" : ""}>{words[5]}</h4>
                <h4 className={checker ? "auto-7th" : ""}>{words[6]}</h4>
                <button className="view-community">
                  <Link to="" className="view-btn">
                    View Community{<MdSouthEast />}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-showbiz">
          <div
            className={
              btnShow.firstbtn ? "changeshow1st relative" : "show1st relative"
            }
          >
            <div className="show1stbtn" onClick={changeFirst}>
              {btnShow.firstbtn ? (
                <MdZoomOut id="zoomOut" />
              ) : (
                <MdZoomIn id="zoomIn" />
              )}
            </div>
            {btnShow.firstbtn && (
              <div className="flex w-fit m-auto propAndStuContainer">
                <Link to="/pioneerReg">
                  <div
                    className="w-80 h-36 rounded-2xl flex justify-around items-center border-8 border-white hover:border-cyan-100 proprietorContainer"
                    style={{ background: "rgba(165, 243, 252, 0.1)" }}
                  >
                    <div
                      className={`w-fit h-fit text-4xl font-bold proprietorText`}
                    >
                      Proprietor ? <br />
                      Create School
                    </div>
                  </div>
                </Link>
                <Link to="/studentRegPage">
                  <div
                    className={`bg-cyan-200 w-80 ml-8 h-36 rounded-2xl flex justify-around items-center border-8 border-cyan-300 hover:border-cyan-50 studentContainer`}
                    style={{ background: "rgba(165, 243, 252, 0.1)" }}
                    onMouseEnter={() => setStudentColor("cyan")}
                    onMouseLeave={() => setStudentColor("rgb(203, 255, 255)")}
                  >
                    <div
                      className={`w-fit h-fit text-4xl font-bold studentText`}
                      // style={{ color: studentColor }}
                    >
                      Student ? <br />
                      Free Admission
                    </div>
                  </div>
                </Link>
              </div>
            )}
            {btnShow.firstbtn && (
              <div
                className="bg-cyan-200 w-full absolute bottom-16 propAndStuLine"
                // style={{ height: "2px" }}
              ></div>
            )}
            <MdOutlineSchool className="absolute bottom-4 left-10 text-5xl text-cyan-200 gradCap" />
            {btnShow.firstbtn && (
              <div
                className="bottom-8 right-0 left-0 m-auto text-cyan-200 w-fit text-3xl font-bold absolute propAndStuTitle"
                style={{ fontFamily: "serif" }}
              >
                Junior/Senior Secondary schools
              </div>
            )}
          </div>
          <div
            className={
              btnShow.secondbtn ? "changeshow2nd relative" : "show2nd relative"
            }
          >
            <div className="show2ndbtn" onClick={changeSecond}>
              {btnShow.secondbtn ? (
                <MdZoomIn className="text-yellow-100 zoomIn" />
              ) : (
                <MdZoomOut className="text-yellow-100 zoomOut" />
              )}
            </div>
            {btnShow.secondbtn || (
              <div
                className="top-40 right-40 -rotate-6 left-0 m-auto text-yellow-100 w-fit text-3xl font-extrabold italic absolute shadow-2xl cursor-pointer exploreWords"
                style={{ fontFamily: "cursive" }}
                onClick={changeFirst}
              >
                Click To Explore
              </div>
            )}
            {btnShow.secondbtn || (
              <div className="bg-yellow-100 w-full absolute bottom-16 exploreLine"></div>
            )}
            <SiDarkreader className="absolute bottom-4 left-10 text-5xl text-yellow-100 reader" />
            {btnShow.secondbtn || (
              <div
                className="bottom-8 right-0 left-0 m-auto text-yellow-100 w-fit text-3xl font-extrabold italic absolute shadow-2xl onlineCourses"
                style={{ fontFamily: "cursive" }}
              >
                Online Courses
              </div>
            )}
          </div>
          <div
            className={
              btnShow.thirdbtn ? "changeshow3rd relative" : "show3rd relative"
            }
          >
            <div className="show3rdbtn" onClick={changeThird}>
              {btnShow.thirdbtn ? (
                <MdZoomOut className="zoomOut" />
              ) : (
                <MdZoomIn className="zoomIn" />
              )}
            </div>
            {btnShow.thirdbtn && (
              <div
                className="bg-fuchsia-500 w-full absolute bottom-16 tutorLine"
                style={{ height: "2px" }}
              ></div>
            )}
            <GiTeacher className="absolute bottom-4 left-10 text-5xl text-fuchsia-500 tutorIcon" />
            {btnShow.thirdbtn && (
              <div
                className="bottom-8 right-0 left-0 m-auto text-fuchsia-500 w-fit text-3xl font-bold absolute tutorWords"
                style={{ fontFamily: "serif" }}
              >
                Tutor
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
