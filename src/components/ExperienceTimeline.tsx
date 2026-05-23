'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';


const experiences = [
  {
    id: 1,
    title: 'Student Trainee',
    company: 'Freecodecamp',
    year: '2022',
    description: 'Attended a three-month course at Freecodecamp during my younger years, where we were taught about the fundamentals of web development and the main components of a computer system.',
    logo: '/exp_logos/freecodecamp.png',
  },
  {
    id: 2,
    title: 'LagunaTech',
    company: 'Computer Science Grand Summit',
    year: '2024',
    description: 'Attended LagunaTech Computer Science Grand Summit. Events like these are a powerful reminder that while coding can be a solitary task, Grateful for the chance to connect with peers and bridge the gap between academic theory and the professional tech landscape.',
    logo: '/exp_logos/uc-cabuyao.jpg',
  },
  {
    id: 3,
    title: 'ACSS The Great Flavor Byte',
    company: 'University of Cabuyao',
    year: '2026',
    description: 'Recently participated in the University-wide Computer Science Quizbee, competing against the brightest minds across all year levels. After several intense rounds covering everything from complex algorithms to system architecture, we emerged as the Overall Champions.',
    logo: '/exp_logos/uc-cabuyao.jpg',
  },
  {
    id: 4,
    title: 'Thesis & Capstone Ready',
    company: 'University of Cabuyao',
    year: '2026',
    description: 'Attended thesis & capstone ready at university of cabutayo recently, this is essentially the "Hello World" of the research phase. It marks the transition from consuming existing knowledge to the architecture of new solutions.',
    logo: '/exp_logos/uc-cabuyao.jpg',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01
  });

  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        style={{ top: dotTop }}
      />

      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo - circular */}
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5 rounded-full overflow-hidden border border-gray-600">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;