import React from 'react';
import '../static/Navbar.css';

const Navbar=()=> {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button class="btn-resume">Resume</button>
    </nav>
  );
}

export default Navbar;