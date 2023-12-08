import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import FullServiceDetail from './Services/FullServiceDetail';
import AllServices from './Services/AllServices';



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
        </Routes>
      </Router>     
    </>
  )
}

export default App
