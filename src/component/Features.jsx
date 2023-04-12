import React, { useEffect, useState } from 'react';
import Featureitem from './Featureitem';

const Feature = () => {

    const [show, setShow] = useState(false)

    const[feature, setFeature] = useState([])

    useEffect(()=>{
        fetch('Feature.json')
        .then(res => res.json())
        .then(data => setFeature(data))
    },[])


    return (
        <div className='my-14'>
<h1 className='text-3xl text-gray-900 font-bold'>Featured Jobs</h1>
<p className='text-gray-600 py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 md:gap-8 text-left">
         {
           feature.slice(0, show ? 8 : 4).map(featureitem => <Featureitem key={featureitem.id} featureitem={featureitem}></Featureitem>)
          }
         </div>

        {!show && ( <button onClick={()=>setShow(true)} className="border-0 bg-gradient-to-r from-cyan-500 to-blue-800 py-2 px-4 rounded text-white font-bold">See all</button>
)}
        </div>
    );
};

export default Feature;