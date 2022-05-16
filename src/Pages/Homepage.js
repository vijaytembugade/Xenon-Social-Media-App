import React, { useEffect } from "react";
import Posts from "../Components/Posts/Posts";
import Loader from "../Components/Loader/Loader";
import Sidebar from "../Components/Sidebar/Sidebar";
import UsersList from "../Components/UsersList/UsersList";
import { getAllPosts } from "../Features/Posts/Slice/postSlice";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="flex flex-row justify-center max-w-screen-2xl">
      <div className="hidden lg:basis-1/6 md:overflow-y-hidden md:hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-8 justify-center items-center basis-6/6 md:basis-4/6 h-full">
        {status === "pending" && <Loader />}
        {status === "idle" && <Posts posts={posts} />}
      </div>
      <div className="hidden md:hidden lg:basis-1/6 md:overflow-y-auto lg:block">
        <UsersList />
      </div>
    </div>
  );
};

export default Homepage;
