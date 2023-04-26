import React from 'react';
import Image from 'next/image';

const Card = ({ title, url }) => {
  return (
    <div className="transition transform hover:scale-105 duration-300 
    ease-out py-3 cursor-pointer">
        <div className="h-80 w-80">
            <Image src={url} alt={title} className="rounded-xl" />
        </div>
        <p className="text-2xl mt-3">{title}</p>
    </div>
  )
}

export default Card;