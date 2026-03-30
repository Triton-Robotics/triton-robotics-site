"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Schedule", href: "/member-home" },
  { label: "Resources", href: "/member-home/resources" },
  { label: "Meeting Slides", href: "/member-home/slides" },
];

function HeaderIcon({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <button
      type="button"
      className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition ${
        highlighted
          ? "border-[#f3c35a]/40 bg-[#27486f] text-[#f3c35a]"
          : "border-white/10 bg-[#27486f] text-[#dbe8f8] hover:border-white/20 hover:text-white"
      }`}
    >
      {highlighted && <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[#f3c35a]" />}
      {children}
    </button>
  );
}

export function MemberPortalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#1b2430_0%,#1a2330_100%)] text-white">
      <section className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#23476a_0%,#203f5f_100%)]">
        <div className="border-b border-white/10 px-6 py-8 md:px-10 md:py-7">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Welcome Back, User!
              </h1>
              <p className="mt-4 text-sm text-[#b4c6d7] md:text-base">{today}</p>
            </div>

            <div className="flex items-center gap-3 self-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f3c35a]/40 bg-[#f2efe8] shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
                <img src="/photos/logo.png" alt="Triton Robotics avatar" className="h-10 w-10 object-contain" />
              </div>

              <HeaderIcon highlighted>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                  <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
                  <path d="M10 20a2 2 0 0 0 4 0" />
                </svg>
              </HeaderIcon>

              <HeaderIcon>
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="3.25" />
                  <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a2 2 0 1 1-4 0v-.2a1 1 0 0 0-.7-.9 1 1 0 0 0-1 .2l-.2.1a2 2 0 1 1-2.8-2.8l.1-.1a1 1 0 0 0 .2-1.1 1 1 0 0 0-.9-.6H4a2 2 0 1 1 0-4h.2a1 1 0 0 0 .9-.7 1 1 0 0 0-.2-1l-.1-.2a2 2 0 1 1 2.8-2.8l.2.1a1 1 0 0 0 1 .2 1 1 0 0 0 .6-.9V4a2 2 0 1 1 4 0v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.2a1 1 0 0 0-.2 1 1 1 0 0 0 .9.7h.2a2 2 0 1 1 0 4h-.2a1 1 0 0 0-.9.6Z" />
                </svg>
              </HeaderIcon>

              <button
                type="button"
                className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-[#27486f] px-4 text-sm font-medium text-[#dbe8f8] transition hover:border-white/20 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <path d="M10 17l5-5-5-5" />
                  <path d="M15 12H3" />
                </svg>
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#f3c35a] text-[#1f3651] shadow-[0_6px_18px_rgba(243,195,90,0.25)]"
                      : "bg-[#315377] text-[#d6e4f1] hover:bg-[#3b628b] hover:text-white"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-6 py-8 md:px-10 md:py-10">{children}</div>
      </section>
    </main>
  );
}
