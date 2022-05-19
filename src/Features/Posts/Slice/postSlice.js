import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
  singlePost: null,
  likedLoading: "idle",
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
    return data;
  }
);

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ newPost, token }) => {
    const { data } = await axios.post(
      "/api/posts",
      { postData: newPost },
      { headers: { authorization: token } }
    );

    return data;
  }
);
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ id, token }) => {
    const { data } = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: token },
    });

    return data;
  }
);
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ editPost, id, token }) => {
    const { data } = await axios.post(
      `/api/posts/edit/${id}`,
      { postData: editPost },
      {
        headers: { authorization: token },
      }
    );
    console.log(data);
    return data;
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ postId, token }) => {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return data;
  }
);
export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async ({ postId, token }) => {
    const { data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
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

    setSortedPosts: (state, action) => {
      state.posts = action.payload;
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

    //delete post
    builder.addCase(deletePost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.posts;
      toast.success("Post deleted !");
      state.singlePost = null;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //edit post
    builder.addCase(updatePost.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.status = "idle";
      state.posts = action.payload.posts;
      toast.success("Post Updated !");
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });

    //like post
    builder.addCase(likePost.pending, (state) => {
      state.likedLoading = "pending";
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.likedLoading = "idle";
      state.posts = action.payload.posts;
    });
    builder.addCase(likePost.rejected, (state, action) => {
      state.likedLoading = "idle";
      state.error = action.error.message;
    });

    //dislike post
    builder.addCase(dislikePost.pending, (state) => {
      state.likedLoading = "pending";
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.likedLoading = "idle";
      state.posts = action.payload.posts;
    });
    builder.addCase(dislikePost.rejected, (state, action) => {
      state.likedLoading = "idle";
      state.error = action.error.message;
    });
  },
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;
