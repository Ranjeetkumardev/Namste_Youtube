import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 h-72 rounded-lg shadow-lg hover:shadow-2xl">
      <img
        className="w-full rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-semibold text-lg truncate py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};
// Hiegher order component 
// export const adVideoCard = ({ info }) => {
//   return (
//     <div className="p-1 m-1 border border-orange-800">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
