import React, { useState, useContext } from 'react'
import {  NavLink, Outlet, useLocation } from 'react-router-dom'
import "./admin.css"


import noteContext from '../context/noteContext';

const AdminLayout = () => {
    const [showInformation, setShowInformation] = useState(true);

    const handleListItemClick = () => {
        setShowInformation(false);
    };

    //To specify the location where the information is shown
    const location = useLocation();

    const context = useContext(noteContext);
    const { user, isLoading } = context;

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // console.log("User data : ", user)
    // if (!user.isAdmin) {
    //     return <Navigate to='*' />
    // }


    return (
        <>
            <div className='layout'>
                <aside className='sideBar'>
                    <header className='panel'>
                        <h2 className='title '>ADMIN PANEL</h2>
                    </header>
                    <ul className="menu-items">
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/users">
                                Users
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/review">
                                Reviews
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/contacts">
                                Contacts
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/enquiry">
                                Enquiry
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/impmessage">
                                Message
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/admin/implinks">
                                Quick links
                            </NavLink>
                        </li>
                        <li onClick={handleListItemClick}>
                            <NavLink className="items" to="/">
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </aside>
                <div className={`information ${location.pathname === "/admin" ? "" :"d-none"}`}>
                    Welcome to the Admin Panel.. <br /> We Offer You collections Of FOREX.
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default AdminLayout
