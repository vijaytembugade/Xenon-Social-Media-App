import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
  singlePost: null,
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  const { data } = await axios.get("/api/posts");
  return data;
});

export const getSinglePost = createAsyncThunk(
  "posts/getSinglePost",
  async ({ id }) => {
    const { data } = await axios.get(`/api/posts/${id}`);
    return data;
  }
);
export const getUsersPosts = createAsyncThunk(
  "posts/getUsersPosts",
  async ({ username }) => {
    const { data } = await axios.get(`/api/posts/user/${username}`);
    console.log(data);
    return data;
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ newPost, token }) => {
    console.log(newPost);
    const { data } = await axios.post(
      "/api/posts",
      { postData: newPost },
      { headers: { authorization: token } }
    );

    return data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    unsuscribeSinglePost: (state) => {
      state.singlePost = null;
    },
  },
  extraReducers: (builder) => {
    //getAllPosts
    builder.addCase(getAllPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.posts;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //getSinglePost
    builder.addCase(getSinglePost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getSinglePost.fulfilled, (state, action) => {
      state.status = "idle";
      state.singlePost = action.payload.post;
    });
    builder.addCase(getSinglePost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //getSingleUserPosts by Username
    builder.addCase(getUsersPosts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getUsersPosts.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.posts;
    });
    builder.addCase(getUsersPosts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //createNewPost
    builder.addCase(createNewPost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(createNewPost.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.posts;
      toast.success("New post is created!");
    });
    builder.addCase(createNewPost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
