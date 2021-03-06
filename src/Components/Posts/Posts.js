import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { dislikePost, likePost } from "../../Features/Posts/Slice/postSlice";
import CommentModal from "../../Features/Comments/Components/CommentModal";
import toast from "react-hot-toast";

export const Posts = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const { token, username, isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const isLikedByCurrentUser = post?.likes.likedBy?.some(
    (list) => list.username === username
  );

  function handleLikePost() {
    if (isLoggedIn) {
      dispatch(likePost({ postId: post._id, token }));
    } else {
      toast("Please Login ", { icon: "😊" });
    }
  }
  function handleDislikePost() {
    if (isLoggedIn) {
      dispatch(dislikePost({ postId: post._id, token }));
    }
  }
  return (
    <>
      <div
        className="flex flex-col items-center p-4 md:p-6  md:w-[30rem] lg:w-[35rem] bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer "
        key={post?._id}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {post?.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3  md:line-clamp-5">
          {post?.content}
        </p>
        <p className="font-semibold mt-2 self-end text-gray-900 dark:text-gray-400 line-clamp-3  md:line-clamp-5">
          - {post?.username}
        </p>
        <div className="w-60 md:w-96 flex flex-row pt-8  justify-center items-center ">
          <div
            className=" flex gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
            onClick={isLikedByCurrentUser ? handleDislikePost : handleLikePost}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                isLikedByCurrentUser ? "text-pink-400" : "text-gray-600"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <p className="hidden md:block">
              {isLikedByCurrentUser ? "Liked" : "Like"}
            </p>
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
          >
            Comment
          </div>
          {showModal && (
            <Modal setShowModal={setShowModal}>
              <CommentModal postId={post?._id} />
            </Modal>
          )}
          <Link
            to={`/post/${post?._id}`}
            className="  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 md:px-5 py-1 md:py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
          >
            See more
          </Link>
        </div>
      </div>
    </>
  );
};
