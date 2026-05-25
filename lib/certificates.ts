export interface Certificate {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  issuer: string;
  year: string;
}

export const certificates: Certificate[] = [
  {
    slug: "responsive-web-design",
    name: "Responsive Web Design",
    tagline: "Developer Certification",
    description: "Earned from freeCodeCamp for completing coursework in HTML, CSS, and responsive web design principles.",
    image: "/certificates-image/cert-1.png",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    slug: "javascript-algorithms-and-data-structures",
    name: "JS Algorithms & Data Structures",
    tagline: "Developer Certification",
    description: "Earned from freeCodeCamp for mastering JavaScript fundamentals, algorithms, and data structures.",
    image: "/certificates-image/cert-2.png",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    slug: "front-end-development-libraries",
    name: "Front End Dev Libraries",
    tagline: "Developer Certification",
    description: "Earned from freeCodeCamp for building projects using React, Redux, Bootstrap, and other front-end libraries.",
    image: "/certificates-image/cert-3.png",
    issuer: "freeCodeCamp",
    year: "2024",
  },
  {
    slug: "dict-national-ict-month-hackathon",
    name: "DICT National ICT Hackathon",
    tagline: "Certificate of Participation",
    description: "Participated in the Annual DICT National ICT Month Hackathon 2024, demonstrating innovation and problem-solving.",
    image: "/certificates-image/cert-4.png",
    issuer: "DICT",
    year: "2024",
  },
  {
    slug: "hackforligtas-climate-disasters",
    name: "HackforLigtas Hackathon",
    tagline: "Certificate of Participation",
    description: "Participated in HackforLigtas: Overcoming Climate Disasters 4th Hackathon 2024.",
    image: "/certificates-image/cert-5.png",
    issuer: "Devcon",
    year: "2024",
  },
  {
    slug: "pup-speak-hackathon",
    name: "PUP SPEAK Hackathon",
    tagline: "Certificate of Participation",
    description: "Participated in the 1st Hackathon event organized by PUP SPEAK in 2024.",
    image: "/certificates-image/cert-6.png",
    issuer: "PUP SPEAK",
    year: "2024",
  },
  {
    slug: "python-core-sololearn",
    name: "Python Core",
    tagline: "Certificate of Completion",
    description: "Successfully completed the Python programming course from Sololearn, covering core concepts and syntax.",
    image: "/certificates-image/cert-7.png",
    issuer: "Sololearn",
    year: "2024",
  },
];

export function getCertificateBySlug(slug: string): Certificate | undefined {
  return certificates.find((c) => c.slug === slug);
}

export function getNextCertificate(currentSlug: string): Certificate {
  const currentIndex = certificates.findIndex((c) => c.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === certificates.length - 1) {
    return certificates[0];
  }
  return certificates[currentIndex + 1];
}
