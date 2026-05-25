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
    slug: "iot-lorawan-workshop-1",
    name: "IoT & LoRaWAN Workshop — Session 1",
    tagline: "Certificate of Participation",
    description: "Participation in the IoT & LoRaWAN Workshop Series by Packetworx & KadaKareer — 2 learning hours covering IoT basics, device communication, and LoRaWAN fundamentals.",
    image: "/certificates-image/cert-1.png",
    issuer: "Packetworx / KadaKareer",
    year: "2026",
  },
  {
    slug: "iot-lorawan-workshop-2",
    name: "IoT & LoRaWAN Workshop — Session 2",
    tagline: "Certificate of Participation",
    description: "Participated in the workshop covering LoRa/LoRaWAN foundations and deployment frameworks, including practical assessments of real-world IoT applications.",
    image: "/certificates-image/cert-2.png",
    issuer: "Packetworx / KadaKareer",
    year: "2026",
  },
  {
    slug: "iot-lorawan-workshop-3",
    name: "IoT & LoRaWAN Workshop — Session 3",
    tagline: "Certificate of Participation",
    description: "Completed the mini-case practical on LoRaWAN's utility in the Philippines as part of the IoT & LoRaWAN workshop series.",
    image: "/certificates-image/cert-3.png",
    issuer: "Packetworx / KadaKareer",
    year: "2026",
  },
  {
    slug: "lagunatech-cs-grand-summit",
    name: "Certificate of Appreciation — LagunaTech",
    tagline: "Certificate of Appreciation",
    description: "Awarded by the University of Cabuyao for active participation in the LagunaTech: Computer Science Grand Summit, recognizing contributions to knowledge exchange and collaboration.",
    image: "/certificates-image/cert-4.png",
    issuer: "University of Cabuyao",
    year: "2024",
  },
  {
    slug: "thesis-capstone-ready-workshop",
    name: "Thesis & Capstone Ready — Workshop",
    tagline: "Certificate of Participation",
    description: "Participation in the 'Thesis & Capstone Ready' workshop preparing 3rd-year students for thesis and capstone requirements, focusing on academic readiness and research preparation.",
    image: "/certificates-image/cert-5.png",
    issuer: "University of Cabuyao",
    year: "2026",
  },
  {
    slug: "acss-great-flavor-byte",
    name: "ACSS The Great Flavor Byte — Event Participation",
    tagline: "Certificate of Participation",
    description: "Recognized for active participation in 'ACSS The Great Flavor Byte: A Taste of Unity, a Byte of Innovation' organized by the Association of Computer Science Students.",
    image: "/certificates-image/cert-6.png",
    issuer: "Association of Computer Science Students (ACSS)",
    year: "2026",
  },
  {
    slug: "codekada-online-hackathon",
    name: "CodeKada — The Online Hackathon",
    tagline: "Certificate of Participation",
    description: "Certificate awarded for active participation in CodeKada: The Online Hackathon (DevKada), demonstrating collaboration and problem-solving in a virtual hackathon setting.",
    image: "/certificates-image/cert-7.png",
    issuer: "DevKada",
    year: "2026",
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
