import React from 'react';
import Header from './Header';
import JobCatagory from './JobCatagory';
import Feature from './Features';
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <div className=' md:mx-12 mx-5'>

             <Header></Header>
    <JobCatagory></JobCatagory>
    <Feature></Feature>
        </div>
    <Footer></Footer>
        </>
    );
};

export default Home;