import React, { useState, useEffect } from 'react';
import Typewriter from '../../components/TypeWriter';
import './home.styl';

const positions = ['Web Developer ', "Cloud Practitioner ", "Full-stack Developer ", "Software Engineer "];

const Home = () => {
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    setMounted(true);
  }, [])
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1 className={`fade ${mounted ? 'in delay-0' : ''}`}>
          Yuchen Wang,
        </h1>
        <p className={`fade ${mounted ? 'in delay-1' : ''}`}>
          <Typewriter words={positions} speed={120} pause={2500} />
        </p>
      </div>
    </div>
  )
}

export default Home;