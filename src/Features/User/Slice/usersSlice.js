import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  singleUser: null,
  status: "idle",
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all users
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.status = "idle";
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.users = [];
      state.status = "error";
    });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
