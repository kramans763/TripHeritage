import React from 'react'
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send a query to us!!</h1>
        <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Query' rows='4' ></textarea>
            <button>Send Query</button>
        </form>
    </div>
  )
}

export default ContactForm