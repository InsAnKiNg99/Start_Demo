import React from "react";

import logo from "./images/download.png";
import { useNavigate } from "react-router-dom";
import {
  Language,
  Plus,
  LogIn,
  Shop,
  Search,
  HelpSquareSolid,
} from "iconoir-react";

import style from "./css/sidebar.module.css";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.top_section}>
        <img src={logo} alt="" onClick={() => navigate("/")} />
        <div className={style.separator} />
        <ul>
          <li>
            <Search size={30} opacity={80} title="Search" onClick={() => {}} />
          </li>
        </ul>
        <div className={style.separator} />
        <div className={style.separator} />
        <ul className={style.ul1}>
          <li onClick={() => navigate("/create-event")}>
            <Plus
              size={30}
              opacity={80}
              title="Create an event"
              onClick={() => navigate("/create-event")}
            />
          </li>
          <li onClick={() => navigate("/shop")}>
            <Shop
              size={30}
              opacity={80}
              title="Shop"
              onClick={() => navigate("/shop")}
            />
          </li>
          <li>
            <Language
              size={30}
              opacity={80}
              title="Select language"
              onClick={() => {}}
            />
          </li>
          <li>
            <HelpSquareSolid size={30} opacity={80} onClick={() => {}} />
          </li>
        </ul>
      </div>
      <div className={style.bottom_button} onClick={() => navigate("/signup")}>
        <LogIn size={30} width={30} height={30} onClick={() => navigate("/signup")} />
      </div>
    </div>
  );
}

export default Sidebar;
