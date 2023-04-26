import React from 'react';
import Image9 from '../public/images/image9.jpg';
import Image12 from '../public/images/image12.jpg';
import Image14 from '../public/images/image14.jpg';
import Image15 from '../public/images/image15.jpg';
import Card from './Card';

const Live = () => {
  return (
    <div className="mt-6">
        <h2 className="text-4xl font-medium">Live Anywhere</h2>
        <div className="mt-10 pl-3 flex gap-x-3 overflow-scroll scrollbar-hide">
            <Card title="Outdoor getaways" url={Image15} />
            <Card title="Unique stays" url={Image12} />
            <Card title="Entire homes" url={Image14} />
            <Card title="Pet allowed" url={Image9} />
        </div>
    </div>
  )
}

export default Live;