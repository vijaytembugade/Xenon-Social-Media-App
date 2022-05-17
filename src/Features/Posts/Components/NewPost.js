import React, { useReducer } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newPostReducer } from "../../../reducers";
import { createNewPost } from "../Slice/postSlice";

const NewPost = () => {
  const [newPost, newPostDispatch] = useReducer(newPostReducer, {
    title: "",
    content: "",
    isPublic: true,
  });

  const { title, content, isPublic } = newPost;

  const { token, isLoggedIn } = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateNewPost() {
    if (isLoggedIn) {
      dispatch(createNewPost({ newPost: newPost, token: token }));
      navigate("/");
    } else {
      toast.error("Creation of new post failed!");
    }
  }

  return (
    <div className="flex flex-col  items-center">
      <div className="text-2xl md:text-3xl mb-6">Create New Post</div>
      <div className="flex flex-col gap-4 items-center w-fit p-8 rounded-lg border-2 hover:drop-shadow-md">
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) =>
              newPostDispatch({
                type: "SET_TITLE",
                payload: { title: e.target.value },
              })
            }
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 "
          />
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Post Description
          </label>
          <textarea
            id="message"
            value={content}
            onChange={(e) =>
              newPostDispatch({
                type: "SET_CONTENT",
                payload: { content: e.target.value },
              })
            }
            rows="4"
            class="block p-2.5 w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Your message..."
          ></textarea>
        </div>
        <div class="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            checked={!isPublic}
            onChange={() => newPostDispatch({ type: "SET_IS_PUBLIC" })}
            value=""
            class="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            This is a private post .
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={handleCreateNewPost}
            class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Post it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
