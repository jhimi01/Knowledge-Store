import React from 'react';
import heroImg from '../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-left mx-auto'>
           <div className='my-auto'>
            <h1 className='text-5xl mb-3 font-bold tracking-wide text-gray-950'>One Step Closer To Your <span className='text-cyan-500'> Dream Job</span></h1>
            <p className='mb-4 text-gray-600'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="border-0 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 rounded text-white font-bold">Get started</button>
           </div>
           <div>
            <img src={heroImg} alt="person" />
           </div>
        </div>
    );
};

export default Banner;