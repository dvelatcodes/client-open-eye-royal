import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../api/index";
import Cookies from "js-cookie";

// get user
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerPioneer = createAsyncThunk(
  "auth/registerPioneer",
  async (pioneer, thunkAPI) => {
    try {
      console.log(pioneer);
      return await authService.registerPioneer(pioneer);
    } catch (error) {
      console.log(error);
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
  (student, thunkAPI) => {
    try {
      return authService.regStudent(student);
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
      .addCase(regStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        Cookies.set("auth_token", action.payload?.token);
      })
      .addCase(regStudent.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        Cookies.remove("auth_token");
      });
  },
});

export const { reset } = authSlice.actions;

// export default ecommerceSlice.reducer
export default authSlice.reducer;
