import React from "react";

const Sidebar = () => {
  return (
    <div className="flex fixed gap-4 top-16 bottom-20 mt-8 w-52 flex-col h-screen bg-purple-200 p-4 rounded-md">
      <div className="bg-pink-100 rounded-md p-2 hover:bg-pink-200 hover:font-semibold cursor-pointer">
        Create new Post
      </div>
      <div className="bg-pink-100 rounded-md p-2 hover:bg-pink-200 hover:font-semibold cursor-pointer">
        Profile
      </div>
    </div>
  );
};

export default Sidebar;
