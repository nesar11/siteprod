import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Service extends Component {

    render() {

        return (
            <section className="service-area pt-120 pb-130" style={{ backgroundImage:`url(${'assets/img/service/service-bg.jpg'})`}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xxl-5 col-lg-6">
                            <div className="kservice-text mb-50" data-aos="fade-right" data-aos-duration="1000">
                                <h5 className="kservice-text-subtitle mb-15">All Categories List</h5>
                                <h2 className="kservice-text-title mb-40">The Services <br/>We’re Offering</h2>
                                <p className="mb-45">Our Gold & Silver Products - AlaDeen Gold have been nominated for the Malaysia Commercialization Year 2021 Awards by the Ministry of Science, Technology & Innovation (MOSTI) and Technology Park Malaysia (TPM) for the Best Products Innovation</p>
                                <div className="kservice-author">
                                    {/* <div className="kservice-author-img mr-30">
                                        <img src="assets/img/service/service-author.png" className="img-fluid" alt="author-img"/>
                                    </div>
                                    <div className="kservice-author-sign">
                                        <span>Jessica Brown</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-lg-6">
                            <div className="row custom-mar-20" data-aos="fade-down" data-aos-duration="1000">
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'users']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Community</a></Link></h5>
                                            <span>We empower and assist the community in achieving their financial goals in accordance with Islamic principles.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'hands-helping']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Integrity</a></Link></h5>
                                            <span>We are equitable and honest in our dealings to observe industry best standards towards stakeholders.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'award']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Excellence</a></Link></h5>
                                            <span>We strive for excellence in financial services according to the Quran and Sunnah of Prophet S.A.W.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 custom-pad-20">
                                    <div className="kservice text-center mb-20">
                                        <div className="kservice-icon">
                                            <i><FontAwesomeIcon icon={['fas', 'hands']} /></i>
                                        </div>
                                        <div className="kservice-content">
                                            <h5 className="kservice-content-title"><Link href="/service-details"><a>Faith</a></Link></h5>
                                            <span>We invent and create new ways to improve our products and services that meet the expectation of our clients.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;