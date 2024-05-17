import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ServiceCard from './ServiceCard'
import serviceData from './ServiceData'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'

export default function AllServices() {
    
    return (
        <div>
            <Navbar />
            <FloatWatsappBtn />
            <div className='container'>
                <h4 className='text-center my-5'> All Services </h4>
                <div className='d-flex flex-wrap justify-content-around'>
                    {serviceData.map((post) => (
                        <ServiceCard key={post.id} {...post} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
