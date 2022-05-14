import React from "react";

const Sidebar = () => {
  return (
    <div className="flex fixed gap-4 top-16 bottom-20 mt-8 w-52 flex-col h-screen bg-purple-100 p-4 rounded-md">
      <div className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </div>

      <div className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </div>
      <div className="flex flex-row items-center gap-2 bg-purple-200 rounded-md p-2 hover:bg-purple-300 hover:font-semibold cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        Notification
      </div>
      <div className="flex flex-row items-center gap-2 bg-pink-200 rounded-md p-2 hover:bg-pink-300 hover:font-semibold cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
      </div>
    </div>
  );
};

export default Sidebar;
