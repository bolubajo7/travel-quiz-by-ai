// Header.js
import React from 'react';
import './Header.css'; // Import the CSS file
import BALogo from "./resources/British_Airways.svg"


export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={BALogo} alt="Logo" />
        {/* British Airways and Avios logos */}
        {/* You can add image elements or use SVGs here */}
      </div>
    </header>
  );
}
export default Header;
