import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sticky top-0 backdrop-blur-md'>
     <div className="navbar">
  <div className="navbar-start mx-auto">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li className='text-xl'>
            <NavLink title='home' to='/'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Home</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='statistic' to='/statistic'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Statistic</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='job' to='/job'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Applie Jobs</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='blog' to='/blog'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Blogg</NavLink>
        </li>
      </ul>
    </div>
    <Link to='/' className="font-bold text-gray-900 normal-case md:text-3xl text-xl">Knowledge Store</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-xl'>
            <NavLink title='home' to='/'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Home</NavLink>
        </li>
    <li className='text-xl'>
            <NavLink title='statistic' to='/statistic'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Statistic</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='job' to='/job'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Applie Jobs</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='blog' to='/blog'  className={({ isActive }) => (isActive ? 'text-cyan-600' : 'default')}>Blog</NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end ">
    <button className="border-0 bg-gradient-to-r hidden md:block from-cyan-500 to-blue-800 md:py-3 md:px-4 p-1 rounded text-white font-bold">Get started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;