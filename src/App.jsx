import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroLogo from './components/HeroLogo'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'
import TechStack from './components/TechStack'
import Success from './components/Success'
import FAQ from './components/FAQ'
import MultiSlider from './components/MultiSlider'
// import Slides from './data.json'

function App() {
  return (
    <>
      <div className=''>
        <Navbar/>
        <Hero/>
        <HeroLogo/>
        {/* <Services /> */}
        <MultiSlider/>
        <TechStack/>
        <Success/>
        {/* <FAQ/> */}
        <CTA/>
        <Footer/>
      </div>
    </>
  )
}

export default App