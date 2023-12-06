import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer text-light' style={{ background: "#000" }}>
            <div className='d-flex justify-content-around flex-wrap p-5 '>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'> Start a Business</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li><Link to="#">Private Limited Company</Link></li>
                        <li><Link to="#">Limited Liability Partnership</Link></li>
                        <li><Link to="#">One Person Company</Link></li>
                        <li><Link to="#">Partnership Firm</Link></li>
                        <li><Link to="#">Proprietorship Firm</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>Govt & Tax Registration</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li><Link to="#">GST Registration</Link></li>
                        <li><Link to="#">TDS Return</Link></li>
                        <li><Link to="#">Importer Exporter Code</Link></li>
                        <li><Link to="#">Professional Tax Registration</Link></li>
                        <li><Link to="#">Shops & Establishments Registration</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>TradeMark & IP</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li><Link to="#">Trademark Registration</Link></li>
                        <li><Link to="#">Trademark Objection</Link></li>
                        <li><Link to="#">Trademark Assignment</Link></li>
                        <li><Link to="#">Trademark Renewal</Link></li>
                        <li><Link to="#">Copyright Registration</Link></li>
                    </ul>
                </div>
                <div className='footer-links d-flex flex-column align-items-center'>
                    <h5 className='pb-3 footer-subtitle'>Accounting & Tax</h5>
                    <hr className='footer-line' />
                    <ul>
                        <li><Link to="#">Private Limited Company</Link></li>
                        <li><Link to="#">Limited Liability Partnership</Link></li>
                        <li><Link to="#">One Person Company</Link></li>
                        <li><Link to="#">Partnership Firm</Link></li>
                        <li><Link to="#">Proprietorship Firm</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-around'>
                <div className='footer-links '>
                    <Link to="/">Home</Link>
                    <a href="/about">About Us</a>
                    <Link to="#">Payment</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="#">Refund Policy</Link>
                    <div className="d-flex justify-content-center align-items-center p-2 footer-icons">
                        <Link to='#'><i className="bi bi-facebook"></i></Link>
                        <Link to='#'><i className="bi bi-instagram"></i></Link>
                        <Link to='#'><i className="bi bi-linkedin"></i></Link>
                        <Link to='#'><i className="bi bi-youtube"></i></Link>
                        <Link to='#'><i className="bi bi-twitter"></i></Link>
                    </div>
                </div>
            </div>
            
            <p className='text-center mb-0'>© 2019 Om Sarthi Solutions PVT. LTD.</p>
        </div>
    )
}




