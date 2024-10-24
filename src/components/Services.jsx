import React from 'react'
import Servicesbox from './Servicesbox';
import fimage1 from '../images/boxp.jpg';
import fimage2 from '../images/liftingp.webp';
import fimage3 from '../images/fitnessp.avif';
import fimage4 from '../images/yogap.avif';
import fimage5 from '../images/zumbap.avif';
import fimage6 from '../images/sjp.avif';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

function Services() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 550,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
  

    <div className="Services" id='services'>

        <h1 className="heading">OUR SERVICES</h1>

        <div className="slide-container swiper">
            <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">

                {/* <Slider {...settings}> */}

                    <Servicesbox image={fimage1} title="BOXING" description="Boxing Can Help Improve Your Body Health, Body Composition, And Strength, As Well As Lower Your Blood Pressure And Aid Weight Loss." />
                    <Servicesbox image={fimage2} title="LIFTING" description="Weight Training Can Help You Lose Fat, Increase Your Strength And Muscle Tone, And Improve Your Bone Desity."/>
                    <Servicesbox image={fimage3} title="FITNESS" description="Physical Fitness Is A State Of Health And Well-Being And, More Specifically, The Ability To Perform Aspects Of Sports."/>
                    <Servicesbox image={fimage4} title="YOGA" description="Yoga is essentially a spiritual discipline based on an extremely subtle Science which focuses on bringing harmony between mind and body."/>
                    <Servicesbox image={fimage5} title="ZUMBA" description="Helps In Weight Loss And Weight Management, Is A Great Cardio Workout, Improves flexibility, Puts You In A Good Mood."/>
                    <Servicesbox image={fimage6} title="JACUZZI & SAUNA" description="Several Health Benefits, Such As Muscle Relaxation, Pain Relief, Improved Sleep And Can Help To Open Up Pores And Increase Blood Flow."/>

                {/* </Slider> */}

                </div>
            </div>
              
        </div>

    </div>
  )
}

export default Services