import React from 'react';
import Script from "next/script";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <div className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>

      {/* HEADER */}
      <header className="bg-[#1B2B44] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <img
            src="/photos/logo.png"
            alt="Triton Robotics Logo"
            className="h-10 w-auto"
          />
        </div>

        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Home</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">About</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Sponsors</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Events</a>

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

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[85vh] flex flex-col items-center justify-start bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/photos/background_of_front_page.png')`,
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <img
          src="/photos/Triton_Robotics_Letter_Logo_1.png"
          alt="Triton Robotics Logo"
          className="relative z-10 w-full max-w-[80%] pt-48 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        />
      </section>

      {/* TRANSITION BAR */}
      <div className="h-2 bg-gradient-to-r from-[#FFCD00] via-[#1B2B44] to-[#FFCD00]" />

      {/* FOLLOW OUR JOURNEY */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#1B2B44] mb-2 tracking-tight">
          Follow Our Journey
        </h2>

        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">
          Stay updated with our latest builds, competitions, and team adventures.
        </p>

        <div className="max-w-4xl mx-auto mt-12">
          <Script
            src="https://cdn.lightwidget.com/widgets/lightwidget.js"
            strategy="lazyOnload"
          />

          <iframe
            src="//lightwidget.com/widgets/309c40047dd25a3a859bbd5007a8345f.html"
            scrolling="no"
            className="w-full border-0 overflow-hidden rounded-xl shadow-md"
            style={{ height: "600px" }}
          />
        </div>

        <a
          href="https://instagram.com/tritonrobotics"
          target="_blank"
          className="inline-block mt-16 bg-[#FFCD00] hover:bg-[#e6b800] text-[#1B2B44] font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Follow us on Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B2B44] text-white pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-16">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/photos/logo.png"
              alt="Triton Robotics Logo"
              className="h-28 w-auto"
            />
          </div>

          {/* Center Content */}
          <div className="text-left justify-self-start md:justify-self-center">
            <h3 className="text-3xl md:text-5xl font-semibold mb-10 tracking-tight">
              Connect with us!
            </h3>

            <ul className="ml-16 md:ml-24 space-y-8 text-2xl md:text-3xl font-light leading-tight">
              <li>
                <a href="#" className="hover:text-[#FFCD00] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCD00] transition-colors">YouTube</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCD00] transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FFCD00] transition-colors">Email</a>
              </li>
            </ul>
          </div>

          {/* Right side spacer */}
          <div></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Triton Robotics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
