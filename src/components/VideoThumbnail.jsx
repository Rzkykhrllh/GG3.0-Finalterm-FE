import React from "react";
import { useNavigate } from "react-router-dom";

function VideoThumbnail({ data }) {
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    navigate(`video/${videoId}`);
  };

  return (
    <div
      className="card card-compact sm:w-72 md:w-80 shadow-sm border-1 bg-white  hover:cursor-pointer"
      onClick={() => handleClick(data._id)}
    >
      <figure className="rounded-lg aspect-video">
        <img src={data.thumbnailUrl} alt="Shoes" className=" object-cover" />
      </figure>
      <div className="py-4 md:px-2 px-4">
        <h2 className="md:text-[16px] text-[14px] font-bold">{data.title}</h2>
        <p className="md:text-[14px] text-[12px] line-clamp-2">{data.desc}</p>
      </div>
    </div>
  );
}

export default VideoThumbnail;
