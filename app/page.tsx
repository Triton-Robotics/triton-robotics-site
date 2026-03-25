import React from 'react';
import Script from "next/script";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-mono">
      {/* HEADER */}
      <header className="bg-[#1B2B44] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FFCD00] rounded-full flex items-center justify-center font-bold text-[#1B2B44] border-2 border-white/20">
            TR
          </div>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Home</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">About</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Sponsors</a>
          <a href="#" className="hover:text-[#FFCD00] transition-colors">Events</a>
          <div className="flex gap-2 ml-4">
            <button className="bg-white text-[#1B2B44] px-5 py-1.5 rounded font-bold hover:bg-gray-100 transition-colors">Sign In</button>
            <button className="bg-[#334155] text-white px-5 py-1.5 rounded font-bold hover:bg-[#475569] transition-colors">Register</button>
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

        {/* Floating Mascot Icon */}
        {/* <div className="absolute top-10 right-10 z-20 w-16 h-16 bg-white rounded-full border-4 border-[#1B2B44] overflow-hidden shadow-xl hidden md:flex items-center justify-center text-2xl">
          🐱
        </div> */}

        {/* MOVED TEXT DOWN: Changed pt-24 to pt-48
        <h1 className="relative z-10 text-white text-6xl md:text-9xl font-black tracking-tighter text-center drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] pt-48">
          TRITON ROBOTICS
        </h1> */}
        <img
          src="/photos/Triton_Robotics_Letter_Logo_1.png"
          alt="Triton Robotics Logo"
          className="relative z-10 w-full max-w-[80%] pt-48 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        />
      </section>

      {/* TRANSITION BAR */}
      <div className="h-2 bg-gradient-to-r from-[#FFCD00] via-[#1B2B44] to-[#FFCD00]" />

      {/* FOLLOW OUR JOURNEY CONTENT */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-[#1B2B44] mb-2 uppercase tracking-tight">Follow Our Journey</h2>
        <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">Stay updated with our latest builds, competitions, and team adventures.</p>

        <div className="max-w-4xl mx-auto mt-12">
        <Script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          strategy="lazyOnload"
        />

        <iframe
          src="//lightwidget.com/widgets/309c40047dd25a3a859bbd5007a8345f.html"
          scrolling="no"
          // allowTransparency={true}
          className="w-full border-0 overflow-hidden rounded-xl shadow-md"
          style={{ height: "600px" }}
        />
        </div>

        <a
          href="https://instagram.com/tritonrobotics"
          target="_blank"
          className="inline-block mt-16 bg-[#FFCD00] hover:bg-[#e6b800] text-[#1B2B44] font-black px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-widest"
        >
          Follow us on Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1B2B44] text-white pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          <div className="flex justify-center md:justify-start">
            <div className="w-28 h-28 bg-[#FFCD00] rounded-full flex items-center justify-center text-5xl shadow-[0_0_30px_rgba(255,205,0,0.3)]">
              🔱
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-black text-xl mb-6 uppercase tracking-widest text-[#FFCD00]">Connect with us!</h3>
            <ul className="space-y-4 font-medium">
              <li><a href="#" className="hover:text-[#FFCD00] transition-colors">📸 Instagram</a></li>
              <li><a href="#" className="hover:text-[#FFCD00] transition-colors">🎥 YouTube</a></li>
              <li><a href="#" className="hover:text-[#FFCD00] transition-colors">💬 Discord</a></li>
              <li><a href="#" className="hover:text-[#FFCD00] transition-colors">✉️ Email</a></li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              {/* <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-2xl border-4 border-[#FFCD00] rotate-3 group-hover:rotate-0 transition-transform">
                🐱
              </div> */}
              {/* <div className="absolute -top-4 -right-4 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full font-bold">LIVE</div> */}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Triton Robotics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}