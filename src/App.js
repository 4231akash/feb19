import React, { useState } from "react";
import NavBar from "./my-food-app/components/navBar/NavBar";
import SideBar from "./my-food-app/components/navBar/SideBar";
import BackDrop from "./my-food-app/components/navBar/BackDrop";
import Background from "./my-food-app/components/background/Background";
import DashBoard from "./my-food-app/components/Dashboard/DashBoard";
import Footer from "./my-food-app/components/footer/Footer";
import Customer from "./my-food-app/components/customer/Customer";

const Slides = [
  { url: "http://localhost:3000/background-1.jpg", title: "burger" },
  { url: "http://localhost:3000/background-2.jpg", title: "pizza" },
  { url: "http://localhost:3000/background-3.jpg", title: "tandhoori" },
  { url: "http://localhost:3000/background-4.jpg", title: "veg" },
  { url: "http://localhost:3000/bg_food.jpg", title: "briyani" },
];


function App() {
  const [sidebar, setsidebar] = useState(false);
  const toggleBar = () => {
    setsidebar((prev) => !prev);
  };

  return (
    <div className="App">
      <div id="navbar-1">
        <NavBar OpenSideBar={toggleBar} />
        <SideBar Sidebar={sidebar} />
        <BackDrop Sidebar={sidebar} CloseToggle={toggleBar} />
      </div>
      <div>
        <Background Slides={Slides} />
      </div>
      <div>
        <DashBoard />
      </div>
      <div>
        <Customer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// @media only screen and (max-width: 1024px) {
    
   
// }
// @media only screen and (max-width: 768px) {
    
   
// }
// @media only screen and (max-width: 576px) {
    
   
// }