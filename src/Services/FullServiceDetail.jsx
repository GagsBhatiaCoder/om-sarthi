import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useParams } from 'react-router-dom';
import serviceData from './ServiceData';
import Achievements from '../Components/Achievements';
import FloatWatsappBtn from '../Components/FloatWatsappBtn';


export default function FullServiceDetail() {
    const { id } = useParams();
    const post = serviceData.find((post) => post.id === parseInt(id));
    if (!post) {
        return <div>Artical Not Found</div>
    }

    return (
        <div>
            <Navbar />
            <FloatWatsappBtn />
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center bg-warning bg-gradient p-2 p-sm-5 '>

                <div className='fullservice-titles'>
                    <h2 className='mb-2'>{post.title}</h2>
                    <p className='post-content'>{post.content} </p>
                    <p>Payment for Service <b>1499/-</b> excluding Government Fees <Link className='text-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                <div className='fullservice-form'>
                    {post.queryForm}
                </div>
            </div>
            <div>

            </div>
            <div className='p-5'>
                {post.section1 && (
                    <>
                        <h4>{post.section1.title}</h4>
                        <p className='fs-5'>{post.section1.content}</p>
                        <h4>{post.section1.subtitle}</h4>
                        {post.section1.list && post.section1.list.length > 0 && (

                            <ul>

                                {post.section1.list.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
                {post.section2 && (
                    <>
                        <h4>{post.section2.title}</h4>
                        <p className='fs-5'>{post.section2.content}</p>
                        <h4>{post.section2.heading}</h4>
                        {post.section2.steps && post.section2.steps.length > 0 && (
                            <ul>
                                {post.section2.steps.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
                {post.section3 && (
                    <>
                        <h4>{post.section3.title}</h4>
                        <p className='fs-5'>{post.section3.content}</p>
                        <h4>{post.section3.subtitle}</h4>
                        {post.section3.list && post.section3.list.length > 0 && (

                            <ul>

                                {post.section3.list.map((item, index) => (
                                    <li className='fs-5 mb-2' key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
            <Achievements />
            <Footer />
        </div>
    )
}
