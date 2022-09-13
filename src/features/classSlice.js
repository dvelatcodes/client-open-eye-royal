import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../api/index";

const newClass = JSON.parse(localStorage.getItem("nigerianclasses"));
// initial class state
const initialState = {
  newClass: newClass || null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
};

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
      });
  },
});

export const { reset } = classReducer.actions;
export default classReducer.reducer;
