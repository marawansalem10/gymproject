import React , { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import fimage1 from '../images/boxp.jpg';
import fimage2 from '../images/liftingp.webp';
import fimage3 from '../images/fitnessp.avif';
import fimage4 from '../images/yogap.avif';
import fimage5 from '../images/zumbap.avif';
import fimage6 from '../images/sjp.avif';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services2 = () => {

    useEffect(()=>{
      AOS.init({
        duration:3000,  
      });
    },
    []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="carousel" id='services' >

        <h1 className="heading aos-init aos-animate" data-aos='zoom-in-down'>OUR SERVICES</h1>


         <Slider {...settings}>
       

       <div className="box">
                      <div className="image-content">
                      <div className="card-image">
                                <img src={fimage1} alt="" className="card-img" />
                      </div>
                      </div>
                            

                       <div className="card-content">
                                <h2 className="name">BOXING</h2>
                                <p className="decription">Boxing Can Help Improve Your Body Health, Body Composition, And Strength, As Well As Lower Your Blood Pressure And Weight Loss.</p>
                                <button className="button">read more</button>
                      </div>
       </div>

       <div className="box">

                            <div className="image-content">
                                {/* <span className="overlay"></span> */}

                                <div className="card-image">
                                    <img src={fimage2} alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">LIFTING</h2>
                                <p className="decription">Weight Training Can Help You Lose Fat, Increase Your Strength And Muscle Tone, And Improve Your Bone Desity.</p>
                                <button className="buttons">read more</button>
                            </div>
                        </div>


      <div className="box">

                            <div className="image-content">
                                {/* <span className="overlay"></span> */}

                                <div className="card-image">
                                    <img src={fimage3} alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">FITNESS</h2>
                                <p className="decription">Physical Fitness Is A State Of Health And Well-Being And, More Specifically, The Ability To Perform Aspects Of Sports.</p>
                                <button className="button">read more</button>
                            </div>
    </div>


                        <div className="box">

                            <div className="image-content">
                                {/* <span className="overlay"></span> */}

                                <div className="card-image">
                                    <img src={fimage4} alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">YOGA</h2>
                                <p className="decription">Yoga is essentially a spiritual discipline based on an extremely subtle Science which brings harmony between mind and body.</p>
                                <button className="button">read more</button>
                            </div>
                        </div>


                        <div className="box">

                            <div className="image-content">
                                {/* <span className="overlay"></span> */}

                                <div className="card-image">
                                    <img src={fimage5} alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">ZUMBA</h2>
                                <p className="decription">Helps In Weight Loss And Weight Management, Is A Great Cardio Workout, Improves flexibility, Puts You In A Good Mood.</p>
                                <button className="button">read more</button>
                            </div>
                        </div>


                        <div className="box">

                            <div className="image-content">
                                {/* <span className="overlay"></span> */}

                                <div className="card-image">
                                    <img src={fimage6} alt="" className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="name">JACUZZI & SAUNA</h2>
                                <p className="decription">Several Health Benefits, Such As Muscle Relaxation, Pain Relief, And Can Help To Open Up Pores And Increase Blood Flow.</p>
                                <button className="button">read more</button>
                            </div>
                        </div>


       

        </Slider>
 
      
    </div>
  )
}

export default Services2






