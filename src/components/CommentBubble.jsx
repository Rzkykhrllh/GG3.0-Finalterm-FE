import React from "react";
import { formatDate } from "../utils/ms-to-second";

const CommentBubble = ({ comment }) => {
  return (
    <div className="chat chat-start ">
      <div className="chat-header">
        {comment.username}
        <time className="text-xs opacity-50">
          {formatDate(comment.createdAt)}
        </time>
      </div>
      <div className="chat-bubble bg-[#F6F8FC] text-gray-700">
        {comment.comment}
      </div>
      {/* <div className="chat-footer opacity-50">Seen</div> */}
    </div>
  );
};

export default CommentBubble;
