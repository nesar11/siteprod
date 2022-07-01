import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenus from './BurgerMenus';


const Header = () => {

   const [menuOpen, setMenuOpen] = useState(false)
   const [searchOpen, setSearchOpen] = useState(false)

   const router = useRouter()
   const [path, setPath] = useState("")
   useEffect(() => {
      setPath(router.pathname)
   }, [router])

   // Sticky Menu Area start
   useEffect(() => {
      window.addEventListener('scroll', sticky);
      return () => {
         window.removeEventListener('scroll', sticky);
      };
   });

   const sticky = (e) => {
      const header = document.querySelector('.transparent-header');
      const scrollTop = window.scrollY;
      scrollTop >= 1 ? header.classList.add('sticky-header') : header.classList.remove('sticky-header');
   };
   // Sticky Menu Area End

   return (
      <React.Fragment>
         <Head>
            <title>Al Ebreiz Global Capital Berhad | The Future of Islamic Hyebrid Finance</title>
            <link rel="shortcut icon" href="assets/img/logo/favicon.ico" /> 
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
         </Head>
         <header>
            <div className="transparent-header">
               <div className="container-fluid">
                  <div className="header-space">
                     <div className="row align-items-center">
                        <div className="col-xl-2 col-8">
                           <div className="header-logo">
                              <Link href="/"><a><img src="assets/img/logo/logo-white.png" className="img-fluid" alt="logo-img" /></a></Link>
                           </div>
                        </div>
                        <div className="col-xl-6 col-4">
                           <div className="main-menu d-xl-block d-none">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li ><Link href="/"><a>Home</a></Link>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="#"><a>Company info</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/about"><a>About</a></Link></li>
                                          <li><Link href="/service-details"><a>Sariah Compliance</a></Link></li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="/product"><a>Products</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/project"><a>Gold</a></Link></li>
                                          <li><Link href="/project-details"><a>Sliver</a></Link></li>
                                          <li><Link href="/project-details"><a>Aladeen Jewels</a></Link></li>
                                          <li><Link href="/project-details"><a>Aladeen Gold</a></Link></li>
                                       </ul>
                                    </li>
                                    <li><Link href="/pricing"><a>Market Watch</a></Link>
                                    </li>
                                    <li className="menu-item-has-children"><Link href="#"><a>Media</a></Link>
                                       <ul className="sub-menu">
                                          <li><Link href="/blog"><a>Blog</a></Link></li>
                                          <li><Link href="/blog-details"><a>Event</a></Link></li>
                                          <li><Link href="/blog-details"><a>Workshop</a></Link></li>
                                          <li><Link href="/blog-details"><a> Free Workshop</a></Link></li>
                                       </ul>
                                    </li>
                                    <li><a href="#">Contacts</a>
                                       <ul className="sub-menu">
                                          <li><Link href="#"><a>Policy</a></Link></li>
                                          <li><Link href="/faq"><a>Faq</a></Link></li>
                                          <li><Link href="/contact"><a>Contact</a></Link></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="side-menu-icon d-xl-none text-end">
                              {/* <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a> */}
                              <button className="side-toggle" onClick={() => { setMenuOpen(!menuOpen) }}><i><FontAwesomeIcon icon={['fas', 'bars']} /></i></button>
                           </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                           <div className="header-right text-end">
                              <div className="header-social">
                                 <a href="https://twitter.com/AlEbreizGlobal/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                 <a href="https://www.facebook.com/Al.Ebreiz.Global.Capital.Berhad/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                 <a href="https://www.pinterest.com/EbreizGlobal/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                 <a href="https://www.instagram.com/al.ebreiz.global.capital/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                              </div>
                              {/* <div className="header-search">
                                 <a className="search-btn nav-search search-trigger" href="#!" onClick={() => { setSearchOpen(!searchOpen) }}><i><FontAwesomeIcon icon={['fas', 'search']} /></i></a>
                              </div> */}

                              <div className="header-btn">
                                 <a href="https://play.google.com/store/apps/details?id=io.aladeen.trader" target="_blank" className="theme-btn theme-btn-small">Wallet Download</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </React.Fragment>
   );
}

export default Header;