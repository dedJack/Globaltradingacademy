import React, { useEffect, useState} from 'react'
import { toast } from 'react-toastify';

const AdminReview = () => {

  const [review, setReview] = useState([]);

  const getAllReview = async () => {
    try {
      // console.log("HIii")
      let token = localStorage.getItem("userDataToken");
      const data = await fetch("/getAllUserReviews", {
        method: "GET",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json"
        },
      });
      if(data.ok){
        const response = await data.json();
        // console.log(response);
        setReview(response)
      }
    } catch (error) {
      console.log("fetching reviews details errro");
    }
  }

  useEffect(() => {
    getAllReview();
  }, []);

  //Delete Review from the database
  const deleteReview = async(id) =>{
    try {
      console.log("review is getting deleted ")
      let token = localStorage.getItem("userDataToken")
      const response = await fetch(`/admin/delete_review/${id}`,{
        method:"DELETE",
        headers:{
          "auth-token": token,
          "Content-Type": "application/json"
        }
      })
      if( response.ok){
        // const data = await response.json();
        // console.log(data);
        getAllReview();
        toast.success("Review deleted Successfully")
      } else {
        toast.error("Review not deleted")
      }
    } catch (error) {
      console.log("Not deleted" ,error);
    }
  }
  return (
    <>
    <section className='tablesInfo container'>
      <div className='adminTitle text-center'>
        <h2>Reviews Details</h2>
      </div>
      <div className="container users-info ">
        <table className='table-content'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Reviews</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {review.map((review, index) => {
              return (
                <tr key={index}>
                  <td>{review.name}</td>
                  <td className='notes'>{review.notes}</td>
                  <td> <button className="admin-btn " onClick={() => { deleteReview(review._id) }} >Delete</button></td>
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

export default AdminReview
