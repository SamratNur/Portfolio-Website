import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProfilePic from '../Images/profile.jpg';

const Content = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const textInView = useInView(textRef, { once: true, amount: 0.3 });
  const imgInView = useInView(imgRef, { once: true, amount: 0.3 });

  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full bg-white rounded-2xl p-6 font-secondary shadow-md">

      <motion.div
        ref={textRef}
        className="w-full md:w-1/2 mt-6 md:mt-0 px-2"
        initial={{ x: -100, opacity: 0 }}
        animate={textInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-primary">
          Hi everyone!
        </h1>

        <p className="text-lg md:text-xl mt-6 text-gray-700 font-secondary">
          I’m <span className="text-[#e2953c] font-bold">Samrat</span> — a business student, 
          <a
            href="https://www.youtube.com/@samratnurs"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline text-[#e2953c] hover:text-[#ebab17] hover:no-underline"
          >
            blogger
          </a>, and digital marketer.
        </p>

        <p className="text-base md:text-lg mt-6 text-gray-600 leading-relaxed font-tertiary">
          I lead teams, build brands, and create content that connects. Passionate about growth — online and offline.
        </p>
      </motion.div>

      <motion.div
        ref={imgRef}
        className="w-full md:w-1/2 mb-4 md:mb-0 px-4"
        initial={{ x: 100, opacity: 0 }}
        animate={imgInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <img
          src={ProfilePic}
          alt="Samrat Nur"
          className="w-full h-auto rounded-full"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Content;
