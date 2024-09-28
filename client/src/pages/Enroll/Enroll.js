import React from 'react'
import "./Enroll.css"
import { NavLink } from 'react-router-dom'

const Enroll = () => {
    return (
        <div>
            <div className="enroll">
                <div className="enroll-content">
                    <NavLink to="/enroll"><button className="btn btn-primary">Enroll</button></NavLink>
                    <p>Register for 1-1 session</p>
                </div>
                <div className="scrolling-text">
                    <span>This is a modern scrolling text example using CSS animations!</span>
                </div>
            </div>
        </div>
    )
}

export default Enroll