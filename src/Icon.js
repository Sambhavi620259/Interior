// Icon.js
import React from 'react';
import './Icon.css';

const Icon = ({ name, size = 24, color = 'black' }) => {
    const renderIcon = () => {
        switch (name) {
            case 'menu':
                return '☰'; // Menu icon
            case 'close':
                return '×'; // Close icon
            case 'home':
                return '🏠'; // Home icon
            case 'star':
                return '★'; // Star icon
            case 'heart':
                return '❤'; // Heart icon
            case 'contact':
                return '✉'; // Contact icon
            case 'cloud':
                return '☁️'; // Cloud icon
            default:
                return null;
        }
    };

    return (
        <span className={`icon icon-${name}`} style={{ fontSize: size, color: color }}>
            {renderIcon()}
        </span>
    );
};

export default Icon;
