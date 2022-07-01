import React from 'react';
import Link from 'next/link';

const FooterBottom = () => {
    return (
        <div className="copyright-area">
            <div className="container">
               <div className="copyright-bg">
                     <div className="row align-items-center">
                        <div className="col-md-6">
                           <div className="copyright">
                                 <span>©2022 by Al Ebreiz Global Capital Berhad</span>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="privacy-text text-center text-md-end"> 
                                 <ul>
                                    <li>
                                       <Link href="/contact"><a>Terms & Condition</a></Link>
                                       <Link href="/contact"><a>Privacy Policy</a></Link>
                                    </li>
                                 </ul>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
    );
}

export default FooterBottom;