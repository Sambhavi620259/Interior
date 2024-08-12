import React, { useState } from 'react';
import './Header.css';
import Sidebar from './Sidebar';
import Icon from './Icon'; // Ensure Icon is correctly imported

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="header-container">
            <header className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <div 
                    className="menu-button-container"
                    onClick={toggleSidebar} // Toggle sidebar on click
                >
                    <button className="menu-button" aria-label="Toggle Sidebar">
                        <Icon name="menu" size={24} color="white" />
                    </button>
                </div>
                <h1 className="app-title">My App</h1>
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
    );
};

export default Header;
