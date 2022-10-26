import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../api/index";
// newClass
// newClass
const newClass = JSON.parse(localStorage.getItem("nigerianclasses"));
// defaultClasses
// defaultClasses
const defaultClasses = JSON.parse(localStorage.getItem("defaultclasses"));
// pioneerNigerClass
// pioneerNigerClass
const pioneerNigerClass = JSON.parse(localStorage.getItem("pioneerNigerClass"));
// pioneerClass
// pioneerClass
const pioneerClass = JSON.parse(localStorage.getItem("pioneerNigerClass"));
// timetable
// timetable
const timetable = JSON.parse(localStorage.getItem("/timetable"));
// singleClassTimetable
// singleClassTimetable
const singleClassTimetable = JSON.parse(
  localStorage.getItem("singleClassTimetable")
);
// studentScreenPioneer
// studentScreenPioneer
const studentScreenPioneer = JSON.parse(
  localStorage.getItem("studentScreenPioneer")
);
// admin questions
// admin questions
const adminQuestions = JSON.parse(localStorage.getItem("que"));
// get admin questions
// get admin questions
const getQuestions = JSON.parse(localStorage.getItem("quee"));
// studentForPioneer
// studentForPioneer
const studentForPioneer = JSON.parse(localStorage.getItem("studentForPioneer"));
// initial class state
// initial class state
const initialState = {
  newClass: newClass || null,
  timetable: timetable || null,
  adminQuestions: adminQuestions || null,
  studentForPioneer: studentForPioneer ? studentForPioneer : null,
  getQuestions: getQuestions || null,
  singleClassTimetable: singleClassTimetable || null,
  defaultClasses: defaultClasses || null,
  pioneerNigerClass: pioneerNigerClass || null,
  studentScreenPioneer: studentScreenPioneer || null,
  pioneerClass: pioneerClass || null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

// reg new class Post method
// reg new class Post method
export const regClass = createAsyncThunk(
  "class/regClass",
  async (classData, thunkAPI) => {
    try {
      // console.log(classData);
      return await authService.regClass(classData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// set saveAdminQuestions
//  set saveAdminQuestions
export const setAdminQuestions = createAsyncThunk(
  "setAdminQuestions",
  async (data, thunkAPI) => {
    try {
      return await authService.saveAdminQuestions(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get AdminQuestions
//  get AdminQuestions
export const getAdminQuestions = createAsyncThunk(
  "getAdminQuestions",
  async (data, thunkAPI) => {
    try {
      return await authService.getAdminQuestions();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// regPioneerNigerClass Post Method9
// regPioneerNigerClass Post Method
export const registerPioneerNClass = createAsyncThunk(
  "registerPioneerNClass/class",
  async (data, thunkAPI) => {
    try {
      return await authService.regPioneerNigerClass(data);
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
// create timetable
// create timetable
export const createTimetable = createAsyncThunk(
  "createTimetable",
  async (data, thunkAPI) => {
    try {
      return await authService.createTimetable(data);
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
// get timetable
// get timetable
export const getTimetable = createAsyncThunk(
  "getTimetable",
  async (_id, showTimetable, showSubjects, thunkAPI) => {
    try {
      return await authService.getTimetable(_id, showTimetable, showSubjects);
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
// getPioneerNigerClass
// getPioneerNigerClass
export const getPioneerNigerClass = createAsyncThunk(
  "getPioneerNigerClass",
  async (_id, schSection, thunkAPI) => {
    try {
      return await authService.getPioneerNigerClass(_id, schSection);
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
// getStudentScreenPioneer
// getStudentScreenPioneer
export const getStudentScreenPioneer = createAsyncThunk(
  "getStudentScreenPioneer",
  async (schoolStudentSelected, thunkAPI) => {
    try {
      return await authService.getStudentScreenPioneer(schoolStudentSelected);
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
// get default classes
// get default classes
export const getDefaultClasses = createAsyncThunk(
  "class/getDefaultClasses",
  async (data, thunkAPI) => {
    try {
      return await authService.getDefaultClasses();
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

// getStudentForPioneer
// getStudentForPioneer
export const getStudentForPioneerNow = createAsyncThunk(
  "auth/getStudentForPioneerNow",
  async (_id, showStudents, thunkAPI) => {
    try {
      return await authService.getStudentForPioneer(_id, showStudents);
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

// slices
// slices
export const classReducer = createSlice({
  name: "class",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.newClass = action.payload;
      })
      .addCase(regClass.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.newClass = null;
      })
      .addCase(setAdminQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setAdminQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminQuestions = action.payload;
      })
      .addCase(setAdminQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.adminQuestions = null;
      })
      .addCase(getStudentForPioneerNow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentForPioneerNow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.studentForPioneer = action.payload;
      })
      .addCase(getStudentForPioneerNow.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
        state.studentForPioneer = null;
      })
      .addCase(getAdminQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAdminQuestions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.getQuestions = action.payload;
      })
      .addCase(getAdminQuestions.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.getQuestions = null;
      })
      .addCase(getDefaultClasses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDefaultClasses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.defaultClasses = action.payload;
      })
      .addCase(getDefaultClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.defaultClasses = null;
      })
      .addCase(registerPioneerNClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerPioneerNClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pioneerNigerClass = action.payload;
      })
      .addCase(registerPioneerNClass.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.pioneerNigerClass = null;
      })
      .addCase(getStudentScreenPioneer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudentScreenPioneer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.studentScreenPioneer = action.payload;
      })
      .addCase(getStudentScreenPioneer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.studentScreenPioneer = null;
        state.message = action.payload;
      })
      .addCase(getPioneerNigerClass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPioneerNigerClass.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pioneerClass = action.payload;
      })
      .addCase(getPioneerNigerClass.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.pioneerClass = null;
        state.message = action.payload;
      })
      .addCase(createTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.timetable = action.payload;
      })
      .addCase(createTimetable.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.timetable = null;
        state.message = action.payload;
      })
      .addCase(getTimetable.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTimetable.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleClassTimetable = action.payload;
      })
      .addCase(getTimetable.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.singleClassTimetable = null;
        state.message = action.payload;
      });
  },
});

export const { reset } = classReducer.actions;
export default classReducer.reducer;
