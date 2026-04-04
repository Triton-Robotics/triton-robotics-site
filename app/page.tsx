import React from 'react';
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Triton Robotics | Home",
  description: "Triton Robotics Landing Page",
};

const newsletters = [
  {
    year: "2025",
    issues: [
      { label: "Winter 2025", href: "newsletters/winter_2025.pdf" },
      { label: "Spring 2025", href: "newsletters/spring_2025.pdf" },
      { label: "Fall 2025",   href: "newsletters/fall_2025.pdf" },
    ],
  },
  // {
  //   year: "2024",
  //   issues: [
  //     { label: "Spring 2024", href: "https://example.com/newsletter-spring-2024.pdf" },
  //     { label: "Winter 2024", href: "https://example.com/newsletter-winter-2024.pdf" },
  //   ],
  // },
];

const videos = [
  { id: "WV7jBuddqDA", title: "Video 1" },
  // { id: "PLACEHOLDER_ID_2", title: "Video 2" },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* HERO */}
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
          // className="relative z-10 w-full max-w-[80%] pt-48 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
          className="relative z-10 w-full max-w-[80%] pt-48"
        />
      </section>

      {/* GRADIENT BAR */}
      <div className="h-2 bg-gradient-to-r from-[#FFCD00] via-[#1B2B44] to-[#FFCD00]" />

      {/* WELCOME */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1B2B44] mb-4">
          Welcome to Triton Robotics
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          A 501(c)(3) non-profit student organization, located at the University of California, San Diego. 
          <br />
          Join our Discord at{" "}
          <a
            href="https://discord.gg/5ZDqNmraXU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1B2B44] font-semibold underline underline-offset-2 hover:text-[#FFCD00] transition"
          >
            discord.gg/5ZDqNmraXU
          </a>
          .
        </p>
      </section>

      {/* NOTICE */}
      <div className="mx-auto max-w-4xl px-6 pb-16 w-full">
        <div className="rounded-2xl border-l-4 border-[#FFCD00] bg-[#1B2B44]/5 px-8 py-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFCD00] mb-1">
            NOTICE
          </p>
          <p className="text-base font-semibold text-[#1B2B44]">
            Triton Robotics will be competing at Purdue University in West Lafayette, Indiana
            for RoboMaster North America 2025–2026. Hope to see you there, and go Tritons!
          </p>
        </div>
      </div>

      {/* TWO COLUMN: Newsletters + Recruitment | Instagram */}
      <section className="mx-auto max-w-6xl px-6 pb-20 w-full">
        <div className="flex gap-10">

          {/* LEFT: Newsletters + Recruitment */}
          <div className="w-80 shrink-0 flex flex-col gap-8">
            {/* Robot Button */}
            <a
              href="https://chimerical-torrone-76204f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#FFCD00]/30 bg-[#1B2B44] p-6 flex flex-col gap-3 transition hover:border-[#FFCD00]/60"
            >
              <h3 className="text-lg font-bold text-white">Check Out Our Robot!</h3>
              <p className="text-sm text-gray-300">
                Interact with a 3D simulation render of our Sentry robot!
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFCD00]">
                Launch interactive model
                <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Recruitment */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-[#1B2B44] mb-1">Join the Team</h3>
              <p className="text-sm text-gray-500 mb-4">
                Applications are currently closed. Check back in Summer 2026.
              </p>
              <Link
                href="/recruit"
                className="inline-block w-full text-center rounded-xl bg-[#1B2B44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#243d5c]"
              >
                Recruitment Info
              </Link>
            </div>

            {/* Newsletters */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-[#1B2B44] mb-4">Newsletters</h3>
              <p className="text-sm text-gray-500 mb-4">
                Interested in seeing what we're up to? Download our newsletters below.
              </p>
              <div className="flex flex-col gap-4">
                {newsletters.map((group) => (
                  <details key={group.year} className="group">
                    <summary className="cursor-pointer text-sm font-semibold text-[#1B2B44] flex items-center justify-between list-none">
                      {group.year}
                      <svg
                        className="h-4 w-4 transition group-open:rotate-180 text-gray-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-2 flex flex-col gap-2 pl-2">
                      {group.issues.map((issue) => (
                        <a
                          key={issue.label}
                          href={issue.href}
                          // target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#1B2B44] transition"
                        >
                          <svg className="h-4 w-4 shrink-0 text-[#FFCD00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                          </svg>
                          {issue.label}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
              <a
                href="https://forms.gle/JXmxsY7cSbvp24bz8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block w-full text-center rounded-xl border border-[#1B2B44] px-5 py-3 text-sm font-semibold text-[#1B2B44] transition hover:bg-[#1B2B44] hover:text-white"
              >
                Join our Mailing List
              </a>
            </div>

          </div>

          {/* RIGHT: Instagram */}
          <div className="flex-1">
            <Script
              src="https://cdn.lightwidget.com/widgets/lightwidget.js"
              strategy="lazyOnload"
            />
            <iframe
              src="//lightwidget.com/widgets/309c40047dd25a3a859bbd5007a8345f.html"
              scrolling="no"
              className="w-full border-0 overflow-hidden rounded-2xl shadow-md"
              style={{ height: "600px" }}
            />
            <div className="mt-4 text-center">
              <a
                href="https://instagram.com/tritonrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FFCD00] hover:bg-[#e6b800] text-[#1B2B44] font-semibold px-8 py-3 rounded-full text-sm shadow transition"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* YOUTUBE VIDEOS */}
      <section className="mx-auto max-w-6xl px-6 pb-24 w-full">
        <h2 className="text-2xl font-bold text-[#1B2B44] mb-8 text-center">Watch Us in Action</h2>
        <div className="grid grid-cols gap-6">
          {videos.map((video) => (
            <div key={video.id} className="overflow-hidden rounded-2xl shadow-md aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}