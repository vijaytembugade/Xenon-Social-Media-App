import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { Loader, Posts, UsersList, Modal } from "../../../Components";
import { authActions } from "../../Auth/Slice/authSlice";
import { getUsersPosts } from "../../Posts/Slice/postSlice";
import ProfileEditModal from "./ProfileEditModal";

const Profile = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { username, email, following, followers, imgUrl, firstName, lastName } =
    useSelector((store) => store.auth);
  const { posts, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getUsersPosts({ username }));
  }, [dispatch, username]);

  return (
    <div className="flex flex-col justify-evenly items-center">
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <ProfileEditModal
            username={username}
            email={email}
            imgUrl={imgUrl}
            firstName={firstName}
            lastName={lastName}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
      <div className="max-w-sm md:w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full  h-fit">
        <div className="relative flex justify-end px-4 pt-4">
          <button
            className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col items-center pb-10">
          {imgUrl === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={imgUrl}
              alt=""
            />
          )}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {username}
          </h5>
          <span className="text-sm text-gray-900 dark:text-gray-400">
            {firstName} {lastName}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {email}
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <button
              onClick={() => dispatch(authActions.userLogout())}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-wrap flex-col gap-8 items-center">
        <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2 ">
            <NavLink
              to="posts"
              aria-current="page"
              className="p-4 block line-clamp-1"
            >
              Posts
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="followings" className="p-4 block">
              Following
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink to="followers" className="p-4 block">
              Followers
            </NavLink>
          </li>
        </ul>
        {status === "pending" && <Loader />}
        {status === "idle" && (
          <Routes>
            <Route
              path=""
              element={posts.map((post) => {
                return <Posts post={post} />;
              })}
            />
            <Route
              path="posts"
              element={posts.map((post) => {
                return <Posts post={post} />;
              })}
            />
            <Route
              path="followings"
              element={<UsersList users={following} />}
            />
            <Route path="followers" element={<UsersList users={followers} />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Profile;
