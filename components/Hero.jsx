import React, { useState } from 'react';
import logo from '../Images/Logo.PNG';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative flex items-center justify-between px-6 py-4 w-full">
      <div className="flex items-center space-x-3">
        <img src={logo} className="w-auto h-[60px]" alt="Logo" />

        <div className="relative inline-block">
          <span className="font-primary text-2xl sm:text-3xl font-bold relative z-10">
            Samrat Nur
          </span>
          <svg
            className="absolute left-0 bottom-0 w-full h-3 z-0"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 8 C 25 12, 75 2, 100 8"
              stroke="#4fd1ff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="hidden xl:flex space-x-4">
        <button
          onClick={scrollToBottom}
          className="font-secondary text-base font-bold px-4 py-2 hover:underline hover:cursor-pointer"
        >
          Contact Me
        </button>
        <a
          href="https://www.youtube.com/@samratnurs"
          target="_blank"
          rel="noopener noreferrer"
          className="font-secondary text-base font-bold px-4 py-2 hover:underline"
        >
          Visit My Channel
        </a>
      </div>

      {!menuOpen && (
        <button
          className="xl:hidden bg-[#e2953c] text-black px-4 py-2 rounded-md font-bold ml-4 z-30 hover:bg-[#ebab17] hover:cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      )}

      {menuOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg flex flex-col items-start px-6 py-8 space-y-4 z-20 transition-transform duration-300">
          <button
            className="self-end text-xl mb-4 hover:cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <button
            onClick={() => {
              scrollToBottom();
              setMenuOpen(false);
            }}
            className="font-secondary text-lg font-bold hover:underline hover:cursor-pointer"
          >
            Contact Me
          </button>
          <a
            href="https://www.youtube.com/@samratnurs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-secondary text-lg font-bold hover:underline"
          >
            Visit My Channel
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
