"use client";

import React from 'react';
import { signIn } from "next-auth/react"
import { siGoogle } from 'simple-icons';

export default function MemberLoginPage() {
  return (
    // h-screen makes it exactly the height of the window
    // overflow-hidden kills the scrollbar
    <main className="h-screen w-full overflow-hidden bg-[#1B2B44]">
      <div className="grid h-full w-full md:grid-cols-[1.05fr_1fr]">
        
        {/* LEFT SECTION: Image & Logo */}
        <section
          className="relative hidden md:block h-full overflow-hidden bg-cover"
          style={{
            backgroundImage: "url('/photos/group_pic.png')",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full items-center justify-center px-8">
            <div className="flex w-full items-center justify-center gap-5">
              <img
                src="/photos/logo.png"
                alt="Triton Robotics crest"
                className="w-24 shrink-0 drop-shadow-2xl"
              />
              <img
                src="/photos/Triton_Robotics_Letter_Logo_1.png"
                alt="Triton Robotics wordmark"
                className="w-full max-w-[400px] drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* RIGHT SECTION: Login Action */}
        <section className="flex h-full items-center justify-center px-8 bg-[#1B2B44]">
          <div className="w-full max-w-[400px] text-white">
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-4xl font-light tracking-tight mb-2">Member Portal</h1>
              <p className="text-gray-400">Sign in to the team dashboard.</p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-2xl">
              <button
                onClick={async () => {
                  const result = await signIn("google", { 
                    callbackUrl: "/member-home", // Where they go after success
                    redirect: true 
                  });
                  
                  if (result?.error) {
                    // You can add a state variable to show a "Access Denied" message here
                    console.error("Login failed:", result.error);
                  }
                }}
                className="flex w-full items-center justify-center gap-4 rounded-lg border border-gray-300 bg-white py-3 text-lg font-semibold text-gray-700 transition-all hover:bg-gray-50 active:scale-[0.98]"
              >
                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-[#4285F4]" xmlns="http://www.w3.org/2000/svg">
                  <path d={siGoogle.path} />
                </svg>
                Continue with Google
              </button>
              
              <p className="mt-6 text-center text-xs text-gray-500 uppercase tracking-widest">
                @ucsd.edu only
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}