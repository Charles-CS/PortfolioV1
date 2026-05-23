// src/app/Contact.tsx

'use client'; // This page uses client-side interactivity (form, potential animations)

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';


// Define social media links
const socialLinks = [
  { platform: "GitHub", href: "https://github.com/Charles-CS", Icon: Github },
  { platform: "LinkedIn", href: null, Icon: Linkedin },
  { platform: "Gmail", href: "https://mail.google.com/mail/u/1/?pli=1#inbox", Icon: Mail },
];

// Define contact information
const contactInfo = {
  email: "Charlesplaton263@gmail.com",
};


export default function Contact() {
  // Updated form submission handler to open mail client with mailto link
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Encode subject and body for the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Construct the mailto link
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optional: You might want to reset the form after opening the mail client
    // form.reset();
  };

  return (
    <main className="fixed inset-0 w-full flex flex-col items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8 z-10 pt-24 sm:pt-28 md:pt-32 origin-center">
      {/* Section Title */}
      <div className="text-center mb-6 md:mb-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center text-[var(--foreground)]"
        >
          Get In Touch
        </motion.h1>
      </div>

      {/* Contact Content Container */}
      <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 scale-[0.75] sm:scale-[0.80] md:scale-[0.85] lg:scale-90 origin-top">

        {/* Contact Information Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--foreground)]">Contact Information</h2>
          {contactInfo.email && (
            <div className="flex items-center text-[var(--foreground)] opacity-80">
              <a href="https://mail.google.com/mail/u/1/?pli=1#inbox" target="_blank" rel="noopener noreferrer" className="hover:underline text-base sm:text-lg">{contactInfo.email}</a>
            </div>
          )}
          {/* Add phone and location here if included in contactInfo */}
          {/*
          {contactInfo.phone && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📞</span>
              <a href={`tel:${contactInfo.phone}`} className="hover:underline text-base sm:text-lg">{contactInfo.phone}</a>
            </div>
          )}
          {contactInfo.location && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📍</span>
              <span className="text-base sm:text-lg">{contactInfo.location}</span>
            </div>
          )}
          */}

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ platform, href, Icon }) => (
                href ? (
                  <Link
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-110"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--foreground)]" strokeWidth={1.5} />
                  </Link>
                ) : (
                  <div
                    key={platform}
                    className="transition-transform duration-200"
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--foreground)] opacity-50" strokeWidth={1.5} />
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--foreground)]">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-[var(--foreground)] opacity-80 text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-[var(--card-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent)] text-[var(--foreground)] transition-colors contact-input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[var(--foreground)] opacity-80 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-[var(--card-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent)] text-[var(--foreground)] transition-colors contact-input-field"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-[var(--foreground)] opacity-80 text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-[var(--card-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent)] text-[var(--foreground)] transition-colors contact-input-field"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[var(--foreground)] opacity-80 text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-black/5 dark:bg-white/5 border border-[var(--card-border)] rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--accent)] text-[var(--foreground)] transition-colors contact-input-field"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition duration-200 contact-submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>



      {/* Optional: Add a footer here if this page doesn't use the global layout footer */}
      {/* <footer className="mt-16 text-center text-white/50 text-sm">
         <p>&copy; {new Date().getFullYear()} Charles Platon. All rights reserved.</p>
       </footer> */}
    </main>
  );
}
