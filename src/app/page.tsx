// app/page.tsx (or wherever your page file is)

"use client"

import React from "react"; // Removed useState
// Import your components and blocks
// Removed GooeyNav import
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
//import dynamic from 'next/dynamic';
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import ExperienceTimeline from '@/components/ExperienceTimeline';
import SkillTag from '@/components/SkillTag'; // Assuming SkillTag is in components folder
import ProjectCard from '@/components/ProjectCard'; // Import the new ProjectCard component

// data/projects.ts
// Define your projects array (add your actual project data here)
const projects = [
  {
    id: 1,
    number: '01',
    title: 'The Lost Hospital',
    description: 'Game Developer',
    techstack: [
      '/techstack/unrealengine.svg',
      '/techstack/blender.svg',
      '/techstack/mixamo.png.png',
      '/techstack/cpp.svg',
      '/techstack/sketchfab.svg',
      '/techstack/epicgames.svg',
    ],
    imageSrc: '/proj/projectOne.png?v=2',
    link: 'https://charles-cs.github.io/Portfolio/The%20Lost%20Hospital.html',
  },
  {
    id: 2,
    number: '02',
    title: 'Tech Tressure',
    description: 'Web Developer',
    techstack: [
      '/techstack/html.svg',
      '/techstack/css.svg',
      '/techstack/js.svg',
    ],
    imageSrc: '/proj/projectTwo.png?v=2',
    link: 'https://charles-cs.github.io/Portfolio/TechTressure.html',
  },
  {
    id: 3,
    number: '03',
    title: 'Sonic Path',
    description: 'Game Developer',
    techstack: [
      '/techstack/unity.svg',
      '/techstack/blender.svg',
      '/techstack/csharp.svg',
      '/techstack/sketchfab.svg',
    ],
    imageSrc: '/proj/projectThree.png?v=2',
    link: '',
  },
];


// Removed items constant

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

// Define your skill arrays (you could also move these to a data file if they get long)
const devSkills = [
  'Next.js', 'Tailwind', 'React', 'Javascript', 'Java', 'CSS', 'Node.js',
  'Firebase', 'MySQL', 'C#'
];

const contentSkills = [
  'Blender', 'Unity', 'Unreal Engine', 'Substance Painter', 'PureRef'
];

export default function Home() {
  // Removed mobileMenuOpen state
  return (
    // The cursor: 'none' style is now applied globally in layout.tsx
    // Removed outer div as layout.tsx now handles the main structure
    // <div className="flex flex-col min-h-screen bg-[#101112] font-gilroy"> // Removed this line
    <> {/* Added React Fragment wrapper */}
      {/* Main content area */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">

        {/* Hero section */}
        <div className="w-full flex flex-col items-center relative pb-42">
          <div className="w-full flex justify-center items-center my-4 md:mt-15 text-center font-bold relative px-4 md:px-0">
            <BlurText
              text="Charles Platon"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="lg:text-9xl md:text-7xl text-4xl text-center"
            />
          </div>

          <div className="font-bold text-center opacity-0 animate-fadeIn mt-1 md:mt-3">
            <TrueFocus
              sentence="Student   Developer   Creator"
              manualMode={true}
              blurAmount={5}
              borderColor="cyan"
              animationDuration={0.3}
              pauseBetweenAnimations={1}
            />
          </div>

          {/* style jsx block is fine */}
          <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
            animation-delay: 0.8s;
          }
        `}</style>


        </div> {/* end hero wrapper */}

        <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:mt-35 mt-10 md:space-x-50 space-x-0">
          {/* Tech Stack Section Start */}
          <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
            {/* DEVELOP Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                DEVELOP
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Started web development using NextJS, React and Tailwind and eventually switched to game development using Unreal Engine and Unity.
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {devSkills.map(skill => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>

            {/* CONTENTS Card */}
            {/* custom-corner-border class is kept from previous step */}
            {/* hover:scale-105 on the card wrapper is kept */}
            <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 custom-corner-border">
              <h3 className="text-white font-bold md:text-2xl text:lg tracking-wide mb-3">
                CREATE {/* Updated title based on your code */}
              </h3>
              <p className="text-gray-400 md:text-md text-sm mt-2 leading-relaxed mb-5">
                Balancing 3rd-year CS with 3D model creation is a whole different grind. It&apos;s been a blast shifting from systems logic to mastering clean topology and high-fidelity rendering. Whether it&apos;s modeling a laptop or a game asset, it&apos;s all about bridging that gap between solid code and a sharp visual vibe.
              </p>
              <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                Skillset &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {contentSkills.map(skill => (
                  <SkillTag key={skill} skillName={skill} />
                ))}
              </div>
            </div>
          </div>
          {/* Tech Stack Section End */}


          {/* What I do Section */}
          <div className="flex flex-col">
            <BlurText
              text="What I do"
              delay={150}
              animateBy="letters"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="md:text-7xl text-3xl font-extrabold"
            />

            <div className="hidden md:block mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/charles-photo-new.png"
                altText="Charles Platon"
                captionText="Charles Platon"
                containerHeight="600px"
                containerWidth="500px"
                imageHeight="600px"
                imageWidth="500px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute top-5 left-85">
                    Charles
                  </p>
                }
              />
            </div>

            <div className="md:hidden mt-10 mb-20">
              <TiltedCard
                imageSrc="/photos/charles-photo-new.png"
                altText="Charles Platon"
                captionText="Charles Platon"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <p className="bg-transparent px-4 py-2 border-1 border-dashed rounded-lg opacity-50 font-bold m-5 absolute">
                    Charles
                  </p>
                }
              />
            </div>


          </div>
        </div>

        {/* Experience Section */}
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
          <BlurText
            text=" My Experience"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>
        <ExperienceTimeline />

        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5 font-extrabold">
          <BlurText
            text=" Recent Projects"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="md:text-7xl text-3xl font-extrabold"
          />
        </div>

        {/* Projects Section Start */}
        {/* Modified this div to use a grid layout for two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1400px] mx-auto mt-10">
          {/* Now mapping over the imported projects array */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        {/* Projects Section End */}
      </main>


      {/* Footer Section - Consider moving this to layout.tsx as well for consistency */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-[var(--card-border)] text-[var(--muted)] text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} Charles Platon. All rights reserved.</p>
      </footer>
    </> // Closed React Fragment wrapper
    // </div> // Removed this closing tag
  );
}