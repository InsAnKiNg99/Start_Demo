import React from "react";
import logo from "./images/logo_start.png";
import styles from "./css/header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="start" />
      <h2>Community through competetion</h2>
      <div className={styles.Buttons}>
        <button>Create an event</button>
        <button>Find event</button>
      </div>
    </header>
  );
}

export default Header;
