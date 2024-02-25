import React, { useEffect, useState } from "react";

import { YOUTUBE_VIDEO_API } from "../utils/constrants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };

  console.log(videos);
  return (
    <div className="flex flex-wrap">{/* <VideoCard info={videos[0]} /> */}</div>
  );
};

export default VideoContainer;
