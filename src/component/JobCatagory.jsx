import React, { useEffect, useState } from 'react';

const JobCatagory = () => {

    const [catagory, setCatagory] = useState([]);

    useEffect(()=>{
        fetch('jobcatagory.json')
        .then(response => response.json())
        .then(data => setCatagory(data))
    },[])

    console.log(catagory)

    return (
        <div className='pt-12 my-7 mx-12'>
            <h2 className='text-4xl font-bold text-gray-900'>Job Category List</h2>
            <p className='text-gray-600 my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-8'>
          {
                catagory.map(catagory => <div className=' bg-cyan-100 rounded py-5 px-3' key={catagory.id}>
                <img className='mx-auto' src={catagory.icon}/>
                <h4 className='text-xl font-bold text-gray-800'>{catagory.name}</h4>
                <p className='text-gray-600'>{catagory.Available}</p>
                </div>)
            }
          </div>
        </div>
    );
};

export default JobCatagory;