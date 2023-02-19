import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import "./form.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Food from "./food.mp4"

const MainFrame = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000,
          delay: 100,
        });
      }, []);
    
     
    const [start,setStart]=useState(true)
   
    if(!start){
        return(
          <Redirect to="/login"/>
        )
    }
   
   
    return (
        <div id="main">
            
            <div id="center">
              <video
               autoPlay
               loop
              muted
              class="video"
                  >
                <source  src={Food} type="video/mp4"></source>
              </video>
            </div>
                <div className="frame">
                <h1 data-aos="fade-right">Food App</h1>
                <p data-aos="fade-left">food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.</p>
                <p>Don't waste foods</p>
                <button id="btn" type="button"  onClick={()=>setStart(false)}>Let Start</button>
              </div>

        </div>
    );
}

export default MainFrame;