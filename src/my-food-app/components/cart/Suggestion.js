import React,{useState} from 'react';
import "./cart.css";
import NavBar from '../navBar/NavBar';
import BackDrop from '../navBar/BackDrop';
import SideBar from '../navBar/SideBar';


const Suggestion = (store) => {
    
  const [sidebar, setsidebar] = useState(false);
  const toggleBar = () => {
    setsidebar((prev) => !prev);
  };
   
    return (

    
      <div >
         <div>
        <NavBar className="nav" OpenSideBar={toggleBar} />
        <SideBar Sidebar={sidebar} />
        <BackDrop Sidebar={sidebar} CloseToggle={toggleBar}/>
      </div>

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
