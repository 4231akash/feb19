import React from "react";
import NavBar from "../navBar/NavBar";
import { selectCount, selectCount1 } from "./ReducerCart";
import { useSelector } from "react-redux";
import "./cart.css";
// import Suggestion from "./Suggestion";
// import Suggestion from "./Suggestion";

const Description = () => {
  const select = useSelector(selectCount);
  const select2 = useSelector(selectCount1);

  for (let i = 0; i < select.length; i++) {
    const product = select[i].key;
    var productCart = select2.filter((ele) => {
      return ele.key === product;
    });
  }

  return (
    <div>
      <div>
        <NavBar />s
      </div>
      <div id="mapping">
        <div id="map">
          {select.map((ele) => {
            return (
              <div key={ele.id} className="desc">
                <div className="split">
                <div>
                  <img src={ele.url} className="img" alt="hi"></img>
                </div>
                <div className="description1">
                  <h2>Description: "{ele.name}"</h2>
                  <p>{ele.description}</p>
                  <h4>ratings {ele.rating} </h4>
                  <div className="btn">
                    <button>Add cart</button>
                    <button>order</button>
                  </div>
                </div>
                </div>
                <h2>Suggestion</h2>
                <div id="sug">
                  {productCart.map((ele) => {
                    return (
              
                      <div key={ele.id}>
                        <div className="main">
                          <div className="main_2">
                            <img className="inner" src={ele.url} alt="abj" />
                          </div>
                          <div className="main_2">
                            <h6>{ele.name}</h6>
                            <pre className="description">
                              {" "}
                              {ele.description}
                            </pre>
                            <h2>{ele.price}</h2>
                            <div className="end">
                              <h4>{ele.rating} ratings</h4>
                              <button className="cart">Add cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Description;
