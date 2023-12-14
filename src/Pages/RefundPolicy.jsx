import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FloatWatsappBtn from '../Components/FloatWatsappBtn';

export default function RefundPolicy() {
  return (
    <div>
      <Navbar />
      <FloatWatsappBtn />
      <div className='container p-4 m-auto  ' style={{width:"80%", boxShadow: "0px 0px 48px 5px rgba(0,0,0,0.1)"}}>
        <h2 className='text-center p-3 mb-3 text-decoration-underline' >Refund Policy</h2>
        <h4 className='text-center'>1. Refund OF Payment Received</h4>
        <p className='fs-5 mb-5'>For Any Reason If Your Business Cannot Be Registered In Udyam / MSME And Not Able To Provide You Udyam / MSME Certificate Then 100% Of Money Will Be Refunded In The Same Mode You Have Paid.</p>
        <h4 className='text-center'>2. Refund Request</h4>
        <p className='fs-5 mb-5'>Refund Request Can Be Send At Help@Udhyamregistration.Co.In. Refund Request Can Be Made Within 2 Days Of Online Application Made.</p>
        <h4 className='text-center'>3. Refund Time Frame</h4>
        <p className='fs-5 mb-5'>We Will Process Your Refund Request Within 10 To 15 Business Days Of Receiving All The Information Required For Processing Refund Like Reason For Refund, Bank Details For Processing Request, Etc.</p>
        <h4 className='text-center'>4. Cancellation Of Application</h4>
        <p className='fs-5 mb-5'>You Cannot Cancel The Registration Once Applied. No Refund Will Be Provided Once The Application Is Done And Udyam / MSME Certificate Is Issued.</p>
        <h4 className='text-center'>5. Issuance Of Udyam / MSME Certificate</h4>
        <p className='fs-5 mb-5'>Udyam / MSME Registration Certificate Applied Online, Will Be Delivered Within 24 Hours To The Email Id Provided In The Online Application Form.</p>
        <h4 className='text-center'>6. Clarification About Application</h4>
        <p className='fs-5 mb-5'>If You Have Any Query About Application Process, You Can Write Us Mail At Help@Udhyamregistration.Co.In In Case We Need Any Additional Clarification About Your Business Activity Our Team Will Reach You By Email Or Call.</p>
        <h4 className='text-center'>7. Force Majeure</h4>
        <p className='fs-5 mb-5'>Udhyamregistration.Co.In Shall Not Be Considered In Breach Of Its Satisfaction Guarantee Policy Or Default Under Any Terms Of Service, And Shall Not Be Liable To The Client For Any Cessation, Interruption, Or Delay In The Performance Of Its Obligations By Reason Of Earthquake, Flood, Fire, Storm, Lightning, Drought, Landslide, Hurricane, Cyclone, Typhoon, Tornado, Natural Disaster, Act Of God Or The Public Enemy, Epidemic, Famine Or Plague, Action Of A Court Or Public Authority, Change In Law, Explosion, War, Terrorism, Armed Conflict, Labor Strike, Lockout, Boycott Or Similar Event Beyond Our Reasonable Control, Whether Foreseen Or Unforeseen (Each A “Force Majeure Event”)</p>
      </div>
      <Footer />
    </div>
  )
}
