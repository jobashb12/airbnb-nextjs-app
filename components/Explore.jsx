import React from 'react';
import Sticker from './Sticker';
import Image from '../public/images/image.jpg';
import Image2 from '../public/images/image2.jpg';
import Image3 from '../public/images/image3.jpg';
import Image4 from '../public/images/image4.jpg';
import Image5 from '../public/images/image5.jpg';
import Image6 from '../public/images/image6.jpg';
import Image7 from '../public/images/image7.jpg';
import Image11 from '../public/images/image11.jpg';

const Explore = () => {
  return (
    <div className="mt-6 mb-10">
        <h2 className="text-4xl font-medium">Explore Nearby</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mt-10 px-3 gap-x-4 gap-y-7">
            <Sticker title="London" drive="45-minute drive" 
            url={Image7} />
            <Sticker title="Manchester" drive="4.5-hour drive" 
            url={Image6} />
            <Sticker title="Liverpool" drive="4.5-hour drive" 
            url={Image2} />
            <Sticker title="York" drive="4-hour drive" 
            url={Image3} />
            <Sticker title="Cardiff" drive="45-minute drive" 
            url={Image4} />
            <Sticker title="Birkenhead" drive="4.5-hour drive" 
            url={Image} />
            <Sticker title="Newquay" drive="6-hour drive" 
            url={Image5} />
            <Sticker title="Hove" drive="2-hour drive" 
            url={Image11} />
        </div>
    </div>
  )
}

export default Explore;