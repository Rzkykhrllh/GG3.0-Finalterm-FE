import React from "react";
import Layout from "../components/Layout";

import { dummyVideo } from "../DummyVideo";
import VideoThumbnail from "../components/VideoThumbnail";

const Home = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-[68px] px-10 mx-auto xl:w-[1280px]  ">
        <div className="flex justify-center flex-wrap gap-4 ">
          {dummyVideo.map((data, idx) => (
            <VideoThumbnail key={idx} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
