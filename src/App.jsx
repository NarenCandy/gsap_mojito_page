import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap'




const App = () => {
  const textRef = useRef(null)
  const handleCLick = () =>{
    gsap.to(textRef.current, {
      duration: 1,
      x: 250,
      
      scale: 2,
      ease: 'power1.inOut',
    })
  }
  return (
    <div ref={textRef}>App
    <div>
      <button onClick={handleCLick}>Click me
      </button>
    </div>
    </div>
  )
}

export default App