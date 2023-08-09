import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

import { dummyVideo } from "../DummyVideo";
import VideoThumbnail from "../components/VideoThumbnail";
import axios from "axios";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  const getVideos = async () => {
    const url = `http://localhost:5000/`;
    try {
      const response = await axios.get(url);
      setVideos(response.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen pt-[68px] px-10 mx-auto xl:w-[1280px]  ">
        <div className="flex justify-center flex-wrap gap-4 ">
          {videos.map((data, idx) => (
            <VideoThumbnail key={idx} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
