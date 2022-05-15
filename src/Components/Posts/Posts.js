import React from "react";

const newArr = [1, 2, 3, 4, 5];

const Posts = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-start items-center gap-8 ">
        {newArr.map((post) => {
          return (
            <>
              <div
                href="#"
                class=" flex flex-col items-center p-6 max-w-sm md:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:cursor-pointer "
                key={post}
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 line-clamp-3  md:line-clamp-5">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order. far, in reverse
                  chronological order.
                </p>
                <div className="flex flex-row py-4 gap-8 max-w-sm justify-center items-center ">
                  <div className="flex gap-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    Like
                  </div>
                  <div className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">
                    Comment
                  </div>
                  <div className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 cursor-pointer">
                    See more
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
