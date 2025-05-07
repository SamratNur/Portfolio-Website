import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import health1 from '../Images/Health1.png';
import health2 from '../Images/Health2.png';
import lab1 from '../Images/lab1.png';
import lab2 from '../Images/lab2.png';
import music1 from '../Images/music1.png';
import music2 from '../Images/music2.png';

const Body = () => {
  const [hoverB, setHoverB] = useState(false);
  const [hoverC, setHoverC] = useState(false);
  const [hoverD, setHoverD] = useState(false);
  const [stopWave, setStopWave] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStopWave(true);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const waveAnimation = (delay) => ({
    y: stopWave ? 0 : [0, -10, 0, 10, 0],
    transition: {
      duration: 1,
      ease: 'easeInOut',
      repeat: stopWave ? 0 : Infinity,
      delay,
    },
  });

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-min grid-flow-row-dense gap-4">

        <motion.div
          className="flex flex-col justify-center items-center text-center h-full mb-25"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          variants={cardVariant}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-fourthBg font-primary">
            My story
          </h1>
          <h2 className="text-4xl md:text-6xl text-gray-900 font-tertiary flex gap-1 items-end">
            so far
            <div className="flex gap-[2px] text-fourthBg font-bold">
              {[0, 0.15, 0.3].map((delay, i) => (
                <motion.span
                  key={i}
                  animate={waveAnimation(delay)}
                  initial={{ y: 0 }}
                  className="text-4xl md:text-6xl"
                >
                  .
                </motion.span>
              ))}
            </div>
          </h2>
        </motion.div>

        <motion.div
          className="bg-backGround rounded-xl p-3 hover:bg-[#f0ce86] hover:shadow-xl transform hover:scale-105 transition duration-300 md:row-span-2 md:ml-3"
          onMouseEnter={() => setHoverB(true)}
          onMouseLeave={() => setHoverB(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={cardVariant}
        >
          <div className="flex items-center mb-3">
            <div className="w-[60px] h-[60px] mr-3 flex-shrink-0">
              <img
                src={hoverB ? health2 : health1}
                alt="Health icon"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold font-secondary">
                StretchLab Winnipeg Seasons
              </h1>
              <h2 className="text-fourthBg text-sm md:text-base font-secondary">
                General Manager
              </h2>
            </div>
          </div>
          <ul className="list-disc pl-10 space-y-1 font-tertiary">
            <li>Lead a team of 18 staff</li>
            <li>Fostered a collaborative, high-performing culture</li>
            <li>Oversaw daily operations</li>
            <li>Onboarded and trained new staff</li>
            <li>Coached trainees to hit sales goals</li>
            <li>Helped to build strong staff relationships</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-backGround rounded-xl p-3 hover:bg-[#EF582E] hover:shadow-xl transform hover:scale-105 transition duration-300 md:row-span-2 md:mr-3"
          onMouseEnter={() => setHoverC(true)}
          onMouseLeave={() => setHoverC(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={cardVariant}
        >
          <div className="flex items-center mb-3">
            <div className="w-[60px] h-[60px] mr-3 flex-shrink-0">
              <img
                src={hoverC ? lab2 : lab1}
                alt="Lab icon"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold font-secondary">
                StretchLab Winnipeg Seasons
              </h1>
              <h2 className="text-fourthBg text-sm md:text-base font-secondary">
                Sales Representative
              </h2>
            </div>
          </div>
          <ul className="list-disc pl-10 space-y-1 font-tertiary">
            <li>Engaged with new prospects through in-person consultation and phone calls</li>
            <li>Managed sales pipeline</li>
            <li>Tracked leads and scheduled appointments to ensure seamless experience for customers</li>
            <li>Collaborated with management to meet sales target</li>
            <li>Maintained high standards of cleanliness and safety</li>
            <li>Promoted the Xponential+ platform and other studio services to boost client retention and maximize revenue per member.</li>
            <li>Maintained accurate records of client interactions, trial conversions, and payment plans in the CRM system</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-backGround rounded-xl p-3 hover:bg-[#15A3C7] hover:shadow-xl transform hover:scale-105 transition duration-300 md:ml-3 md:mt-3"
          onMouseEnter={() => setHoverD(true)}
          onMouseLeave={() => setHoverD(false)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={cardVariant}
        >
          <div className="flex items-center mb-3">
            <div className="w-[60px] h-[60px] mr-3 flex-shrink-0">
              <img
                src={hoverD ? music2 : music1}
                alt="Music icon"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-bold font-secondary">
                Music World | Dhaka, BD
              </h1>
              <h2 className="text-fourthBg text-sm md:text-base font-secondary">
                Sales Rep. & Digital Marketing Manager
              </h2>
            </div>
          </div>
          <ul className="list-disc pl-10 space-y-1 font-tertiary">
            <li>Sold a wide range of musical products, from instruments to accessories</li>
            <li>Connected with customers to meet their needs</li>
            <li>Designed and launched an e-commerce website to facilitate customers easily - increasing online sales by 100,000BDT</li>
            <li>Promoted store events by distributing marketing materials such as posters, fliers and digital content</li>
            <li>Managed email marketing campaigns, boosting customer engagement</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Body;
