import React from 'react';
import { Link } from 'react-router-dom';

const ReviewJob = ({job}) => {
    const {Caompany_name,conpany_logo, Job_title,id, location, remote_partTIme, salary} = job;
    // console.log(job.Caompany_name)
    return (
        <div>
        <img src={conpany_logo} alt="" />
            <h2>{job.Caompany_name}</h2>
            <Link to={`/view/${id}`}>
           <button className="border-0 bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-4 rounded text-white font-bold mt-4">View Details</button>
           </Link>
        </div>
    );
};

export default ReviewJob;