import React, { useState } from "react";
import "./index.scss";
// import Button from "../../Buttons";





const NonStudentRegPage = () => {
    // input fields
    const [nonStdudent, setNonStdudent] = useState({firstName : "", lastName : "", email : "", password : "", phoneNumber : ""});
    // used to change classname and validation statements
    const [nonStchecker, setNonStchecker] = useState({ nonStFirst : false, nonStSecond : false, nonStThird : false, nonStFourth : false, nonStFifth : false,
    })
    // used to switch between displays
    const [nonStdisplay, setNonStDisplay] = useState({display1 : "none", display2 : "none", display3 : "none", display4 : "none", display5 : "none"});
    // used to show password strength
    const [nonStstrength, setNonStStrength] = useState("");

    // objects destructuring
    const { firstName, lastName, email, password, phoneNumber } = nonStdudent;
    const { nonStFirst, nonStSecond, nonStThird, nonStFourth, nonStFifth } = nonStchecker;
    const { display1, display2, display3, display4, display5 } = nonStdisplay;
    // function to change the empty inputs
    const onChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setNonStdudent({...nonStdudent, [name] : value})
    }
    // function to validate pioneer
    const checkNonStFirst = () =>{
        // validation for first name
        if(firstName.match(/[a-zA-Z]\S/) && firstName.length >= 3 && firstName.length < 15){
            setNonStchecker({...nonStchecker, nonStFirst : true});
            setNonStDisplay({...nonStdisplay, display1 : "block"}); 
        }
        if(firstName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) || firstName.length < 3 || firstName.length > 15 || firstName === ""){
            setNonStchecker({...nonStchecker, nonStFirst : false});
            setNonStDisplay({...nonStdisplay, display1 : "block"});
        }
        
    }
     // validation for last name
    const checkNonStSecond = () =>{
        if(lastName.match(/[a-zA-Z]\S/) && lastName.length >= 3 && lastName.length < 15){
            setNonStchecker({...nonStchecker, nonStSecond : true});
            setNonStDisplay({...nonStdisplay, display2 : "block"}); 
        }
        if(lastName.match(/[!-@]|[\[-`]|[\{-~}]|\s/) || lastName.length < 3 || lastName.length > 15 || lastName === ""){
            setNonStchecker({...nonStchecker, nonStSecond : false});
            setNonStDisplay({...nonStdisplay, display2 : "block"});
        }
    }
   // validation for email
   const checkNonStEmail = () =>{
        if (email.match(/[a-z][0-9]@gmail.com/) && email.length >= 12) {
            setNonStchecker({...nonStchecker, nonStThird : true});
            setNonStDisplay({...nonStdisplay, display3 : "block"});   
        }
        if (email.match(/[a-z]@gmail.com/) && email.length >= 12) {
            setNonStchecker({...nonStchecker, nonStThird : true});
            setNonStDisplay({...nonStdisplay, display3 : "block"});   
        }
        if (!email.match(/[a-z]@gmail.com/) && !email.match(/[a-z][0-9]@gmail.com/) || email.match(/[!-\-]|\/|[:-\?]|[\[-`]|[\{-~}]|\s/) || email.length < 12){
            setNonStchecker({...nonStchecker, nonStThird : false});
            setNonStDisplay({...nonStdisplay, display3 : "block"});
        }
   }
    // validation for password
    const checkNonStPassword = () =>{
        if(password.match(/[a-zA-Z]\S/) && password.length>=4){
            setNonStchecker({...nonStchecker, nonStFourth : true});
            setNonStDisplay({...nonStdisplay, display4 : "block"});
            setNonStStrength("weak");
        }
        if(password.match(/[a-zA-Z][0-9]\S/) && password.length>7){
            setNonStchecker({...nonStchecker, nonStFourth : true});
            setNonStDisplay({...nonStdisplay, display4 : "block"});
            setNonStStrength("strong");
        }
        if(password.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]|\s/)){
            setNonStchecker({...nonStchecker, nonStFourth : false});
            setNonStDisplay({...nonStdisplay, display4 : "block"});
            setNonStStrength("specialCharacter");
        }
        if(password.length < 4 || password.length > 15){
            setNonStchecker({...nonStchecker, nonStFourth : false});
            setNonStDisplay({...nonStdisplay, display4 : "block"});
            setNonStStrength("invalid");
        }
    }
     // validation for phone number
     const checkNonStDial = ()=>{
        if(phoneNumber.match(/[0-9]/) && phoneNumber.length>=11 && phoneNumber.length<=15){
            setNonStchecker({...nonStchecker, nonStFifth : true});
            setNonStDisplay({...nonStdisplay, display5 : "block"});
        }
        if(phoneNumber.match(/[!-\*]|[,-\/]|[:-~]|\s/) || phoneNumber===""){
            setNonStchecker({...nonStchecker, nonStFifth : false});
            setNonStDisplay({...nonStdisplay, display5 : "block"});
        }
     }

     const submitNonStudent = ()=>{
        if(nonStFirst && nonStSecond && nonStThird && nonStFourth && nonStFifth){
            alert("Registered successfully");
        }
        else{
          alert("There's an invalid input field, unable to submit");
        }
     }

    return(
        <>
            <form className="nonStudentRegForm" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <ul className="nonStudentRegForm-ul">
                    <li className="nonStudentRegForm-li">
                        <label htmlFor="firstName">
                        First-Name
                        </label>
                        <input type="text" name="firstName" placeholder="enter first name" value={firstName} onChange={onChange} onKeyUp={checkNonStFirst}/>
                        <p className={nonStFirst? "green" : "red"}  style={{display :display1}}>
                            {nonStFirst? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="nonStudentRegForm-li">
                        <label htmlFor="lastName">
                        Last-Name
                        </label>
                        <input type="text" name="lastName" placeholder="enter last name" value={lastName} onInput={onChange} onKeyUp={checkNonStSecond}/>
                        <p className={nonStSecond? "green" : "red"} style={{display : display2}}>
                            {nonStSecond? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="nonStudentRegForm-li">
                        <label htmlFor="email">
                        Gmail
                        </label>
                        <input type="email" name="email" placeholder="enter email" value={email} onInput={onChange} onKeyUp={checkNonStEmail}/>
                        <p className={nonStThird? "green" : "red"}  style={{display : display3}}>
                            {nonStThird? "valid" : "invalid" }
                        </p>
                    </li>
                    <li className="nonStudentRegForm-li">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" placeholder="enter your password" value={password} onInput={onChange} onKeyUp={checkNonStPassword}/>
                        <p className={nonStFourth? "green" : "red"} style={{display : display4}}>
                            {nonStFourth? (nonStstrength === "weak"? "weak" : (nonStstrength==="strong"?  "strong" : "valid")) : (nonStstrength==="specialCharacter"? "special characters not allowed" : "invalid") }
                        </p>
                    </li>
                    <li className="nonStudentRegForm-li">
                        <label htmlFor="Phone Number">
                            Phone Number
                        </label>
                        <input type="tel" name="phoneNumber" placeholder="enter your phone number" value={phoneNumber} onInput={onChange} onKeyUp={checkNonStDial}/>
                        <p className={nonStFifth? "green" : "red"}  style={{display : display5}}>
                            {nonStFifth? "valid" : "invalid" }
                        </p>
                    </li>
                    <button type="button" onClick={submitNonStudent}>
                        Submit
                    </button>
                </ul>
            </form>
        </>
    )
}


export default NonStudentRegPage;
