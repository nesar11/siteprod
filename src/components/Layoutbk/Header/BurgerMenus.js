import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [courses, setcourses] = useState(false)
      const [blog, setBlog] = useState(false)
      const [about, setAbout] = useState(false)
      const [project, setProject] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setcourses(false)
          setBlog(false)
          setAbout(false)
          setProject(false)
        }
        else if( menu == 'courses'){
          setHome(false)
          setcourses(!courses)
          setBlog(false)
          setAbout(false)
          setProject(false)
        }
        else if( menu == 'blog'){
          setHome(false)
          setcourses(false)
          setBlog(!blog)
          setAbout(false)
          setProject(false)
        }
        else if( menu == 'about'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setProject(false)
          setAbout(!about)
        }
        else if( menu == 'project'){
          setHome(false)
          setcourses(false)
          setBlog(false)
          setAbout(false)
          setProject(!project)
        }
      }; 

      return (
      <div className="fix">
        <div className={menuOpen ? "side-info info-open": "side-info"}>
            <button className="side-info-close" onClick={() => setMenuOpen(false)}><i><FontAwesomeIcon icon={['fas', 'times']}/></i></button>
            <div className="side-info-content">
                <div className="mm-menu">
                  <ul>
                  <li><Link href="/"><a>Home</a></Link></li>

                    <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('courses'); }}>Company Info</a>
                      <ul className={courses ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/service"><a>About</a></Link></li>
                          <li><Link href="/service-details"><a>Shariah Compliance</a></Link></li>
                      </ul>
                    </li>
                    <li className={project ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('project'); }}>Products</a>
                      <ul className={project ? "sub-menu active" : "sub-menu"}>
                          <li><Link href="/project"><a>Gold</a></Link></li>
                          <li><Link href="/project-details"><a>Sliver</a></Link></li>
                          <li><Link href="/project-details"><a>Aladeen Jewels</a></Link></li>
                          <li><Link href="/project-details"><a>Aladeen Gold</a></Link></li>
                      </ul>
                    </li>
                    <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                      <ul className={blog ? "sub-menu active" : "sub-menu"}>
                        <li><Link href="/blog"><a>Blog</a></Link></li>
                        <li><Link href="/blog-details"><a>Event</a></Link></li>
                        <li><Link href="/blog-details"><a>Workshop</a></Link></li>
                        <li><Link href="/blog-details"><a> Free Workshop</a></Link></li>
                      </ul>
                    </li>
 
                    <li className={about ? "has-droupdown active" : "has-droupdown"}>
                      <a onClick={() => { openMobileMenu('about'); }}>Contact</a>
                      <ul className={about ? "sub-menu active" : "sub-menu"}>
                      <li><Link href="/pricing"><a>Pricing</a></Link></li>
                      <li><Link href="/faq"><a>Faq</a></Link></li>
                      <li><Link href="/contact"><a>Contact</a></Link></li>
                      </ul>
                    </li>
             
                </ul>
              </div>
                <div className="contact-infos mb-30">
                    <div className="contact-list mb-30">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><img src="assets/img/icon/sidebar-icon-1.png" className="img-fluid" alt="icon-img"/>Suite 11, 12, 13 & 14 <br /> Level 2, Resource Centre <br />Technology Park Malaysia<br/> 57000 Bukit Jalil, Kuala Lumpur

Malaysia </li>
                            <li><img src="assets/img/icon/footer-icon-1.png" className="img-fluid" alt="icon-img"/><a href="mailto:info@sycho24.com">info@al-ebreizglobal.com</a></li>
                            <li><img src="assets/img/icon/footer-icon-2.png" className="img-fluid" alt="icon-img"/><a href="tel:+6011-1133-5693">+6011-1133-5693</a></li>
                        </ul>
                        <div className="sidebar__menu--social">
                        <a href="https://twitter.com/AlEbreizGlobal/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                 <a href="https://www.facebook.com/Al.Ebreiz.Global.Capital.Berhad/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                 <a href="https://www.pinterest.com/EbreizGlobal/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                 <a href="https://www.instagram.com/al.ebreiz.global.capital/" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                              </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          
    )
}

export default BurgerMenus;