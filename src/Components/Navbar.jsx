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
                      <li><Link to="/allservice/5" className="dropdown-item ">Private Limited Company</Link></li>
                      <li><Link to="/allservice/16" className="dropdown-item">Limited Liability Partnership</Link></li>
                      <li><Link to="/allservice/17" className="dropdown-item">One Person Company</Link></li>
                      <li><Link to="/allservice/18" className="dropdown-item">Sole Proprietorship</Link></li>
                      <li><Link to="/allservice/11" className="dropdown-item">Nidhi Company</Link></li>
                      <li><Link to="/allservice/6" className="dropdown-item">Farmer Producer Company</Link></li>
                      <li><Link to="/allservice/12" className="dropdown-item">Partnership Firm</Link></li>
                      <li><Link to="/allservice/13" className="dropdown-item">Startup India Registration</Link></li>
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
                      <li><Link to="/allservice/19" className="dropdown-item">Digital Signature Certificate</Link></li>
                      <li><Link href="" className="dropdown-item">Udyam Registration</Link></li>
                      <li><Link to="/allservice/3" className="dropdown-item">MSME Registration</Link></li>
                      <li><Link to="/allservice/8" className="dropdown-item">ISO Certification</Link></li>
                      <li><Link to="/allservice/4" className="dropdown-item">FSSAI [Food License]</Link></li>
                      <li><Link to="/allservice/7" className="dropdown-item">IEC [Import/Export Code]</Link></li>
                      <li><Link to="/allservice/20" className="dropdown-item">Shop & Establishment Registration</Link></li>
                      <li><Link to="/allservice/21" className="dropdown-item">Labour Registration</Link></li>


                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tax & Compilence
                </Link>
                <ul className="dropdown-menu">
                  <li ><Link className='dropdown-item' to="/allservice/14" >Accounting & Book Keeping</Link></li>
                  <li ><Link className='dropdown-item' to="/allservice/1" >GST Registration</Link></li>
                  <li ><Link className='dropdown-item' to="/allservice/15" >GST Return Filling</Link></li>
                  <li ><Link className='dropdown-item' to="/allservice/2">Income Tax</Link></li>
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Trademark & IP
                </Link>
                <ul className="dropdown-menu">
                  <li className='dropdown-item'><Link className='dropdown-item' to="/allservice/22">Trademark Registration</Link></li>
                  <li className='dropdown-item'><Link className='dropdown-item' to="/allservice/23">Copywright Registration</Link></li>
                  <li className='dropdown-item'><Link className='dropdown-item' to="/allservice/24">Patent</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Web Developement
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><Link to="/allservice/25" className="dropdown-item">Web/E-commerce Website </Link> </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  NGO
                </Link>
                <ul className="dropdown-menu">
                  <li ><Link to="/allservice/28" className="dropdown-item">Section-8</Link></li>
                  <li ><Link to="/allservice/29" className="dropdown-item">Society Registration</Link></li>
                  <li ><Link to="/allservice/30" className="dropdown-item">Trust registration</Link></li>
                  <li ><Link to="/allservice/31" className="dropdown-item">CSR-1 Filling</Link></li>
                  <li ><Link to="/allservice/32" className="dropdown-item">Sec. 80G & 12A Registration</Link></li>
                  <li ><Link to="/allservice/33" className="dropdown-item">Niti Aayog Resgistration</Link></li>
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
