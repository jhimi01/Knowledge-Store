import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
     <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li className='text-xl'>
            <NavLink title='statistic' to='statistic'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistic</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='job' to='job'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Applie Jobs</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='blog' to='blog'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
        </li>
      </ul>
    </div>
    <Link to='/' className=" normal-case text-3xl">Knowledge Store</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='text-xl'>
            <NavLink title='statistic' to='statistic'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistic</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='job' to='job'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Applie Jobs</NavLink>
        </li>
        <li className='text-xl'>
            <NavLink title='blog' to='blog'  className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end ">
    <button className="border-0 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-4 rounded text-white font-bold">Get started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;