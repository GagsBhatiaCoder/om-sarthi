import React from 'react'
import ServiceCard from './ServiceCard';
import serviceData from './ServiceData';

export default function OurService() {
    return (
        <div className='container p-5'>
            <h4 className='text-center mb-5'> Our Services </h4>
            <div className='d-flex flex-wrap justify-content-around'>
               {serviceData.map((post) => (
                <ServiceCard key={post.id} {...post} />
               ))}
                
            </div>
        </div>
    )
}
