import React from 'react'
import "./error.css"
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section className="error-page">
        <div className="container content">
            <h2 className='rainbow-text'>404</h2>
            <p>
                Oops! it seems like you're trying to access the page that doesn't exist.
                If you believe there's an issue, feel free to report it, and we'll look into it.
            </p>
            <div className="btns">
                <NavLink to="/">return home</NavLink>
                <NavLink to="/enroll">report problem</NavLink>
            </div>
        </div>
      </section>
    </>
  )
}

export default Error