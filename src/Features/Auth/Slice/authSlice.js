import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const getLocaldata = JSON.parse(localStorage.getItem("USER_DETAILS"));

const initialState = {
  username: getLocaldata?.username || null,
  token: getLocaldata?.token || null,
  email: getLocaldata?.email || null,
  isLoggedIn: getLocaldata?.token ? true : false,
  status: "idle",
  error: null,
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const { data } = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return data;
  }
);
export const userSignup = createAsyncThunk(
  "auth/signup",
  async ({ username, password, email }) => {
    const { data } = await axios.post("/api/auth/signup", {
      username,
      password,
      email,
    });

    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //logout action
    userLogout: (state) => {
      state.username = null;
      state.token = null;
      state.email = null;
      state.isLoggedIn = false;
      localStorage.removeItem("USER_DETAILS");

      toast.success("Logged Out!");
    },
  },
  extraReducers: (builder) => {
    //userlogin action
    builder.addCase(userLogin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.token = payload.encodedToken;
      state.isLoggedIn = true;
      state.username = payload.foundUser.username;
      state.email = payload.foundUser.email;
      localStorage.setItem(
        "USER_DETAILS",
        JSON.stringify({
          username: payload.foundUser.username,
          token: payload.encodedToken,
          email: payload.foundUser.email,
        })
      );
      toast.success("Logged in successfully!");
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.status = "error";
      state.erorr = action.error.message;
    });

    //signup action
    builder.addCase(userSignup.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.status = "idle";
      state.token = payload.encodedToken;
      state.isLoggedIn = true;
      state.username = payload.createdUser.username;
      state.email = payload.createdUser.email;
      localStorage.setItem(
        "USER_DETAILS",
        JSON.stringify({
          username: payload.createdUser.username,
          token: payload.encodedToken,
          email: payload.createdUser.email,
        })
      );
      toast.success("Logged in successfully!");
    });
    builder.addCase(userSignup.rejected, (state, action) => {
      state.status = "error";
      state.erorr = action.error.message;
    });
  },
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;
