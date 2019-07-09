import React, { Component } from "react";
import VideosContainer from "../videos/VideosContainer";
import styles from "./styles.module.css";

export default class index extends Component {
  render() {
    return (
      <div className="Index">
        <h1 className={styles.title}>Chris Iversen</h1>

        <VideosContainer />
      </div>
    );
  }
}
