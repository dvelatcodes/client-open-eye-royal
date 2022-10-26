import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/index";
import Cookies from "js-cookie";

// get user
// get user
const user = JSON.parse(localStorage.getItem("user"));
// pioneerSchools
// pioneerSchools
const pioneerSchools = JSON.parse(localStorage.getItem("AllPioneerSchools"));
// student
// student
const student = JSON.parse(localStorage.getItem("student"));
// studentTimetable
// studentTimetable
const studentTimetable = JSON.parse(localStorage.getItem("studentTimetable"));
// studentSpecificClass
// studentSpecificClass
const studentSpecificClass = JSON.parse(
  localStorage.getItem("studentSpecificClass")
);
// initialstate
// initialstate
const initialState = {
  user: user ? user : null,
  student: student ? student : null,
  studentSpecificClass: studentSpecificClass ? studentSpecificClass : null,
  studentTimetable: studentTimetable ? studentTimetable : null,
  pioneerSchools: pioneerSchools || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// getStudentTimetable
// getStudentTimetable
export const getStudentTimetable = createAsyncThunk(
  "auth/getStudentTimetable",
  async (pioneerId, studentClass, thunkAPI) => {
    try {
      return await authService.studentSpecificTimetable(
        pioneerId,
        studentClass
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get student specific class
// get student specific class
export const getStudentSpecificClass = createAsyncThunk(
  "auth/getStudentSpecificClass",
  async (pioneerId, studentClass, thunkAPI) => {
    try {
      return await authService.studentSpecificClass(pioneerId, studentClass);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerPioneer = createAsyncThunk(
  "auth/registerPioneer",
  async (pioneer, thunkAPI) => {
    try {
      return await authService.registerPioneer(pioneer);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     return await authService.register(user);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     thunkAPI.rejectWithValue(message);
//   }
// });

// Register Student
export const regStudent = createAsyncThunk(
  "auth/regStudent",
  async (student, thunkAPI) => {
    try {
      return await authService.regStudent(student);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// studentAdmittedClass
// studentAdmittedClass
export const studentAdmittedClass = createAsyncThunk(
  "auth/studentAdmittedClass",
  async (data, thunkAPI) => {
    try {
      return await authService.studentAdmittedClass(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get all registered pioneer to show waiting to be admitted student
// get all registered pioneer to show waiting to be admitted student
export const getAllPioneer = createAsyncThunk(
  "getAllPioneer",
  async (data, thunkAPI) => {
    try {
      return await authService.getAllPioneer();
    } catch (error) {
      const message =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// loginPioneer
// loginPioneer
export const loginPioneer = createAsyncThunk(
  "auth/loginPioneer",
  async (email, password, thunkAPI) => {
    try {
      return await authService.loginPioneer(email, password);
    } catch (error) {
      const message =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// loginStudent
// loginStudent
export const loginStudent = createAsyncThunk(
  "auth/loginStudent",
  async (studentEmail, studentPassword, thunkAPI) => {
    try {
      return await authService.loginStudent(studentEmail, studentPassword);
    } catch (error) {
      const message =
        (error.response &&
          error.response.message &&
          error.response.message.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// logout
// logout
export const logout = createAsyncThunk("auth/logout", async () => {
  return await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPioneer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerPioneer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        Cookies.set("Auth_token", action.payload?.token);
      })
      .addCase(registerPioneer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginPioneer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginPioneer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(loginPioneer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(loginStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(loginStudent.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.student = null;
      })
      .addCase(getStudentTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.studentTimetable = action.payload;
      })
      .addCase(getStudentTimetable.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.studentTimetable = null;
      })
      .addCase(getStudentSpecificClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentSpecificClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.studentSpecificClass = action.payload;
      })
      .addCase(getStudentSpecificClass.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.studentSpecificClass = null;
      })
      .addCase(regStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
        Cookies.set("auth_token", action.payload?.token);
      })
      .addCase(regStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.student = null;
      })
      .addCase(studentAdmittedClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(studentAdmittedClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.student = action.payload;
      })
      .addCase(studentAdmittedClass.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.student = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        Cookies.remove("auth_token");
      })
      .addCase(getAllPioneer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllPioneer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pioneerSchools = action.payload;
      })
      .addCase(getAllPioneer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.pioneerSchools = null;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;

// export default ecommerceSlice.reducer
export default authSlice.reducer;
