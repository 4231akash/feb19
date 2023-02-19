import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import "./dashboard.css";
import { useHistory } from "react-router-dom";
import { addCart, desCription } from "../cart/ReducerCart";
import Category from "./Category";
import AOS from "aos";
import "aos/dist/aos.css"



const DashBoard = () => {
  const [data, setData] = useState(Category);

  const dispatch = useDispatch();
  const history = useHistory();

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
    duration:1000,
    delay:100
  })
}, []);


  return (
    <div className="all">
      <div id="offer1">
        <div data-aos="slide-right" id="offer2" >
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
        <div data-aos="slide-left" id="offer3" >
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
        <div className="food">
          <button data-aos="slide-right" className="menu" onClick={() => dish2("1")}>
            all
          </button>
          <button data-aos="slide-right"  className="menu" onClick={() => dish1("veg")}>
            veg
          </button>
          <button data-aos="fade-up"  className="menu" onClick={() => dish1("non-veg")}>
            non-veg
          </button>
          <button data-aos="slide-left" className="menu" onClick={() => dish1("chinese")}>
            chinese
          </button>
          <button data-aos="slide-left" className="menu" onClick={() => dish1("western")}>
            western
          </button>
        </div>
      </div>
      <div className="indian">
        {data.map((ele) => {
          const { id, url, name, price } = ele;
          return (
            <div key={id} data-aos="flip-right" className="main"  >
              <div onClick={() => click(id)}  className="main_2">
                <img
                className="inner"
                  onClick={() => dispatch(desCription(ele))}
                  
                  src={url}
                  alt="abj"
                />
              </div>
              <div className="main_3">
                <h3>{name}</h3>    
                <div className="end1">
                  <h2>{price}</h2>
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
    </div>
  );
};

export default DashBoard;
