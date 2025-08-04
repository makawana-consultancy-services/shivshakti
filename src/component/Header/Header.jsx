import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            {/* navbar start  */}
            <nav className='navbar'>
                <div className="row">
                    <div className="animation">
                        <div className="scrolling-text-left">
                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="../../img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="../../img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="../../img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="../../img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="../../img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="../../img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="../../img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="../../img/pure_nav.png" alt="" />
                                </div>
                                <h4>100% Pure</h4>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original_nav.png" alt="" />
                                </div>
                                <h4>100% Original</h4>
                                <div className="logo">
                                    <img src="../../img/natural_nav.png" alt="" />
                                </div>
                                <h4>100% Natural</h4>
                                <div className="logo">
                                    <img src="../../img/pure_nav.png" alt="" />
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

                            <div className="menu">
                                <ul className='flex'>
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
                    </div>
                </div>
            </header>
            {/* header end */}

        </>
    )
}

export default Header