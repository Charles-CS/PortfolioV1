// components/HackathonEntry.tsx
import React, { useState } from 'react';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link'; // Import Link
import { motion, AnimatePresence } from 'framer-motion';

interface HackathonEntryProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  reflection?: string; // Optional reflection
  imageSrc?: string; // Optional project image source
  projectLink?: string; // Optional link for the project image
  trophyType: 'first' | 'second' | 'third' | 'special' | 'participant' | string; // Specify trophy type
  techStackIcons?: string[]; // Optional array of paths to tech stack icons
}

// Mapping of trophy types to image paths
const trophyImagePaths: Record<string, string> = {
  first: '/trophies/gold_trophy.png',
  second: '/trophies/silver_tropy.png', // Note: file has typo 'tropy'
  third: '/trophies/bronze_trophy.png',
  special: '/trophies/special_trophy.png',
  participant: '/trophies/participant_trophy.png',
  champion: '/trophies/gold_trophy.png',
  silver: '/trophies/silver_tropy.png',
};

const HackathonEntry: React.FC<HackathonEntryProps> = ({
  entryNumber,
  title,
  award,
  description,
  reflection,
  imageSrc,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  projectLink, // Destructure projectLink
  trophyType,
  techStackIcons, // Destructure techStackIcons
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get the correct image path based on trophyType from the mapping
  const trophyImagePath = trophyImagePaths[trophyType] || trophyImagePaths['special']; // Fallback to special

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-start w-full border-b border-white/10 py-10 lg:py-14 last:border-b-0">
        {/* ── BIG NUMBER ── */}
        <div className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#999] mr-6 lg:mr-10 mb-6 md:mb-0 flex-shrink-0 min-w-[60px] md:min-w-[80px]">
          {entryNumber}
        </div>

        {/* ── IMAGE WRAPPER ── */}
        <div
          className="w-full md:w-[45%] lg:w-[40%] aspect-[1.5/1] flex items-center justify-center rounded-2xl overflow-hidden mb-8 md:mb-0 mr-0 md:mr-8 lg:mr-12 flex-shrink-0 shadow-2xl relative cursor-pointer group"
          onClick={() => imageSrc && setIsModalOpen(true)}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`Project for ${title}`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
              width={800}
              height={600}
            />
          ) : (
            <div className="w-full h-full bg-[var(--foreground)] opacity-5 flex items-center justify-center">
              <span className="text-[var(--foreground)] opacity-30 text-sm">No Image</span>
            </div>
          )}
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="flex-1 flex flex-col justify-start">
          {/* Award and Trophy Section */}
          {award && (
            <div className="flex items-center space-x-2 mb-2">
              {trophyImagePath && (
                <Image
                  src={trophyImagePath}
                  alt="Trophy"
                  width={14}
                  height={14}
                  className="object-contain"
                />
              )}
              <span className="text-[10px] md:text-[11px] text-[#999] font-medium uppercase tracking-wider">
                {award}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-white mb-4 tracking-tight leading-none">
            {title}
          </h3>

          {/* Tech Stack Icons */}
          {techStackIcons && techStackIcons.length > 0 && (
            <div className="flex items-center space-x-3 mb-4">
              {techStackIcons.map((iconPath, iconIndex) => (
                <Image
                  key={iconIndex}
                  src={iconPath}
                  alt="Tech Stack Icon"
                  className="w-5 h-5 object-contain"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-[14px] md:text-[15px] text-white opacity-50 leading-[1.6] mb-4 font-light max-w-[95%]">
            {description}
          </p>

          {/* Reflection */}
          {reflection && (
            <div className="mt-2 pt-4 border-t border-white/5">
              <p className="text-[13px] md:text-[14px] text-white/40 italic leading-relaxed">
                &quot;{reflection}&quot;
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && imageSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full aspect-[1.414/1] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imageSrc}
                alt={`Full view of ${title}`}
                className="object-contain w-full h-full"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={100}
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white bg-black/40 hover:bg-black/80 rounded-full w-10 h-10 flex items-center justify-center transition-all backdrop-blur-md"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HackathonEntry;
