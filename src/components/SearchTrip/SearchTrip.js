import React, { useState } from 'react'
import "./SearchTrip.css";

const SearchTrip = () => {
    const[clicked,setClicked]=useState(false);
    function handleButton(){
        setClicked(!clicked);
    }
  return (
    <div className='search-trip'>
        <h4>Choose Your Trip</h4>
        <form >
            <input type='text' placeholder='From'></input>
            <input type='text' placeholder='To'></input>
            <input type="date" placeholder='Date of Journey' />
        </form>

        <button onClick={handleButton}>Search</button>
        {clicked? <p>We will contact you with many options shortly</p> :""

        }
    </div>
  )
}

export default SearchTrip