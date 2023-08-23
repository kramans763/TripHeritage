import React from 'react'
import "./Destination.css";
import DestinationData from './DestinationData';
import volcanoImg1 from "../../Assets/taal.jpg"
import volcanoImg2 from "../../Assets/taal2.jpg";
import manaliImg1 from "../../Assets/manali1.jpg"
import manaliImg2 from "../../Assets/manali2.jpg"
const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tour give you opportunity to see a lot, within a time frame</p>

        <DestinationData 
           className='first-des'
           heading="Taal Volcano,Batangus"
           text="Taal Volcano is a must-see Attraction in the Philippines. A trip to Manila is not complete without a visit to see Taal Volcano. Located about 100 km from Manila, it takes approximately 2 hours drive by car each way, depending upon the traffic conditions of course. The best way to get here is by hiring a Car (with driver) which can be arranged through local travel agents in Manila (that makes the trip even more enjoyable because it offers some very good sceneries along the way, to the Volcano too)."
           img1={volcanoImg1}
           img2={volcanoImg2}
        />
        <DestinationData 
           className='first-des-reverse'
           heading="Kullu Manali,India"
           text="Manali is regarded as a stylish place to distract you from your busy life and gives a peaceful environment. However, in Heaven on Earth, If you're looking for natural terrain also you must visit only Kullu Manali.
           Manali is positioned in the northern part of the Kullu Valley and is a hotspot for excursionists. Explore the Kullu Manali Trip to witness the wonderland of India and get amazing stint packages also. While visiting the place of spectacular beauty that will take your breath down in Manali Tour Package."
           img1={manaliImg1}
           img2={manaliImg2}
        />
    </div>
  )
}

export default Destination