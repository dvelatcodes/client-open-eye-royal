import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  req.headers.authorization = "Bearer " + Cookies.get("Auth_token");
  return req;
});

// Register Pioneer Post Method
// Register Pioneer Post Method
const registerPioneer = async (pioneer) => {
  const response = await API.post("/regpioneer", pioneer);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.pioneer));
  }
  return response.data;
};
// register class Post Method
// register class Post Method
const regClass = async (userData) => {
  const response = await API.post("/regnigerianclass", userData);
  if (response) {
    localStorage.setItem("nigerianclasses", JSON.stringify(response.data));
  }
  return response.data;
};
// regPioneerNigerClass Post Method
// regPioneerNigerClass Post Method
const regPioneerNigerClass = async (data) => {
  const response = await API.post("/regPioneerNigerClass", data);
  if (response.data) {
    localStorage.setItem("pioneerNigerClass", JSON.stringify(response.data));
  }
  console.log(response);
  return response.data;
};
// create timetable
// create timetable
const createTimetable = async (data) => {
  try {
    const response = await API.post("/saveNigerTimetable", data);
    if (response) {
      localStorage.setItem("timetable", JSON.stringify(response.data));
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// get PioneerNigerClass classes Get Method
// get PioneerNigerClass classes Get Method
const getPioneerNigerClass = async ({ _id, schSection }) => {
  const response = await API.get(
    `/getPioneerNigerClass?pioneerId=${_id}&schSection=${schSection}`
  );
  if (response) {
    localStorage.setItem("pioneerNigerClass", JSON.stringify(response.data));
  }
  return response.data;
};
// get default classes Get Method
// get default classes Get Method
const getDefaultClasses = async () => {
  const { data } = await API.get("/defaultclasses");
  if (data) {
    localStorage.setItem("defaultclasses", JSON.stringify(data));
  }
  return data;
};
// Register Student Post Method
// Register Student Post Method
const regStudent = async (student) => {
  const response = await API.post("/regstudent", student);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.student));
  }
  return student;
};
// Logout user
// Logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  registerPioneer,
  regClass,
  getDefaultClasses,
  regPioneerNigerClass,
  createTimetable,
  getPioneerNigerClass,
  regStudent,
  logout,
};

export default authService;
