"use client";
import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../../context/AuthContext';
import Link from 'next/link';



const Logout = () => {

    const { LogoutUser } = useContext(NoteContext);
    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    return <Link href={"/login"} />
}

export default Logout