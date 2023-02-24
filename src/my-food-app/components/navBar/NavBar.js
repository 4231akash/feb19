import React, { useEffect, useState } from "react";
import "../navBar/navBar.css";
import { useHistory } from "react-router-dom";
import { selectCount } from "../cart/ReducerCart";
import { useSelector } from "react-redux";
// import Search from "./Search";
// import Category from "../Dashboard/Category";
// import { current } from "@reduxjs/toolkit";

const NavBar = ({ OpenSideBar }, props) => {
  const select = useSelector(selectCount);
  const [data, setData] = useState(0);
  // var [isCurrent] = useState(Category);

  const history = useHistory();

  // function search() {
  //   history.push("/search");
  //   const inputValue = input;
   
  //   var currents = isCurrent.find((item) => item.name === inputValue);
  //   searching={currents}
    
  // }
//  useEffect(()=>{
//   const text= "akash"
//   return <Search text={text} />;
//  },[])
  function openCart() {
    return history.push("/cart");
  }
  useEffect(() => {
    let initialValue = 0;
    var sum = select.reduce(function (accumulator, curValue) {
      return accumulator + curValue.cartQuanity;
    }, initialValue);
    // console.log(sum);
    setData(sum);
  }, [select]);

  return (
    <div id="navbar">
      <div className="links2">
        <p className="link">Food App</p>
      </div>
      <div className="links">
        <a className="link" href="/dashboard">
          Home
        </a>
        <a className="link" href="/profile">
          Profile
        </a>
        <a className="link" href="#footer">
          Contact
        </a>
        <a className="link" href="#dashboard">
          Menu
        </a>
      </div>
      <div id="toolbar">
        <div id="empty" onClick={() => openCart(props)}>
          <i className="ri-shopping-cart-2-fill"></i>
          <span id="qty">{data}</span>
        </div>
        {/* <div onClick={OpenSideBar}>
          <i className="ri-menu-line"></i>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
