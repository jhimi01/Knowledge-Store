import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className='pt-4 px-7'>
              <Navbar></Navbar>
      <Banner></Banner>
        </div>
    );
};

export default Header;