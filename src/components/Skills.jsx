import React from 'react';
import '../static/Skills.css'
import { FaReact, FaNodeJs, FaJava} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiHtml5, SiExpress, SiSpringboot, SiAngular} from "react-icons/si";

function Skills() {
  return (
    <section className='skills-container'>

      <h2>My Skills</h2>

      <div className="skills">

        <div className="card">
          <h3>Frontend</h3>
          <div className="icons"> 
            <SiHtml5 className="text-amber-400"/>
            <FaReact className="text-cyan-400" />
            <SiJavascript className="text-yellow-400" />
            <SiTailwindcss className="text-sky-400" />
            <SiAngular className='text-fuchsia-500' />
          </div>
        </div>
        <div className="card">
          <h3>Backend</h3>
          <div className='icons'>
            <FaNodeJs className="text-green-500" />
            <SiExpress className="text-gray-700"/>
            <FaJava className='text-amber-400'/>
            <SiSpringboot className="text-green-600" />
          </div>
        </div>

        <div className="card">
          <h3>Database</h3>
          <div className='icons'>
            <SiMysql className="text-blue-500" />
            <SiMongodb className="text-green-600" />
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;