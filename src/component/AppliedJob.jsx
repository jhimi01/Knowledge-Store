import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
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
        <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1">filter</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
  <button onClick={()=>Remotehandler('Remote')}>Remote</button>
  <button onClick={()=>Outsiehandler('Outsie')}>Outsie</button>
  <button onClick={()=>setRemote(appliedjobs)}>All</button>
  </ul>
</div>
</div>
</div>
          <div className='mt-20'>
          {
              
              localStorage.getItem('applied-jobs')?remote.map(job => <ReviewJob job={job} key={job.id}></ReviewJob>):<h2>You didn't applied any job</h2>
          }
          </div>
        </div>
    );
};

export default AppliedJob;