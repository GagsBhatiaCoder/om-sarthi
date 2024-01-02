import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ServiceCard from '../Services/ServiceCard'
import serviceData from '../Services/ServiceData'
import { Link, useParams } from 'react-router-dom'

export default function Payment() {
  const { id } = useParams();
  const homeServiceData = serviceData.filter((post) => post.id <= 6);

  return (
    <div>
      <Navbar />
     
      <div className='bg-primary-subtle p-5'>
      <h4 className='text-center pb-4'>Proceed To Payment</h4>
      <div className='d-flex flex-column flex-md-row justify-content-evenly  '>
        <div className='bg-light rounded p-5'>
          <h5>What you'll get</h5>
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
        <div className='d-flex flex-column justify-content-center align-item-center'>
        <p>Registration Id : {id}</p>
          <p>Price <b>1499/-</b> Inclusive of all taxes</p>       
          <button className='btn btn-success'>Pay Now</button>
        </div>
      </div>
      </div>
      <div className='container p-5'>
        <h4 className='text-center mb-5'> Featured Services </h4>
        <div className='d-flex flex-wrap justify-content-around'>
          {homeServiceData.map((post) => (
            <ServiceCard key={post.id} {...post} />
          ))}
        </div>
        <div className='d-flex justify-content-center'>
          <Link className='bg-success rounded p-2 my-2 text-light text-decoration-none' to="/allservice"
            onClick={() => (window.scrollTo(0, 0))} > All Services </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
