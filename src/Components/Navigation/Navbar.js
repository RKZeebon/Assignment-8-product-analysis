import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='logo'>Symphony</h1>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/reviews'}>Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/dashboard'}>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/blogs'}>Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/about'}>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;