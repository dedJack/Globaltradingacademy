import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import noteContext from '../../context/noteContext';



const Logout = () => {

    const context = useContext(noteContext);
    const { LogoutUser } = context;
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    return <Navigate to={"/login"} />
}

export default Logout