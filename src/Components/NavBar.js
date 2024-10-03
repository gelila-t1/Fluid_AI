import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#features" onClick={toggleMenu}>Our Features</a>
        <a href="#areas" onClick={toggleMenu}>Areas</a>
        <div className="spacer"></div> {/* Spacer for large gap */}
        <a href="#faq" onClick={toggleMenu}>FAQs</a>
        <a href="#theWaitlist" onClick={toggleMenu}>The Waitlist</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;