import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { assets } from '../../assets/assets';
import noteContext from '../../context/noteContext';

const Navbar = () => {

    const context = useContext(noteContext);
    const { isLoggedIn } = context;

    const [menuOpen, setmenuOpen] = useState(false)
    const toggleMenu = () => {
        setmenuOpen(!menuOpen);
    }

    const toggleLinks = ()=>{
        setmenuOpen(false);
    }
    return (
        <div className='navbar'>
            <div className="brand">
                <NavLink to={"/"}><img src={assets.logo} alt="logo" /></NavLink>
                
                <li><NavLink to={"/"}>Global trading academy</NavLink></li>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* This is the hamburger icon, you can replace with an image if needed */}
            </div>

            <div className={`nav-menu ${menuOpen ? "open" : ""} `}>
                <ul className='nav-items'>
                    <li><NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleLinks} >Home</NavLink></li>
                    <li><NavLink to={"/benefits"} className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleLinks}>Benefits</NavLink></li>
                    <li><NavLink to={"https://capitalxtend.com/calculators"} target="_blank" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleLinks}>Forex calculator</NavLink> </li>
                    <li><NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleLinks}>About</NavLink></li>
                    <li><NavLink to={"/contact"} className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleLinks}>Contact us</NavLink></li>
                    {isLoggedIn ? (
                        <li className="navbar-right"><NavLink to="/logout">Logout</NavLink></li>
                    ) : (
                        <li className="navbar-right"><NavLink to="/signup">Sign up</NavLink></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar