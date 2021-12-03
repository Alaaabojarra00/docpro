import React from 'react'
import './process.css'
import shape17 from '../images/shape-17.png'
import shape18 from '../images/shape-18.png'
import shape19 from '../images/shape-19.png'
import shape20 from '../images/shape-20.png'
import im4 from '../images/4.svg'
import im5 from '../images/5.svg'
import im6 from '../images/6.svg'
function Process() {
    return (
        <section className="process-section bg-color-2 ">
        <div className="pattern-layer">
                            <div className="pattern-1" style={{backgroundImage:` url(${shape17})`}}>
                            </div>
                            <div className="pattern-2" style={{backgroundImage:` url(${shape18})`}}>
                            </div>
                            <div className="pattern-3" style={{backgroundImage:` url(${shape19})`}}>
                            </div>
                            <div className="pattern-4" style={{backgroundImage:` url(${shape20})`}}>
                            </div>
        </div>
        <div className="auto-container">
            <div className="sec-title light centred">
                <p>Process</p>
                <h2>Appointment Process</h2>
            </div>
            <div className="inner-content">
                <div className="row clearfix">
                                            <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                        <div className="processing-block-one">
                            <div className="inner-box">
                                <figure className="icon-box">
                                    <img src={im4} alt=""/>
                                    <span>01</span>
                                </figure>
                                <h3>Search Best Online Professional</h3>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                        <div className="processing-block-one">
                            <div className="inner-box">
                                <figure className="icon-box">
                                    <img src={im5} alt=""/>
                                    <span>02</span>
                                </figure>
                                <h3>View Professional Profile</h3>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                                            <div className="col-lg-4 col-md-6 col-sm-12 processing-block">
                        <div className="processing-block-one">
                            <div className="inner-box">
                                <figure className="icon-box">
                                    <img src={im6} alt=""/>
                                    <span>03</span>
                                </figure>
                                <h3>Get Instant Doctor Appoinment</h3>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                                        </div>
            </div>
        </div>
    </section>
    )
}

export default Process
