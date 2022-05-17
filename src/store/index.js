import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../Features/Auth/Slice/authSlice";
import { postReducer } from "../Features/Posts/Slice/postSlice";
import { userReducer } from "../Features/User/Slice/usersSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
    posts: postReducer,
    users: userReducer,
  },
});

export default store;
