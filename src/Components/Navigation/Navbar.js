import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='navbar'>
            <h1 className='logo'>Symphony</h1>
            <div className='toggler' onClick={() => setOpen(!open)}>
                {open ? <XIcon></XIcon> : <MenuIcon> </MenuIcon>}
            </div>
            <div className={`${open ? 'nav-links-toggled' : 'nav-links'}`}>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/'}>Home</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/reviews'}>Reviews</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/dashboard'}>Dashboard</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/blogs'}>Blogs</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} to={'/about'}>About</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;