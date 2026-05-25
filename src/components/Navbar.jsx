import { React } from 'react';
import '../static/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <button className="btn-resume">Resume</button>
      </a>
    </nav>
  );
}

export default Navbar;