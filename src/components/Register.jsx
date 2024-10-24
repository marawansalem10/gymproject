import React , { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Register() {

  useEffect(()=>{
    AOS.init({
      duration:3000,  
    });
  },
  []);

  return (
    <div className="register" id='register'>
          <h1 className="heading">register now</h1>
    <form action="">

        <div className="inputBox aos-init aos-animate" data-aos='fade-right'>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
        </div>

        <div className="inputBox aos-init aos-animate" data-aos='fade-left'>
            <input type="email" placeholder="Your Email" />
            <input type="number" placeholder="Your Number" />
        </div>

       
        <a href="m" className="btn">register</a>
    </form>
    </div>
  )
}

export default Register