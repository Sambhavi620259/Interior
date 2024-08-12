import React from 'react';
import './Sidebar.css';
import Icon from './Icon';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <nav>
                <a href="/" onClick={onClose}>
                    <Icon name="home" size={24} color="white" /> Home
                </a>
                <a href="/about" onClick={onClose}>
                    <Icon name="star" size={24} color="white" /> About
                </a>
                <a href="/services" onClick={onClose}>
                    <Icon name="heart" size={24} color="white" /> Services
                </a>
                <a href="/contact" onClick={onClose}>
                    <Icon name="contact" size={24} color="white" /> Contact
                </a>
                <a href="/weather" onClick={onClose}>
                    <Icon name="cloud" size={24} color="white" /> Weather
                </a>
                <a href="/register" onClick={onClose}>
                    <Icon name="star" size={24} color="white" /> Register
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
