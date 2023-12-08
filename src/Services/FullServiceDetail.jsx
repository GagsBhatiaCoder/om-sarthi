import React from 'react';
import QueryForm from '../Forms/QueryForm'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function FullServiceDetail() {
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-around align-items-center bg-warning bg-gradient p-5 '>
                <div>
                    <h2>Private Limited (Pvt Ltd) Company <br />
                        Registration Online In India</h2>
                    <p>No more delays or difficulties! Register your business <br />
                        with India’s #1 provider of company incorporation <br />
                        services. Get a 7 day Guaranteed document upload to <br />
                        the MCA or receive a full refund T&C* </p>
                </div>
                <div>
                    <QueryForm title="Register Your Company" />
                </div>
            </div>
            <div className='p-5'>
                <h4>Benefits of Pvt Ltd Company Registration</h4>
                <p>There are numerous advantages to registering a company. By doing so, you enhance the credibility of your business, which can lead to increased consumer trust. Additionally, company registration online can provide various benefits that can help your business to grow and succeed.</p>
                <ul>
                    <li>Shield from personal liability and protects from other risks and losses</li>
                    <li>Attract more customers</li>
                    <li>Procure bank credits and good investment from reliable investors with ease</li>
                    <li>Offers liability protection to protect your company’s assets</li>
                    <li>Greater capital contribution and greater stability</li>
                    <li>Increases the potential to grow big and expand</li>
                </ul>
                <h4>How to Register a Company?</h4>
                <p>Registering a company in India has become incredibly convenient and accessible. At Vakilsearch, we have simplified the process to ensure a seamless experience, whether you want to register a private limited company or any other business structure. You can gain comprehensive insights into the registration procedure with few essential steps. The online registration system has made the entire process user-friendly and streamlined, eliminating any hassles.</p>
            <h4>Steps For Company Registration Process in India</h4>
            <h6>Step 1: Collecting Initial Documents</h6>
            <p>Gather the necessary documents and get them verified for the incorporation process.</p>
            <h6>Step 2: DSC and Name Approval</h6>
            <p>Apply for Digital Signature Certificate (DSC) and seek approval for your company name from MCA.</p>
            <h6>Step 3: Collecting Additional Documents</h6>
            <p>Acquire the second set of required documents and ensure their verification.</p>
            <h6>Step 4: Drafting MOA and AOA</h6>
            <p>Prepare the Memorandum of Association (MOA) and Articles of Association (AOA) for your company.</p>
            <h6>Step 5: Final Form Upload</h6>
            <p>Upload the completed documents and forms for the final stage of company incorporation.</p>
            </div>   
            <Footer />
        </div>
    )
}
