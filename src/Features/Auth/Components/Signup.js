import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../../Components";
import { userSignup } from "../Slice/authSlice";

const Signup = () => {
  const authState = useSelector((store) => store.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, isLoggedIn } = authState;
  const from = location.state?.from || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userSignup({ username, password, email }));
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [navigate, isLoggedIn]);
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-evenly items-center  pt-16 gap-4">
        <div className="w-64 md:w-96 ">
          <h2 className="text-2xl my-2 font-semibold">
            Create New Account on the most intellectual social platform
            <img
              className="px-2 w-16 h-16 inline-block"
              src="/assets/logo.png"
              alt="logo"
            />
          </h2>
          <img className="w-full" src="/assets/auth/signup.svg" alt="" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-60 md:w-80 border-2 py-4 rounded-md flex flex-col items-center"
        >
          <span className="text-3xl font-semibold mb-8 border-b-2">
            Sign up
          </span>
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              type="email"
              id="default-input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="">
            {status === "pending" && <Loader />}
            {status === "idle" && (
              <button
                type="submit"
                class="w-32 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Signup
              </button>
            )}
            {status === "error" && toast.error("Something went wrong")}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
