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
  // console.log(userData);
  if (response) {
    localStorage.setItem("nigerianclasses", JSON.stringify(response.data));
  }
  return response.data;
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
  regStudent,
  logout,
};

export default authService;
