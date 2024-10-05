import React, { useState, useEffect } from 'react'
import "./Enroll.css"
import { NavLink } from 'react-router-dom'

const Enroll = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const [information, setInformation] = useState("");

    const handleInfo = async () => {
        try {
            // console.log("hii")
            const response = await fetch(`${api_url}/api/form/information`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            // console.log(data.infoMsg[0].message);
            if(data.infoMsg.length === 0){
                console.log("No message to display..")
            }else{
                setInformation(data.infoMsg[data.infoMsg.length-1].message);
            }
        } catch (error) {
            console.log("No msg to display");
        }
    }

    useEffect(()=>{
        handleInfo()
        // eslint-disable-next-line
    },[]);

    return (
        <div>
            <div className="enroll">
                <div className="enroll-content">
                    <NavLink to="/enroll"><button className="btn btn-primary">Enroll</button></NavLink>
                    <p>Register for free 1-1 Appointment</p>
                </div>
                <div className="scrolling-text">
                    <span>{information}</span>
                </div>
            </div>
        </div>
    )
}

export default Enroll