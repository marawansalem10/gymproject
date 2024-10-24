import React from 'react'

function Footer() {
  return (
    <div className="footer">
         <div className="box-container">

<div className="box">
    <h3><i className="fas fa-dumbbell"></i> Gym</h3>
    <p>" SHAPE YOUR MUSCLE WITH US "</p>
</div>

<div className="box">
    <h3>contact info</h3>
    <a href="m"><i className="fas fa-phone"></i> +20 011576326</a>
    <a href="m"><i className="fas fa-phone"></i> +20 012656376</a>
    <a href="m"><i className="fas fa-envelope"></i>gymegypt@gmail.com</a>
    <a href="m"><i className="fas fa-map"></i>Alexandria, Egypt</a>
</div>

<div className="box">
    <h3>quick links</h3>
    <a href="m"><i className="fas fa-arrow-right"></i>home</a>
    <a href="m"><i className="fas fa-arrow-right"></i>about</a>
    <a href="m"><i className="fas fa-arrow-right"></i>services</a>
    <a href="m"><i className="fas fa-arrow-right"></i>pricing</a>
    <a href="m"><i className="fas fa-arrow-right"></i>team</a>
</div>

<div className="box">
    <h3>extra links</h3>
    <a href="m"><i className="fas fa-arrow-right"></i>refund policy</a>
    <a href="m"><i className="fas fa-arrow-right"></i>my account</a>
    <a href="m"><i className="fas fa-arrow-right"></i>new equipments</a>
    <a href="m"><i className="fas fa-arrow-right"></i>new offers</a>
    <a href="m"><i className="fas fa-arrow-right"></i>trainers</a>
</div>   

</div>

<div className="share">
{/* <a href="m"></a> */}
<a href="m" className=""><i className="fa-brands fa-facebook"></i></a>
<a href="m" className="fab fa-twitter">.</a>
<a href="m" className="fab fa-instagram">.</a>
</div>

<div className="credit">&copy; all rights are reserved by <span>gymegypt</span></div>

    </div>
  )
}

export default Footer