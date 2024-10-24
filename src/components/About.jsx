import React , { useEffect } from 'react' ;

import aboutimage from '../images/gymb2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import {motion} from 'framer-motion';
// import { fadeIn } from './variants';

function About() {

  useEffect(()=>{
    AOS.init({
      duration:3000,  
    });
  },
  []);

  return (
    <div className="about" id='about'>
        <div className="row">

            <div className="content aos-init aos-animate" data-aos='zoom-in-right'>

            <span>about us</span>
            <h3>daily workout and stay active at home</h3>
            <p>Regular exercise has benefits for both physical and mental health. It helps build muscle, increase stamina, flexibility, and energy levels, improve mood and sleep quality, boost the immune system, and reduce the risk of chronic diseases. </p>           
            <ul>
                <li><i className="far fa-check-square"></i> How to support your immune system</li>
                <li><i className="far fa-check-square"></i> A guide of 30 days of workout challenges</li>
                <li><i className="far fa-check-square"></i> Guide to ease your back in gym</li>
                <li><i className="far fa-check-square"></i> The mental health benefits of exercising</li>
            </ul>
            <a href="m" className="btn">read more</a>
            </div>

            <div className="image aos-init aos-animate" data-aos='fade-left' >
               <img src={aboutimage} alt="" />
            </div>  

        </div>
    </div>
  )
}

export default About