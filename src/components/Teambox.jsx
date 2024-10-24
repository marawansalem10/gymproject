import React from 'react'

function Teambox(props) {
  return (
             <div className="box">
                    <div className="image">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="content">
                        <h3>{props.name}</h3>
                        <p>{props.job}</p>
                    </div>
             </div>

  )
}

export default Teambox