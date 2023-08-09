import React from "react";
import { useNavigate } from "react-router-dom";

function VideoThumbnail({ data }) {
  const navigate = useNavigate();

  const handleClick = (videoId) => {
    navigate(`video/${videoId}`);
  };

  return (
    <div
      className="card card-compact  lg:w-72   shadow-sm  border-1 bg-white w-48 hover:cursor-pointer"
      onClick={() => handleClick(data._id)}
    >
      <figure className="rounded-lg aspect-video">
        <img src={data.img} alt="Shoes" className=" object-cover" />
      </figure>
      <div className="py-4">
        <h2 className="md:text-[16px] text-[14px] font-bold">{data.title}</h2>
        <p className="md:text-[14px] text-[12px] line-clamp-2">{data.desc}</p>
      </div>
    </div>
  );
}

export default VideoThumbnail;
