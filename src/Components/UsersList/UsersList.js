import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
  return (
    <>
      {users?.map((user) => {
        return (
          <Link
            to={`/user/${user._id}`}
            className="flex h-16 flex-row gap-4 justify-start items-center w-56 p-4 bg-purple-100 m-2 rounded-md hover:bg-pink-100"
          >
            <img
              class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/assets/profile/profile.png"
              alt="Bordered avatar"
            />

            <div aria-current="true" type="button" className="line-clamp-1">
              {user.username}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export { UsersList };
