import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loader, MiniPost } from "../Components";
import { getAllPosts } from "../Features/Posts/Slice/postSlice";

const Bookmark = () => {
  const dispatch = useDispatch();
  const { bookmarks } = useSelector((store) => store.users);
  const { posts, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post._id));

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <h2 className="text-2xl p-2 ">Your Bookmarked Posts</h2>
        <Link
          to="/"
          type="button"
          class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
        >
          Get back to Homepage
        </Link>
      </div>
      <div className="w-80 md:w-[700px] pt-4">
        {status === "pending" && <Loader />}
        {status === "idle" &&
          bookmarkedPosts.map((post) => {
            return <MiniPost post={post} />;
          })}
      </div>
    </div>
  );
};

export default Bookmark;
