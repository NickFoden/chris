import React, { useState } from "react";
import ReactPlayer from "react-player";
const VideoCard = props => {
  const video = props;
  const [showVideo, toggleVideo] = useState(false);
  function toPlainText(blocks = []) {
    return (
      blocks
        // loop through each block
        .map(block => {
          // if it's not a text block with children,
          // return nothing
          if (block._type !== "block" || !block.children) {
            return "";
          }
          // loop through the children spans, and join the
          // text strings
          return block.children.map(child => child.text).join("");
        })
        // join the parapgraphs leaving split by two linebreaks
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
