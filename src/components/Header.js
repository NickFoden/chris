import React from "react";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <nav className={styles.nav_header}>
      <h1>Chris Iversen</h1>
      <h4>
        <a
          href="https://vimeo.com/user1580838"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vimeo
        </a>
      </h4>
    </nav>
  );
}
