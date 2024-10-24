import React from 'react' ;


function Navbar() {
  return (
    <div className="header">
        <a href="#home" className="logo"><i className="fa-solid fa-dumbbell"></i>GYM</a>

        <nav className="navbar">

            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#pricing">PRICING</a>
            <a href="#team">TEAM</a>
            <a href="#register">REGISTER</a>

            <div id="menu"><i className="fa-solid fa-bars"></i></div>

        </nav>

       
    </div>
  )
}

export default Navbar ;