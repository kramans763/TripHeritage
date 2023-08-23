import React, { useState } from 'react'
import "./ContactForm.css";

const ContactForm = () => {
  const[clicked, setClicked]=useState(false);
  function handleBtn(e){
    e.preventDefault();
    setClicked(!clicked);
  }
  return (
    <div className='form-container'>
        <h1>Send a query to us!!</h1>
        <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Query' rows='4' ></textarea>
            <button onClick={handleBtn}>Send Query</button>
        </form>
         {clicked? <p>We will connect to you with your solution </p>:''}
    </div>
  )
}

export default ContactForm