import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import NavBar from './components/NavBar'
import Hero from './components/Hero'




const App = () => {
  
  return (
    <div>
    <NavBar />
    <Hero />
    <div className='h-dvh bg-black'/>
    </div>
    
  )
}

export default App