import React, { Component } from 'react';
import Link from 'next/link';


class Trust extends Component {

    render() {

        return (
            <section className="trust-area pt-105 pb-120">
                <div className="trust-bg" style={{ backgroundImage: `url(${'assets/img/trust/trust-bg.jpg'})` }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-6" >
                                    <div className="kproject kproject-2" style={{ height: '100%', position: 'relative'}}>
                                        <img
                                            alt='Mountains'
                                            src='/assets/img/project/AlaDeenGoldWallet.png'
                                            layout='fill'
                                            objectFit='contain'
                                        />
                                                                               
                                </div>
           
          
                        </div>
                        <div className="col-6">
                            <div className="ktrust text-center z-index">
                                <h2 className="ktrust-title mb-45 wow fadeInUp" data-wow-delay=".2s">AlaDeen Gold Wallet<br />Download now..</h2>
                                <span className="mb-45" style={{color:"white", fontSize:"450"}}>AGCB mobile application is developed using the latest technology that delivers the best user experience. Using our technology, users can easily buy and sell gold in just a few clicks. Using their mobile phone, all purchases will be handled by our intelligent and secure backend system.</span>
                          
                                <div className="ktrust-btn mt-40">
                                    <Link   href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523"><a target="_blank" className="theme-btn p-20"> App Store</a></Link>&nbsp;&nbsp;
                                    <Link  href="https://play.google.com/store/apps/details?id=io.aladeen.trader"><a  target="_blank" className="theme-btn black-btn">Play Store</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trust;