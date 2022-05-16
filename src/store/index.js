import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../Features/Auth/Slice/authSlice";
import { postReducer } from "../Features/Posts/Slice/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    posts: postReducer,
  },
});

export default store;
