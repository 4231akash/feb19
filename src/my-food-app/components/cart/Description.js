import React, { useEffect, useState } from "react";
import NavBar from "../navBar/NavBar";

// import { details } from "./ReducerCart";
// import { useSelector } from "react-redux";
import SideBar from "../navBar/SideBar";
import BackDrop from "../navBar/BackDrop";
import Category from "../Dashboard/Category";
import "./cart.css";
import { useDispatch } from "react-redux";
import { addCart } from "./ReducerCart";
import { useLocation, useHistory } from "react-router-dom";
import Footer from "../footer/Footer";

// import Suggestion from "./Suggestion";
// import Suggestion from "./Suggestion";

const Description = () => {
  const [data, setData] = useState({});
 const history=useHistory();

 
 const dispatch = useDispatch();
 const { search } = useLocation();
 const query = new URLSearchParams(search);
  useEffect(() => {
    // query.get("name")
    
    const Categories = Category.find((item) => item.id == query.get("id"));
    setData(Categories);

  }, [query]);
  function click(id) {
    history.push(`/description?id=${id}`);
    // return window. location. reload(true);
  }

 
 function order(){
  return alert("your order successfully")
 }
  
  
    const product = data.key;
    var productCart = Category.filter((ele) => {
      return ele.key === product;
    });

    const [sidebar, setsidebar] = useState(false);
    const toggleBar = () => {
      setsidebar((prev) => !prev);
    };
  


  return (
    <div>
       <div>
        <NavBar className="nav" OpenSideBar={toggleBar} />
        <SideBar Sidebar={sidebar} />
        <BackDrop Sidebar={sidebar} CloseToggle={toggleBar}/>
      </div>
      <div id="mapping">
        <div id="map">
          <div key={data.id} className="desc">
            <div className="split">
              <div>
                <img src={data.url} className="img" alt="hi"></img>
              </div>
              <div className="description1">
                <h2>Description: "{data.name}"</h2>
                <p>{data.description}</p>
                <h4>ratings {data.rating} </h4>
                <div className="btn">
                  <button type="button" onClick={()=>dispatch(addCart(data))}>Add cart</button>
                  <button type="button" onClick={()=>order()}>order</button>
                </div>
              </div>
            </div>
            <h2>Suggestion</h2>
            <div id="sug">
              {productCart.map((ele) => {
                    return (
              
                      <div key={ele.id}>
                        <div className="main6">
                          <div onClick={() => click(ele.id)} className="main_2">
                            <img  className="inner" src={ele.url} alt="abj" />
                          </div>
                          <div className="main_5">
                            <h2>{ele.name}</h2>
                            <h2>  ₹ {ele.price}</h2>
                            <div className="end">
                              <h3>{ele.rating} ratings</h3>
                              <button className="cart" onClick={()=>dispatch(addCart(ele))}><i class="ri-shopping-cart-2-fill"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Description;
