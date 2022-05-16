import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center  pt-16 gap-4">
      <div className="w-64 md:w-80 ">
        <h2 className="text-2xl my-2 font-semibold">
          Login to the most intellectual social platform
          <img
            className="px-2 w-16 h-16 inline-block"
            src="/assets/logo.png"
            alt="logo"
          />
        </h2>
        <div className="text-xl">
          Put down your ideas & thoughts and discuss it your mates.
        </div>
        <ul className="list-disc px-8 py-4 font-semibold font-mono">
          <li className="hover:text-pink-600">Think</li>
          <li className="hover:text-pink-600">Discuss</li>
          <li className="hover:text-pink-600">Rethink</li>
          <li className="hover:text-pink-600">Conclude</li>
        </ul>
      </div>

      <form className="w-60 md:w-80 border-2 py-4  rounded-md flex flex-col items-center">
        <span className="text-3xl font-semibold mb-8 border-b-2">Login</span>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Username
          </label>
          <input
            type="text"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="default-input"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="pb-4 border-b-2">
          <button
            type="button"
            class="w-32 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
        </div>
        <div className="pt-4">
          <button
            type="button"
            class="w-32 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Guest Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
