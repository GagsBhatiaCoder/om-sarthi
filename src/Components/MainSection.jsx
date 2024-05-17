import React from 'react'
import './Comp.css'
import QueryForm from '../Forms/QueryForm';
import { Link } from 'react-router-dom';

export default function MainSection() {
    return (
        <>
            <main className='d-flex flex-md-row flex-column justify-content-around  bg-primary p-5 '>
                <div>
                    <h1 className='py-2'>Welcome To <span >Samay</span></h1>
                    <p className='fs-5'>Easily start and operate your business with Industry Experts at one place.</p>
                    <div className='main-section-links d-flex justify-content-around flex-wrap p-3'>
                        <div >
                            <Link to="/allservice/2"><i className="bi bi-check-circle me-1"></i>Private Limited Company</Link>
                            <Link to="/allservice/33"><i className="bi bi-check-circle me-1"></i>Niti Aayog</Link>
                            <Link to="/allservice/15"><i className="bi bi-check-circle me-1"></i>GST Filling</Link>
                            <Link to="/allservice/3"><i className="bi bi-check-circle me-1"></i>MSME Registration</Link>
                        </div>
                        <div>
                            <Link to="/allservice/22"><i className="bi bi-check-circle me-1"></i>Trademark Registration</Link>
                            <Link to="/allservice/13"><i className="bi bi-check-circle me-1"></i>Startup India Services</Link>
                            <Link to="/allservice/2"><i className="bi bi-check-circle me-1"></i>Income Tax </Link>
                            <Link to="/allservice/25"><i className="bi bi-check-circle me-1"></i>Web/E-Commerce Website</Link>
                        </div>
                    </div>
                    <p className='text-light'>Payment for Service <b>1499/-</b> excluding Government Fees <Link className='text-dark ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        What you'll get
                    </Link></p>
                    


                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">You'll get</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i> Expert assisted process</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i>Your company name is reserved in just
                                            2 - 4 days</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i> DSC in just 4 - 7 days</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i> SPICe+ form filling in 14 days*</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i>Incorporation Certificate</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i> Company PAN+TAN</p>
                                    </div>
                                    <div>
                                        <p> <i className="bi bi-check-square text-success me-2"></i> DIN for directors</p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <QueryForm title="Register Yourself Today" submit="Submit" />
                </div>
            </main>
        </>
    )
}
