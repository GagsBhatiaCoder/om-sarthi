import React from 'react'
import Navbar from '../Components/Navbar'
import MainSection from '../Components/MainSection'
import Footer from '../Components/Footer'
import FloatWatsappBtn from '../Components/FloatWatsappBtn'
import Achievements from '../Components/Achievements'
import serviceData from '../Services/ServiceData'
import ServiceCard from '../Services/ServiceCard'
import { Link } from 'react-router-dom'
// import { HashLoader } from 'react-spinners'

export default function Home() {
  // const [loading, setLoading] = useState(true)
  const homeServiceData = serviceData.filter((post) => post.id <= 6 );
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  // useEffect(() => {
  //   const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');

  //   if (hasLoadedBefore) {
      
  //     setLoading(false);
  //   } else {
  //     // First load, set loading to true and mark as loaded
  //     setLoading(true);
  //     localStorage.setItem('hasLoadedBefore', 'true');
  //   }
  // }, []);

  



  return (
    <div>
            {/* {loading && (<div className='loader' style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.8)", zIndex: 1000}}><HashLoader
      color={"#0B5ED7"}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> </div>)} */}
      <Navbar />
      <FloatWatsappBtn />
      <MainSection />
      <div className='container p-5'>
        <h4 className='text-center mb-5'> Featured Services </h4>
        <div className='d-flex flex-wrap justify-content-around'>
          {homeServiceData.map((post) => (
            <ServiceCard key={post.id} {...post} />
          ))}
        </div>
        <div className='d-flex justify-content-center'>
        <Link className='bg-success rounded p-2 my-2 text-light text-decoration-none' to="/allservice"
        onClick={scrollToTop} > All Services </Link>
        </div>
      </div>
      <Achievements />
      <Footer />
    </div>
  )
}
