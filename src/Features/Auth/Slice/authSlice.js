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
  following: [],
  followers: [],
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const { data } = await axios.post("/api/auth/login", {
      username,
      password,
    });
    console.log(data);
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

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ userData, token }) => {
    const { data } = await axios.post(
      "/api/users/edit",
      { userData },
      { headers: { authorization: token } }
    );
    return data;
  }
);
export const followUser = createAsyncThunk(
  "auth/followUser",
  async ({ followUserId, token }) => {
    const { data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );
    return data;
  }
);
export const unFollowUser = createAsyncThunk(
  "auth/unFollowUser",
  async ({ followUserId, token }) => {
    const { data } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );
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

    //username update
    userUpdate: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
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
      state.followers = payload.foundUser.followers;
      state.following = payload.foundUser.following;
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
      state.status = "idle";
      state.erorr = action.error.message;
      toast.error("User not able to login!");
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
      state.status = "idle";
      state.status = "error";
      state.erorr = action.error.message;
      toast.error(action.error.message);
    });

    //update user profile
    builder.addCase(updateUserProfile.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.status = "idle";
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
      localStorage.setItem(
        "USER_DETAILS",
        JSON.stringify({
          username: action.payload.user.username,
          token: state.token,
          email: action.payload.user.email,
        })
      );
      toast.success("Profile Updated!");
    });
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //follow user
    builder.addCase(followUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.status = "idle";
      state.followers = action.payload.user.followers;
      state.following = action.payload.user.following;
    });
    builder.addCase(followUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //unfollow user
    builder.addCase(unFollowUser.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(unFollowUser.fulfilled, (state, action) => {
      state.status = "idle";
      state.followers = action.payload.user.followers;
      state.following = action.payload.user.following;
    });
    builder.addCase(unFollowUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;
