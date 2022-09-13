import { useState, useEffect } from "react";
import "./index.scss";
import eye from "../../Assets/Images/eye.png";
import { MdSouthEast, MdZoomIn, MdZoomOut } from "react-icons/md"
import { Link } from "react-router-dom";

export default function Home() {
    const [headerBlack, setHeaderBlack] = useState("header-color-img");
    const [checker, setChecker] = useState(false);
    const [btnShow, setBtnShow] = useState({firstbtn : false, secondbtn : false, thirdbtn : false});
    
    const words = ["The", "World's", "Most", "Modern", "Online", "Learning", "Platform"];
   
    const changeHead = () => {
        if(headerBlack === "header-color-img"){
            setHeaderBlack("first-header-img");
        }
        if(headerBlack === "first-header-img"){
            setHeaderBlack("header-color-img");
        }
    }

    // console.log(btnShow[0].firstbtn);
    const changeFirst = () => {
        if(btnShow.secondbtn === false && btnShow.thirdbtn === false){
            setBtnShow({...btnShow, firstbtn : true, secondbtn : true});
        }
        if(btnShow.firstbtn === true){
            setBtnShow({...btnShow, firstbtn : false, secondbtn : false})
        }
        if(btnShow.thirdbtn === true){
            setBtnShow({...btnShow, firstbtn : true, thirdbtn : false});
        }
       
    }
    const changeSecond = () => {
        if(btnShow.firstbtn === true){
            setBtnShow({...btnShow, secondbtn : false, firstbtn : false});
        }
        if(btnShow.thirdbtn === true){
            setBtnShow({...btnShow, secondbtn : false, thrirdbtn : false});
        }
        if(btnShow.secondbtn === false){
            setBtnShow({...btnShow, secondbtn : true, thirdbtn : true});
        }
        if(btnShow.secondbtn === true){
            setBtnShow({...btnShow, secondbtn : false, thirdbtn : false, firstbtn : false});
        }
        
    }
    const changeThird = () => {
        if(btnShow.secondbtn === false && btnShow.firstbtn === false){
            setBtnShow({...btnShow, thirdbtn : true, secondbtn : true});
        }
        if(btnShow.thirdbtn === true){
            setBtnShow({...btnShow, thirdbtn : false, secondbtn : false});
        }
        if(btnShow.firstbtn === true){
            setBtnShow({...btnShow, thirdbtn : true, firstbtn : false});
        }
        // else{
        //     setBtnShow({...btnShow, thirdbtn : false});
        // }
    }

    useEffect(() => {
        changeHead();
        setChecker(true);
    },[])

    return(
        <>
        <div className="home-container">
            <div className={headerBlack}>
                <div className={checker? "explore" : "initial-explore"} onMouseOver={changeHead}></div>
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
                                    <Link to="" className="view-btn">View Community{<MdSouthEast />}</Link>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="home-showbiz">
                <div className={btnShow.firstbtn? "changeshow1st" : "show1st"}>
                    <div className="show1stbtn" onClick={changeFirst}>
                        {btnShow.firstbtn ? <MdZoomOut /> : <MdZoomIn/>}
                    </div>      
                </div>
                <div className={btnShow.secondbtn ? "changeshow2nd" : "show2nd"}>
                    <div className="show2ndbtn" onClick={changeSecond}>
                        {btnShow.secondbtn ? <MdZoomIn /> : <MdZoomOut />}
                    </div>
                </div>
                <div className={btnShow.thirdbtn ? "changeshow3rd" : "show3rd"}>
                    <div className="show3rdbtn" onClick={changeThird}>
                        {btnShow.thirdbtn ? <MdZoomOut /> : <MdZoomIn />}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}