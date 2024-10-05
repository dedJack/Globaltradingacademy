import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footers bg-dark ">
                <div className='content-1'>
                    {/* <ul className="social-menu">
                        <li className="footer-menu-items">
                            <Link to="https://www.instagram.com/mr_shubham_choudhary/" target='blank' className="menu-items text-white">instagram</Link>
                        </li>
                        <li className="footer-menu-items">
                            <Link to="/" className="menu-items text-white">twitter</Link>
                        </li>
                    </ul> */}
                </div>
                <div className="content-2">
                        <p className='copyRight'>Copyright© 2024 Global Trading Academy. All Rights Reserved</p>
                </div>
                <div className="content-3">
                    <ul className="footer-menu">
                        <li className="footer-menu-items">
                            <Link to="/Disclaimer" className="menu-items text-white">Disclaimer</Link>
                        </li>
                        <li className="footer-menu-items">
                            <Link to="/PrivacyPolicy" className="menu-items text-white">Privacy policy</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer