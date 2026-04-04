"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { siGoogle } from "simple-icons";
import { useSearchParams } from "next/navigation";

function MemberLoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage =
    error === "AccessDenied"
      ? "Access Denied: Your email is not on the authorized whitelist. If this is a mistake, please contact us on Discord: https://discord.gg/P2Pd55NUU"
      : error === "OAuthSignin"
        ? "Google sign-in could not start. Check the Google OAuth client configuration for this app."
        : error === "OAuthCallback"
          ? "Google sign-in callback failed. Check the authorized redirect URI for this site."
          : error
            ? "An authentication error occurred. Please try again or contact an admin."
            : null;

  return (
    // h-screen makes it exactly the height of the window
    // overflow-hidden disables scrollbar
    <main className="h-screen w-full overflow-hidden bg-[#1B2B44]">
      <div className="grid h-full w-full md:grid-cols-[1.05fr_1fr]">
        
        {/* LEFT SECTION: Image & Logo */}
        <section
          className="relative hidden md:block h-full overflow-hidden bg-cover"
          style={{
            backgroundImage: "url('/photos/group_pic_edit.png')",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full items-center justify-center px-8">
            <div className="flex w-full items-center justify-center gap-5">
              <img
                src="/photos/logo.png"
                alt="Triton Robotics crest"
                className="w-64 shrink-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all"
              />
              {/* <img
                src="/photos/Triton_Robotics_Letter_Logo_1.png"
                alt="Triton Robotics wordmark"
                className="w-full max-w-[400px] drop-shadow-2xl"
              /> */}
            </div>
          </div>
        </section>

        {/* bg-[#1B2B44] */}
        {/* RIGHT SECTION: Login Action */}
        <section className="flex h-full items-center justify-center px-8 bg-white">
          <div className="w-full max-w-[400px] text-white">
            {/* Error box for if login fails */}
            {errorMessage && (
              <div className="mb-6 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-sm text-black animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-4xl tracking-tight mb-2 text-black">Member Portal</h1>
              <p className="text-gray-600">Sign in to the team dashboard.</p>
            </div>

            <div className="rounded-xl bg-[#1B2B44] p-8 shadow-2xl">
              <button
                onClick={async () => {
                  const result = await signIn("google", {
                    callbackUrl: "/member-home",
                    redirect: true,
                  });
                  
                  if (result?.error) {
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
              
              <p className="mt-6 text-center text-xs text-gray-200 uppercase tracking-widest">
                @ucsd.edu only
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function MemberLoginPage() {
  return (
    <Suspense fallback={null}>
      <MemberLoginContent />
    </Suspense>
  );
}
