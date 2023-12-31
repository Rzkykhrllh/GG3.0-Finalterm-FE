import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

import { IoMdArrowBack } from "react-icons/io";

const VideoDetail = () => {
  const AxiosPrivate = useAxiosPrivate();
  const { id } = useParams();
  const navigate = useNavigate();

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
    <div class="sm:max-h-screen bg-[#F6F8FC] p-4 sm:grid sm:grid-cols-10 sm:gap-4">
      <div class="sm:col-span-7  rounded-lg sm:min-h-[96vh] min-h-[50vh] ">
        <div className="flex flex-col bg-white shadow-xl rounded-xl justify-between h-full min-h-[96vh]">
          {/* Judul dkk */}
          <div className="bg-white flex justify-start">
            <div
              className="bg-[#F6F8FC] m-2 mr-0 p-2 rounded-lg flex flex-col justify-center hover:bg-neutral-content hover:cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <IoMdArrowBack size={32} className="mx-auto" />
            </div>

            <div className=" bg-[#F6F8FC] m-2 rounded-lg p-2 flex-grow flex-1">
              <h1 id="title" className="text-lg font-bold">
                {videoData.title}
              </h1>
              <p className="text-sm">by {videoData.videoOwnerUsername}</p>
            </div>
          </div>

          {/* Youtoube Video */}

          <div className="relative flex-1 flex-grow m-2 overflow-hidden rounded-lg shadow-sm ">
            <iframe
              src={videoData.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="absolute inset-0 w-full h-full rounded-md"
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
