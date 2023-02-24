import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import { addCart } from "../cart/ReducerCart";
import Category from "./Category";
import AOS from "aos";
import "aos/dist/aos.css";
import Pagination from "./Pagination";
// import { set } from "immer/dist/internal";
// import "../navBar/navBar.css";

// import { current } from "@reduxjs/toolkit";

const DashBoard = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(Category);
  var [currentIndex, setCurrentIndex] = useState(1);
  var [currentIndex1] = useState(5);

  const indexOfLast = currentIndex * currentIndex1;
  const indexOfFirst = indexOfLast - currentIndex1;
  const page = data.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentIndex(pageNumber);

  const dispatch = useDispatch();
  const history = useHistory();

  function search() {
    const inputValue = input;
    const searching = data.filter((item) => item.name === inputValue);
    setData(searching);
  }

  function click(id) {
    return history.push(`/description?id=${id}`);
  }
  function dish1(item) {
    const result = Category.filter((cart) => {
      return cart.key === item;
    });
    setData(result);
  }
  function dish2(item) {
    const result = Category.filter((cart) => {
      return cart.key !== item;
    });
    setData(result);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return (
    <div className="all" id="dashboard">
      <div id="offer1">
        <div data-aos="slide-right" id="offer2">
          <img
            src={"http://localhost:3000/images/non-veg-5.jpg"}
            alt="hi"
          ></img>
          <div className="second">
            <p>Chicken-rice</p>
            <p>
              <h1>20%</h1>off
            </p>
            <button className="order1">order now</button>
          </div>
        </div>
        <div data-aos="slide-left" id="offer3">
          <img
            src={"http://localhost:3000/images/western-9.jpg"}
            alt="hi"
          ></img>
          <div className="second">
            <p>western-biriyani</p>
            <p>
              <h1>15%</h1>off
            </p>
            <button className="order1">order now</button>
          </div>
        </div>
      </div>

      <div id="filter-btn">
        <h2 data-aos="fade-up">Our Menu</h2>
        <div id="search-btn">
          <input
            value={input}
            id="search"
            placeholder="search food..."
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <label onClick={search}>
            <i className="ri-search-line"></i>
          </label>
        </div>
        <div className={`food`}>
          <button
            data-aos="slide-right"
            className="menu active"
            onClick={() => dish2("1")}
          >
            all
          </button>
          <button
            data-aos="slide-right"
            className="menu active"
            onClick={() => dish1("veg")}
          >
            veg
          </button>
          <button
            data-aos="fade-up"
            className="menu active"
            onClick={() => dish1("non-veg")}
          >
            non-veg
          </button>
          <button
            data-aos="slide-left"
            className="menu active"
            onClick={() => dish1("chinese")}
          >
            chinese
          </button>
          <button
            data-aos="slide-left"
            className="menu active"
            onClick={() => dish1("western")}
          >
            western
          </button>
        </div>
      </div>
      <div className="indian">
        {page.map((ele) => {
          const { id, url, name, price } = ele;
          return (
            <div key={id} data-aos="flip-right" className="main">
              <div onClick={() => click(id)} className="main_2">
                <img className="inner" src={url} alt="abj" />
              </div>
              <div className="main_3">
                <h3>{name}</h3>
                <div className="end1">
                  <h2>₹ {price}</h2>
                  <button
                    className="cart1"
                    onClick={() => dispatch(addCart(ele))}
                  >
                    <i class="ri-shopping-cart-2-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div id="down">
        {/* <button type="button" id="see" >
        see more
      </button> */}
        <div>
          <Pagination
            postsPerPage={currentIndex1}
            totalPosts={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

// onClick={() => more()}
