import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
 
export default () => (
    <section className="project-2 pt-115 pb-90">
        <Tabs>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="aportfolio-menu aportfolio-menu2 text-center mb-50">
                        <TabList>
                            <Tab><button className="nav-link" type="button">All</button></Tab>
                            <Tab><button className="nav-link" type="button">Gold</button></Tab>
                            <Tab><button className="nav-link" type="button">Silver</button></Tab>
                            <Tab><button className="nav-link" type="button">Dinar</button></Tab>
                            <Tab><button className="nav-link" type="button">Dirham</button></Tab>
                        </TabList>
                    </div>
                </div>
            </div>
            <TabPanel>
            <div className="row aportfolio-active">
            <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/0.5.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/0.25g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.25g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/1g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/5g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.1g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.5 Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.25 Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.25g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i> <FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/1g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.2.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/2 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.4.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/4 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.8.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/8 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.16.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/16 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>
            
            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/0.5.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/0.25g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.25g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/1g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/5g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/10g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>10g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/20g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>20g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/50g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>50g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/100g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>100g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/200g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>200g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/500g.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>500g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldBar/1kg.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1kg</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.1g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.5 Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/0.25 Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>0.25g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i> <FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/1g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/5g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>5g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/10g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>10g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/20g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>20g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/50g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>50g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/100g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>100g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/200g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>200g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/500g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>500g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverBar/1000g Silver Bar.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1000g</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AL EBREIZ PUREST SILVER</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.2.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/2 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.4.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/4 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.8.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/8 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.16.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/16 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.32.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/32 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 1.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 2.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>2 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 5.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>5 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 10.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>10 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/GoldDinar/Dinar 20.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>20 Dinar</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dinar Gold Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>

            <TabPanel>
            <div className="row aportfolio-active">
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.2.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/2 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.4.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/4 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.8.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/8 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.16.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/16 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.32.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1/32 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 1.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>1 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 2.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>2 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 5.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>5 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 10.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>10 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-3">
                    <div className="kproject kproject-2 mb-30">
                        <img src="assets/img/project/SilverDirham/Dirham 20.png" className="img-fluid" alt="project_img"/>
                        <div className="kproject-text kproject-text-2">
                            <div className="kproject-text-content">
                                <span>20 Dirham</span>
                                <h5 className="kproject-text-title"><Link href="#"><a>AlaDeen Dirham Silver Bar</a></Link></h5>
                                <a href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale" target="_blank"><i><FontAwesomeIcon icon={['fab', 'whatsapp']} /></i></a>
                            </div>
                            <div className="kproject-text-icon">
                                <Link href="https://wa.me/601111335693?text=I'm%20interested%20in%20your%20Gold%20for%20sale"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </TabPanel>
            
        </div>
        </Tabs>
    </section>
);