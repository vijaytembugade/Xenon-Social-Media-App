import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  downvoteComment,
  updateComment,
  upvoteComment,
} from "../Slice/commentsSlice";

const CommentsList = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComments] = useState([]);
  const { token, username } = useSelector((store) => store.auth);
  const [editableComment, setEditableComment] = useState({
    isEditable: false,
    commentId: "",
  });

  useEffect(() => {
    setNewComments(comment);
  }, [comment]);

  function handleUpdateComment() {
    dispatch(updateComment({ commentData: newComment, token, postId }));
    setEditableComment({ isEditable: false, commentId: "" });
  }

  function handleUpvote() {
    dispatch(upvoteComment({ postId, commentId: newComment._id, token }));
  }
  function handleDownvote() {
    dispatch(downvoteComment({ postId, commentId: newComment._id, token }));
  }
  function handleDeleteComment() {
    dispatch(deleteComment({ postId, commentId: newComment._id, token }));
  }

  return (
    <div>
      <div className="w-64 md:w-80 flex gap-4 items-center border-b-2 p-2 group">
        {editableComment.isEditable &&
        editableComment.commentId === newComment._id ? (
          <input
            type="text"
            value={newComment.text}
            onChange={(e) =>
              setNewComments((prevState) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
            id="small-input"
            class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          />
        ) : (
          <div className="mr-auto line-clamp-1">{newComment.text}</div>
        )}

        {editableComment.commentId !== newComment._id && (
          <div className=" hidden group-hover:flex items-center" title="upvote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5 cursor-pointer hover:text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleUpvote}
            >
              <path
                fillRule="evenodd"
                d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-slate-400">
              ({newComment?.votes?.upvotedBy?.length})
            </p>
          </div>
        )}
        {editableComment.commentId !== newComment._id && (
          <div
            className="hidden cursor-pointer group-hover:flex items-center"
            title="downvote"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5 cursor-pointer hover:text-pink-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={handleDownvote}
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-slate-400">
              ({newComment?.votes?.downvotedBy?.length})
            </p>
          </div>
        )}

        {newComment.username === username &&
          editableComment.commentId !== newComment._id && (
            <div
              className="hidden group-hover:block cursor-pointer"
              title="edit comment"
              onClick={() =>
                setEditableComment((prevState) => ({
                  isEditable: !prevState.isEditable,
                  commentId: comment._id,
                }))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 hover:text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        {newComment.username === username &&
          editableComment.commentId !== newComment._id && (
            <div
              className="hidden group-hover:block cursor-pointer"
              title="delete comment"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 hover:text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={handleDeleteComment}
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

        {editableComment.commentId === newComment._id && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleUpdateComment}
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center p-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() =>
                setEditableComment({ isEditable: false, commentId: "" })
              }
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 p-2"
            >
              Cancle
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CommentsList };
