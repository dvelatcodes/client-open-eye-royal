import React, { useState } from "react";
import "./index.scss";
// import Button from "../../Buttons";





const TeacherRegPage = () => {
    // input fields
    const [teacher, setTeacher] = useState({firstName : "", lastName : "", email : "", password : "", phoneNumber : "", accessId : ""});
    // used to change classname and validation statements
    const [tchecker, setTchecker] = useState({ tFirst : false, tSecond : false, tThird : false, tFourth : false, tFifth : false, tSixth : false
    })
    // used to switch between displays
    const [tdisplay, setTDisplay] = useState({display1 : "none", display2 : "none", display3 : "none", display4 : "none", display5 : "none", display6 : "none"});
    // used to show password strength
    const [tStrength, setTStrength] = useState("");

    // objects destructuring
    const { firstName, lastName, email, password, phoneNumber, accessId } = teacher;
    const { tFirst, tSecond, tThird, tFourth, tFifth, tSixth } = tchecker;
    const { display1, display2, display3, display4, display5, display6 } = tdisplay;
    // function to change the empty inputs
    const onChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setTeacher({...teacher, [name] : value})
    }
    // function to validate pioneer
    const checkTFirst = () =>{
        // validation for first name
        if(firstName.match(/[a-zA-Z]\S/) && firstName.length >= 3 && firstName.length < 15){
            setTchecker({...tchecker, tFirst : true});
            setTDisplay({...tdisplay, display1 : "block"}); 
        }
        if(firstName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) || firstName.length < 3 || firstName.length > 15 || firstName === ""){
            setTchecker({...tchecker, tFirst : false});
            setTDisplay({...tdisplay, display1 : "block"});
        }
        
    }
     // validation for last name
    const checkTSecond = () =>{
        if(lastName.match(/[a-zA-Z]\S/) && lastName.length >= 3 && lastName.length < 15){
            setTchecker({...tchecker, tSecond : true});
            setTDisplay({...tdisplay, display2 : "block"}); 
        }
        if(lastName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) || lastName.length < 3 || lastName.length > 15 || lastName === ""){
            setTchecker({...tchecker, tSecond : false});
            setTDisplay({...tdisplay, display2 : "block"});
        }
    }
   // validation for email
   const checkTEmail = () =>{
        if (email.match(/[a-z][0-9]@gmail.com/) && email.length >= 12) {
            setTchecker({...tchecker, tThird : true});
            setTDisplay({...tdisplay, display3 : "block"});   
        }
        if (email.match(/[a-z]@gmail.com/) && email.length >= 12) {
            setTchecker({...tchecker, tThird : true});
            setTDisplay({...tdisplay, display3 : "block"});   
        }
        if (!email.match(/[a-z]@gmail.com/) && !email.match(/[a-z][0-9]@gmail.com/) || email.match(/[!-\-]|\/|[:-\?]|[\[-`]|[\{-~}]|\s/) || email.length < 12){
            setTchecker({...tchecker, tThird : false});
            setTDisplay({...tdisplay, display3 : "block"});
        }
   }
    // validation for password
    const checkTPassword = () =>{
        if(password.match(/[a-zA-Z]\S/) && password.length>=4){
            setTchecker({...tchecker, tFourth : true});
            setTDisplay({...tdisplay, display4 : "block"});
            setTStrength("weak");
        }
        if(password.match(/[a-zA-Z][0-9]\S/) && password.length>7){
            setTchecker({...tchecker, tFourth : true});
            setTDisplay({...tdisplay, display4 : "block"});
            setTStrength("strong");
        }
        if(password.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)){
            setTchecker({...tchecker, tFourth : false});
            setTDisplay({...tdisplay, display4 : "block"});
            setTStrength("specialCharacter");
        }
        if(password.length < 4 || password.length > 15){
            setTchecker({...tchecker, tFourth : false});
            setTDisplay({...tdisplay, display4 : "block"});
            setTStrength("invalid");
        }
    }
     // validation for phone number
     const checkTDial = ()=>{
        if(phoneNumber.match(/[0-9]/) && phoneNumber.length>=11 && phoneNumber.length<=15){
            setTchecker({...tchecker, tFifth : true});
            setTDisplay({...tdisplay, display5 : "block"});
        }
        if(phoneNumber.match(/[!-\*]|[,-\/]|[:-~]|\s/) || phoneNumber===""){
            setTchecker({...tchecker, tFifth : false});
            setTDisplay({...tdisplay, display5 : "block"});
        }
     }

     const checktAccessId = () =>{
        // validation for teacher's access Id
        if(accessId.match(/[a-zA-Z]\S/) && accessId.length>=4){
            setTchecker({...tchecker, tSixth : true});
            setTDisplay({...tdisplay, display6 : "block"});
        }
        if(accessId.match(/[a-zA-Z][0-9]\S/) && accessId.length>7){
            setTchecker({...tchecker, tSixth : true});
            setTDisplay({...tdisplay, display6 : "block"});
        }
        if(accessId.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)){
            setTchecker({...tchecker, tSixth : false});
            setTDisplay({...tdisplay, display6 : "block"});
        }
        if(accessId.length < 4 || accessId.length > 15){
            setTchecker({...tchecker, tSixth : false});
            setTDisplay({...tdisplay, display6 : "block"});
        }
    }

     const submitTeacher = ()=>{
        if(tFirst && tSecond && tThird && tFourth && tFifth && tSixth){
            alert("Registered successfully");
        }
        else{
          alert("There's an invalid input field, unable to submit");
        }
     }

    return(
        <>
            <form className="teacherRegForm" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <ul className="teacherRegForm-ul">
                    <li className="teacherRegForm-li">
                        <label htmlFor="firstName">
                        First-Name
                        </label>
                        <input type="text" name="firstName" placeholder="enter first name" value={firstName} onChange={onChange} onKeyUp={checkTFirst}/>
                        <p className={tFirst? "green" : "red"}  style={{display :display1}}>
                            {tFirst? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="teacherRegForm-li">
                        <label htmlFor="lastName">
                        Last-Name
                        </label>
                        <input type="text" name="lastName" placeholder="enter last name" value={lastName} onInput={onChange} onKeyUp={checkTSecond}/>
                        <p className={tSecond? "green" : "red"} style={{display : display2}}>
                            {tSecond? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="teacherRegForm-li">
                        <label htmlFor="email">
                        Gmail
                        </label>
                        <input type="email" name="email" placeholder="enter email" value={email} onInput={onChange} onKeyUp={checkTEmail}/>
                        <p className={tThird? "green" : "red"}  style={{display : display3}}>
                            {tThird? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="teacherRegForm-li">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" placeholder="enter your password" value={password} onInput={onChange} onKeyUp={checkTPassword}/>
                        <p className={tFourth? "green" : "red"} style={{display : display4}}>
                            {tFourth? (tStrength === "weak"? "weak" : (tStrength==="strong"?  "strong" : "valid")) : (tStrength==="specialCharacter"? "special characters not allowed" : "invalid") }
                        </p>
                    </li>
                    <li className="teacherRegForm-li">
                        <label htmlFor="Phone Number">
                            Phone Number
                        </label>
                        <input type="tel" name="phoneNumber" placeholder="enter your phone number" value={phoneNumber} onInput={onChange} onKeyUp={checkTDial}/>
                        <p className={tFifth? "green" : "red"}  style={{display : display5}}>
                            {tFifth? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="teacherRegForm-li">
                        <label htmlFor="accessId">
                        Access Id
                        </label>
                        <input type="accessId" name="accessId" placeholder="enter access Id" value={accessId} onInput={onChange} onKeyUp={checktAccessId}/>
                        <p className={tSixth? "green" : "red"}  style={{display : display6}}>
                            {tSixth? "valid" : "invalid" }
                        </p>
                    </li>
                    <button type="button" onClick={submitTeacher}>
                        Submit
                    </button>
                </ul>
            </form>
        </>
    )
}


export default TeacherRegPage;
