import React , { useEffect } from 'react'
import Teambox from './Teambox'
import fimage7 from '../images/teamp.jpg';
import fimage8 from '../images/team2p.jpg';
import fimage9 from '../images/team3p.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Team() {
  

    useEffect(()=>{
      AOS.init({
        duration:3000,  
      });
    },
    []);
  return (
    <div className="team" id='team'>
        
         <h1 className="heading aos-init aos-animate" data-aos='fade-out-up'>our team</h1>

        <div className="box-container aos-init aos-animate" data-aos='fade-up'>

            <Teambox image={fimage7} name="Coach 1" job="Gym Trainer"/>
            <Teambox image={fimage8} name="Coach 2" job="Gym Trainer"/>
            <Teambox image={fimage9} name="Coach 3" job="Gym Trainer"/>
               

        </div>
    </div>
  )
}

export default Team