import React from 'react'
import './project.css'
import project from '../assets/about2.svg'


export default function Project() {
  return (
    <section id='Project' className='project-section'>
      <div className="project-text">
        <h1>Portfolio</h1>
        <p>Each project is a unique piece of development 🧩</p>
      </div>
      <div className="project-box">
        <div className="project-grid pro">
          <div className="project-image-grid">
            <img src={project} alt="" />
          </div>
          <div className="project-text-desc">
            <h3>Project Name </h3>
            <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
            <div className="project-livedemo">
              <p><a href="https://github.com/pankaj-coder47">Code <i className="fa-brands fa-github"></i></a></p>
              <p><a href="/">Livedemo <i class="fa-solid fa-arrow-up-right-from-square"></i></a></p>

            </div>
            <div className="project-text-btn">
              <button>React</button>
              <button>sCss</button>
            </div>
          </div>
        </div>
       {/*  <div className="project-grid pro"></div>
        <div className="project-grid pro"></div>
        <div className="project-grid pro"></div> */}
      </div>
     
    </section>
  )
}