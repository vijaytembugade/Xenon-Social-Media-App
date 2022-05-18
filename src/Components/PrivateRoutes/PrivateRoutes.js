import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector((store) => store.auth);
  return (
    <>
      {isLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: pathname }} replace />
      )}
    </>
  );
};

export { PrivateRoutes };
