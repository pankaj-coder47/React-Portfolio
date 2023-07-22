import React from 'react'
import './home.css'
import Hello from '../assets/Hello.png'
import htmlimg from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import sass from '../assets/sass.svg'
export default function Home() {
  return (
    <section id='Home' className='home-section'>
      <div className="home-container">
        <div className="home-text">
          <h2>Front-End React Developer <img src={Hello} alt='imageforhii'/></h2>
          <p>Hi, I'm Dhanji Sharma . A passionate Front-end React Developer based in Bihar, Sasaram. 📍</p>
          <span>
            <a href="https://www.linkedin.com/in/dhanji-sharma-50223a240" target='_main'><i className="fa-brands fa-linkedin colorfor"></i></a>
          <a href="https://github.com/pankaj-coder47" target='_main'><i className="fa-brands fa-github colorfor"></i></a>
          </span>
        </div>
        <div className="home-blob">
        </div>
      </div>
      <div className="tech-stack">
      <span>Tech Stack</span>
      <div className='pae'/>
      <div className="home-logo">
        <ul>
          <li><img src={htmlimg} alt='htmllogo'/></li>
          <li><img src={css} alt='htmllog'/></li>
          <li><img src={js} alt='htmllogo'/></li>
          <li><img src={react} alt='htmllogo'/></li>
          <li><img src={tailwind} alt='htmllogo'/></li>
          <li><img src={sass} alt='htmllogo'/></li>
        </ul>
      </div>

      </div>
    </section>
  )
}
