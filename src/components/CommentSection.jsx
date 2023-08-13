import React from "react";
import CommentBubble from "./CommentBubble";

import useAuth from "../core/hooks/useAuth";

const CommentSection = ({
  comments,
  handleChangeComment,
  handleSubmitComment,
  inputComment,
}) => {
  const { auth } = useAuth();

  return (
    <div
      id="chatbox"
      class="col-span-3 bg-white  shadow-sm rounded-xl p-4 flex justify-between flex-col max-w-md overflow max-h-[96vh]"
    >
      <div
        id="prev-chat"
        className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F6F8FC]"
      >
        {comments.map(
          (comment, idx) =>
            idx < 20 && <CommentBubble key={idx} comment={comment} />
        )}
      </div>

      {!!auth?.accessToken ? (
        <form onSubmit={handleSubmitComment} className=" mt-4">
          <div className="flex  join">
            <div className="flex-grow ">
              <div>
                <input
                  className="w-full input input-bordered join-item focus:outline-none"
                  placeholder="comment"
                  name=""
                  onChange={handleChangeComment}
                  value={inputComment}
                />
              </div>
            </div>
            <div className="indicator">
              <button type="submit" className="btn join-item ">
                Send
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="p-2  bg-[#F6F8FC]">
          Please{" "}
          <a
            href="/login"
            className="text-blue-700 hover:text-blue-500 underline"
          >
            Login
          </a>{" "}
          to Comment
        </div>
      )}
    </div>
  );
};

export default CommentSection;
