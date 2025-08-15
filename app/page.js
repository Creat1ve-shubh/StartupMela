import React from 'react'
import HeroSection from './components/Home/Hero';
import About from './components/Home/About';
import RegisterCard from './components/Home/Register';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <RegisterCard />
    </div>
  )
}

export default Home
