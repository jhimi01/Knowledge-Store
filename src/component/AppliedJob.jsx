import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import { getjobdetails } from '../utilities/fakedb';
import ReviewJob from './ReviewJob';

const AppliedJob = () => {
    // // load data
    const data = useLoaderData()
    console.log(data)
   
    // get fob details form localstorage 
    const appliedjobs = getjobdetails(data)
    console.log(appliedjobs)

    return (
        <div className='pt-4 px-7'>
        <Navbar></Navbar>
            <h2>Job Applied</h2>
            {
              
                localStorage.getItem('applied-jobs')?appliedjobs.map(job => <ReviewJob job={job} key={job.id}></ReviewJob>):<h2>You didn't applied any job</h2>
            }
        </div>
    );
};

export default AppliedJob;