// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Icon from './Icon'; // Import the Icon component

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">
          <Icon name="home" size={24} color="blue" /> Home
        </Link>
        <Link to="/about">
          <Icon name="star" size={24} color="gold" /> About
        </Link>
        <Link to="/services">
          <Icon name="heart" size={24} color="red" /> Services
        </Link>
        <Link to="/contact">
          <Icon name="contact" size={24} color="green" /> Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
