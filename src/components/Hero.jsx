import React from 'react';
import '../static/Hero.css';
import { Linkedin,  Twitter, Mail, User, Github } from "lucide-react";
const Hero = (props) => {
  return (
    <section className="heroSection">
       <img className='portfolio-image' src={props.image} alt="Hero Image"  />
      <div>
        <h1>Hi, I'm Suhail Aazam</h1>

      <h2>MERN Stack Developer</h2>

      <button className='btn-download'>Download CV</button>

      <button >Contact Me</button>
      <div className="flex gap-4">
        <Linkedin size={28} />
        <Twitter size={28} />
        <Mail size={28} />
        <Github size={28} />
      </div>
    </div>
    </section>
  );
}

export default Hero;