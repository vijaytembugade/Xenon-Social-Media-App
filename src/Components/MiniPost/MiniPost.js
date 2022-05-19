import React from "react";
import { Link } from "react-router-dom";

const MiniPost = ({ post }) => {
  return (
    <div>
      {" "}
      <div className="p-4 border-b-2 flex justify-center items-center gap-2">
        <div className="mr-auto line-clamp-2">{post.title}</div>
        <div className="font-semibold italic mr-4">by- {post.username}</div>
        <Link
          to={`/post/${post._id}`}
          type="button"
          class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export { MiniPost };
