import React, { useState } from "react";

import { Link } from "react-router-dom";
import CommentModal from "../../Features/Comments/Components/CommentModal";
import { Modal } from "../Modal/Modal";

export const Posts = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        href="#"
        class=" flex flex-col items-center p-4 md:p-6 max-w-sm md:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer "
        key={post?._id}
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {post?.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-3  md:line-clamp-5">
          {post?.content}
        </p>
        <p class="font-semibold mt-2 self-end text-gray-900 dark:text-gray-400 line-clamp-3  md:line-clamp-5">
          - {post?.username}
        </p>
        <div className="flex flex-row pt-8 gap-4 max-w-sm justify-center items-center ">
          <div className="min-w-fit flex gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-pink-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Like
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="min-w-fit text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
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
            className=" min-w-fit text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer"
          >
            See more
          </Link>
        </div>
      </div>
      {/* ); */}
      {/* })} */}
    </>
  );
};
