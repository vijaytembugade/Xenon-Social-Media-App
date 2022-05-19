import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../../../Components";
import { getUsersPosts } from "../../Posts/Slice/postSlice";
import { getSingleUsers, userActions } from "../Slice/usersSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleUser, status } = useSelector((store) => store.users);
  const { username } = useSelector((store) => store.auth);
  const { posts, status: postStatus } = useSelector((store) => store.posts);
  useEffect(() => {
    dispatch(getSingleUsers({ id }));
    return () => dispatch(userActions.unsubscribeToSingleUser());
  }, [dispatch, id]);

  useEffect(() => {
    if (singleUser) {
      dispatch(getUsersPosts({ username: singleUser.username }));
    }
  }, [singleUser]);
  return (
    <>
      {status === "pending" && <Loader />}
      {status === "idle" && (
        <div className="flex flex-col items-center md:flex-row md:justify-start md:items-start gap-20 ">
          <div className="w-60 md:w-96 border-2 flex justify-center rounded-lg  shadow-md md:basis-2/6">
            <div class="flex flex-col gap-8 items-center pb-10">
              <h2 className="text-md text-gray-400">User Details</h2>
              <img
                className="h-20 rounded-full"
                src="/assets/profile/profile.png"
                alt=""
              />
              <div className="text-center">
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {singleUser?.username}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {singleUser?.email}
                </span>
              </div>
              <div class="flex mt-4 space-x-3 lg:mt-6">
                <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="md:basis-4/6 h-96 overflow-y-auto w-full">
            <h3 className="font-semibold">{singleUser?.username}'s posts</h3>
            {postStatus === "pending" && <Loader />}
            {postStatus === "idle" &&
              posts?.map((post) => {
                return (
                  <div className="p-4 border-b-2 flex justify-center items-center gap-2">
                    <div className="mr-auto line-clamp-2">{post.title}</div>
                    <Link
                      to={`/post/${post._id}`}
                      type="button"
                      class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                    >
                      Read more
                    </Link>
                  </div>
                );
              })}
            {postStatus === "idle" && posts?.length <= 0 && (
              <div>
                <div className="text-2xl my-4">No posts yet!</div>
                {username === singleUser?.username && (
                  <Link
                    to="/new-post"
                    type="button"
                    class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                  >
                    Create New Post
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
