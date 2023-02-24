import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./background.css"

const Background = ({ Slides }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  const [currentIndex, setcurrentIndex] = useState(0);

  const slideIndex = {
    backgroundImage: `url(${Slides[currentIndex].url})`,
  };

  function prev() {
    const firstIndex = currentIndex - 1;
    setcurrentIndex(firstIndex);

    if(currentIndex <= 0){
      setcurrentIndex(0)
    }
  }

  function next() {
    const lastIndex = currentIndex + 1;
    setcurrentIndex(lastIndex);
    if(lastIndex === 4){
       return setcurrentIndex(lastIndex -1)
    }
  }

  function goToSlide(index) {
    setcurrentIndex(index);
  }

  return (
    <div id="slideParent">
      <div style={slideIndex} id="index">
        <div className="LeftArrow" onClick={prev}>
          {"<"}
        </div>
        <div className="RightArrow" onClick={next}>
          {">"}
        </div>
      </div>
      <div id="on">
          <h1 data-aos="fade-up">Fast Food Restaurant</h1>
          <p data-aos="fade-up">
            Doloremque, itaque aperiam facilis rerum, commodi, temporibus
            sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
            ex doloremque, labore, sunt repellat dolore, iste magni quos nihil
            ducimus libero ipsam.
          </p>
          <div class="btn-box">
            <a data-aos="fade-up" href="/cart" class="btn5">
              shop Now
            </a>
          </div>
        </div>

      <div id="dotParent">
        {Slides.map((Slides, index) => {
          return (
            <div key={index} className="dot" onClick={() => goToSlide(index)}>
              {"."}
            </div>
          );
        })}
       
      </div>
      <div id="shipping">
        <div data-aos="slide-right" className="icon">
          <i class="fas fa-shipping-fast"></i>
          <div>
            <h2>Free shipping</h2>
            <p>When order over $75</p>
          </div>
        </div>
        <div data-aos="fade-up" className="icon">
          <i class="fas fa-phone-volume"></i>
          <div>
            <h2>24/support</h2>
            <p>Get Support All Day</p>
          </div>
        </div>
        <div data-aos="slide-left" className="icon">
          <i class="fas fa-sync"></i>
          <div>
            <h2>Refund</h2>
            <p>Get refund with in 3 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
