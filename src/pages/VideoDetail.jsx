import React from "react";

import { dummyVideo } from "../DummyVideo";
import VideoThumbnail from "../components/VideoThumbnail";
import ProductCard from "../components/ProductCard";

const VideoDetail = () => {
  return (
    <div class="min-h-screen bg-[#F6F8FC] p-4 grid grid-cols-10 gap-4">
      <div class="col-span-7  rounded-lg">
        <div className="flex flex-col  bg-white h-full rounded-xl  border-2">
          {/* Judul dkk */}
          <div className=" bg-[#F6F8FC] m-2 p-2 rounded-lg outline-2    ">
            <h1 id="title" className=" text-xl font-bold">
              Ini Judul
            </h1>
            <p>Ini Deskripsinya</p>
          </div>

          {/* Youtoube Video */}
          <div className=" rounded-lg  m-2 relative flex-grow flex-1 overflow-hidden  shadow-sm">
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
          <div className=" carousel m-2 gap-2  rounded-xl p-2 border-2 shadow-sm bg-[#F6F8FC]">
            {dummyVideo.map((data, idx) => (
              <div className="carousel-item">
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="chatbox"
        class="col-span-3 bg-[#F2F6FC] border-2 shadow-sm rounded-xl p-4 flex justify-between flex-col"
      >
        <div id="prev-chat flex-1">
          <div className="chat chat-start ">
            <div className="chat-header">
              Kobo Kanaeru
              <time className="text-xs opacity-50">13-12-2002</time>
            </div>
            <div className="chat-bubble chat-bubble-primary">
              You were the Chosen One!
            </div>
            {/* <div className="chat-footer opacity-50">Seen</div> */}
          </div>
        </div>

        <div className="join flex bg-red-600">
          <div className="bg-blue-200 flex-grow">
            <div>
              <input
                className="input input-bordered join-item w-full focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item ">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
