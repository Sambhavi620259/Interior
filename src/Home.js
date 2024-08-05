import React from 'react';
import './Home.css';
import Feature from './Feature';
import Footer from './Footer'; 

const Home = () => {
  return (
    <div className="home-container">
      <section id="home" className="section home-section">
        <h1>Welcome to Our Website of Interior Company Design</h1>
        <p>Your one-stop solution for all your needs.</p>
      </section>

      <Feature />
      <div style={{ marginTop: '70px' }}>
      <Footer /> 
      </div>
    </div>
  );
};

export default Home;
