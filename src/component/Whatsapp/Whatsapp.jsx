import React from 'react'

const Whatsapp = () => {
    return (
        <>
            {/* whatsapp section start  */}
            <section className='whatsapp-section anek-gujarati'>
                <a href="https://api.whatsapp.com/send?phone=+918347674685" className="box" target='_blank'>
                    <div className="content flex">
                        <div className="details">
                            <p>ઓર્ડર માટે</p>
                        </div>
                        <div className="icon">
                            <img src="/img/whatsapp.png" alt="" />
                        </div>
                    </div>
                </a>
            </section>
            {/* whatsapp section end */}
        </>
    )
}

export default Whatsapp