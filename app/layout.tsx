"use client";

import "./globals.css";
import type { Metadata } from "next";
import { usePathname } from 'next/navigation';
import { siInstagram, siYoutube, siDiscord } from 'simple-icons';

// export const metadata: Metadata = {
//   title: "Triton Robotics",
//   description: "Landing page scaffold",
// };

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Add this line
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === null;

  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        {/* GLOBAL HEADER */}
        <header className="bg-[#1B2B44] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-4">
            {isHomePage ? (
              // Just a div when on home page (not clickable)
              <div className="flex items-center gap-4">
                <img src="/photos/logo.png" alt="Triton Logo" className="w-10 h-10 object-contain" />
              </div>
            ) : (
              // A Link when on any other page
              <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                <img src="/photos/logo.png" alt="Triton Logo" className="w-10 h-10 object-contain" />
                <img
                  src="/photos/Triton_Robotics_Letter_Logo_1.png"
                  alt="Triton Robotics"
                  className="h-8 w-auto object-contain hidden sm:block"
                />
              </Link>
            )}
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm font-semibold tracking-wide">
            {[
              { name: 'About', href: '/about' },
              { name: 'Sponsors', href: '/sponsors' },
              { name: 'Events', href: '/events' },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${isActive
                    ? "bg-white/10 text-[#FFCD00]" // Active style: subtle light blue background + Gold text
                    : "hover:text-[#FFCD00] text-white" // Inactive style
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="flex gap-2 ml-4">
              <Link
                href="/member-login"
                className="bg-white text-[#1B2B44] px-5 py-1.5 rounded font-bold hover:bg-gray-100 transition-colors"
              >
                Sign In
              </Link>
              <button className="bg-[#334155] text-white px-5 py-1.5 rounded font-bold hover:bg-[#475569] transition-colors">
                Register
              </button>
            </div>
          </nav>
        </header>

        {/* ACTUAL PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#1B2B44] text-white pt-20 pb-10 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12">
            {/* LEFT: Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/photos/logo.png"
                alt="Triton Logo"
                className="w-28 h-28 object-contain"
              />
            </div>

            {/* CENTER: Social Links */}
            <div className="text-center">
              <h3 className="font-black text-xl mb-6 uppercase tracking-widest text-[#FFCD00]">Connect with us!</h3>
              <ul className="space-y-4 font-medium">
                <li>
                  <a href="https://instagram.com/tritonrobotics" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCD00] transition-colors flex items-center justify-center gap-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d={siInstagram.path} />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFCD00] transition-colors flex items-center justify-center gap-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d={siYoutube.path} />
                    </svg>
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFCD00] transition-colors flex items-center justify-center gap-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d={siDiscord.path} />
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@tritonrobotics.com" className="hover:text-[#FFCD00] transition-colors flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT: Placeholder */}
            <div className="flex justify-center md:justify-end">
              {/* Space for future mascot or newsletter signup */}
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Triton Robotics. All rights reserved.
          </div>
        </footer>

        {/* {children} */}
      </body>
    </html>
  );
}