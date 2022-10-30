import React from 'react'
import About from '../components/elements/About'
import Allicons from '../components/elements/Allicons'
import Hero from '../components/elements/Hero'
import Introducing from '../components/elements/Introducing'
import Testimonial from '../components/elements/Testimonial'
import Token from '../components/elements/Token'

const Home = () => {
  return (
    <>
     <Hero/>
     <About/>
     <Token/>
     <Testimonial/>
     <Introducing/>
     <Allicons/>
    </>
  )
}

export default Home