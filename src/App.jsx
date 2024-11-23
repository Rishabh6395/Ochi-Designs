/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
// import Shery from "sheryjs";


function App() {
  Shery.mouseFollower();

  const locomotiveScroll = new LocomotiveScroll();

  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Feature/>
        <Cards/>
        <Footer/>
      </div>
    </>
  )
}

export default App
