import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";

import axios from "../core/api/axios";
import useAxiosPrivate from "../core/hooks/useAxiosPrivate";
import {
  GET_VIDEO_URL,
  GET_PRODUCT_URL,
  GET_COMMENT_URL,
  POST_COMMENT_URL,
} from "../utils/constants";
import CommentSection from "../components/CommentSection";
import { toast } from "react-toastify";

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
      setVideoData(response.data.data);
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

      if (response.status === 200) {
        // reload the comment

        setInputComment("");
        getVideoComment();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to comment, something wrong happened", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleChangeComment = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <div class="max-h-screen bg-[#F6F8FC] p-4 grid grid-cols-10 gap-4">
      <div class="col-span-7  rounded-lg min-h-[96vh]">
        <div className="flex flex-col h-full bg-white shadow-xl rounded-xl ">
          {/* Judul dkk */}
          <div className=" bg-[#F6F8FC] m-2 rounded-lg p-2">
            <h1 id="title" className="text-lg font-bold">
              {videoData.title}
            </h1>
            <p className="text-sm">by {videoData.videoOwnerUsername}</p>
          </div>

          {/* Youtoube Video */}
          <div className="relative flex-1 flex-grow m-2 overflow-hidden rounded-lg shadow-sm ">
            <iframe
              width="853"
              height="480"
              src={videoData.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="top-0 bottom-0 left-0 right-0 w-full h-full rounded-md"
            />
          </div>

          {/* Products */}
          {products.length > 0 && (
            <div className=" carousel m-2 gap-2  rounded-xl p-2  shadow-sm bg-[#F6F8FC]">
              {products.map((data, idx) => (
                <div className="carousel-item" key={idx}>
                  <ProductCard data={data} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <CommentSection
        comments={comments}
        handleChangeComment={handleChangeComment}
        handleSubmitComment={handleSubmitComment}
        inputComment={inputComment}
      />
    </div>
  );
};

export default VideoDetail;
