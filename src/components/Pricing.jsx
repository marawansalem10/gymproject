import React , { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Pricing() {

    useEffect(()=>{
        AOS.init({
            
        });
      },
      []);

  return (
    <div className="pricing" id='pricing'>
        <h1 className="heading">Pricing Plan</h1>
        <div className="box-container">
        <div className="box">
            <h3>basic plan</h3>
            <div className="price"><span>$</span>30 <span>/mo</span></div>
            <h3 className="month">3 months</h3>
            <div className="list aos-init aos-animate" data-aos='fade-right' >
                
                <p><i className="fas fa-check"></i> Lifting</p>
                <p><i className="fas fa-check"></i> Fitness</p>
                <p><i className="fas fa-check"></i> Yoga</p>
                <p><i className="fas fa-times"></i> Boxing</p>
                <p><i className="fas fa-times"></i> Zumba</p>
                <p><i className="fas fa-times"></i> Jacuzzi & Sauna</p>

            </div>
            <a href="m" className="btn">choose the plan</a>
        </div>

        <div className="box">
            <h3>standard plan</h3>
            <div className="price"><span>$</span>60 <span>/mo</span></div>
            <h3 className="month">6 months</h3>
            <div className="list aos-init aos-animate" data-aos='fade-right'>
                
                <p><i className="fas fa-check"></i> Lifting</p>
                <p><i className="fas fa-check"></i> Fitness</p>
                <p><i className="fas fa-check"></i> Yoga</p>
                <p><i className="fas fa-check"></i> Boxing</p>
                <p><i className="fas fa-times"></i> Zumba</p>
                <p><i className="fas fa-times"></i> Jacuzzi & Sauna</p>

            </div>
            <a href="m" className="btn">choose the plan</a>
        </div>

        <div className="box">
            <h3>premium plan</h3>
            <div className="price"><span>$</span>90 <span>/mo</span></div>
            <h3 className="month">12 months</h3>
            <div className="list aos-init aos-animate" data-aos='fade-right'>
                
                <p><i className="fas fa-check"></i> Lifting</p>
                <p><i className="fas fa-check"></i> Fitness</p>
                <p><i className="fas fa-check"></i> Yoga</p>
                <p><i className="fas fa-check"></i> Boxing</p>
                <p><i className="fas fa-check"></i> Zumba</p>
                <p><i className="fas fa-check"></i> Jacuzzi & Sauna</p>

            </div>
            <a href="m" className="btn">choose the plan</a>
        </div>
        </div>
    </div>
  )
}

export default Pricing