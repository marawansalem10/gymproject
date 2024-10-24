import React from 'react'

function Servicesbox(props) {
  return (
    <div className="card swiper-slide">

    <div className="image-content">
        <span className="overlay"></span>

        <div className="card-image">
            <img src={props.image}  className="card-img" alt="" />
        </div>
    </div>

    <div className="card-content">
        <h2 className="name">{props.title}</h2>
        <p className="decription">{props.description}</p>
        <button className="button">read more</button>
    </div>
</div>
  )
}

export default Servicesbox