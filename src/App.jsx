/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className=''>
      <Home  />
      <About />
      <Portfolio/>
      <Experience/>
      <Contact/>
      </div>

      <SocialLinks/>
    </> 
  )
}

export default App