import React, { useState, useRef } from 'react';
import ChevronLeft from '../Images/ChevronLeft.png';
import ChevronRight from '../Images/ChevronRight.png';


const videos = [
  {
    id: 1,
    title: 'Bangladesh to Canada Vlog (QATAR AIRWAYS)- [Dhaka to Winnipeg]',
    date: 'May 16, 2024',
    url: 'https://www.youtube.com/watch?v=6og8nA7rUbU',
    thumb: 'https://img.youtube.com/vi/6og8nA7rUbU/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'FIRST IMPRESSION OF CANADA AS AN INTERNATIONAL STUDENT',
    date: 'May 20, 2024',
    url: 'https://www.youtube.com/watch?v=GEOlq_Gk89U',
    thumb: 'https://img.youtube.com/vi/GEOlq_Gk89U/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Secret to get BAND 8 in IELTS: Strategies Revealed',
    date: 'Jun 30, 2024',
    url: 'https://www.youtube.com/watch?v=EYPexFNGLaQ',
    thumb: 'https://img.youtube.com/vi/EYPexFNGLaQ/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'How I Got a Job in CANADA in 7 Days (SECRET)',
    date: 'Aug 28, 2024',
    url: 'https://www.youtube.com/watch?v=OeRUi1iWbUs',
    thumb: 'https://img.youtube.com/vi/OeRUi1iWbUs/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Cooking Day as an international student',
    date: 'Sep 17, 2024',
    url: 'https://www.youtube.com/watch?v=S2EpP0esBSY',
    thumb: 'https://img.youtube.com/vi/S2EpP0esBSY/maxresdefault.jpg',
  },
  {
    id: 6,
    title: 'How to Impress your IELTS speaking examiner #ielts #ieltsbangla #ieltsspeaking #ieltstips',
    date: 'Jul 2, 2024',
    url: 'https://www.youtube.com/shorts/9Hk7QNM2XeQ',
    thumb: 'https://img.youtube.com/vi/9Hk7QNM2XeQ/maxresdefault.jpg',
  },
  {
    id: 7,
    title: 'Racism in Canada #bangladeshicanadianvlogger #bangladeshicanadianstudent #racismincanada',
    date: 'Jul 1, 2024',
    url: 'https://www.youtube.com/shorts/DLHQbUCxLnk',
    thumb: 'https://img.youtube.com/vi/DLHQbUCxLnk/maxresdefault.jpg',
  },
];

const VideoGallery = () => {
    const scrollRef = useRef();
  
    const scroll = (dir) => {
      const container = scrollRef.current;
      container.scrollBy({ left: dir === 'left' ? -container.offsetWidth * 0.8 : container.offsetWidth * 0.8, behavior: 'smooth' });
    };
  
    return (
      <div className="relative py-10 bg-fourthBg font-primary">
        <div className="flex justify-center gap-4 mb-2">
          <button onClick={() => scroll('left')} className="rounded-full bg-thirdBg p-4 hover:bg-thirdBg/70">
            <img src={ChevronLeft} alt="Left" className="w-6 h-6" />
          </button>
          <button onClick={() => scroll('right')} className="rounded-full bg-thirdBg p-4 hover:bg-thirdBg/70">
            <img src={ChevronRight} alt="Right" className="w-6 h-6" />
          </button>
        </div>
  
        <div ref={scrollRef} className="grid auto-cols-[minmax(250px,1fr)] grid-flow-col gap-6 overflow-x-auto scroll-smooth scrollbar-hide h-auto pt-4 pb-4">
          {videos.map((v) => (
            <div
              key={v.id}
              className="bg-backGround hover:bg-thirdBg hover:scale-[1.08] rounded-3xl shadow-md overflow-hidden"
            >
              <div className="aspect-video">
                <img src={v.thumb} alt={v.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{v.date}</p>
                <h3 className="text-lg font-semibold mb-3">{v.title}</h3>
                <a href={v.url} target="_blank" rel="noreferrer"
                   className="font-medium hover:underline flex items-center gap-1 font-primary">
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
          <a className='text-tertiary font-bold text-white bg-thirdBg p-3 rounded-full mt-4 hover:scale-[1.06] 
          hover:bg-thirdBg/70 hover:cursor-pointer' href={'https://www.youtube.com/@samratnurs'} target="_blank"
          rel="noopener noreferrer">
            Watch More Videos
          </a>
        </div>
      </div>
    );
  };
  
  export default VideoGallery;