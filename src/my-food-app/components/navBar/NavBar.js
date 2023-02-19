import React from "react";
import "../navBar/navBar.css";
import { useHistory } from "react-router-dom";
import { selectCount } from "../cart/ReducerCart";
import { useSelector } from "react-redux";


const NavBar = ({OpenSideBar},props) => {
  const select=useSelector(selectCount)
  const history=useHistory();

  function openCart(){
      return(history.push("/cart"))  
  }
    

  return (
    <div id="navbar">
      <div className="links">
        <p className="link">Food App</p>
      </div>
      <div id="search-btn">
        <input id="search" placeholder="search food..."></input>
        <label>
          <i className="ri-search-line"></i>
        </label>
      </div>
      <div className="links">
        <a className="link" href="/dashboard">Home</a>
        <a className="link" href="/about">About</a>
        <a className="link" href="#footer">Contact</a>
        <a className="link" href="#dashboard">Menu</a>
      </div>
      <div id="toolbar">
        <div id="empty" onClick={()=>openCart(props)}>
        <i className="ri-shopping-cart-2-fill"></i>
        <span id="qty">{select.length}</span>
        </div>
        <div onClick={OpenSideBar}>
        <i className="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
