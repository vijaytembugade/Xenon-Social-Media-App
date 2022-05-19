import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../../Components";
import {
  commentsActions,
  createNewComment,
  getAllComments,
} from "../Slice/commentsSlice";
import { CommentsList } from "./CommentsList";

const CommentModal = ({ postId }) => {
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { token, isLoggedIn } = useSelector((store) => store.auth);
  const { status, comments } = useSelector((store) => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments({ postId }));
    return () => dispatch(commentsActions.unsubscribeToAllComment());
  }, [dispatch, postId]);

  function handleCreateNewComment() {
    if (isLoggedIn) {
      dispatch(createNewComment({ comment: comment, id: postId, token }));
      setComment("");
    } else {
      toast("Please Login first!", { icon: "🤗" });
      navigate("/login");
    }
  }
  return (
    <div>
      <div>
        <div class="mb-4 pb-2 flex flex-row gap-2 items-center justify-center border-b-2">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            id="small-input"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Comment here.."
          />

          <button
            onClick={() => handleCreateNewComment()}
            type="button"
            disabled={status === "pending"}
            className="w-28 afocus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {(status === "idle" || status === "error") && "Comment"}
            {status === "pending" && (
              <Loader w={6} h={6} text={"loading"} circular={true} />
            )}
          </button>
        </div>
        <div>
          {comments?.map((comment) => {
            return <CommentsList comment={comment} postId={postId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
