import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../api/index";

const newClass = JSON.parse(localStorage.getItem("nigerianclasses"));
const defaultClasses = JSON.parse(localStorage.getItem("defaultclasses"));
// initial class state
const initialState = {
  newClass: newClass || {},
  defaultClasses: defaultClasses || {},
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

// reg new class
// reg new class
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
      });
  },
});

export const { reset } = classReducer.actions;
export default classReducer.reducer;
