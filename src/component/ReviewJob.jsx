import React from 'react';
import { Link } from 'react-router-dom';
import locationlogo from '../../public/assets/Icons/Location Icon.png'

const ReviewJob = ({job}) => {
    const {Caompany_name,conpany_logo, Job_title,id, location, remote_partTIme, salary, fulltime_or_partTime} = job;
    // console.log(job.Caompany_name)


 

    return (
        <div className='border w-5/6 mx-auto'>
        <div className="card card-side bg-base-100 shadow-xl">
  <figure className='bg-base-300 px-5'><img className='w-60' src={conpany_logo} alt="Movie"/></figure>
  <div className="card-body">
   <div>
   <h2 className="card-title">{Job_title}</h2>
    <h2 className='text-xl flex items-center'>{Caompany_name}</h2>
    <div className='flex  gap-2'>
                <span className='py-2 px-4 my-2 bg-cyan-100 text-cyan-700'>{remote_partTIme}</span>
                <span className='py-2 px-4 my-2 bg-cyan-100 text-cyan-700'>{fulltime_or_partTime}</span>
            </div>
            <div className='text-gray-600 flex w-5  gap-2'>
           <img src={locationlogo}/>
           <p>{location}</p>
           <p className='ml-4'>Salary:{salary}</p>
           </div>
   </div>
  </div>
    <div className="flex items-center flex-wrap justify-end">
    <Link to={`/view/${id}`}>
           <button className="border-0 bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-4 rounded text-white font-bold mt-4">View Details</button>
           </Link>
    </div>
</div>
           
        </div>
    );
};

export default ReviewJob;