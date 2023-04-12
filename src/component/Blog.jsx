import React from 'react';
import Navbar from './Navbar';

const Blog = () => {
    return (
        <div className='pt-4 px-7'>
        <Navbar></Navbar>
            <div className='text-left mt-10'>
                <div><h2 className='text-xl font-bold text-gray-900'>1.when to use context api?</h2>
            <p>If we need some data to be accessible by many components at different nesting levels</p></div>
                <div><h2 className='text-xl font-bold text-gray-900'>2. What is custom hook?</h2>
            <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications.</p></div>
                <div><h2 className='text-xl font-bold text-gray-900'>3. What is useRef?</h2>
            <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference</p></div>
                <div><h2 className='text-xl font-bold text-gray-900'>4. What is usememo?</h2>
            <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p></div>
            </div>
        </div>
    );
};

export default Blog;