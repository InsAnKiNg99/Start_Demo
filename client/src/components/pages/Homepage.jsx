import React from "react";
import style from '../css/home.module.css'
import Header from "../Header.jsx";
import Sidebar from "../Sidebar.jsx";
import Footer from "../footer.jsx";
function Homepage() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.main_layout}>
        <Sidebar />
      </div>
      Homepagesefsafsfadfadfasf
      <Footer/>
    </div>
  );
}

export default Homepage;
