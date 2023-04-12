import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { NavLink, useLoaderData } from 'react-router-dom';
import { getjobdetails } from '../utilities/fakedb';
import ReviewJob from './ReviewJob';

const AppliedJob = () => {
    // // load data
    const data = useLoaderData()
  
    // get fob details form localstorage 
    const appliedjobs = getjobdetails(data)

    const [remote, setRemote] = useState(appliedjobs);
    
    const Remotehandler = (Remote) =>{
      const filteremote = appliedjobs.filter(item => item.remote_partTIme === Remote)
      setRemote(filteremote)
    }

    const Outsiehandler =(Outsie)=>{
      const filteremote = appliedjobs.filter(item => item.remote_partTIme === Outsie)
      setRemote(filteremote)
    }


    return (
        <div className='pt-4 px-7 relative'>
        <Navbar></Navbar>
        <div className='absolute right-20'>
        <div className="dropdown dropdown-bottom dropdown-end">


        {/* dropdown dropdown-end */}
        <div className="dropdown dropdown-end my-4 ">
 <div className='flex items-center flex-row bg-gray-200 py-3 px-4 m-1 rounded'>
 <label tabIndex={0} className=" text-gray-600 font-bold cursor-pointer rounded ">filter
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
  </label>
 </div>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded w-52">
  <button className='hover:bg-slate-300 rounded text-gray-700 font-semibold' onClick={()=>Remotehandler('Remote')}>Remote</button>
  <button className='hover:bg-slate-300 rounded text-gray-700 font-semibold' onClick={()=>Outsiehandler('Outsie')}>Outsie</button>
  <button className='hover:bg-slate-300 rounded text-gray-700 font-semibold' onClick={()=>setRemote(appliedjobs)}>All</button>
  </ul>
</div>
</div>
</div>
          <div className='mt-28'>
          {
              
              localStorage.getItem('applied-jobs')?remote.map(job => <ReviewJob job={job} key={job.id}></ReviewJob>):<h2>You didn't applied any job</h2>
          }
          </div>
        </div>
    );
};

export default AppliedJob;