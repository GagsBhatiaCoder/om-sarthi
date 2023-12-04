import React from 'react'
import Navbar from '../Components/Navbar'
import MainSection from '../Components/MainSection'
import OurService from '../Services/OurService'
import Footer from '../Components/Footer'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'
import Achievements from '../Components/Achievements'

export default function Home() {
  return (
    <div>
      <Navbar />
      <FloatWatsappBtn />
      <MainSection />
      <OurService />
      <Achievements />
      <Footer />
    </div>
  )
}
