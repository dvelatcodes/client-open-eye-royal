import React, {useEffect} from 'react';
import axios from "axios";


const TestStudent = () => {
 useEffect(()=>{
    // const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("topic", "PrepAI Benefits");
encodedParams.append("content", "Using PrepAI, the Edtech leaders have achieved 12x speed in publishing the final question paper sets and reduced 79% of their efforts in drafting multiple question categories.");

const options = {
  method: 'POST',
  url: 'https://prepai-generate-questions.p.rapidapi.com/getQuestions',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'f32063f3camshd5d011e654c416ap10d6e8jsnebdc02005f43',
    'X-RapidAPI-Host': 'prepai-generate-questions.p.rapidapi.com'
  },
  data: encodedParams
};

axios(options).then(function (response) {
	console.log(response.data);
  console.log("super")
}).catch(function (error) {
	console.error(error);
});
 },[])
  return (
    <>
    <p>Hello</p>
    </>
  )
}

export default TestStudent;