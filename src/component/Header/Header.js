import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../image/header-logo.png'

const Header = () => {
    return (
        <div className='bg-header'>
            <div className='container grid grid-cols-3 mx-auto py-5'>
                <div className="max-w-xs overflow-hidden">
                    <img src={img} alt="" />
                </div>
                <div></div>
                <div className='flex justify-between items-center font-bold text-white'>
                    <NavLink activeClassName='border-b' to="/home">Home</NavLink>
                    <NavLink activeClassName='border-b' to="/services">Services</NavLink>
                    <NavLink activeClassName='border-b' to="/about">About</NavLink>
                    <NavLink activeClassName='border-b' to="/contact">Contact</NavLink>
                </div>
                
            </div>
        </div>
    );
};

export default Header;