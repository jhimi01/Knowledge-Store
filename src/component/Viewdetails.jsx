import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';
// import {detailsBackground} from '/src/assets/All Images/Vector-1.png'
import detailsBackground from '../assets/All Images/Vector-1.png'

const Viewdetails = () => {

    // const [alldata, setAlldata] = useState(null)

    // console.log(params)
    const {id} = useParams()
    const details = useLoaderData()
    const [data, setData] = useState({})
   useEffect(()=>{
    const viewdata = details.find(detail => detail.id == id)
    setData(viewdata)
   },[details, id])

   const{Job_Responsibility, job_description, education, contact_information, fulltime_or_partTime, location, remote_partTIme, salary, Experiences}=data

    return (
        <>
            <div>
        <Navbar></Navbar>
        <h2 className='p-5'>Job Details</h2>
        </div>
        <div>

        </div>
        </>
    );
};

export default Viewdetails;