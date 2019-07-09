import React, { Component } from "react";
import Header from "../components/Header";
import VideosContainer from "../components/videos/VideosContainer";
import styles from "./styles.module.css";

export default class index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <section className={styles.videoSection}>
          <VideosContainer />
        </section>
      </div>
    );
  }
}
