import React from 'react'
import './TripStyle.css';
import TripData from './TripData';
import ayodhyaImg from '../../Assets/ayodhya.jpg'
import indoImg from '../../Assets/indo.jpg';
import switzerImg from '../../Assets/switzer.jpg'

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover any destinations using Map</p>
        <div className='trip-card'>
          <TripData
           image={ayodhyaImg}
           heading="Trip in India"
           text="India is one of the world's most fascinating travel destinations. A billion people, an ancient and unbroken culture, a kaleidoscope of sights, sounds, smells … and one of the fastest changing societies on earth. There is nothing like your first India trip, your first visit to India."
          />
          <TripData
           image={indoImg}
           heading="Trip in Indonesia"
           text="Indonesia is famous for its tropical beaches, imposing volcanoes, as well as historical and religious sites that exude a local charm. Indonesia is an archipelago, which means that it consists of a culmination of 17,000 unique islands. They are diverse from each other, with different cultures and geographical features."
          />
          <TripData
           image={switzerImg}
           heading="Trip in Switzerland"
           text="A landlocked country of towering mountains, deep Alpine lakes, grassy valleys dotted with neat farms and small villages, and thriving cities that blend the old and the new, Switzerland is the nexus of the diverse physical and cultural geography of western Europe, renowned for both its natural beauty and its way of life."
          />
        </div>
    </div>
  )
}

export default Trip