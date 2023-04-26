import React from 'react';
import Image from 'next/image';

const Sticker = ({ title, drive, url }) => {
  return (
    <div className="flex items-center space-x-4 cursor-pointer 
    hover:bg-gray-200 hover:scale-105 transition duration-150
     ease-out rounded-lg">
        <div className="w-[62px]">
            <Image src={url} alt={title} objectFit="contain"
             className="rounded-lg" />
        </div>
        <div>
            <p className="font-normal">{title}</p>
            <p className="text-gray-500">{drive}</p>
        </div>
    </div>
  )
}

export default Sticker;