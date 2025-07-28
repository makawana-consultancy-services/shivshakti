import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Home = () => {

    return (
        <>
            {/* banner section start  */}
            <section className='banner-section'>
                <div className="row">
                    <div className="box">
                        <video autoPlay muted loop>
                            <source src='../../video/mill_process_video.mp4' type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
            {/* banner section end */}

            {/* guarantee section start  */}
            <section className='guarantee-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/natural_green.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>100% શુદ્ધ ઘાણીનું તેલ</h3>
                                        <p>પારંપરિક ઘાણીમાં બનેલું તાજું, નખાલસ અને પોષણ ભરેલું તેલ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/best.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શ્રેષ્ઠ મટીરીયલ</h3>
                                        <p>ઉચ્ચતમ ગુણવત્તાવાળા તેલીબિયા નો ઉપયોગ કરી ને બનાવેલું તેલ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/nutrition.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>પૌષ્ટિક ગુણધર્મો</h3>
                                        <p>વિટામિન અને પ્રોટીન થી ભરપૂર હોય છે, જે હ્રદય અને સમગ્ર સ્વાસ્થ્ય માટે લાભદાયી છે.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/taste.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>સ્વાદ અને સુગંધ</h3>
                                        <p>તેલીબિયાંઓમાં હોય છે નખાલસ સ્વાદ અને ખુશબુદાર કુદરતી સુગંધ.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* guarantee section end */}

            {/* products section start  */}
            <section className='products-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>શિવશક્તિ <span> ઓઇલ્સ</span></h2>
                        </div>
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/groundnut.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ સીંગતેલ </h3>
                                    </div>
                                    <div className="primary-btn">
                                        <a href="#">
                                            વધુ જાણો...
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/sunflower.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ સૂર્યમુખી તેલ </h3>
                                    </div>
                                    <div className="primary-btn">
                                        <a href="#">
                                            વધુ જાણો...
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/soya.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ સોયાબિન તેલ </h3>
                                    </div>
                                    <div className="primary-btn">
                                        <a href="#">
                                            વધુ જાણો...
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/mustard.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ રાય નું ( સરસવ ) તેલ </h3>
                                        <div className="primary-btn">
                                            <a href="#">
                                                વધુ જાણો...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/rice.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ ચોખાનું તેલ </h3>
                                        <div className="primary-btn">
                                            <a href="#">
                                                વધુ જાણો...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/sunflower.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શિવશક્તિ ઘાણી નું શુદ્ધ મકાઈનું તેલ </h3>
                                        <div className="primary-btn">
                                            <a href="#">
                                                વધુ જાણો...
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* products section end */}

            {/* customers banner section start  */}
            <section className='customers-banner-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="main">
                            <div className="heading">
                                <h2>જયારે ગુણવત્તા બને <span>વિશ્વાસ</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* customers banner section end */}

            {/* customers section start  */}
            <section className='customers-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/location.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>રાજ્યો</h3>
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/cities.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>શહેરો</h3>
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="content">
                                    <div className="image">
                                        <img src="../../img/customer.png" alt="" />
                                    </div>
                                    <div className="details">
                                        <h3>ગ્રાહકો</h3>
                                        <p>100 +</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* customers section end */}

            {/* slider section start  */}
            <section className="slider-section">
                <div className="row">
                    <div className="animation">
                        <div className="scrolling-text-left">
                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Original</h2>
                                <div className="logo">
                                    <img src="../../img/natural.png" alt="" />
                                </div>
                                <h2>100% Natural</h2>
                                <div className="logo">
                                    <img src="../../img/pure.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Pure</h2>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original.png" alt="" />
                                </div>
                                <h2>100% Original</h2>
                                <div className="logo">
                                    <img src="../../img/natural.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Natural</h2>
                                <div className="logo">
                                    <img src="../../img/pure.png" alt="" />
                                </div>
                                <h2>100% Pure</h2>
                            </div>
                        </div>
                    </div>
                    <div className="animation">
                        <div className="scrolling-text-right">
                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Original</h2>
                                <div className="logo">
                                    <img src="../../img/natural.png" alt="" />
                                </div>
                                <h2>100% Natural</h2>
                                <div className="logo">
                                    <img src="../../img/pure.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Pure</h2>
                            </div>

                            <div className="scrolling-wrapper">
                                <div className="logo">
                                    <img src="../../img/original.png" alt="" />
                                </div>
                                <h2>100% Original</h2>
                                <div className="logo">
                                    <img src="../../img/natural.png" alt="" />
                                </div>
                                <h2 className='t-fill'>100% Natural</h2>
                                <div className="logo">
                                    <img src="../../img/pure.png" alt="" />
                                </div>
                                <h2>100% Pure</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* slider section end */}

            {/* review section start  */}
            <section className='review-section anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>સંતોષી ગ્રાહકો ની વાતો <span>અમારી ઓળખ છે.</span></h2>
                        </div>
                        <div className="main-box flex">
                            <div className="box">
                                <div className="content">
                                    <div className="head">
                                        <div className="image">
                                            <img src="https://i.pravatar.cc/300" alt="" />
                                        </div>
                                        <h4></h4>
                                    </div>
                                    <div className="G-review flex">
                                        <img src="../../img/star_fill.png" alt="" />
                                        <img src="../../img/star_fill.png" alt="" />
                                        <img src="../../img/star_fill.png" alt="" />
                                        <img src="../../img/star_fill.png" alt="" />
                                        <img src="../../img/star.png" alt="" />
                                    </div>
                                    <div className="feedback">
                                        <p>Based on 1 reviews
                                            powered by <span>google</span></p>
                                    </div>
                                    <div className="primary-btn">
                                        <a href="">review us on</a>
                                    </div>

                                </div>
                            </div>
                            <div className="box">
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    loop={true}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>jigar makwana</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>rohit makwana</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>darshan aambaliya</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>jaydip makwana</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>krunal patel</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <div className="head flex">
                                                <div className="image">
                                                    <img src="https://i.pravatar.cc/300" alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>mcs</h4>
                                                    <h5>just now</h5>
                                                </div>
                                                <div className="G-icon">
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                            <div className="G-review flex">
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star_fill.png" alt="" />
                                                <img src="../../img/star.png" alt="" />
                                            </div>
                                            <div className="feedback">
                                                <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quas blanditiis consectetur eveniet adipisci voluptate hic aliquid non porro ab!</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* review section end */}
        </>
    )
}

export default Home