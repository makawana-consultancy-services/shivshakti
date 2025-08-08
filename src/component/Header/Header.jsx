import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    }

    const handleCloseMenu = () => {
        setIsActive(false)
    }

    return (
        <>

            {/* navbar start  */}
            <nav className='navbar'>
                <div className="row">
                    <div className="animation">
                        <div className="scrolling-text-left">
                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            {/* navbar end */}


            {/* header start  */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="main-box flex">
                            <div className="logo">
                                <NavLink to={'/'}>
                                    <img src="img/shivshakti.png" alt="" />
                                </NavLink>
                            </div>

                            <div className={`menu ${isActive ? 'active' : ''}`}>

                                <div className="logo">
                                    <NavLink to={'/'} onClick={handleCloseMenu}>
                                        <img src="img/shivshakti.png" alt="" />
                                    </NavLink>
                                </div>

                                <ul className='flex'>
                                    <li>
                                        <NavLink to={'/'} onClick={handleCloseMenu}>home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/about'} onClick={handleCloseMenu}>about us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/products'} onClick={handleCloseMenu}>products</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/process'} onClick={handleCloseMenu}>process</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/nutrients'} onClick={handleCloseMenu}>nutrients</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/contact'} onClick={handleCloseMenu}>contact us</NavLink>
                                    </li>
                                </ul>

                                <div className="social">
                                    <h4>Follow us on:</h4>

                                    <ul className='flex'>
                                        <li>
                                            <a href="">
                                                <img src="img/youtube.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="img/facebook.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="img/instagram.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="img/linkedin.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="img/twitter.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <label className='menubar'>
                                <input type="checkbox" checked={isActive} onChange={handleToggle}></input>
                                <svg viewBox="0 0 32 32">
                                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path class="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}

        </>
    )
}

export default Header