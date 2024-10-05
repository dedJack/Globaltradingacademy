import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify';
import noteContext from '../../context/noteContext';

const EnrollForm = () => {

    const api_url = process.env.REACT_APP_FRONTEND_URL;
    const context = useContext(noteContext);
    const { user } = context;

    const [userData, setUserData] = useState(true);
    const [enroll, setEnroll] = useState({
        name: "",
        email: "",
        phone: "",
        enquiry: ""
    });

    if (userData && user) {
        setEnroll({
            name: user.name,
            email: user.email,
            phone: user.phone,
            enquiry: ""
        })
        setUserData(false);
    }

    const onChange = (e) => {
        const { name, value } = e.target;

        setEnroll({
            ...enroll,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, enquiry } = enroll;

        if (name === "") {
            toast.error("Enter your name.");
        } else if (email === "") {
            toast.error("Enter your email.")
        } else if (!email.includes("@")) {
            toast.error("Enter valid email.")
        } else if (phone === "") {
            toast.error("Provide phone no.")
        } else if (enquiry === "") {
            toast.error("Enter your query.")
        } else {
            try {
                const response = await fetch(`${api_url}/api/form/enquiry`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }, body: JSON.stringify(enroll)
                });

                // eslint-disable-next-line
                const data = await response.json();
                // console.log("Enquiry form:", data);
                if (response.ok) {
                    setEnroll({
                        name: "",
                        email: "",
                        phone: "",
                        enquiry: ""
                    });
                }
            } catch (error) {
                console.log("Enquiry server error: ", error);
            }
        }
    }
    return (
        <div className='enrollContainer'>
            <main className='bothContainer '>
                <picture className='image-controller1'>
                    <img src={assets.enrollmentForm} alt="Submit the details" height={"600px"} width={"100%"} />
                </picture>
                <section className='mainForm'>
                    <h1 className='mb-3 text-white'>You Are Just a Step Away!</h1>
                    <div className="enrollForm " style={{ width: "100%" }}>
                        <form className="myForm my-3" onSubmit={handleSubmit}>
                            <div className="name mb-3">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
                                    autoComplete='off'
                                    value={enroll.name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="email mb-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    autoComplete='off'
                                    value={enroll.email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="phone mb-3">
                                <input
                                    type="number"
                                    placeholder="Phone"
                                    name="phone"
                                    id="phone"
                                    autoComplete='off'
                                    value={enroll.phone}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="enquiry mb-1">
                                <input
                                    type="text"
                                    placeholder="Enquiry"
                                    name="enquiry"
                                    id="enquiry"
                                    autoComplete='off'
                                    value={enroll.enquiry}
                                    onChange={onChange}
                                />
                            </div>

                            <div className="send mb-3 ">
                                <button className="text-center" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default EnrollForm