import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Routes } from "react-router-dom";
import { Loader, Posts, UsersList, Modal } from "../../../Components";
import { authActions } from "../../Auth/Slice/authSlice";
import { getUsersPosts } from "../../Posts/Slice/postSlice";
import ProfileEditModal from "./ProfileEditModal";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { username, email } = useSelector((store) => store.auth);
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
            setShowModal={setShowModal}
          />
        </Modal>
      )}
      <div class="max-w-sm md:w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full  h-fit">
        <div class="relative flex justify-end px-4 pt-4">
          <button
            class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4  focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Edit Profile
          </button>
        </div>

        <div class="flex flex-col items-center pb-10">
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
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {username}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <button
              href="#"
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Follow
            </button>
            <button
              onClick={() => dispatch(authActions.userLogout())}
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="p-16 flex flex-col gap-12 items-center">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="mr-2">
            <NavLink
              to="posts"
              aria-current="page"
              className="inline-block p-4 text-purple-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-purple-500"
            >
              Your Posts
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              to="followings"
              className="inline-block p-4 text-purple-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-purple-500"
            >
              Following
            </NavLink>
          </li>
        </ul>
        {status === "pending" && <Loader />}
        {status === "idle" && (
          <Routes>
            <Route path="" element={<Posts posts={posts} />} />
            <Route path="posts" element={<Posts posts={posts} />} />
            <Route path="followings" element={<UsersList />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default Profile;
