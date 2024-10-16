import React, { useState } from 'react';
import QuickLinks from '../pages/QuickLinks/QuickLinks';
import {toast} from 'react-toastify'

const ImpLinks = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;

    const [links, setLinks] = useState({
        linkName:"",
        link:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("userDataToken");
            const response = await fetch(`${api_url}/api/admin/postLink`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token
                },body: JSON.stringify(links)
            });

            const data = await response.json();
            console.log(data);
            if(response.ok){
                setLinks(links);
                toast.success("links added successfully.");
            }else{
                toast.error("Not added links");
                console.log(data.status)
            }
        } catch (error) {
            toast.error("Not added links");
            console.log("Error adding data...", error);
        }
    }

    const onChange = (e)=>{
        const {name, value} = e.target;
        setLinks({
            ...links,[name]:value
        })
    } 

    return (
        <>
            <div className="postTable">
                <div className='adminTitle text-center'>
                    <h2>Post your links</h2>
                </div>
                <div className="container">
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of the link"
                                    onChange={onChange}
                                    value={links.linkName}
                                    name="linkName"
                                />
                            </div>
                            <div className="mb-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="paste your link here"
                                    onChange={onChange}
                                    value={links.link}
                                    name="link"
                                />
                            </div>
                            <button className='admin-btn my-3' type='submit'> Submit </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="tablesInfo">
                <QuickLinks />
            </div>
        </>
    )
}

export default ImpLinks;