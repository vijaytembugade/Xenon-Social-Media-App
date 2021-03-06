import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  users: [],
  singleUser: null,
  status: "idle",
  bookmarks: [],
  error: null,
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

export const getSingleUsers = createAsyncThunk(
  "users/getSingleUsers",
  async ({ id }) => {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  }
);

export const bookmarkPost = createAsyncThunk(
  "userss/bookmarkPost",
  async ({ postId, token }) => {
    const { data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  }
);
export const removeBookmarkPost = createAsyncThunk(
  "userss/removeBookmarkPost",
  async ({ postId, token }) => {
    const { data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    unsubscribeToSingleUser: (state) => {
      state.singleUser = null;
    },
  },
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

    //get single user
    builder.addCase(getSingleUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getSingleUsers.fulfilled, (state, action) => {
      state.status = "idle";
      state.singleUser = action.payload.user;
    });
    builder.addCase(getSingleUsers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //add to bookmark
    builder.addCase(bookmarkPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      state.status = "idle";
      state.bookmarks = action.payload.bookmarks;
      toast("Post added in bookmarks", { icon: "????" });
    });
    builder.addCase(bookmarkPost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //remove post from bookmark
    builder.addCase(removeBookmarkPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(removeBookmarkPost.fulfilled, (state, action) => {
      state.status = "idle";
      state.bookmarks = action.payload.bookmarks;
      toast("Post removed from bookmarks", { icon: "????" });
    });
    builder.addCase(removeBookmarkPost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
