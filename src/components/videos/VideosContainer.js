import React, { Component } from "react";
import client from "../../sanity/api";
import VideoCard from "./VideoCard";

const query = `*[_type == "videos"] {
    _id,
    body,
    order,
    title,
    vimeo_link,
    "imageUrl":  mainImage.asset->url,
  }[0...50]
  `;

class VideosContainer extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }
  componentDidMount() {
    client.fetch(query, {}).then(videos => this.setState({ videos }));
  }
  render() {
    const { videos } = this.state;
    return (
      <div>
        <ul style={{ listStyle: "none" }}>
          {videos
            .sort(function(a, b) {
              return a.order - b.order;
            })
            .map(video => (
              <li key={video._id} style={{ margin: "0 auto" }}>
                <VideoCard {...video} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default VideosContainer;
