import React from 'react';
import './Icon.css';

const Icon = ({ name, size = 24, color = 'black' }) => {
  return (
    <span className={`icon icon-${name}`} style={{ fontSize: size, color: color }}>
      {name === 'star' && '★'}
      {name === 'heart' && '❤'}
      {name === 'home' && '🏠'}
      {name === 'contact' && '✉'}
    </span>
  );
};

export default Icon;
