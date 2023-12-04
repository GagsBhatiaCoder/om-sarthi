import React from 'react'
import Address from '../Components/Address';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import QueryForm from '../Forms/QueryForm';
import { Link } from 'react-router-dom';
import FloatWatsappBtn from '../Components/FloatWatsappBtn';

export default function Contact() {
  return (
    <>
      <Navbar />
      <FloatWatsappBtn />
      <div className=' '>
        <div className='d-flex justify-content-around bg-primary p-4'>
          <div className='d-flex justify-content-center flex-column align-items-between p-4 text-light fs-5'>
            <span className='text-decoration-none text-light fs-5 text-center' > <i className="bi bi-geo-alt fs-4 me-3"></i> 05, Brij Dham Colony, Mini Byp,<br />
              behind Sai Dharam Kanta,<br /> Karamchari Nagar, Izatnagar,<br />
               Bareilly,
              Uttar Pradesh 243122</span>
            <Link to="#" className='text-decoration-none text-light fs-5 d-flex'> <i className="bi bi-telephone fs-4 me-3"></i> 07983843964</Link>
            <Link to="#" className='text-decoration-none text-light fs-5'><i className="bi bi-plus fs-4 me-3" ></i> 9CQ4+9F Bareilly, Uttar Pradesh</Link>
            <Link to="#" className='text-decoration-none text-light fs-5'> <i className="bi bi-envelope-at fs-4 me-3"></i> omsarthi@gmail.com</Link>
          </div>
          <div>
            <QueryForm />
          </div>
        </div>
        <div className='d-flex justify-content-center p-4'>
          <Address />
        </div>
      </div>
      <Footer />
    </>
  )
}
