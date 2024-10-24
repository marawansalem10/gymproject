import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Services from './components/Services';
// import Servicesbox from './components/Servicesbox';
import Services2 from './components/Services2';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Teambox from './components/Teambox';
import Register from './components/Register';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <Services /> 
      <Servicesbox /> */}
      <Services2 />
      <Pricing />
      <Team />
      <Teambox />
      <Register />
      <Footer />
    </div>
  );
}

export default App;

