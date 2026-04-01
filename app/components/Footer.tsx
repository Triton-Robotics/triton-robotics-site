"use client";
import { usePathname } from "next/navigation";
import { siInstagram, siYoutube, siDiscord } from "simple-icons";

const HIDDEN_ON = ["/member-login"];
const HIDDEN_PREFIX = ["/member-home"];

export default function Footer() {
  const pathname = usePathname();

  if (HIDDEN_ON.includes(pathname)) return null;
  if (HIDDEN_PREFIX.some((prefix) => pathname.startsWith(prefix))) return null;

  return (
    <footer className="bg-[#1B2B44] px-8 pb-10 pt-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-3">
        <div className="flex justify-center md:justify-start">
          <img
            src="/photos/logo.png"
            alt="Triton Logo"
            className="h-28 w-28 object-contain"
          />
        </div>

        <div className="text-center">
          <h3 className="mb-6 text-xl font-black uppercase tracking-widest text-[#FFCD00]">
            Connect with us!
          </h3>
          <ul className="space-y-4 font-medium">
            <li>
              <a
                href="https://instagram.com/tritonrobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#FFCD00]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siInstagram.path} />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCdpkvP-ye3KutADXKiTE_fg"
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#FFCD00]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siYoutube.path} />
                </svg>
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/P2Pd55NUU"
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#FFCD00]"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={siDiscord.path} />
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a
                href="mailto:tritonrobotics@ucsd.edu"
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#FFCD00]"
              >
                <svg
                  className="h-5 w-5 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end" />
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-widest text-gray-400">
        © {new Date().getFullYear()} Triton Robotics. All rights reserved.
      </div>
    </footer>
  );
}