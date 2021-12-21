import React from "react";
import VideoDetail from "../video_detail/video_detail";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

// export default function VideoList({ props }) {
//   const titles = props.titles;
//   console.log(`titles: ${titles}`);
//   return <h1>{titles}</h1>;
// }

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
