import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>

            {/* navbar start  */}
            <nav className='navbar'>
                <div className="container">
                    <div className="row">
                        <div className="main-box flex">
                            <div className="box">
                                <p>shivshakti oil mill</p>
                            </div>
                            <div className="box">
                                <p>shivshakti oil mill</p>
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
                                        <NavLink to={'/nutrition'}>nutrition facts</NavLink>
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