import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import Feature from './Feature';
import Footer from './Footer'; 
import About from './About';
import graphics from './graphics.png'; 
import graphics1 from './graphic1.png';
import electronic from './electronic.png';
import LoginButton from './LogiButton'; 

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="section home-section">
        <h1>Gadgets Galore</h1>
        <p>Your one-stop solution for all your needs.</p>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            <div><img src={graphics} alt="graphics" className="slider-image" /></div>
            <div><img src={graphics1} alt="graphics1" className="slider-image" /></div>
            <div><img src={electronic} alt="electronic" className="slider-image" /></div>
          </Slider>
        </div>
        <LoginButton /> {/* Use the LoginButton component */}
      </section>
      <br/>
       <Feature />
       <br/>
      <About />
      <div style={{ marginTop: '70px' }}>
        <Footer /> 
      </div>
    </div>
  );
};

export default Home;
