import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const AdminContact = () => {

  const api_url = process.env.REACT_APP_FRONTEND_URL;
  const [contact, setContact] = useState([]);

    //To get all the contacts from the database and the code is in backend/routes/contact.js;
    const getAllContact = async () => {
        try {
            let token = localStorage.getItem("userDataToken");
            const resposne = await fetch(`${api_url}/api/admin/getContact`, {
                method: "GET",
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                },
            });
            if (resposne.ok) {
                const data = await resposne.json();
                // console.log(data);
                setContact(data);
            }
        } catch (error) {
            console.log("Error fetching enquiry");
        }
    }

    useEffect(() => {
        getAllContact();
        // eslint-disable-next-line
    }, [])

    const deleteContact = async (id) => {
        try {
            console.log("delete");
            let token = localStorage.getItem("userDataToken");
            const response = await fetch(`${api_url}/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                // const data = response.json();
                // console.log(data);
                getAllContact();
                toast.success("Contacts deleted successfully");
            } else {
                toast.error("Contacts not deleted");
            }
        } catch (error) {
            console.log(error, "Not deleted");
        }
    }

    return (
        <>
            <section className='tablesInfo '>
                <div className='adminTitle text-center'>
                    <h2>Contact Details</h2>
                </div>
                <div className=" users-info ">
                    <table className='table-content'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contact.map((contact, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td> <button className="admin-btn " onClick={() => { deleteContact(contact._id) }} >Delete</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default AdminContact