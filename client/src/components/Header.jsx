import React from "react";
import { Plus, Search } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo_start.png";
import styles from "./css/header.module.css";
function Header() {
  let navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img src={logo} alt="start" />
      <h2>Community through competetion</h2>
      <div className={styles.buttons}>
        <button className={styles.b1} onClick={() => navigate("/create-event")}>
          {<Plus size={15} />}Create an event
        </button>
        <button className={styles.b2}>{<Search size={15} />}Find events</button>
      </div>
    </header>
  );
}

export default Header;
