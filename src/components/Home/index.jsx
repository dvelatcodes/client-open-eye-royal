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
          ></div>
          <div className="header-group">
            <div className="header-up-container">
              <div className="header-up">
                <h1>OPEN</h1>
                <img src={eye} alt="title icon" />
                <h1>ROYAL</h1>
              </div>
            </div>
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
              {btnShow.firstbtn ? <MdZoomOut /> : <MdZoomIn />}
            </div>
            {btnShow.firstbtn && (
              <div
                className="flex w-fit m-auto"
                style={{ transform: "translateY(28vh)" }}
              >
                <Link to="/pioneerReg">
                  <div
                    className="w-80 h-36 rounded-2xl flex justify-around items-center border-2 border-white"
                    style={{ background: "rgba(2, 1, 1, 0.17)" }}
                  >
                    <div
                      className="w-fit h-fit text-3xl text-cyan-200"
                      style={{
                        fontFamily: "Times New Roman', Times, serif",
                      }}
                    >
                      Proprietor ? <br />
                      Create School
                    </div>
                  </div>
                </Link>
                <Link to="/studentRegPage">
                  <div
                    className="bg-cyan-200 w-80 ml-8 h-36 rounded-2xl flex justify-around items-center border-2 border-white"
                    style={{ background: "rgba(165, 243, 252, 0.2)" }}
                  >
                    <div
                      className="w-fit h-fit text-3xl  text-cyan-200"
                      style={{ fontFamily: "serif" }}
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
                className="bg-cyan-200 w-full absolute bottom-16"
                style={{ height: "2px" }}
              ></div>
            )}
            <MdOutlineSchool className="absolute bottom-4 left-10 text-5xl text-cyan-200" />
            {btnShow.firstbtn && (
              <div
                className="bottom-8 right-0 left-0 m-auto text-cyan-200 w-fit text-3xl font-bold absolute"
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
                <MdZoomIn className="text-yellow-100" />
              ) : (
                <MdZoomOut className="text-yellow-100" />
              )}
            </div>
            {btnShow.secondbtn || (
              <div
                className="top-40 right-40 -rotate-6 left-0 m-auto text-yellow-100 w-fit text-3xl font-extrabold italic absolute shadow-2xl cursor-pointer"
                style={{ fontFamily: "cursive" }}
              >
                Click To Explore
              </div>
            )}
            {btnShow.secondbtn || (
              <div
                className="bg-yellow-100 w-full absolute bottom-16"
                style={{ height: "2px" }}
              ></div>
            )}
            <SiDarkreader className="absolute bottom-4 left-10 text-5xl text-yellow-100" />
            {btnShow.secondbtn || (
              <div
                className="bottom-8 right-0 left-0 m-auto text-yellow-100 w-fit text-3xl font-extrabold italic absolute shadow-2xl"
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
              {btnShow.thirdbtn ? <MdZoomOut /> : <MdZoomIn />}
            </div>
            {btnShow.thirdbtn && (
              <div
                className="bg-fuchsia-500 w-full absolute bottom-16"
                style={{ height: "2px" }}
              ></div>
            )}
            <GiTeacher className="absolute bottom-4 left-10 text-5xl text-fuchsia-500" />
            {btnShow.thirdbtn && (
              <div
                className="bottom-8 right-0 left-0 m-auto text-fuchsia-500 w-fit text-3xl font-bold absolute"
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
