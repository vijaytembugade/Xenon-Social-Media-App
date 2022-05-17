import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { deletePost, postActions, updatePost } from "../Slice/postSlice";
import { getSinglePost } from "../Slice/postSlice";

const SinglePost = () => {
  const [isEditable, setIsEditable] = useState(false);
  const newPostReducer = (state, action) => {
    switch (action.type) {
      case "SET_TITLE": {
        return { ...state, title: action.payload.title };
      }
      case "SET_CONTENT": {
        return { ...state, content: action.payload.content };
      }
      case "SET_IS_PUBLIC": {
        return { ...state, isPublic: !state.isPublic };
      }
    }
  };

  const [editPost, editPostDispatch] = useReducer(newPostReducer, {
    title: "",
    content: "",
    isPublic: true,
  });

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, username } = useSelector((store) => store.auth);
  const { singlePost, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getSinglePost({ id }));

    return () => dispatch(postActions.unsuscribeSinglePost());
  }, [id, dispatch, postActions]);

  useEffect(() => {
    if (isEditable) {
      editPostDispatch({
        type: "SET_TITLE",
        payload: { title: singlePost?.title },
      });
      editPostDispatch({
        type: "SET_CONTENT",
        payload: { content: singlePost?.content },
      });
    }
  }, [isEditable]);

  function handleDeletePost(id) {
    dispatch(deletePost({ id, token }));
    navigate("/");
  }
  function handleEditPost(id) {
    dispatch(updatePost({ editPost, id, token }));
    setIsEditable(false);
    dispatch(getSinglePost({ id }));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {status === "pending" && <Loader />}
      {status === "idle" && (
        <div>
          {isEditable ? (
            <input
              type="text"
              id="large-input"
              className="my-8  block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={editPost.title}
              onChange={(e) =>
                editPostDispatch({
                  type: "SET_TITLE",
                  payload: { title: e.target.value },
                })
              }
            />
          ) : (
            <p className="text-2xl font-bold w-60 md:w-96 my-4 ">
              {singlePost?.title}
            </p>
          )}

          {!isEditable && (
            <div className=" flex flex-row justify-between items-center my-4 font-semibold">
              <div>Author: {singlePost?.username}</div>
              <div>
                {singlePost?.username === username && (
                  <>
                    <button
                      className="m-2"
                      title="Edit the post"
                      onClick={() => setIsEditable(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:text-purple-500"
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
                    </button>
                    <button
                      className="m-2"
                      onClick={() => handleDeletePost(singlePost._id)}
                      title="Delete the post"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 hover:text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </>
                )}
                <button className="m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 hover:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
          <div>
            {isEditable ? (
              <textarea
                id="message"
                rows="4"
                value={editPost.content}
                onChange={(e) =>
                  editPostDispatch({
                    type: "SET_CONTENT",
                    payload: { content: e.target.value },
                  })
                }
                className="my-8  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            ) : (
              <div className="w-64 md:w-96 min-h-[250px] text-justify contentEditable">
                {singlePost?.content}
              </div>
            )}
          </div>
          {isEditable && (
            <div className="mt-4 my-8 ">
              <button
                type="button"
                onClick={() => handleEditPost(singlePost._id)}
                class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => setIsEditable(false)}
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Cancle
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePost;