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
    slug: "certificate-1",
    name: "Certificate 1",
    tagline: "Description 1",
    description: "Detailed description for Certificate 1",
    image: "/certificates-image/cert-1.png",
    issuer: "Issuer 1",
    year: "2026",
  },
  {
    slug: "certificate-2",
    name: "Certificate 2",
    tagline: "Description 2",
    description: "Detailed description for Certificate 2",
    image: "/certificates-image/cert-2.png",
    issuer: "Issuer 2",
    year: "2026",
  },
  {
    slug: "certificate-3",
    name: "Certificate 3",
    tagline: "Description 3",
    description: "Detailed description for Certificate 3",
    image: "/certificates-image/cert-3.png",
    issuer: "Issuer 3",
    year: "2026",
  },
  {
    slug: "certificate-4",
    name: "Certificate 4",
    tagline: "Description 4",
    description: "Detailed description for Certificate 4",
    image: "/certificates-image/cert-4.png",
    issuer: "Issuer 4",
    year: "2026",
  },
  {
    slug: "certificate-5",
    name: "Certificate 5",
    tagline: "Description 5",
    description: "Detailed description for Certificate 5",
    image: "/certificates-image/cert-5.png",
    issuer: "Issuer 5",
    year: "2026",
  },
  {
    slug: "certificate-6",
    name: "Certificate 6",
    tagline: "Description 6",
    description: "Detailed description for Certificate 6",
    image: "/certificates-image/cert-6.png",
    issuer: "Issuer 6",
    year: "2026",
  },
  {
    slug: "certificate-7",
    name: "Certificate 7",
    tagline: "Description 7",
    description: "Detailed description for Certificate 7",
    image: "/certificates-image/cert-7.png",
    issuer: "Issuer 7",
    year: "2026",
  },
];
