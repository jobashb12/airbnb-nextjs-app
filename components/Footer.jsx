import React from 'react';

const Footer = () => {
  return (
    <div className="mt-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-32 md:px-24 py-12 grid 
        md:grid-cols-4 gap-y-10">
            <div>
                <h4 className="text-xs font-bold">ABOUT</h4>
                <div className="text-xs space-y-4 mt-4">
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>
                </div>
            </div>
            <div>
                <h4 className="text-xs font-bold">COMMUNITY</h4>
                <div className="text-xs space-y-4 mt-4">
                    <p>Accessibility</p>
                    <p>This is not a real site</p>
                    <p>Its a pretty awesome clone</p>
                    <p>Referrals accepted</p>
                    <p>Papafam</p>
                </div>
            </div>
            <div>
                <h4 className="text-xs font-bold">HOST</h4>
                <div className="text-xs space-y-4 mt-4">
                    <p>Papa React</p>
                    <p>Presents</p>
                    <p>Zero to Full Stack Hero</p>
                    <p>Hundreds of Students</p>
                    <p>Join Now</p>
                </div>
            </div>
            <div>
                <h4 className="text-xs font-bold">SUPPORT</h4>
                <div className="text-xs space-y-4 mt-4">
                    <p>Help Centre</p>
                    <p>Trust & Safety</p>
                    <p>Say Hi YouTube</p>
                    <p>Easter Eggs</p>
                    <p>For the Win</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;