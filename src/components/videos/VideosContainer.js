import React, { Component } from "react";
import client from "../../sanity/api";

const query = `*[_type == "videos"] {
    _id,
    album,
    "imageUrl":  mainImage.asset->url,
    title
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
    console.log(this.state.videos);
    debugger;
  }
  render() {
    const { videos } = this.state;
    return (
      <div className="album_container">
        <ul>
          {videos.map(video => (
            <li key={video.url}>
              <img src={video.imageUrl} alt={video.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default VideosContainer;
