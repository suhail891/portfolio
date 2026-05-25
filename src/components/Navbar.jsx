import React, { useState } from 'react';
import '../static/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn-resume">Resume</button>
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;