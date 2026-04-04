import React from 'react';
import Script from "next/script";
import type { Metadata } from "next";
import { siInstagram, siYoutube, siDiscord } from 'simple-icons';
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Triton Robotics | Home",
  description: "Triton Robotics Landing Page",
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      

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

      {/* SIMULATION SECTION */}

      

            <section className="w-full py-16 px-6 bg-gray-100">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* LEFT: Text */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">
                    Try out our robot model! 
                    (Note: Wait for 10-20 seconds for the robot to render.)
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore and interact with our 3D robot directly in your browser.
        
                  </p>

                  <Link
                    href="https://chimerical-torrone-76204f.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                  >
                    Try it now →
                  </Link>
                </div>

                {/* RIGHT: Image */}
                <div className="flex-1">
                  <Image
                    src="/photos/robot.png" 
                    alt="Robot model"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>

              </div>
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
    </div>
  );
}
