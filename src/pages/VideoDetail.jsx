import React, { useState, useEffect } from "react";

import { dummyVideo } from "../DummyVideo";
import VideoThumbnail from "../components/VideoThumbnail";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { comment } from "postcss";
import { formatDate } from "../utiils";
import CommentBubble from "../components/CommentBubble";

const VideoDetail = () => {
  const { id } = useParams();

  const [videoData, setVideoData] = useState({});
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  const getVideoData = async () => {
    const url = `http://localhost:5000/${id}`;

    try {
      const response = await axios.get(url);
      setVideoData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoProduct = async () => {
    const url = `http://localhost:5000/product/${id}`;

    try {
      const response = await axios.get(url);
      console.log("product", response.data.data);

      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoComment = async () => {
    const url = `http://localhost:5000/comment/${id}`;

    try {
      const response = await axios.get(url);
      console.log("comment", response.data.data);

      setComments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoData();
    getVideoProduct();
    getVideoComment();
  }, []);

  return (
    <div class="min-h-screen bg-[#F6F8FC] p-4 grid grid-cols-10 gap-4">
      <div class="col-span-7  rounded-lg">
        <div className="flex flex-col  bg-white h-full rounded-xl  border-2">
          {/* Judul dkk */}
          <div className=" bg-[#F6F8FC] m-2 p-2 rounded-lg outline-2    ">
            <h1 id="title" className=" text-xl font-bold">
              {videoData.title}
            </h1>
            <p>by {videoData.videoOwner}</p>
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
            {products.map((data, idx) => (
              <div className="carousel-item" key={idx}>
                <ProductCard data={data} />
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
          {comments.map((comment, idx) => (
            <CommentBubble key={idx} comment={comment} />
          ))}
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
