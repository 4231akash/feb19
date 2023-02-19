import React,{useEffect} from "react";
import "./customer.css";
import AOS from "aos";
import "aos/dist/aos.css"
const Customer = () => {
  useEffect(() => {
   AOS.init({
    duration:2000,
    delay:200
   })
  }, []);

  return (
    <div id="customer">
      <div id="middle">
        <div data-aos="slide-right">
          <img
            className="img1"
            src={"http://localhost:3000/burger.jpg"}
            alt=""
          ></img>
        </div>
        <div className="para1">
          <h1 data-aos="fade-up">We Are Food App</h1>
          <p data-aos="slide-left" className="para">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. 
          </p>
          <button data-aos="fade-up" className="read-btn">Raed more</button>
        </div>
      </div>
      <div id="customer1">
      <h2 data-aos="fade-up" >Whats Says our customers</h2>
        <div id="customerReview">
         <div data-aos="slide-right" className="review1">
          <div data-aos="slide-right" className="review">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <h2>Michell</h2>
            </p>
          
          </div>
          <div className="reviewimg">
            <img className="review2" src={"http://localhost:3000/team-1.jpg"} alt="hi"></img>
          </div>
          </div>
        
        <div data-aos="slide-left" className="review1">
          <div data-aos="slide-left" className="review">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <h2> Moana Michell</h2>
            </p>
            
          </div>
          <div className="reviewimg">
            <img className="review2" src={"http://localhost:3000/team-2.jpg"} alt="hi"></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
