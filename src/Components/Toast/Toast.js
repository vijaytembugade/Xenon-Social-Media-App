import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: "bg-purple-200 text-black",
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Toast;
