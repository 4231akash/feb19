import React,{useEffect,useState} from "react";
import "../navBar/navBar.css";
import { useHistory } from "react-router-dom";
import { selectCount } from "../cart/ReducerCart";
import { useSelector } from "react-redux";


const NavBar = ({ OpenSideBar }, props) => {
  const select = useSelector(selectCount);
  const [data, setData] = useState(0);
  const history = useHistory();

  function openCart() {
    return history.push("/cart");
  }
  useEffect(() => {
    let initialValue = 0;
    var sum = select.reduce(function (accumulator, curValue) {
      return accumulator + curValue.cartQuanity;
    }, initialValue);
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
        <div onClick={OpenSideBar}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
