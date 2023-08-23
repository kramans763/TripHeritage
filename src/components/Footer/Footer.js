import React from 'react'
import "./FooterStyle.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
               <h1>TripHeritage</h1>
               <p>Choose Your Favourite destination</p>
            </div>
            <div>
                <Link to='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </Link>
                <Link to='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </Link>
                <Link to='/'>
                    <i className='fa-brands fa-github-square'></i>
                </Link>
                <Link to='/'>
                    <i className='fa-brands fa-twitter-square'></i>
                </Link>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <h3>Projects</h3>
                <Link to='/'>Status</Link>
                <Link to='/'>License</Link>
                <Link to='/'>CheckLog</Link>
                <Link to='/'>All Versions</Link>
            </div>
            <div>
                <h3>Community</h3>
                <Link to='/'>Github</Link>
                <Link to='/'>Issues</Link>
                <Link to='/'>Projects</Link>
            </div>
            <div>
                <h3>Helps</h3>
                <Link to='/'>TroubleShooting</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>ContactUs</Link>
            </div>
            <div>
                <h3>Others</h3>
                <Link to='/'>Terms & Services</Link>
                <Link to='/'>Privacy Policy</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer