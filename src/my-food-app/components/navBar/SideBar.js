import React from "react";
import "../navBar/navBar.css";


const SideBar = ({ Sidebar }) => {
   
  return (
    <div className={Sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <ul id="ulist">
        <li className="list">
          <i className="ri-home-4-line"></i><a className="side" href="/dashboard">Home</a>
        </li>
        <li className="list">
          <i className="ri-user-fill"></i><a  className="side" href="/profile">profile</a>
        </li>
        <li className="list">
          <i className="ri-newspaper-line"></i><a className="side" href="#dashboard">menu</a>
        </li>
        <li className="list">
          <i className="ri-contacts-book-2-line"></i><a className="side" href="#footer">Contact us</a>
        </li> 
      </ul>
    </div>
  );
};

export default SideBar;
