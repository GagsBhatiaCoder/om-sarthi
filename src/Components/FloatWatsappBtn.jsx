import React from 'react'

export default function FloatWatsappBtn() {
    const handleClick = () =>{
        const phoneNumber = '7983843964'; 
    const message = 'Hello, this is a WhatsApp message!'; 

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
    }
  return (
    <div>
      <button className='btn btn-success rounded-circle border-0' onClick={handleClick} 
      style={{position:"fixed", bottom:"20px", right:"20px", background:"#25D366",
       borderRadius:"30px", fontSize:"1.5rem"}}><i className="bi bi-whatsapp"></i></button>
    </div>
  )
}
