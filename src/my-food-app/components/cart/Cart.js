import React from "react";
import NavBar from "../navBar/NavBar";
import { increse,decrese } from "./ReducerCart";
import { selectCount } from "./ReducerCart";
import { useSelector,useDispatch } from "react-redux";
import "./cart.css"

const Cart = () => {
  const select=useSelector(selectCount);
  const dispatch=useDispatch();
  // const [cart,setCart] =useState([...select]);


  //  function remove(id){
  //   const arr =select.filter((item)=> item.id !== id)
  //   setCart(arr);
  //  }


  return (
    <div className="cart10">
      <div>
        <NavBar className='nav' cart={select.length}/>
      </div>
      <div className="total1">
        
        <div className="total">
        <div className="mainCart">
        {select.map((ele,index) => {
          return (
            <div className="cart11" key={index} >
              <div >
                <img src={ele.url} className="img2" alt="hi"></img>
              </div>
              <div className="quantity">
                <h2>quantity</h2>
                <div className="increse">
                  <button  className="btn1" onClick={()=>dispatch(increse(ele))}>+</button>
                  {<p>{ele.cartQuanity}</p>}
                  <button className="btn1" onClick={()=>dispatch(decrese(ele))}  >-</button>
                </div>
                <h3> price: {ele.price * ele.cartQuanity} </h3>
                <div className="order">
                  <button className="orderbtn">order</button>
                <button className="btn1" >x</button>
                </div>
                
              </div>
            </div>
          
          );
        })}
        </div>
           <div id="checkout">
            <h2>summarry</h2>
            <div className="divide">
              <h3>items Count: {select.length}</h3>
              {/* <h3>{select[0].price}</h3> */}
            </div>
            <div className="divide">
              <h3>shipping</h3>
              <p>free</p>
            </div>
            <div className="divide">

              <h2>Total Amount: </h2>
              <p>price</p>
            </div>
            <button className="dbtn">Check out</button>
           </div>

        </div>
        
      </div>

    </div>
  );
};

export default Cart;
