import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Component/week5/Header'
import { Routes, Route } from 'react-router-dom'

function App () {
  const Home = () => {
    return <div>Home</div>
  }
  const AboutUs = () => {
    return <div>About Us</div>
  }
  const Projects = () => {
    return <div>Projects</div>
  }
  const Services = () => {
    return <div>Services</div>
  }
  const ContactUs = () => {
    return <div>ContactUs</div>
  }
  return (
    <div className='container'>
      <div className='App'>
        <Header />
        <body>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
        </body>
      </div>
    </div>
  )
}

export default App
