import React from "react";
import { formatDate } from "../utiils";

const CommentBubble = ({ comment }) => {
  return (
    <div className="chat chat-start ">
      <div className="chat-header">
        {comment.username}
        <time className="text-xs opacity-50">
          {formatDate(comment.createdAt)}
        </time>
      </div>
      <div className="chat-bubble chat-bubble-primary">{comment.comment}</div>
      {/* <div className="chat-footer opacity-50">Seen</div> */}
    </div>
  );
};

export default CommentBubble;
