import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <div className='header-section'>
            <div className="logo">
                <Link to='/'>Book Shop</Link>
            </div>
            <div className="navbar-area">
                <ul className={click ? 'menu-list active' : 'menu-list'}>
                    <li className='nav-item'><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
                    <li className='nav-item'><NavLink to='/books'>Books</NavLink></li>
                    <li className='nav-item'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
                <div onClick={handleClick} className="nav-icon">
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </div>
    );
};

export default Header;