import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    number: string;
    title: string;
    description: string;
    techstack: string[];
    imageSrc: string;
    link: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, index }) => {
  const pattern = index % 4;

  let numberPositionClasses = '';
  let contentAlignmentClasses = '';
  let imageOrderClass = '';
  let textOrderClass = '';

  switch (pattern) {
    case 0:
      numberPositionClasses = 'top-4 left-4';
      contentAlignmentClasses = 'text-right items-end';
      textOrderClass = 'order-1';
      imageOrderClass = 'order-2';
      break;
    case 1:
      numberPositionClasses = 'bottom-4 left-4';
      contentAlignmentClasses = 'text-right items-end';
      textOrderClass = 'order-2';
      imageOrderClass = 'order-1';
      break;
    case 2:
      numberPositionClasses = 'top-4 right-4';
      contentAlignmentClasses = 'text-left items-start';
      textOrderClass = 'order-1';
      imageOrderClass = 'order-2';
      break;
    case 3:
      numberPositionClasses = 'bottom-4 right-4';
      contentAlignmentClasses = 'text-left items-start';
      textOrderClass = 'order-2';
      imageOrderClass = 'order-1';
      break;
  }

  const handleImageClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div
      className="relative flex flex-col justify-between py-6 px-15 md:m-0 m-5 border border-white border-opacity-20 bg-transparent overflow-hidden h-full"
    >
      {/* Large Project Number - Absolutely Positioned */}
      <div className={`absolute md:text-6xl text-3xl p-6 font-bold text-white text-opacity-10 ${numberPositionClasses}`}>
        {project.number}
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-between h-full">

        {/* Text Content Block */}
        <div className={`flex flex-col ${contentAlignmentClasses} ${textOrderClass} z-10 p-6`}>
          <div>
            <h3 className="md:text-xl text-md font-semibold text-white">{project.title}</h3>
            <p className="md:text-sm text-xs text-gray-400">{project.description}</p>
          </div>
          <div className="mt-2">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techstack.map((icon, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={icon}
                    alt={`Tech stack icon ${i}`}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Image Block */}
        <motion.div
          className={`relative w-full flex-grow rounded-xl overflow-hidden z-10 ${imageOrderClass}`}
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={handleImageClick}
        >
          <div className="w-full aspect-[4/3] relative">
            <Image
              src={project.imageSrc}
              alt={`${project.title} image`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;