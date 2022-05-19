import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex fixed gap-4 top-16 bottom-20 mt-12 w-52 flex-col h-screen bg-purple-100 p-4 rounded-md">
      <Link
        to="/"
        className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
            clipRule="evenodd"
          />
        </svg>
        Explore
      </Link>

      <Link
        to="userprofile"
        className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
        Profile
      </Link>

      <Link
        to="/bookmark"
        className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"
            clipRule="evenodd"
          />
        </svg>
        Bookmarks
      </Link>
      <div className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
        Users
      </div>
      <Link
        to="/new-post"
        className="flex flex-row items-center gap-2 bg-pink-200 rounded-md p-2 hover:bg-pink-300 hover:font-semibold cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        Create new Post
      </Link>
    </div>
  );
};

export { Sidebar };
