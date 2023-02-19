import React,{useEffect} from 'react';
import "../footer/footer.css"
import AOS from "aos";
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() => {
    AOS.init({
        duration:2000,
        delay:200
    })
       
    }, []);
    return (
        <div id="footer">
            <div className ="innerFooter">
            <div data-aos="slide-right" >
                <h2>Get in Touch</h2>
                <p>address:</p>
                <p>example@gmail.com</p>
                <p>+1234567890</p>
                <p>09.00 AM - 17.00 PM</p>
            </div>
            <div data-aos="slide-left" >
                <h2>Links</h2>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div data-aos="slide-left" >
                <h2>Follow Us</h2>
                <div id="icon">
                <p><i class="fa-brands fa-facebook"></i></p>
                <p><i class="fa-brands fa-instagram"></i></p>
                <p><i class="fa-brands fa-google"></i></p>
                </div>


            </div>
            </div>
            <div className ="outerFooter">
                <div >
                    <p>Copyright @ 2023 Ask project</p>
                </div>
                <div  className='policy'>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>

                </div>
            </div>
            
        </div>
    );
}

export default Footer;
