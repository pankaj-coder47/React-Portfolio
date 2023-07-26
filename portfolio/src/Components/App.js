import React from 'react'
import './app.css'
import { About, Contact, Home, Nav, Project } from '../Containers/index'
import Footer from '../Containers/Footer/Footer'
import { Themer } from '../Context/Theme'
export default function App() {
  return (
  <>
  <Themer>
  <Nav/>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  </Themer>
  </>
  )
}
