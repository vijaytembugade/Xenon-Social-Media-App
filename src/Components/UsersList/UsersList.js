import React from "react";

const users = [1, 2, 3, 4, 5, 6, 7];
const UsersList = () => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="flex h-16 flex-row gap-4 justify-center items-center w-54 p-4 bg-purple-200 m-2 rounded-md hover:bg-pink-100">
            <img
              class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/assets/profile/profile.png"
              alt="Bordered avatar"
            />

            <button aria-current="true" type="button" className="line-clamp-1">
              Profileanddmo
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
