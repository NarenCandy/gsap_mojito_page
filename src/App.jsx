import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktails from './components/Cocktails'




const App = () => {
  
  return (
    <div>
    <NavBar />
    <Hero />
    <Cocktails />
    </div>
    
  )
}

export default App