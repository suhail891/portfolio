import React from 'react';
import '../static/Hero.css';
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

const Hero = (props) => {
  return (
    <section className="heroSection">
      <img className='portfolio-image' src={props.image} alt="Suhail Aazam" />
      <div>
        <h1>Hi, I'm Suhail Aazam</h1>
        <h2>Mern Stack developer in rogress</h2>
        

        <div className="hero-buttons">
          <a href="/resume.pdf" download="suhail_aazam_Resume.pdf">
            <button className='btn-download'>Download Resume</button>
          </a>
          <a href="mailto:aazam.asdf@gmail.com">
            <button className='btn-contact'>Contact Me</button>
          </a>
        </div>

        <div className="social-icons flex gap-4">
          <a href="https://www.linkedin.com/in/suhail-aazam" target="_blank" rel="noopener noreferrer"><Linkedin size={28} /></a>
          <a href="https://twitter.com/suhail_aazam" target="_blank" rel="noopener noreferrer"><Twitter size={28} /></a>
          <a href="mailto:aazam.asdf@gmail.com"><Mail size={28} /></a>
          <a href="https://github.com/suhail891" target="_blank" rel="noopener noreferrer"><Github size={28} /></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;