import React from "react";
import Posts from "../Components/Posts/Posts";
import Sidebar from "../Components/Sidebar/Sidebar";

const Homepage = () => {
  return (
    <div className="flex flex-row justify-center max-w-screen-2xl">
      <div className="hidden lg:basis-1/6 md:overflow-y-hidden md:hidden lg:block">
        <Sidebar />
      </div>
      <div className="basis-6/6 md:basis-4/6 h-full">
        <Posts />
      </div>
      <div className="hidden md:hidden lg:basis-1/6 md:overflow-y-auto lg:block">
        Extra
      </div>
    </div>
  );
};

export default Homepage;
