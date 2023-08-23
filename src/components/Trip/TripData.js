import React from 'react'
import './TripStyle.css';
const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
           <img src={props.image} alt="img" />
        </div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>

    </div>
  )
}

export default TripData