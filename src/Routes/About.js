import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutImg from "../Assets/night.jpg"
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/AboutUs/AboutUs';
const About = () => {
  return (
    <>
    <Navbar />
    <Hero
     cName="hero-mid"
     heroImg={AboutImg}
     title="About"
     buttonClass="hide"
     url="/"
    />
    <AboutUs/>
    <Footer/>
    </>
  )
}

export default About