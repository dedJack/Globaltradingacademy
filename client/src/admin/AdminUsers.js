import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'


const AdminUsers = () => {

  const [users, setUsers] = useState([]);
  const api_url = process.env.REACT_APP_FRONTEND_URL;

  //Function to get all the users from database
  const getAllUsers = async () => {
    try {
      let token = localStorage.getItem("userDataToken");
      const data = await fetch(`${api_url}/api/admin/getAllUsers`, {
        method: "GET",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json"
        },
      });
      if (data.ok) {
        const response = await data.json();
        // console.log(response);
        setUsers(response);
      }
    } catch (error) {
      console.log("fetching user details errror");
    }
  }

  //Function to delete users from database
  const deleteUser = async (userId) => {
    let token = localStorage.getItem("userDataToken");

    try {
      const response = await fetch(`${api_url}/api/admin/users/delete/${userId}`, {
        method: "DELETE",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        getAllUsers();
        toast.success("user deketed successfully");
      } else {
        const error = await response.json();
        console.error("Error deleting user:", error.error);
        alert("Error deleting user. Please try again later.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      // Display a user-friendly error message
      toast.error("Error deleting user.");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <section className='tablesInfo container'>
        <div className='adminTitle text-center'>
          <h2>Users Details</h2>
        </div>
        <div className="container users-info ">
          <table className='table-content'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td> <button className="admin-btn"><Link className='Btn-links' to={`/admin/users/${user._id}/edit`}>Edit</Link> </button> </td>
                    <td> <button className="admin-btn" onClick={() => { deleteUser(user._id) }}>Delete</button>  </td>
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

export default AdminUsers
