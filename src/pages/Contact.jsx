import React from 'react'

const Contact = () => {
    return (
        <>
            {/* form section start  */}
            <section className='form-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>Contact us</h2>

                            <p>તમારો પ્રતિસાદ અમારી સેવા સુધારવામાં મદદ કરશે – તમારા અભિપ્રાયની રાહ જોઇ રહ્યા છીએ!</p>
                        </div>

                        <div className="form">
                            <form action="" className='flex'>
                                <div className="input-box">
                                    <input type="text" placeholder='your name' id='' name='username' />
                                    <img src="../../img/customer.png" alt="" />
                                </div>
                                <div className="input-box">
                                    <input type="email" id='' name='' placeholder='your email' />
                                    <img src="../../img/mail.png" alt="" />
                                </div>
                                <div className="input-box">
                                    <input type="tel" id='' name='' placeholder='contact No.' />
                                    <img src="../../img/phone.png" alt="" />
                                </div>
                                <div className="input-box">
                                    <input type="text" id='' name='' placeholder='Subject' />
                                    <img src="../../img/subject.png" alt="" />
                                </div>
                                <div className="message-area">
                                    <textarea name="" id="" placeholder='your Message' rows={5}></textarea>
                                    <img src="../../img/chat.png" alt="" />
                                </div>
                                <div className="action">
                                    <div className="primary-btn">
                                        <a href="">submit</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* form section end */}

            {/* outlets section start  */}
            <section className='outlets-section'>
                <div className="container">
                    <div className="row">
                        <div className="title">
                            <h2>outlets</h2>
                        </div>
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <div className="head">
                                        <h4>Factory Outlet : (palitana)</h4>
                                    </div>
                                    <ul>
                                        <li className='flex'>
                                            <div className="icon">
                                                <img src="../../img/location.png" alt="" />
                                            </div>
                                            <div className="details">
                                                <p>shop no. 10, bhagvan chamber, palitana, bhavanagar, gujarat, india - 364270</p>
                                            </div>
                                        </li>
                                        <li className='flex'>
                                            <div className="icon">
                                                <img src="../../img/phone.png" alt="" />
                                            </div>
                                            <div className="details">
                                                <p>8347674685 (mon-sat : 9AM - 6PM | Sunday: Half Day)</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="head">
                                        <h4>Factory Outlet : (surat)</h4>
                                    </div>
                                    <ul>
                                        <li className='flex'>
                                            <div className="icon">
                                                <img src="../../img/location.png" alt="" />
                                            </div>
                                            <div className="details">
                                                <p>shop no. 10, bhagvan chamber, palitana, bhavanagar, gujarat, india - 364270</p>
                                            </div>
                                        </li>
                                        <li className='flex'>
                                            <div className="icon">
                                                <img src="../../img/phone.png" alt="" />
                                            </div>
                                            <div className="details">
                                                <p>8347674685 (mon-sat : 9AM - 6PM | Sunday: Half Day)</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* outlets section end */}

            {/* map section start  */}
            <section className='map-section'>
                <div className="container">
                    <div className="row">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.0993197044381!2d71.81552235213542!3d21.54502931420606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be20740fa21b609%3A0x27cb7e85ffdfafff!2sVedant%20Pharma%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1753869514142!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            {/* map section end */}
        </>
    )
}

export default Contact