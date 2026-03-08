import React from 'react'
import '../static/About.css'

const About = () => {
  return (
    <div className='about-container'>
    <h4 className="heading">About Me</h4>
    <div className='text-about'>
        <div>I'm a full stack developer specialized in building web applications using the MERN stack.</div>
        <button className='btn-raed-more'>Read More </button>
    </div>
    </div>
  )
}

export default About