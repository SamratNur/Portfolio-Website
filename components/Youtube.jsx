import React from 'react'
import yt from '../Images/youtube.png'

const Youtube = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-4 mb-8">
      <img
        src={yt}
        alt="YouTube Logo"
        className="w-[clamp(2rem,8vw,6rem)] h-auto object-contain"
      />
      <div className="flex flex-col text-center">
        <h1 className="w-full text-[clamp(1.5rem,4vw,4rem)] font-primary leading-tight mt-8">
          Watch My
        </h1>
        <h2 className="w-full text-[clamp(1.5rem,4vw,4rem)] font-primary font-bold leading-tight text-fourthBg">
          Most Popular Videos
        </h2>
      </div>
    </div>

    <div className="w-full bg-fourthBg">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/h5mE4WWjLFs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          
        </div>
      </div>
    </div>
  </>
)

export default Youtube
