import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import FullServiceDetail from './Services/FullServiceDetail';
import AllServices from './Services/AllServices';
import RefundPolicy from './Pages/RefundPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';



function App() {
  

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fullservice" element={<FullServiceDetail />} />
          <Route path="/allservice" element={<AllServices />} />
          <Route path="/allservice/:id" element={<FullServiceDetail />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>     
    </>
  )
}

export default App
