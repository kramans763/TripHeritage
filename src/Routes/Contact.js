import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ContactImg from "../Assets/2.jpg"
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <>
    <Navbar />
    <Hero
     cName="hero-mid"
     heroImg={ContactImg}
     title="Contact"
     buttonClass="hide"
     url="/"
    />
    <ContactForm />
    <Footer/>
   </>
  )
}

export default Contact