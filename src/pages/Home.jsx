import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

import VideoThumbnail from "../components/VideoThumbnail";
import axios from "../core/api/axios";
import { GET_VIDEO_URL } from "../utils/constants";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {}, [videos]);

  const getVideos = async () => {
    try {
      const response = await axios.get(GET_VIDEO_URL);
      setVideos(response.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  console.log(process.env.REACT_APP_BASE_URL);

  return (
    <Layout>
      <div className="min-h-screen pt-[68px] px-10 mx-auto xl:w-[1280px]  ">
        <div className="flex justify-center flex-wrap gap-4 ">
          {videos?.map((data, idx) => (
            <VideoThumbnail key={idx} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
