import axios from "axios";
import Cookies from "js-cookie";
const API = axios.create({
  baseURL: "http://localhost:5000",
});
API.interceptors.request.use((req) => {
  req.headers.authorization = "Bearer " + Cookies.get("Auth_token");
  return req;
});

// Register Pioneer
// Register Pioneer
const registerPioneer = async (pioneer) => {
  const response = await API.post("/regpioneer", pioneer);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.pioneer));
  }
  return response.data;
};
// register class
// register class
const regClass = async (userData) => {
  const response = await API.post("/regnigerianclass", userData);
  if (response) {
    localStorage.setItem("nigerianclasses", JSON.stringify(response.data));
  }
  return response.data;
};
// get default classes
// get default classes
const getDefaultClasses = async () => {
  const response = await API.get("/defaultclasses");
  console.log(response);
  if (response) {
    localStorage.setItem("defaultclasses", JSON.stringify(response.data));
  }
  return response;
};
// Register Student
// Register Student
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
  regStudent,
  logout,
};

export default authService;
