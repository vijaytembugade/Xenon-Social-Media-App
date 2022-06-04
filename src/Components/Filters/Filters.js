import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../Features/Posts/Slice/postSlice";
import { useOnClickOutside } from "../../hooks";
import { sortByService } from "../../services";

const Filters = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const filterRef = useRef();
  const { posts } = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postActions.setSortedPosts(sortByService(sortBy, posts)));
  }, [sortBy, dispatch]);

  useOnClickOutside(filterRef, () => setShowFilter(false));
  return (
    <div className="relative md:left-[200px] z-10">
      <button
        onClick={() => setShowFilter(true)}
        type="button"
        className="flex gap-2 text-black bg-slate-300 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-md p-2 dark:bg-gray-300 "
      >
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
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
        Filters
      </button>

      {showFilter && (
        <div
          className="absolute bg-slate-50 p-4 w-44 left-1 rounded-lg m-1 shadow-lg"
          ref={filterRef}
        >
          <div className="border-b-2 border-black">
            <div
              className="m-1 p-1 cursor-pointer hover:bg-purple-300 rounded-md"
              onClick={() => setSortBy("Oldest")}
            >
              Old to new
            </div>
            <div
              className="m-1 p-1 cursor-pointer hover:bg-purple-300 rounded-md"
              onClick={() => setSortBy("Latest")}
            >
              New to old
            </div>
          </div>
          <div
            className="m-1 p-1 cursor-pointer hover:bg-purple-300 rounded-md"
            onClick={() => setSortBy("Trending")}
          >
            Trending
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
