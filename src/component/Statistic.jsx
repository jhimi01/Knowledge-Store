import React from 'react';
import Navbar from './Navbar';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { Link } from 'react-router-dom';

const Statistic = () => {
    const data = [
        {
          "name": "Assignment 1",
          "mark": 60,
          "total": 60,
         
        },
        {
          "name": "Assignment 2",
          "mark": 59,
          "total": 60,
       
        },
        {
          "name": "Assignment 3",
          "mark": 60,
          "total": 60,
        
        },
        {
          "name": "Assignment 4",
          "mark": 30,
          "total": 60,
        
        },
        {
          "name": "Assignment 5",
          "mark": 60,
          "total": 60,
        
        },
        {
          "name": "Assignment 6",
          "mark": 60,
          "total": 60,
         
        },
        {
          "name": "Assignment 7",
          "mark": 60,
          "total": 60,
         
        },
        {
          "name": "Assignment 8",
          "mark": 60,
          "total": 60,
         
        }
      ]
      
                                  
      
    return (
        <div className='pt-4 px-7 mb-7'>
        <Navbar></Navbar>
        <ComposedChart className='mt-12 mx-auto'  width={1000} height={500} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="mark" barSize={50} fill="#4137a0" />
        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
      </ComposedChart>
        </div>
    );
};

export default Statistic;