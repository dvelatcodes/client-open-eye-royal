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
  return response.data;
};

// saveAdminQuestions
// saveAdminQuestions
const saveAdminQuestions = async (data) => {
  try {
    const response = await API.post("/saveAdminQuestions", data);
    if (response.data) {
      localStorage.setItem("que", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
};
// getAdminQuestions
// getAdminQuestions
const getAdminQuestions = async () => {
  try {
    const response = await API.get(
      "/getAdminQuestions?questionId=635491e650cfd50244019ca9"
    );
    if (response.data) {
      localStorage.setItem("quee", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
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
// get timetable
// get timetable
const getTimetable = async ({ _id, showTimetable }) => {
  try {
    const response = await API.get(
      `/getTimetable?_id=${_id}&showTimetable=${showTimetable}`
    );
    if (response.data) {
      localStorage.setItem(
        "singleClassTimetable",
        JSON.stringify(response.data)
      );
    }
    return response.data;
  } catch (error) {
    return error;
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

// getStudentScreenPioneer
// getStudentScreenPioneer
const getStudentScreenPioneer = async ({ schoolStudentSelected }) => {
  const response = await API.get(
    `/getStudentScreenPioneer?schoolStudentSelected=${schoolStudentSelected}`
  );
  if (response.data) {
    localStorage.setItem("studentScreenPioneer", JSON.stringify(response.data));
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
  try {
    const response = await API.post("/regstudent", student);
    if (response.data) {
      localStorage.setItem("student", JSON.stringify(response.data.cover));
    }
    return response.data.cover;
  } catch (error) {
    return error;
  }
};

// studentAdmittedClass post method
//studentAdmittedClass post method
const studentAdmittedClass = async (data) => {
  try {
    const response = await API.post("/studentAdmittedClass", data);
    if (response.data) {
      localStorage.setItem("student", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

// get studentSpecificTimetable
//  get studentSpecificTimetable
const studentSpecificTimetable = async ({ pioneerId, studentClass }) => {
  try {
    const response = await API.get(
      `/studentSpecificTimetable?pioneerId=${pioneerId}&studentClass=${studentClass}`
    );
    if (response.data) {
      localStorage.setItem("studentTimetable", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
};
// get studentSpecificClass
// get studentSpecificClass
const studentSpecificClass = async ({ pioneerId, studentClass }) => {
  try {
    const response = await API.get(
      `/studentSpecificClass?pioneerId=${pioneerId}&studentClass=${studentClass}`
    );
    if (response.data) {
      localStorage.setItem(
        "studentSpecificClass",
        JSON.stringify(response.data)
      );
    }
    return response.data;
  } catch (error) {
    return error;
  }
};
// getAll pioneer
// getAll Pioneer
const getAllPioneer = async () => {
  try {
    const response = await API.get(`/getAllPioneer`);
    if (response.data)
      localStorage.setItem("AllPioneerSchools", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return error;
  }
};

// loginPioneer
// loginPioneer
const loginPioneer = async ({ email, password }) => {
  try {
    const response = await API.get(
      `/loginpioneer?email=${email}&password=${password}`
    );
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
};

// loginStudent
// loginStudent
const loginStudent = async ({ studentEmail, studentPassword }) => {
  try {
    const response = await API.get(
      `/loginpioneerstudent?email=${studentEmail}&password=${studentPassword}`
    );
    if (response.data) {
      localStorage.setItem("student", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    return error;
  }
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
  getTimetable,
  getPioneerNigerClass,
  getAllPioneer,
  regStudent,
  studentAdmittedClass,
  getStudentScreenPioneer,
  saveAdminQuestions,
  getAdminQuestions,
  studentSpecificTimetable,
  studentSpecificClass,
  loginPioneer,
  loginStudent,
  logout,
};

export default authService;
