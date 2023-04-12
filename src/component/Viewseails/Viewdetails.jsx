import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
// import {detailsBackground} from '/src/assets/All Images/Vector-1.png'
import detailsBackground from '../../assets/All Images/Vector-1.png'
import dolar from '../../assets/Icons/Frame.png'
import title from '../../assets/Icons/Frame-1.png'
import phone from '../../assets/Icons/Frame-2.png'
import email from '../../assets/Icons/Frame-3.png'
import locationn from '../../assets/Icons/Frame-4.png'
import './Viewdeails.css'
import Footer from '../Footer';
import { addToDb } from '../../utilities/fakedb';


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

   const{Job_Responsibility, job_description, education, contact_information, location, salary, Experiences, Job_title}= data;

   const handleApplyjob = () => {
    addToDb(id)
   }

    return (
        <>
            <div className='header-bg' style={{backgroundImage: `url("../../assets/All Images/Vector-1.png")`, backgroundRepeat:'no-repeat', objectFit:'cover'}}>
        <Navbar></Navbar>
        <h2 className='text-5xl mt-12 text-cyan-700 font-semibold'>Job Details</h2>
        </div>
        <div className='md:flex gap-2 md:gap-7 text-left px-8'>
           <div className='flex-1'> 
           <h2 className='text-xl font-bold mb-2'>job description: <span className='text-lg text-gray-700 font-normal'>{job_description}</span></h2>
            <h2 className='text-xl font-bold mb-2'>job Responsibility <span className='text-lg text-gray-700 font-normal'>{Job_Responsibility}</span></h2>
            <h2 className='text-xl font-bold mb-2'>Educational Requerments: <span className='text-lg text-gray-700 font-normal'>{education}</span></h2>
            <h2 className='text-xl font-bold mb-2'>Experiences: <span className='text-lg text-gray-700 font-normal'>{Experiences}</span></h2>
            </div>

        <div className='border p-5 bg-base-200 rounded'>
            <h2 className='text-xl font-bold mb-3'>job details</h2>
            <hr />
            <div>
                <div className='flex gap-2'>
                <img src={dolar} alt="" />
                <h2 className='text-xl font-bold'>salary: <span className='text-lg text-gray-700 font-normal'>{salary}</span></h2>
                </div>
              <div  className='flex gap-2'>
              <img src={title} alt="" />
                <h2  className='text-xl font-bold'>Job Title :<span className='text-lg text-gray-700 font-normal'>{Job_title}</span></h2>
              </div>
                <h2 className='text-xl font-bold my-3 '>contact information</h2>
                <hr />
               <div  className='flex gap-2'>
               <img src={phone} alt="" />
                <h2 className='text-1xl text-gray-950 font-bold'>Phone : <span className=' text-gray-700 font-normal text-lg'> {contact_information?.phone}</span></h2>
               </div>
              <div  className='flex gap-2'>
              <img src={email} alt="" />
                <h2 className='text-1xl text-gray-950 font-bold'>Email : <span className=' text-gray-700 font-normal text-lg'> {contact_information?.email}</span></h2>
              </div>
               <div  className='flex gap-2'>
               <img src={locationn} alt="" />
                <h2 className='text-1xl text-gray-950 font-bold'>Address : <span className=' text-gray-700 font-normal text-lg'> {contact_information?.address}</span></h2>
               </div>
            </div>
        <button onClick={handleApplyjob} className="border-0 my-2 rounded w-full bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-4 text-white font-bold">Apply Job</button>
        </div>
        </div>
        <div>

        </div>
        </>
    );
};

export default Viewdetails;