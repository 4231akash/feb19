import React from 'react';
import "./cart.css";


const Suggestion = (store) => {
    
   
    return (

    
      <div >

        <div  key={store.key} className="main">
          <div className="main_2">
            <img className="inner" src={store.url} alt="abj" />
          </div>
          <div className="main_2">
            <h6>{store.name}</h6>
            <pre className="description"> {store.description}</pre>
            <h2>{store.price}</h2>
            <div className="end">
              <h4>{store.rating} ratings</h4>
              <button className="cart">Add cart</button>
            </div>
          </div>
     
        </div>
    </div>
    );
}

export default Suggestion;
