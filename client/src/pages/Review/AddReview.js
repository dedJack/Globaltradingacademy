import React, { useContext } from 'react'
import "./AddReview.css"
import "./Review.css"
import noteContext from '../../context/noteContext'

const AddReview = () => {

    const context = useContext(noteContext);
    const { user } = context;

    // const [reviewForm, setReviewForm] = useState({
    //     name: "",
    //     message: ""
    // })

    // console.log(user)

    // const onChange = (e) => {
    //     const { name, value } = e.target;
    //     setReviewForm({
    //         ...reviewForm,
    //         [name]:value
    //     })
    // }

    const reviews = [
        { a: "1" },
        { a: "2" },
        { a: "3" },
        { a: "4" },
        { a: "5" },
        { a: "6" }
    ]
    return (
        <>
            <section className="review-section">
                <main>
                    <h2 className='text-center text-decoration-underline' >Student Reviews</h2>
                    <div className='add-review'>
                        <section className='container review-content ' >
                            <br />
                            <div className=' reviewForm'>
                                <form id='review-table' >
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name :</label>
                                        <input type="text" disabled className="form-control" name="text" id="name" value={user?.name || ""} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description :</label>
                                        <textarea className="form-control" name="description" id="description" rows="5" col="20" aria-label="With textarea" ></textarea>
                                    </div>
                                    <button type="submit" className="reviewBtn btn btn-primary" >Submit</button>
                                </form>
                            </div>
                        </section>
                    </div>
                    <div className='review'>
                        <div className="review-container row row-cols-3 my-2 mx-2">
                            {reviews.map((element, index) => {
                                return (
                                    <div className="reviewCard card" key={index}>
                                        <div className="card-body">
                                            <h5 className="card-title">{element.a}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">12-12-2023</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, aperiam!</p>
                                        </div>
                                    </div>
                                )
                            }).slice(0, 3)
                            }
                            {reviews.length >= 4 &&
                                <div className="reviewCard card" style={{ justifyContent: "center" }}>
                                    <div className="card-body">
                                        <h3 className='text-center'>See more</h3>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default AddReview