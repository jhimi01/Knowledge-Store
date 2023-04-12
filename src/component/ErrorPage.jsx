import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div className='flex h-[100vh] items-center justify-center flex-col'>
        <h1 className='text-5xl text-amber-500'>{error.status}</h1>
            <h3 className='text-3xl text-cyan-500 mb-5'>{error.error.message}</h3>
            <Link className="border-0 bg-gradient-to-r mt-4 from-cyan-500 to-blue-500 py-3 px-4 rounded text-white font-bold" to="/">Go to home page</Link>
        </div>
    );
};

export default ErrorPage;