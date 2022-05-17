import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: "bg-pink-200 text-black shadow-lg",
          duration: 3000,
        }}
      />
    </>
  );
};

export { Toast };
