import React from "react";
import "../navBar/navBar.css";
import { useHistory } from "react-router-dom";

const SideBar = ({ Sidebar }) => {
  const history=useHistory()
  function send(){
    // sessionStorage.clear();
     return(history.push("/login"))
  }
    
  return (
    <div className={Sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <ul id="ulist">
        <li className="list">
          <i className="ri-home-4-line"></i><a href="/dashboard">Home</a>
        </li>
        <li className="list">
          <i className="ri-user-fill"></i>profile
        </li>
        <li className="list" onClick={()=>send()}>
          <i className="ri-user-fill"></i>Log out
        </li>
        <li className="list">
          <i className="ri-newspaper-line"></i>Menu
        </li>
        <li className="list">
          <i className="ri-contacts-book-2-line"></i><a href="#footer">Contact us</a>
        </li>
        <li className="list">
          <i className="ri-file-info-line"></i>About us
        </li>
      </ul>
      <button id="x-btn">
        X
      </button>
    </div>
  );
};

export default SideBar;
