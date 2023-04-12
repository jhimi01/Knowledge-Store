import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import { getjobdetails } from '../utilities/fakedb';
import ReviewJob from './ReviewJob';

const AppliedJob = () => {
    // // load data
    const data = useLoaderData()
    // console.log(data)
   
    // get fob details form localstorage 
    const appliedjobs = getjobdetails(data)
    console.log(appliedjobs)

    const [remote, setRemote] = useState({});
    useEffect(()=>{
      const filteremote = appliedjobs.filter(item => item.remote_partTIme === 'Remote')
      setRemote(filteremote)
    },[])

    console.log(remote)


    // filter value
    const filtervalueremote = (filteremote)=>{
          
    }


   

    return (
        <div className='pt-4 px-7 relative'>
        <Navbar></Navbar>
        <div className='absolute right-20'>
        <div className="dropdown dropdown-bottom dropdown-end">


  <label tabIndex={0} className="btn m-1">Filter</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
  {/* <button onClick={()=>handlesortremote()}>remote</button>
  <button onClick={()=>handlesortOutside()}>Outside</button> */}
    <li onClick={()=>filtervalueremote()}><a>Remote</a></li>
    <li><a>Outside</a></li>
  </ul>
</div>
</div>
          <div className='mt-20'>
          {
              
              localStorage.getItem('applied-jobs')?appliedjobs.map(job => <ReviewJob filtervalueremote={filtervalueremote} job={job} key={job.id}></ReviewJob>):<h2>You didn't applied any job</h2>
          }
          </div>
        </div>
    );
};

export default AppliedJob;