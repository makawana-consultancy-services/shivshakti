import React, { useState } from 'react'

const Process = () => {

    const [activeTab, setActiveTab] = useState('groundnut')

    return (
        <>
            {/* process section start  */}

            <section className='process-section section-padding anek-gujarati'>
                <div className="container">
                    <div className="row">
                        <div className="heading">
                            <h2>અમારી <span>પ્રક્રિયા</span></h2>
                            <p>" દેશની પાવન માટીમાં ઉગેલું પોષણ, હવે તમારા રસોડામાં શુદ્ધતાના સ્વાદ સાથે પહોંચે છે." </p>
                        </div>

                        <div className="tab-btns flex">
                            <div className="btn-group">
                                <button onClick={() => setActiveTab('groundnut')}
                                    className={`tab-button anek-gujarati groundnut-btn ${activeTab === 'groundnut' ? 'active' : ''}`}>સીંગતેલ બનાવવાની પ્રક્રિયા </button>

                                <button onClick={() => setActiveTab('sunflower')}
                                    className={`tab-button anek-gujarati sunflower-btn ${activeTab === 'sunflower' ? 'active' : ''}`}>સૂર્યમુખી તેલ બનાવવાની પ્રક્રિયા </button>
                            </div>
                        </div>

                        <div className="main">
                            {
                                activeTab == 'groundnut' && (
                                    <>
                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step1'>01</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step1.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step1'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step2'>02</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step2.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step2'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step3'>03</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step3.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step3'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step4'>04</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step4.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step4'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step5'>05</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step5.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step5'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step6'>06</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step6.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step6'>મગફળીની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                            {
                                activeTab == 'sunflower' && (
                                    <>
                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step1'>01</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step1.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step1'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step2'>02</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step2.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step2'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step3'>03</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step3.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step3'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step4'>04</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step4.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step4'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step5'>05</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step5.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step5'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-group flex">
                                            <div className="box">
                                                <div className="content flex">
                                                    <div className="process-step">
                                                        <h2 className='step6'>06</h2>
                                                    </div>

                                                    <div className="image">
                                                        <img src="img/groundnuts_step6.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="box">
                                                <div className="content">
                                                    <div className="details">
                                                        <h3 className='step6'>સૂર્યમુખી ની ખેતી</h3>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ab dolorum, neque magnam repudiandae sint tempora ex vitae blanditiis quos, perspiciatis aut eos veritatis non earum. Aspernatur quos necessitatibus odio?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* process section end */}
        </>
    )
}

export default Process