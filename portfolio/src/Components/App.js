import React from 'react'
import './app.css'
import { About, Contact, Home, Nav, Project } from '../Containers/index'
import Footer from '../Containers/Footer/Footer'
export default function App() {
  return (
  <>
  <Nav/>
  <Home/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>
  </>
  )
}
