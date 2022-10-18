import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../api/index";

const newClass = JSON.parse(localStorage.getItem("nigerianclasses"));
const defaultClasses = JSON.parse(localStorage.getItem("defaultclasses"));
const pioneerNigerClass = JSON.parse(localStorage.getItem("pioneerNigerClass"));
const pioneerClass = JSON.parse(localStorage.getItem("pioneerNigerClass"));
const timetable = JSON.parse(localStorage.getItem("/timetable"));
// initial class state
// initial class state
const initialState = {
  newClass: newClass || {},
  timetable: timetable || {},
  defaultClasses: defaultClasses || {},
  pioneerNigerClass: pioneerNigerClass || {},
  pioneerClass: pioneerClass || {},
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
        state.defaultClasses = {};
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
        state.pioneerNigerClass = {};
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
        state.pioneerClass = {};
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
        state.timetable = {};
        state.message = action.payload;
      });
  },
});

export const { reset } = classReducer.actions;
export default classReducer.reducer;
