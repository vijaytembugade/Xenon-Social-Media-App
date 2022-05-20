import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const initialState = {
  comments: [],
  status: "idle",
  error: null,
};

export const getAllComments = createAsyncThunk(
  "comments/getAllComments",
  async ({ postId }) => {
    const { data } = await axios.get(`/api/comments/${postId}`);
    return data;
  }
);
export const createNewComment = createAsyncThunk(
  "comments/createNewComment",
  async ({ comment: text, id, token }) => {
    const { data } = await axios.post(
      `/api/comments/add/${id}`,
      {
        commentData: { text },
      },
      { headers: { authorization: token } }
    );

    return data;
  }
);
export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async ({ commentData, token, postId }) => {
    const { data } = await axios.post(
      `/api/comments/edit/${postId}/${commentData._id}`,
      {
        commentData,
      },
      { headers: { authorization: token } }
    );

    return data;
  }
);

export const upvoteComment = createAsyncThunk(
  "comments/upvoteComment",
  async ({ postId, commentId, token }) => {
    const { data } = await axios.post(
      `/api/comments/upvote/${postId}/${commentId}`,
      {},
      { headers: { authorization: token } }
    );
    return data;
  }
);
export const downvoteComment = createAsyncThunk(
  "comments/downvoteComment",
  async ({ postId, commentId, token }) => {
    const { data } = await axios.post(
      `/api/comments/downvote/${postId}/${commentId}`,
      {},

      { headers: { authorization: token } }
    );
    return data;
  }
);
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ postId, commentId, token }) => {
    const { data } = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      { headers: { authorization: token } }
    );

    return data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    unsubscribeToAllComment: (state) => {
      state.comments = [];
    },
  },
  extraReducers: (builder) => {
    //get all comments
    builder.addCase(getAllComments.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllComments.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
      state.status = "idle";
    });
    builder.addCase(getAllComments.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
    });

    //create new comment
    builder.addCase(createNewComment.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(createNewComment.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
      state.status = "idle";
      toast.success("Your comment is added!");
    });
    builder.addCase(createNewComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
      toast.error("Something went wrong");
    });

    //update comment
    builder.addCase(updateComment.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.status = "idle";
      state.comments = action.payload.comments;
    });
    builder.addCase(updateComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
      toast.error("Something went wrong");
    });

    //upvote the comment
    builder.addCase(upvoteComment.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(upvoteComment.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
      state.status = "idle";
    });
    builder.addCase(upvoteComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
      toast.error(action.error.message);
    });

    //upvote the comment
    builder.addCase(downvoteComment.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(downvoteComment.fulfilled, (state, action) => {
      state.comments = action.payload.comments;
      state.status = "idle";
    });
    builder.addCase(downvoteComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
      toast.error(action.error.message);
    });

    //delete comments
    builder.addCase(deleteComment.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.status = "idle";
      state.comments = action.payload.comments;
      toast.success("Comment Deleted!");
    });
    builder.addCase(deleteComment.rejected, (state) => {
      state.error = action.error.message;
      state.status = "error";
      toast.error(action.error.message);
    });
  },
});

export const commentsActions = commentsSlice.actions;
export const commentsReducers = commentsSlice.reducer;
