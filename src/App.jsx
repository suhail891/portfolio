import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import React from 'react';
import image from './assets/portfolio.png';
import './App.css';
import About from "./components/About"

function App(){

 return(

  <>
   <Navbar/>
   <Hero image={image}/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
  </>

 )

}

export default App