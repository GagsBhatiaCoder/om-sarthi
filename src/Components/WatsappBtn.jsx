import React from 'react'

export default function WatsappBtn() {
    const handleClick = () =>{
        const phoneNumber = '+918979266475'; 
    const message = 'Hi there! Im interested in your web development services. Can we chat more?';

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
    }
  return (
    <>
      <button className='btn btn-success rounded-circle border-0' style={{background:"#25D366"}} onClick={handleClick}><i className="bi bi-whatsapp"></i></button>
    </>
  )
}
