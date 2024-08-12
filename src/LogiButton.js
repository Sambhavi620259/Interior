import React, { useState } from 'react';
import './LoginButton.css';

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      alert("You have logged out.");
    } else {
      setShowLoginForm(!showLoginForm);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
    alert("You are now logged in.");
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <div>
          <br/>
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
          {showLoginForm && (
            <div className="login-form">
              <input type="text" placeholder="Username" className="login-input" />
              <input type="password" placeholder="Password" className="login-input" />
              <button onClick={handleLogin} className="submit-button">Submit</button>
            </div>
          )}
        </div>
      ) : (
        <button className="login-button" onClick={handleLoginClick}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginButton;
