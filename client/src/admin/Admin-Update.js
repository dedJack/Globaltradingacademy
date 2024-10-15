import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



const AdminUpdate = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const [data, setData] = useState({
        name: "",
        email: "", 
        phone:""
    })
    const params = useParams();
    const getSingleUser = async (id) => {
        try {
            const token = localStorage.getItem('userDataToken');
            const response = await fetch(`${api_url}/api/admin/users/${params.id}`, {
                method:"GET",
                headers: {
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                //   console.log(data);
                setData(data);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        getSingleUser()
        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

    // To Update user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let token = localStorage.getItem("userDataToken");
            const response = await fetch(`${api_url}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                }, body: JSON.stringify(data)
            })
            if(response.ok){
                const resultData = await response.json();
                // console.log(resultData);
                toast.success("User updated successfully");
            }else{
                toast.error("User not updated");
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    return (
        <>
            <section className='tablesInfo container'>
            <div className='adminTitle'>
                <h2>Users Update</h2>
            </div>
            <form className=' UpdateForm' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" onChange={onChange} value={data.name} name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" onChange={onChange} value={data.email} name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">phone:</label>
                    <input type="number" className="form-control" onChange={onChange} value={data.phone} name="phone" id="phone" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </section>
        </>
    )
}

export default AdminUpdate
