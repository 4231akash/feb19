import React,{useState,useEffect} from "react";
import NavBar from "../navBar/NavBar";
import { increse, decrese, remove } from "./ReducerCart";
import { selectCount} from "./ReducerCart";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";
// import SignUp from "../FormValidation/SignUp";
import SideBar from "../navBar/SideBar"
import "../navBar/navBar.css"
import BackDrop from "../navBar/BackDrop";

const Cart = () => {
  const select = useSelector(selectCount);
  // const total = useSelector(selectCount2);
  const [data, setData] = useState(0);
  const [dataTotal, setDataTotal] = useState(0);


 

  const dispatch = useDispatch();

  useEffect(() => {
    let initialValue = 0;
    var sum = select.reduce(function (accumulator, curValue) {
      return accumulator + curValue.cartQuanity;
    }, initialValue);
    setData(sum);
  }, [select]);

  useEffect(() => {
    let initialValue = 0;
    var sum = select.reduce(function (accumulator, curValue) {
      return accumulator + curValue.cartTotalAmount;
    }, initialValue);
    setDataTotal(sum);
  }, [select]);

  function order(ele) {
    if (ele.cartQuanity <= 0) {
      return(alert("you do not pick items")) 
    }else{
      return(alert("your order is sucessFully")) 
    }
  }
  function check(ele) {
    if (dataTotal <= 0) {
      return(alert("you do not pick items")) 
    }else{
      return(alert("your order is sucessFully")) 
    }
  }
  const [sidebar, setsidebar] = useState(false);
  const toggleBar = () => {
    setsidebar((prev) => !prev);
  };
 

  return (
    <div className="cart10">
      <div>
        <NavBar className="nav" OpenSideBar={toggleBar} />
        <SideBar Sidebar={sidebar} />
        <BackDrop Sidebar={sidebar} CloseToggle={toggleBar}/>
      </div>
      <div className="total1">
        <div className="total">
          <div className="mainCart">
            {select.map((ele, index) => {
              return (
                <div className="cart11" key={index}>
                  <div>
                    <img src={ele.url} className="img2" alt="hi"></img>
                  </div>
                  <div className="quantity">
                    <h2>{ele.name}</h2>
                    <div className="increse">
                      <button
                        className="btn1"
                        onClick={() => dispatch(increse(ele))}
                      >
                        +
                      </button>
                      {<p>{ele.cartQuanity}</p>}
                      <button
                        className="btn1"
                        onClick={() => dispatch(decrese(ele))}
                      >
                        -
                      </button>
                    </div>
                    <h3>
                      {" "}
                      price: ₹ {parseInt(ele.price) *
                        Number(ele.cartQuanity)}{" "}
                    </h3>
                    <div className="order">
                      <button className="orderbtn" onClick={() => order(ele)}>
                        order
                      </button>
                      <button
                        className="btn1"
                        onClick={() => dispatch(remove(ele.id))}
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="checkout">
            <h2>summarry</h2>
            <div className="divide">
              <h3 style={{color:"white"}}>Items Quantity: {data}</h3>
              {/* <h3>{select[0].price}</h3> */}
            </div>
            <div className="divide">
              <h3>shipping</h3>
              <p>free</p>
            </div>
            <div className="divide">
              <h2>Total Amount: </h2>
              <p> ₹ {dataTotal}</p>
            </div>
            <button className="dbtn"onClick={()=>check(select)}>Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
