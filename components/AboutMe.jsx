import React from 'react';
import { motion } from 'framer-motion';
import pfp from '../Images/Profile2.jpg';
import underline from '../Images/underline1.png';

const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full p-6">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
      >
        <img
          src={pfp}
          alt="Samrat Nur"
          className="w-full h-auto rounded-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full md:w-1/2 mt-6 md:mt-0 px-2"
      >
        <h1 className="font-primary text-4xl leading-none">
          A bit more about me
        </h1>

        <motion.img
          src={underline}
          alt="underline"
          className="w-36 mt-[-4px] block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        <motion.p
          className="text-fourthBg font-tertiary text-base md:text-lg mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ul>
            <li>
              I’m an Economics & Management student at the University of Manitoba who thrives on turning ideas into impact.
              In just 6 months, I helped convert 60+ prospects and drove $50K+ in sales — all while juggling emails, content, and the occasional meme.
              Oh, and I speak three languages: English, Bengali, and Hindi. Multitasking? It’s in my DNA.
            </li>
          </ul>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
