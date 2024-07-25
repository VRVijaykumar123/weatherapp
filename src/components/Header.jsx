// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>My Weather App</h1>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#login">Login</a>
        <a href="#more">More</a>
      </nav>
    </header>
  );
};

export default Header;
