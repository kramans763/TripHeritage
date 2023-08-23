import React from 'react'
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
               <h1>TripHeritage</h1>
               <p>Choose Your Favourite destination</p>
            </div>
            <div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-github-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h3>Projects</h3>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>CheckLog</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h3>Community</h3>
                <a href='/'>Github</a>
                <a href='/'>Issues</a>
                <a href='/'>Projects</a>
            </div>
            <div>
                <h3>Helps</h3>
                <a href='/'>TroubleShooting</a>
                <a href='/'>Support</a>
                <a href='/'>ContactUs</a>
            </div>
            <div>
                <h3>Others</h3>
                <a href='/'>Terms & Services</a>
                <a href='/'>Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer