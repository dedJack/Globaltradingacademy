import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import noteContext from '../../context/noteContext';
import "./QuickLinks.css"
import { toast } from 'react-toastify';


const QuickLinks = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;

    const context = useContext(noteContext);
    const { user } = context

    // const params = useParams();
    const [links, setLinks] = useState([]);

    const getAllLinks = async () => {
        try {
            const response = await fetch(`${api_url}/api/form/getAllLinks`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setLinks(data);
            }
        } catch (error) {
            console.log("Error fetching links", error);
        }
    }

    //Function to delete QuickLinks
    const deleteLinks = async(id)=>{
        try {
            let token = localStorage.getItem("userDataToken")
            const response = await fetch(
                `${api_url}/api/form/getAllLinks/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "auth-token":token,
                    "Content-Type": "application/json"
                }});

                const data = await response.json();
                console.log(data);
                if(response.ok){
                    getAllLinks();
                    toast.success("links deleted successfully.");
                }else{
                    const error = await response.json();
                    console.error("Error deleting link:", error.error);
                }            
            } catch (error) {
                console.log("Error deleting link.",error);
                toast.error("Not deleted.")
        }
    }

    useEffect(() => {
        getAllLinks();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="dark-background">
                <div className='container platform'>
                    <table>
                        <thead>
                            <tr>
                                <th>Important Links</th>
                                <th>Links</th>
                                {user.isAdmin ? <th>delete</th> : ""}
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.linkName}</td>
                                        <td><Link to={`${element.link}`} target='_blank' className='links'><button className="admin-btn " >Click</button></Link></td>
                                        {user.isAdmin ? <td className='links'> <button className="admin-btn " onClick={()=>{deleteLinks(element._id)}}>Delete</button>  </td> : ""}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default QuickLinks