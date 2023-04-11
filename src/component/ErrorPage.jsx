import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='flex items-center justify-center flex-col'>
        <h1 className='text-5xl'>{error.status}</h1>
            <h3 className='text-3xl mb-5'>{error.error.message}</h3>
            <Link className="border-0 bg-gradient-to-r mt-48 from-cyan-500 to-blue-500 py-3 px-4 rounded text-white font-bold" to="/">Go to home page</Link>
        </div>
    );
};

export default ErrorPage;