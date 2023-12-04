import React from 'react'
import QueryForm from '../Forms/QueryForm';
import { Link } from 'react-router-dom';

export default function MainSection() {
    return (
        <>
            <main className=' d-flex justify-content-around flex-column flex-md-row  bg-primary p-5 '>
                <div>
                    <h1 className='py-2'>Welcome To <span>Samay</span></h1>
                    <p className='fs-5'>Easily start and operate your business with Industry Experts at one place.</p>
                    <div className='main-section-links d-flex justify-content-around flex-wrap p-3'>
                        <div >
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>Company Incorporation</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>ROC Filing</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>GST Services</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>MSME Services</Link>
                        </div>
                        <div>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>Trademark Services</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>Startup India Services</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>Accounting & Tax</Link>
                            <Link href="#"><i className="bi bi-check-circle me-1"></i>Free Legal Agreements</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <QueryForm />
                </div>
            </main>
        </>
    )
}
