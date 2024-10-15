import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminEnquiry = () => {

  const [enquiry, setEnquiry] = useState([]);
   const api_url = process.env.REACT_APP_FRONTEND_URL;


  // TO get all enquiry from database
  const getAllEnquiry = async () => {
    try {
      // console.log("HIii")
      let token = localStorage.getItem("userDataToken");
      const data = await fetch(`${api_url}/api/admin/getAllUserEnquiry`, {
        method: "GET",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json"
        },
      });
      const response = await data.json();
      // console.log(response);
      if(data.ok){
        setEnquiry(response);
      }
    } catch (error) {
      console.log("error fetching contacts");
    }
  }

  useEffect(() => {
    getAllEnquiry();
    // eslint-disable-next-line
  }, []);

  // to delete enquiry from database
  const deleteEnquiry = async (id) => {
    try {
      console.log("delete")
      let token = localStorage.getItem("userDataToken");
      const response = await fetch(`${api_url}/api/admin/enquiry/delete/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        // const data = await response.json();
        // console.log(data);
        getAllEnquiry();
        toast.success("Enquiry deleted successfully");
      } else {
        toast.error("Enquiry not deleted")
      }
    } catch (error) {
      console.log(error, "Not deleted")
    }
  }

  return (
    <>
      <section className='tablesInfo '>
        <div className='adminTitle text-center'>
          <h2>Enquiry Details</h2>
        </div>
        <div className=" users-info ">
          <table className='table-content'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Enquiry</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {enquiry.map((enquiry, index) => {
                return (
                  <tr key={index}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.phone}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.enquiry}</td>
                    <td><button className="admin-btn" ><Link className='Btn-links' to={`/admin/enquiry/${enquiry._id}/view`}>View</Link></button> </td>
                    <td> <button className="admin-btn " onClick={() => { deleteEnquiry(enquiry._id) }} >Delete</button></td>
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

export default AdminEnquiry
