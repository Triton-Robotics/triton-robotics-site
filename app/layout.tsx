"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Inter } from "next/font/google";
import { siDiscord, siInstagram, siYoutube } from "simple-icons";

import { SessionProvider } from "next-auth/react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === null;
  const isLoginPage = pathname === "/member-login";

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased ${
          isLoginPage ? "overflow-hidden" : ""
        }`}
      >
        <SessionProvider>
          <header className="sticky top-0 z-50 flex items-center justify-between bg-[#1B2B44] p-4 text-white shadow-md">
            <div className="flex items-center gap-4">
              {isHomePage ? (
                <div className="flex items-center gap-4">
                  <img
                    src="/photos/logo.png"
                    alt="Triton Logo"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              ) : (
                <Link
                  href="/"
                  className="flex items-center gap-4 transition-opacity hover:opacity-80"
                >
                  <img
                    src="/photos/logo.png"
                    alt="Triton Logo"
                    className="h-10 w-10 object-contain"
                  />
                  <img
                    src="/photos/Triton_Robotics_Letter_Logo_1.png"
                    alt="Triton Robotics"
                    className="hidden h-8 w-auto object-contain sm:block"
                  />
                </Link>
              )}
            </div>

            {/* nav links */}
            <Nav />
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
