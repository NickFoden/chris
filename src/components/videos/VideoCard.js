import React, { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./videoStyles.module.css";

const VideoCard = props => {
  const video = props;
  const [showVideo, toggleVideo] = useState(false);
  function toPlainText(blocks = []) {
    return blocks
      .map(block => {
        if (block._type !== "block" || !block.children) {
          return "";
        }
        return block.children.map(child => child.text).join("");
      })
      .join("\n\n");
  }
  return (
    <div>
      {showVideo ? (
        <div className={styles.video_container}>
          <ReactPlayer url={video.vimeo_link} className={styles.react_player} />
          <p>{toPlainText(video.body)}</p>
        </div>
      ) : (
        <img
          title={`View ${video.title}`}
          src={video.imageUrl}
          alt={video.title}
          onClick={() => toggleVideo(!showVideo)}
          className={styles.video_image}
        />
      )}
    </div>
  );
};

export default VideoCard;
