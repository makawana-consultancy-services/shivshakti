import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* footer start  */}
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="top-footer">
                            <div className="main-box flex">
                                <div className="box">
                                    <div className="content">
                                        <div className="logo">
                                            <NavLink to={'/'}>
                                                <img src="../../img/shivshakti.png" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="social">
                                            <h4>Follow us on:</h4>

                                            <ul className='flex'>
                                                <li>
                                                    <a href="">
                                                        <img src="../../img/youtube.png" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <img src="../../img/facebook.png" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <img src="../../img/instagram.png" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <img src="../../img/linkedin.png" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <img src="../../img/twitter.png" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h4>Factory Outlets</h4>

                                        <ul>
                                            <li>
                                                <a href="">palitana - 8347674685</a>
                                            </li>
                                            <li>
                                                <a href="">surat - 8347674685</a>
                                            </li>
                                            <li>
                                                <p></p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h4>navigation</h4>

                                        <ul>
                                            <li>
                                                <NavLink to={'/'}>home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/about'}>about us</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/products'}>products</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/process'}>process</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/nutrients'}>nutrients</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'/contact'}>contact us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <h4>contact us</h4>

                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <img src="../../img/location.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <span>mill address</span>
                                                    <a href="">
                                                        plot no :- 16, GIDC palitana, bhavnagar, gujarat, india - 364270
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <img src="../../img/clock.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <span>office timing</span>
                                                    <a href="">
                                                        8:00 AM – 6:00 PM | Sunday: Half Day
                                                    </a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <img src="../../img/phone.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <span>Contact</span>
                                                    <a href="">+91 8347674685</a>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <img src="../../img/mail.png" alt="" />
                                                </div>
                                                <div className="details">
                                                    <span>email</span>
                                                    <a href="">info@shivshaktioilmill.com</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}

            {/* sub-footer start  */}

            <div className="sub-footer">
                <div className="container">
                    <div className="row">
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <p>© Copyrights 2025 shivshakti oil mill All rights reserved. </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <p>Developed By <a href="https://makawanacs.com/" target='_blank'>MAKAWANA CONSULTANCY SERVICES</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sub-footer end  */}
        </>
    )
}

export default Footer