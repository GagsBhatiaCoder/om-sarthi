import React from 'react';
import '../App.css'
import Navbar from '../Components/Navbar'
import Img1 from '../assets/img1.jpg'
import FloatWatsappBtn from '../Components/FloatWatsappBtn';
import Achievements from '../Components/Achievements';
import Footer from '../Components/Footer';


export default function AboutUs() {
  return (
    <div className=''>
      <Navbar />
      <FloatWatsappBtn />
      <div className='d-flex flex-column justify-content-around flex-md-row p-5' style={{ background: "#0D6EFD" }}>
        <div className='d-flex flex-column justify-content-center align-items-center' >
          <h2 className='text-light p-3'>About Us</h2>
          <p className='text-light fs-5'> <b>Anirudhh Mittal</b>, founder and director of Samay,
            brings a wealth of legal expertise with an MMA LLB
            background. As the visionary behind Om Sarthi Solutions
            since 2017, Anirudhh has propelled the firm to recognition
            and commendation from the Finance Minister of India,
            solidifying his commitment to excellence in the legal realm.
          </p>
        </div>

        <div>
          <img className='founder-img' src={Img1} alt="Author Img" />
        </div>
      </div>
      <div className='p-4'>
        <h4 className='text-center p-2 '>Our Story</h4>

        <p className='fs-6'>Anirudhh Mittal, with his profound legal expertise, embarked on the journey of <b>Om Sarthi Solutions in 2017,</b> establishing a foundation rooted in legal excellence. Over the years, Om Sarthi Solutions has flourished under Anirudhh's leadership, earning recognition and accolades for its outstanding contributions to the legal landscape.</p>
        <p> <b>Samay</b>, as an integral component of the Om Sarthi Group, inherits the legacy of Om Sarthi Solutions' success. With a clear focus on delivering top-notch legal services, Samay is dedicated to navigating the intricacies of the legal landscape for its clients.</p>
        <p>Our commitment to excellence has not gone unnoticed, as the firm has been duly recognized and rewarded by none other than the <b>Finance Minister of India</b>. This acknowledgment serves as a testament to our unwavering dedication, ethical practices, and impactful contributions to the legal field.</p>
        <p>At Samay, we believe in the intersection of time and legal precision. Our team, under the adept guidance of Anirudhh Mittal, works tirelessly to uphold the principles of justice, ensuring that each client receives personalized, effective, and timely legal solutions.</p>
        <p>As we continue to evolve and expand our horizons, Samay remains committed to being a beacon of legal expertise, offering clients a trusted partner in their legal journey. Join us as we redefine legal services, one moment at a time.</p>

      </div>
      <Achievements />
      {/* <div className='d-flex flex-wrap justify-content-around p-4'>
        <AboutCard Img={Space} title="7+" content="Years of Startup
       Centric Legal Expertise" />
        <AboutCard Img={Startup} title="25000+" content="Startups Served Across India" />
        <AboutCard Img={Analytics} title="3000+" content="Filings Every Year" />
      </div>
      <div className='d-flex flex-wrap justify-content-around p-4'>
        <AboutCard Img={Reward} title="Rewarded By" content="Finance Minister of India" />
        <AboutCard Img={Space} title="3000+" content="Filings Every Year" />
        <AboutCard Img={Space} title="3000+" content="Filings Every Year" />
      </div> */}
      <Footer />
    </div>
  )
}
