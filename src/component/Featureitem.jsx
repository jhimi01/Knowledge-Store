import React from 'react';
import locationlogo from '../assets/Icons/Location Icon.png'
import { Link } from 'react-router-dom';
// import locationlogo from '../src/assets/Icons/Frame-4.png'

const Featureitem = ({featureitem}) => {
    const {Job_title,conpany_logo, id, remote_partTIme,location, fulltime_or_partTime,salary,Caompany_name } = featureitem;
    return (
        <div className='border rounded px-12 py-8'>
            <img className='h-9' src={conpany_logo} alt="" />
            <h4 className='text-2xl font-bold text-gray-900 my-2'>{Job_title}</h4>
            <p className='text-gray-600'>{Caompany_name}</p>
            <div className='flex gap-2'>
                <span className='py-2 px-4 my-2 bg-cyan-100 text-cyan-700'>Remote</span>
                <span className='py-2 px-4 my-2 bg-cyan-100 text-cyan-700'>Full Time</span>
            </div>
           <div className='text-gray-600 flex gap-1'>
           <img src={locationlogo}/>
           <p>{location}</p>
           <p className='ml-4'>Salary:{salary}</p>
           </div>
           <Link to={`/view/${id}`}>
           <button className="border-0 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 rounded text-white font-bold mt-4">View Details</button>
           </Link>
        </div>
    );
};

export default Featureitem;