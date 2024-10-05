import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { assets } from '../../assets/assets'
import "./Login.css"
import noteContext from '../../context/noteContext'
import { toast } from 'react-toastify'

const Signup = () => {

    const navigate = useNavigate();
    const api_url = process.env.REACT_APP_FRONTEND_URL;

    //Using useContext.
    const context = useContext(noteContext);
    const { serverTokenLS } = context;

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    //handling form submission.
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, password } = user;

        if (name === '') {
            toast.error('Enter Your name');
        } else if (email === '') {
            toast.error('Enter a valid Email');
        } else if (!email.includes("@")) {
            toast.error('Enter a valid Email');
        } else if (password === '') {
        } else if (phone === '') {
            toast.error('Enter phone number');
        } else if (phone.length < 10) {
            toast.error('Enter a valid number');
        } else if (password === '') {
            toast.error('Enter your password');
        } else if (password.length < 6) {
            toast.error('Password should be atleast 6 letters');
        } else {
            try {
                console.log(api_url)
                const respone = await fetch("http://localhost:5000/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(user)
                });

                const data = await respone.json();
                // console.log(data);
                if (respone.ok) {
                    serverTokenLS(data.token);
                    setUser({
                        name: "",
                        email: "",
                        phone: "",
                        password: ""
                    })
                    toast.success("User Registered.")
                    navigate("/login");
                }else{
                    console.error(data.msg);
                }
            } catch (error) {
                console.log("Enter valid details: ", error);
            }
        }
    }

    return (
        <div className='Login'>
            <section>
                <main>
                    <div className="signForm container grid grid-two-cols">
                        <div className="image-controller-login">
                            {window.innerWidth > 1000 ?

                                <img src={assets.signup_img} height={'600px'} width={"100%"} alt="Do SignUp tp move Ahead" />
                                :
                                <img src={assets.signup_img} height={'300px'} width={"100%"} alt="Do SignUp tp move Ahead" />
                            }
                        </div>
                        <div className="myInfo">
                            <div className="main-title">
                                <h1>Registration Form</h1>
                            </div>
                            <form className='myForm my-3' onSubmit={handleSubmit} >
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Enter Your Name:</label>
                                    <input type="text" className=" form-control" placeholder='Enter your name' id="name" name="name" onChange={onChange} value={user.name} autoComplete='off' />
                                </div>
                                <div className="mb-4" >
                                    <label htmlFor="email" className="form-label">Email address:</label>
                                    <input type="email" className=" form-control" placeholder='Enter your Email' id="email" name="email" onChange={onChange} value={user.email} autoComplete='off' />
                                </div>
                                <div className="mb-4" >
                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                    <input type="number" className=" form-control" placeholder='phone No.' id="phone" name="phone" onChange={onChange} value={user.phone} autoComplete='off' />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Enter Your Password:</label>
                                    <input type="password" className=" form-control" placeholder='password' name="password" id="password" onChange={onChange} value={user.password} autoComplete='off' />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="signupBtn btn btn-primary "> Submit</button>
                                </div>
                            </form>
                            <div className="form-text m-2 text-white text-center">Already have an account. <NavLink to='/Login'>Login</NavLink></div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Signup