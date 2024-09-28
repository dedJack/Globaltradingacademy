import React, { useContext, useState } from 'react'
import "./Login.css"
import { useNavigate, NavLink } from 'react-router-dom'
import { assets } from "../../assets/assets"
import { toast } from 'react-toastify'
import noteContext from '../../context/noteContext'

const Login = () => {

    const navigate = useNavigate();

    //Using useContext.
    const context = useContext(noteContext);
    const { serverTokenLS } = context;

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = user;

        if (name === '') {
            toast.error('Enter Your name');
        } else if (email === '') {
            toast.error('Enter a valid Email');
        } else if (!email.includes("@")) {
            toast.error('Enter a valid Email');
        } else if (password === '') {
            toast.error('Enter your password');
        } else if (password.length < 6) {
            toast.error('Password should be atleast 6 letters');
        } else {
            try {
                const response = await fetch("http://192.168.1.10:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(user)
                });
                if (response.ok) {
                    const data = await response.json();
                    // console.log(data);
                    //saving the token in localStorage.
                    serverTokenLS(data.token);
                    toast.success("User logged In.")
                    setUser({
                        email: "",
                        password: ""
                    })
                    navigate("/")
                } else {
                    toast.error("Invalid credentials");
                }
            } catch (error) {
                console.log("Login error ", error);
            }
        }
    }
    return (
        <div className="Login">
            <section>
                <main >
                    <div className="signForm container">
                        <div className="image-controller-login">
                            {window.innerWidth > 1000 ?

                                <img src={assets.signup_img} height={'600px'} width={"100%"} alt="Do SignUp tp move Ahead" />
                                :
                                <img src={assets.signup_img} height={'300px'} width={"100%"} alt="Do SignUp tp move Ahead" />
                            }
                        </div>
                        <div className='myInfo'>
                            <div className="main-title">
                                <h1>Login</h1>
                            </div>
                            <form className='myForm my-3' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder='Enter your email' id="email" name="email" value={user.email} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='password' name="password" id="password" value={user.password} onChange={onChange} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="signupBtn btn btn-primary m-2" > Submit</button>
                                </div>
                            </form>
                            <div className="form-text text-white text-center">Don't have an account. <NavLink to='/SignUp'>Sign up</NavLink></div>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Login