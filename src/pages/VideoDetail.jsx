import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CommentBubble from "../components/CommentBubble";
import ProductCard from "../components/ProductCard";

import axios from "../core/api/axios";
import useAxiosPrivate from "../core/hooks/useAxiosPrivate";
import {
  GET_VIDEO_URL,
  GET_PRODUCT_URL,
  GET_COMMENT_URL,
  POST_COMMENT_URL,
} from "../utils/constants";

const VideoDetail = () => {
  const AxiosPrivate = useAxiosPrivate();
  const { id } = useParams();

  const [videoData, setVideoData] = useState({});
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  const [inputComment, setInputComment] = useState("");

  const getVideoData = async () => {
    try {
      const response = await axios.get(GET_VIDEO_URL + id);
      setVideoData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoProduct = async () => {
    try {
      const response = await axios.get(GET_PRODUCT_URL + id);

      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoComment = async () => {
    try {
      const response = await axios.get(GET_COMMENT_URL + id);

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

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosPrivate.post(POST_COMMENT_URL + id, {
        comment: inputComment,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeComment = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <div class="min-h-screen bg-[#F6F8FC] p-4 grid grid-cols-10 gap-4">
      <div class="col-span-7  rounded-lg">
        <div className="flex flex-col h-full bg-white shadow-xl rounded-xl ">
          {/* Judul dkk */}
          <div className=" bg-[#F6F8FC] m-2 rounded-lg p-2">
            <h1 id="title" className="text-lg font-bold">
              {videoData.title}
            </h1>
            <p className="text-sm">by {videoData.videoOwner}</p>
          </div>

          {/* Youtoube Video */}
          <div className="relative flex-1 flex-grow m-2 overflow-hidden rounded-lg shadow-sm ">
            <iframe
              width="853"
              height="480"
              // src={videoData.videoUrl}
              src={
                "https://www.youtube.com/embed/sVTy_wmn5SU?list=RDBBpIV9A1PXc"
              }
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="top-0 bottom-0 left-0 right-0 w-full h-full rounded-md"
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
        class="col-span-3 bg-white border-2 shadow-sm rounded-xl p-4 flex justify-between flex-col"
      >
        <div id="prev-chat flex-1">
          {comments.map((comment, idx) => (
            <CommentBubble key={idx} comment={comment} />
          ))}
        </div>

        <form onSubmit={handleSubmitComment}>
          <div className="flex bg-red-600 join">
            <div className="flex-grow bg-blue-200">
              <div>
                <input
                  className="w-full input input-bordered join-item focus:outline-none"
                  placeholder="comment"
                  name=""
                  onChange={handleChangeComment}
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
      </div>
    </div>
  );
};

export default VideoDetail;
