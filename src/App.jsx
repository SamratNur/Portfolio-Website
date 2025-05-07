import React from 'react'
import Hero from '../components/Hero.jsx'
import Content from '../components/Content.jsx'
import Body from '../components/Body.jsx'
import AboutMe from '../components/AboutMe.jsx'
import Youtube from '../components/Youtube.jsx'
import Carousel from '../components/Carousel.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import ContactMe from '../components/ContactMe.jsx'

import backGround from '../Images/backGround2.jpg';
import background2 from '../Images/backGround3.jpg'
import background3 from '../Images/backGround4.jpg'


const App = () => {
  return (
    <div>
      <div className="p-4 sm:p-10 mx-2 sm:mx-[12vw] my-[20px] rounded-2xl overflow-hidden bg-cover bg-center" 
      style={{ backgroundImage: `url(${backGround})` }}>
        <Hero />
        <Content />
      </div>
      
      <div className='p-4 sm:p-10 mx-2 sm:mx-[12vw] my-[20px] rounded-2xl overflow-hidden'>
        <Body/>
      </div>
      
      <div
        className="bg-thirdBg bg-cover bg-center bg-no-repeat bg-blend-overlay p-4 sm:p-10 mx-2 sm:mx-[12vw] my-[20px] rounded-2xl overflow-hidden"
        style={{ backgroundImage: `url(${background2})` }}>
        <AboutMe />
      </div>


      <div className='w-full'>
        <Youtube/>
        <Carousel/>
      </div>

      <div className='bg-thirdBg bg-cover bg-center bg-no-repeat bg-blend-overlay p-4 sm:p-10 mx-2 sm:mx-[12vw] my-[20px] mt-7 rounded-2xl overflow-hidden'
        style={{ backgroundImage: `url(${background3})` }}>
        <NewsLetter/>
      </div>

      <div className='p-4 sm:p-10 mx-2 sm:mx-[12vw] my-[20px] rounded-2xl overflow-hidden'>
        <ContactMe/>
      </div>


    </div>
  )
}

export default App
