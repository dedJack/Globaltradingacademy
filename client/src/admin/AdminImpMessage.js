import React, { useState } from 'react'

const AdminImpMessage = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const [msg, setMsg] = useState({ message:''})
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { message } = msg;
        try {
            const token = localStorage.getItem("userDataToken")
            const response = await fetch(`${api_url}/api/admin/postInfo`, {
                method: "POST",
                headers: {
                    "auth-token":token,
                    "Content-Type": "application/json",
                }, body: JSON.stringify({ message })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMsg({message:""});
            }
        } catch (error) {
            console.log("Error saving message", error);
        }
    }

    const onChange = (e) => {
        setMsg({
            ...msg, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <section className='postTable container'>
                <div className='adminTitle text-center'>
                    <h2>Messages</h2>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4" >
                            <label htmlFor="message" className="form-label">Enter Your message:</label>
                            <input type="text" className="form-control" placeholder='Enter your message' onChange={onChange} value={msg.message} id="message" name="message" />
                        </div>
                        <button className='admin-btn' type='submit'> Submit </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AdminImpMessage