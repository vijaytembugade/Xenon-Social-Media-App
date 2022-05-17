import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "../Features/Auth/Slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});

export default store;
