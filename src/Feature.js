import React from 'react';
import Slider from 'react-slick';
import './Feature.css';
import meeting from './meeting.jpeg';
import office from './office.jpeg';
import cabin from './cabin.jpeg';
import four from './four.jpeg';
import five from './five.jpeg';
import six from './six.jpeg';
import seven from './seven.jpeg';
import eight from './eight.jpeg';
import nine from './nine.jpeg';

function Feature() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="Features">
      <h3>Features</h3>
      <Slider {...settings} className="Feature-slider">
        <div className="Feature-card">
          <img src={meeting} alt="Meeting" />
          <h4>Feature One</h4>
          <p>Meeting Room with Client</p>
        </div>
        <div className="Feature-card">
          <img src={office} alt="Office" />
          <h4>Feature Two</h4>
          <p>Details about feature two.</p>
        </div>
        <div className="Feature-card">
          <img src={cabin} alt="Development Office" />
          <h4>Feature Three</h4>
          <p>Details about feature three.</p>
        </div>
        <div className="Feature-card">
          <img src={four} alt="Development Office" />
          <h4>Feature Four</h4>
          <p>Details about feature four.</p>
        </div>
        <div className="Feature-card">
          <img src={five} alt="Development Office" />
          <h4>Feature Five</h4>
          <p>Details about feature five.</p>
        </div>
        <div className="Feature-card">
          <img src={six} alt="Development Office" />
          <h4>Feature Six</h4>
          <p>Details about feature six.</p>
        </div>
        <div className="Feature-card">
          <img src={seven} alt="Development Office" />
          <h4>Feature Seven</h4>
          <p>Details about feature seven.</p>
        </div>
        <div className="Feature-card">
          <img src={eight} alt="Development Office" />
          <h4>Feature Eight</h4>
          <p>Details about feature eight.</p>
        </div>
        <div className="Feature-card">
          <img src={nine} alt="Development Office" />
          <h4>Feature Nine</h4>
          <p>Details about feature nine.</p>
        </div>
      </Slider>
    </section>
  );
}

export default Feature;
