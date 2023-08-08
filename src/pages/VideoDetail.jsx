import React from "react";

import { dummyVideo } from "../DummyVideo";
import VideoThumbnail from "../components/VideoThumbnail";
import ProductCard from "../components/ProductCard";

const VideoDetail = () => {
  return (
    <div class="min-h-screen bg-[#fafafa] p-4 grid grid-cols-10 gap-4">
      <div class="col-span-7  rounded-lg">
        <div className="flex flex-col bg-blue-200 h-full rounded-xl">
          {/* Judul dkk */}
          <div className=" bg-white m-2 p-2 rounded-lg outline-2 outline-primary ">
            <h1 id="title" className=" text-xl font-bold">
              Ini Judul
            </h1>
            <p>Ini Deskripsinya</p>
          </div>

          {/* Youtoube Video */}
          <div className=" rounded-lg  m-2 relative flex-grow flex-1 overflow-hidden bg-green-300">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/rokGy0huYEA`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="left-0 right-0 top-0 bottom-0 h-full w-full rounded-md"
            />
          </div>

          {/* Products */}
          <div className=" carousel p-2 m-2 gap-2 bg-white">
            {dummyVideo.map((data, idx) => (
              <div className="carousel-item">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="col-span-3 bg-gray-500 rounded-lg">Ceritanya ini chatbox</div>
    </div>
  );
};

export default VideoDetail;
