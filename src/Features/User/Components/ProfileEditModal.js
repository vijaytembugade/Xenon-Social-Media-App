import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions, updateUserProfile } from "../../Auth/Slice/authSlice";

const ProfileEditModal = ({ username, email, setShowModal }) => {
  const [editableUsername, setUsername] = useState(username);
  const [editableEmail, setEmail] = useState(email);

  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleUpdateProfile = () => {
    console.log("hello");
    dispatch(
      updateUserProfile({
        userData: { username: editableUsername, email: editableEmail },
        token,
      })
    );
    setShowModal(false);
  };
  return (
    <div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Username
        </label>
        <input
          value={editableUsername}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
        />
      </div>
      <div class="mb-6">
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <input
          value={editableEmail}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
        />
      </div>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleUpdateProfile}
      >
        Update
      </button>
      <button
        onClick={() => setShowModal(false)}
        type="button"
        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Cancle
      </button>
    </div>
  );
};

export default ProfileEditModal;
