import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { postActions } from "../Slice/postSlice";
import { getSinglePost } from "../Slice/postSlice";

const SinglePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singlePost, status } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getSinglePost({ id }));

    return () => dispatch(postActions.unsuscribeSinglePost());
  }, [id, dispatch, postActions]);
  return (
    <div className="flex flex-col justify-center items-center">
      {status === "pending" && <Loader />}
      {status === "idle" && (
        <div>
          <p className="text-2xl font-bold w-60 md:w-96 my-4">
            {singlePost?.title}
          </p>
          <div className="my-4 font-semibold">
            Author: {singlePost?.username}
          </div>
          <div className="w-64 md:w-96 text-justify">{singlePost?.content}</div>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
