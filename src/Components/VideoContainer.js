import React, { useEffect, useState } from "react";

import { YOUTUBE_VIDEO_API } from "../utils/constrants";
import VideoCard from "./VideoCard";

import { Link } from "react-router-dom";

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
  if (videos === 0 || videos === undefined) return null;
  return (
    <div className="flex flex-wrap ml-8">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
