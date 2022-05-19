import React, { useEffect } from "react";
import { getAllPosts } from "../Features/Posts/Slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Posts, Sidebar, UsersList } from "../Components";
import { getAllUsers } from "../Features/User/Slice/usersSlice";

import Filters from "../Components/Filters/Filters";

const Homepage = () => {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((store) => store.posts);
  const { users, status: usersStatus } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="flex flex-row justify-center max-w-screen-2xl">
      <div className="hidden lg:basis-1/6 md:overflow-y-hidden md:hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex flex-col gap-8 justify-center items-center basis-6/6 md:basis-4/6 h-full">
        <div className="hidden md:block">
          <Filters />
        </div>
        {status === "pending" && <Loader />}
        <div className="w-64 md:w-96 h-screen flex flex-col justify-start items-center gap-8 ">
          {status === "idle" &&
            posts.map((post) => {
              return (
                <>
                  <Posts post={post} />
                </>
              );
            })}
        </div>
      </div>
      <div className="hidden md:block md:ml-20 lg:ml-0 lg:basis-1/6 md:overflow-y-auto md:overflow-x-hidden lg:block">
        <span className="text-xl m-4">UserList</span>
        {usersStatus === "idle" && <UsersList users={users} />}
      </div>
    </div>
  );
};

export default Homepage;
