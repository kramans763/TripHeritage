import React, { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const[icon, setIcon]=useState(true);
  function hanldeIcons(){
    setIcon(!icon);
  }
  return (
     <nav className='NavbarItems'>
      <h1 className='navbar-logo'>TripHeritage</h1>
      <div className='menu-icons' onClick={hanldeIcons}>
        <i className={icon? 'fas fa-bars' :'fas fa-times'}></i>
      </div>
      <ul className={icon? 'nav-menu' : 'nav-menu active'}>
        <li>
          <Link className='nav-links' to='/'><i className=" fa-solid fa-house"></i>Home</Link>
        </li>
        <li>
          <Link className='nav-links' to='/about'><i className=" fa-solid fa-circle-info"></i>About</Link>
        </li>
        <li>
          <Link className='nav-links' to='/service'><i className=" fa-solid fa-briefcase"></i>Service</Link>
        </li>
        <li>
          <Link className='nav-links' to='/contact'><i className=" fa-solid fa-address-book"></i>Contact</Link>
        </li>
        <li>
          <Link className='nav-links-mobile' to='/signup'>SignUp</Link>
        </li>
        {/* <button>SignUp</button> */}
      </ul>
     </nav>
  )
}

export default Navbar