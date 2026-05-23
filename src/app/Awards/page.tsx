// src/app/Awards/page.tsx

"use client";

import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import HackathonEntry from "./HackathonEntry";

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: "01",
    title: "Great flavor byte",
    award: "champion",
    description: "Quiz bee champion on whole CS student in university of cabuyao",
    reflection: "Participating in this competition was a turning point in my journey as a student. It taught me that real-world problems require more than just code; they require empathy for the user and a drive to innovate beyond the classroom.",
    imageSrc: '/cert/Cert3.png',
    trophyType: "champion",
  },
  {
    entryNumber: "02",
    title: "Thesis & capstone ready",
    award: "participation award",
    description: "Attending thesis & capstone ready.",
    reflection: "Attending this event made me realize how much research goes into a successful project. It's not just about building something that works, but something that truly addresses a gap in current technology.",
    imageSrc: '/cert/Cert2.png',
    trophyType: "silver",
  },
  {
    entryNumber: "03",
    title: "LagunaTech Grand Summit",
    award: "participation award",
    description: "Participating in lagunatech grand summit.",
    reflection: "Being part of the LagunaTech Grand Summit was an incredible experience. Connecting with fellow tech enthusiasts and industry leaders gave me a clearer vision of where I want to take my skills after graduation.",
    imageSrc: '/cert/Cert1.png',
    trophyType: "silver",
  }
];

export default function Awards() {
  return (
    <>
      {/* Main content area for Awards */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center pt-4 pb-1">
          <BlurText
            text="Competition Entries"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center text-white"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20">
          {/* Falling Text Section */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block min-h-[230px] overflow-hidden">
            <FallingText
              text={`Besides being a student and developer, I am big on joining competitions. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:`}
              highlightWords={["competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10 min-h-[160px] overflow-hidden">
            <FallingText
              text={`Besides being a student and developer, I am big on joining competitions. It is a great way to work on solving actual problems and meet interesting people. Here are some of the events I've participated in:`}
              highlightWords={["competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* New list rendering since I removed CertificatesSection */}
          <div className="mt-10">
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                reflection={entry.reflection}
                imageSrc={entry.imageSrc}
                trophyType={entry.trophyType}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Charles Platon. All rights reserved.</p>
      </footer>
    </>
  );
}

