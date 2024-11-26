import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroLogo from './components/HeroLogo'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TechStack from './components/TechStack'
import Success from './components/Success'
import MultiSlider from './components/MultiSlider'

function App() {
  return (
    <>
      <div className=''>
        <Navbar/>
        <Hero/>
        <HeroLogo/>
        <MultiSlider/>
        <TechStack/>
        <Success/>
        <CTA/>
        <Footer/>
      </div>
    </>
  )
}

export default App