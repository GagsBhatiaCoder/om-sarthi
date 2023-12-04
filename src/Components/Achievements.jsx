import React from 'react'
import AboutCard from '../Components/AboutCard';
import Space from '../assets/Icons/space.png'
import Startup from '../assets/Icons/startup.png'
import Analytics from '../assets/Icons/analytics.png';
import Reward from '../assets/Icons/rewards.png';


export default function Achievements() {
  return (
    <div>
       <div className='d-flex flex-wrap justify-content-around p-4'>
        <AboutCard Img={Space} title="7+" content="Years of Startup
       Centric Legal Expertise" />
        <AboutCard Img={Startup} title="25000+" content="Startups Served Across India" />
        <AboutCard Img={Analytics} title="3000+" content="Filings Every Year" />
      </div>
      <div className='d-flex flex-wrap justify-content-around p-4'>
        <AboutCard Img={Reward} title="Rewarded By" content="Finance Minister of India" />
        <AboutCard Img={Space} title="3000+" content="Filings Every Year" />
        <AboutCard Img={Space} title="3000+" content="Filings Every Year" />
      </div>
    </div>
  )
}
