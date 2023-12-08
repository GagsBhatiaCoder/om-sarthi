import React from 'react'
import './Comp.css'
import Logo from '../assets/GagsLogo.png'
import { Link } from 'react-router-dom'





export default function Navbar() {
const scrollTop = () => {
  window.scrollTo(0, 0)
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={scrollTop}><img className='logo-img' src={Logo} alt="Om_Sarthi_Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Consult to Expert
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Talk to a Laywer</Link></li>
                  <li><Link className="dropdown-item" href="#">Talk to a Charted Accounted</Link></li>
                  <li><Link className="dropdown-item" href="#">Talk to a Talk to Company Secretory</Link></li>
                  <li><Link className="dropdown-item" href="#">Talk to IP/ Trademark Laywer</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  Business Setup
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Business Registration</Link>
                    <ul className="dropdown-menu">
                      <li><Link to='/fullservice' className="dropdown-item ">Private Limited Company</Link></li>
                      <li><Link href="" className="dropdown-item">Limited Liability Partnership</Link></li>
                      <li><Link href="" className="dropdown-item">One Person Company</Link></li>
                      <li><Link href="" className="dropdown-item">Sole Proprietorship</Link></li>
                      <li><Link href="" className="dropdown-item">Nidhi Company</Link></li>
                      <li><Link href="" className="dropdown-item">Producer Company</Link></li>
                      <li><Link href="" className="dropdown-item">Partnership Firm</Link></li>
                      <li><Link href="" className="dropdown-item">Startup India Registration</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Company Name Search</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Company Name Search</Link></li>
                      <li><Link href="" className="dropdown-item">Change Company Name</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    License & Registration</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Digital Signature Certificate</Link></li>
                      <li><Link href="" className="dropdown-item">Udyam Registration</Link></li>
                      <li><Link href="" className="dropdown-item">MSME Registration</Link></li>
                      <li><Link href="" className="dropdown-item">ISO Certification</Link></li>
                      <li><Link href="" className="dropdown-item">FSSAI [Food License]</Link></li>
                      <li><Link href="" className="dropdown-item">IEC [Import/Export Code]</Link></li>
                      <li><Link href="" className="dropdown-item">Spice Board Registration</Link></li>
                      <li><Link href="" className="dropdown-item">FIEO Registration</Link></li>
                      <li><Link href="" className="dropdown-item">Legal Metrology</Link></li>
                      <li><Link href="" className="dropdown-item">Hallmark Registration</Link></li>
                      <li><Link href="" className="dropdown-item">BIS Registration</Link></li>
                      <li><Link href="" className="dropdown-item">Liquor License</Link></li>
                      <li><Link href="" className="dropdown-item">CLRA Registration & Licensing</Link></li>
                      <li><Link href="" className="dropdown-item">AD Code Registration</Link></li>
                      <li><Link href="" className="dropdown-item">IRDAI Registration</Link></li>
                      <li><Link href="" className="dropdown-item">Drug & Cosmetic License</Link></li>
                      <li><Link href="" className="dropdown-item">Customs Clearance</Link></li>

                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Web Developement</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">E-commerce Websites</Link></li>
                      <li><Link href="" className="dropdown-item">Business or Corporate Websites</Link></li>
                      <li><Link href="" className="dropdown-item">Educational Websites</Link></li>
                      <li><Link href="" className="dropdown-item">News and Magazine Websites</Link></li>
                      <li><Link href="" className="dropdown-item">NGO Website</Link></li>

                    </ul>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  Tax & Compilence
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    GST and Other Indirect Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">GST Registration</Link></li>
                      <li><Link href="" className="dropdown-item">GST Filing</Link></li>
                      <li><Link href="" className="dropdown-item">GST Login Portal</Link></li>
                      <li><Link href="" className="dropdown-item">HSN Code Finder</Link></li>
                      <li><Link href="" className="dropdown-item">GST Cancellation and Revocation</Link></li>
                      <li><Link href="" className="dropdown-item">Indirect Tax</Link></li>
                      <li><Link href="" className="dropdown-item">RoDTEP</Link></li>

                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Changes in Pvt Ltd Company</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Add a Director</Link></li>
                      <li><Link href="" className="dropdown-item">Remove a Director</Link></li>
                      <li><Link href="" className="dropdown-item">Increase Authorized Capital</Link></li>
                      <li><Link href="" className="dropdown-item">Close the Pvt Ltd Company</Link></li>
                      <li><Link href="" className="dropdown-item">Strike off Company</Link></li>
                      <li><Link href="" className="dropdown-item">Change Objective/Activity</Link></li>
                      <li><Link href="" className="dropdown-item">Change Address</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounting & Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Accounting and Book-keeping</Link></li>
                      <li><Link href="" className="dropdown-item">TDS Return Filing</Link></li>
                      <li><Link href="" className="dropdown-item">Individual Income Tax Filing</Link></li>
                      <li><Link href="" className="dropdown-item">Proprietorship Tax Return Filing</Link></li>
                      <li><Link href="" className="dropdown-item">ITR for LLP</Link></li>
                      <li><Link href="" className="dropdown-item">Corporate Tax</Link></li>
                      <li><Link href="" className="dropdown-item">Income Tax Assessment</Link></li>
                      <li><Link href="" className="dropdown-item">Virtual CFO</Link></li>
                      <li><Link href="" className="dropdown-item">Income Tax Notice</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Web Developement</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">E-commerce Websites</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  Trademark & IP
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    GST and Other Indirect Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">GST Registration</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Changes in Pvt Ltd Company</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Add a Director</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounting & Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Accounting and Book-keeping</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Web Developement</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">E-commerce Websites</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  Documentation
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    GST and Other Indirect Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">GST Registration</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Changes in Pvt Ltd Company</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Add a Director</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounting & Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Accounting and Book-keeping</Link></li>
                    </ul>
                  </li>
                  <li className='dropend'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Web Developement</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">E-commerce Websites</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropstart'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    GST and Other Indirect Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">GST Registration</Link></li>
                    </ul>
                  </li>
                  <li className='dropstart'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Changes in Pvt Ltd Company</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Add a Director</Link></li>
                    </ul>
                  </li>
                  <li className='dropstart'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounting & Tax</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="" className="dropdown-item">Accounting and Book-keeping</Link></li>
                    </ul>
                  </li>
                  <li className='dropstart'><Link className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    Web Developement</Link>
                    <ul className="dropdown-menu">
                      <li><Link href="#" className="dropdown-item">E-commerce Websites</Link></li>
                    </ul>
                  </li>

                </ul>
              </li>
            </ul>
            <div>
              <Link href='tel:+917983843946' className='nav-item bg-success rounded text-decoration-none text-light p-2'><i className="bi bi-telephone-outbound pe-1"></i>7983843964</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
