import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className='footer text-light' style={{ background: "#000" }}>
            <div className='d-flex justify-content-around flex-wrap p-5 '>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'> Start a Business</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li><Link onClick={scrollToTop}to="/allservice/5">Private Limited Company</Link></li>
                        <li><Link onClick={scrollToTop}to="/allservice/16">Limited Liability Partnership</Link></li>
                        <li><Link onClick={scrollToTop}to="/allservice/17">One Person Company</Link></li>
                        <li><Link onClick={scrollToTop}to="/allservice/12">Partnership Firm</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>Govt & Tax Registration</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li ><Link onClick={scrollToTop}to="/allservice/14" >Accounting & Book Keeping</Link></li>
                        <li ><Link onClick={scrollToTop}to="/allservice/1" >GST Registration</Link></li>
                        <li ><Link onClick={scrollToTop}to="/allservice/15" >GST Return Filling</Link></li>
                        <li ><Link onClick={scrollToTop}to="/allservice/2">Income Tax</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>TradeMark & IP</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li ><Link onClick={scrollToTop}to="/allservice/22">Trademark Registration</Link></li>
                        <li ><Link onClick={scrollToTop}to="/allservice/23">Copywright Registration</Link></li>
                        <li ><Link onClick={scrollToTop}to="/allservice/24">Patent</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>Web Developement</h5>
                    <hr className='footer-line' />
                    <ul>
                    <li > <Link onClick={scrollToTop}to="/">Static Website </Link></li>
                  <li > <Link onClick={scrollToTop} >Dynamic Website</Link></li>
                  <li > <Link onClick={scrollToTop} >E-Commerce Website</Link></li>
                  <li > <Link onClick={scrollToTop} >NGO Webiste</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-around'>
                <div className='footer-links '>
                    <Link onClick={scrollToTop}to="/" >Home</Link>
                    <Link onClick={scrollToTop}to="/about" >About Us</Link>
                    <Link onClick={scrollToTop}to="/privacy" >Privacy Policy</Link>
                    <Link onClick={scrollToTop}to="/contact" >Contact Us</Link>
                    <Link onClick={scrollToTop}to="/refund" >Refund Policy</Link>
                    <div className="d-flex justify-content-center align-items-center p-2 footer-icons">
                        <Link onClick={scrollToTop}to='#'><i className="bi bi-facebook"></i></Link>
                        <Link onClick={scrollToTop}to='#'><i className="bi bi-instagram"></i></Link>
                        <Link onClick={scrollToTop}to='#'><i className="bi bi-linkedin"></i></Link>
                        <Link onClick={scrollToTop}to='#'><i className="bi bi-youtube"></i></Link>
                        <Link onClick={scrollToTop}to='#'><i className="bi bi-twitter"></i></Link>
                    </div>
                </div>
            </div>

            <p className='text-center mb-0'>© 2019 Om Sarthi Solutions PVT. LTD.</p>
        </div>
    )
}




