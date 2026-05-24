import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Charles Platon - Frontend Engineer",
  description: "Aspiring Frontend Engineer specializing in high-fidelity UIs, web architectures, and interactive design.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
