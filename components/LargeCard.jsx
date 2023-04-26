import React from 'react';
import Image from 'next/image';
import Image8 from '../public/images/image8.jpg';

const LargeCard = () => {
  return (
    <div className="relative mt-12">
        <div className="h-96 min-w-[300px] relative">
            <Image src={Image8} alt="Outdoors" layout="fill" objectFit="cover"
            className="rounded-2xl" />
        </div>
        <div className="absolute top-2 mx-12 mt-14 w-[300px]">
            <h2 className="text-4xl font-normal">The Greatest Outdoors</h2>
            <p className="my-3">Wishlists curated by Airbnb.</p>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg 
            text-sm mt-2">Get Inspired</button>
        </div>
    </div>
  )
}

export default LargeCard;