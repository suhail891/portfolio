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
   <section id="home"><Hero image={image}/></section>
   <section id="about"><About /></section> 
   <section id="skills"><Skills /></section>
   <section id="projects"><Projects /></section>
  </>

 )

}

export default App