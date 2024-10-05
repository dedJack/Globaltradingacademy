import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"
import { toast } from 'react-toastify';
import Footer from '../../components/Footer/Footer';
import noteContext from '../../context/noteContext';

const Contacts = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const context = useContext(noteContext);
    const { user } = context;

    const [userdata, setUserData] = useState(true);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: ""
    })

    if (userdata && user) {
        setContact({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUserData(false);
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone } = contact;

        if (name === "") {
            toast.error("Enter your name.");
        } else if (email === "") {
            toast.error("Enter your email.")
        } else if (!email.includes("@")) {
            toast.error("Enter valid email.")
        } else if (phone === "") {
            toast.error("Provide phone no.")
        } else {
            try {
                const response = await fetch(`${api_url}/api/form/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(contact)
                });
                // eslint-disable-next-line
                const data = await response.json();
                if (response.ok) {
                    // console.log("contact form:", data);
                    toast.success("Contact Submitted.")
                    setContact({
                        name: "",
                        email: "",
                        phone: ""
                    });

                }
            } catch (error) {
                console.log("Contact server error: ", error);
            }
        }
    }

    return (
        <>
            <div className='contacts'>
                <main className="contact-page">
                    <h2 className="text-center text-decoration-underline" style={{ fontSize: "3rem", margin: "0px" }}>
                        Contact Us
                    </h2>
                    <div className="container">
                        <div id="contacts">
                            <div className="contactForm">
                                <form className="myForm my-3" onSubmit={handleSubmit}>
                                    <div className="name mb-1">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            id="name"
                                            autoComplete='off'
                                            value={contact.name}
                                            onChange={onChange}
                                            name="name"
                                        />
                                    </div>
                                    <div className="email mb-1">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            autoComplete='off'
                                            value={contact.email}
                                            onChange={onChange}
                                            name="email"
                                        />
                                    </div>
                                    <div className="phone mb-1">
                                        <input
                                            type="number"
                                            placeholder="Phone"
                                            name="phone"
                                            id="contactNumber"
                                            autoComplete='off'
                                            value={contact.phone}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="send mb-3">
                                        <button type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="detailFrom" >
                                <div>
                                    <b className="heading">Global Trading Academy</b> <br /><p> Forex trading and Market Research</p>
                                </div>
                                <div>
                                    <p>
                                        <Link to="https://wa.me/+919202103433?text=Hello, I need some assistance!" target='_blank' className="companyPhone" style={{ color: 'black' }}>
                                            <b>Contact: </b><span style={{ textDecoration: "underline" }}>9202103433</span>
                                        </Link>
                                    </p>
                                    <p >
                                        <Link
                                            to="mailto:Teamglobaltradingacademy@gmail.com"
                                            className="companyEmail"
                                        >
                                            <b>Email: </b><span className="fs-6">Teamglobaltradingacademy@gmail.com</span>
                                        </Link>
                                    </p>
                                </div>
                                <p>
                                    <b>Address: </b>Comming Soon in Bilaspur, Chhattisgarh.
                                </p>
                                <div>
                                    <p className="fs-3">
                                        <b>For Career Opportunities</b>
                                        <br />
                                        <span className="fs-6">Contact us!</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Contacts;
