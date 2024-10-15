import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const AdminView = () => {

  const api_url = process.env.REACT_APP_FRONTEND_URL;
  const [enquiryData, setEnquiryData] = useState({
    name:"",
    phone:"",
    email:"",
    enquiry:""
  })
  
  const params = useParams();
  const getSingleEnquiry = async()=>{
    try {
      const token = localStorage.getItem("userDataToken");
      const response = await fetch(`${api_url}/api/admin/enquiry/view/${params.id}`,{
        method:"GET",
        headers:{
          "auth-token" : token,
          "Content-Type" : "application/json"
        },
      });
      if(response.ok){
        const data = await response.json();
        console.log(data);
        setEnquiryData(data)
      }
    } catch (error) {
      console.log("Error Fetching Enquiry",error)
    }
  }
  
  useEffect(()=>{
    getSingleEnquiry();
    //eslint-disable-next-line 
  },[])

  const onChange=(e)=>{
    const {name, value} = e.target
    setEnquiryData({
      ...enquiryData,[name]:value
    })
  }

  return (
    <>
      <div className='adminTitle text-center'>
        <h2>Enquiries</h2>
      </div>
      <form className='container UpdateForm'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" name='name' onChange={onChange} value={enquiryData.name} placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Contact Number</label>
          <input type="number" className="form-control" name='contactNumber' onChange={onChange} value={enquiryData.phone} placeholder="Enter your number" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' onChange={onChange} value={enquiryData.email} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="enquiry" className="form-label">Enquiry :</label>
          <textarea className="form-control" name="enquiry" onChange={onChange} value={enquiryData.enquiry} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </>
  )
}

export default AdminView
