import React, { useState } from "react";
import ReactPlayer from "react-player";
const VideoCard = props => {
  const video = props;
  const [showVideo, toggleVideo] = useState(false);
  function toPlainText(blocks = []) {
    return (
      blocks
        .map(block => {
          if (block._type !== "block" || !block.children) {
            return "";
          }
          return block.children.map(child => child.text).join("");
        })
        .join("\n\n")
    );
  }
  return (
    <div>
      {showVideo ? (
        <div style={{ marginLeft: "25px", marginBottom: "25px" }}>
          <ReactPlayer url={video.vimeo_link} />
          <p>{toPlainText(video.body)}</p>
        </div>
      ) : (
        <img
          src={video.imageUrl}
          alt={video.title}
          onClick={() => toggleVideo(!showVideo)}
          style={{ width: "250px" }}
        />
      )}
    </div>
  );
};

export default VideoCard;
