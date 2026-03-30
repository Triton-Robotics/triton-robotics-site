"use client";

import { useMemo, useState } from "react";
import { MemberPortalShell } from "../MemberPortalShell";

const filters = [
  { label: "All Presentations", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Strategy", value: "strategy" },
  { label: "Business", value: "business" },
  { label: "Training", value: "training" },
] as const;

const slides = [
  {
    title: "Autonomous Navigation System",
    author: "Jane Doe",
    date: "11/12/2025",
    views: "45 views",
    count: "24 slides",
    badge: "technical",
    badgeStyle: "bg-[#2d7a50] text-[#d5f0df]",
    image: "url('/photos/background_of_front_page.png')",
  },
  {
    title: "Competition Strategy Analysis",
    author: "Jane Doe",
    date: "11/12/2025",
    views: "52 views",
    count: "18 slides",
    badge: "strategy",
    badgeStyle: "bg-[#6c5ab8] text-[#e5dcff]",
    image: "url('/photos/group_pic.png')",
  },
  {
    title: "Sponsor Outreach Plan",
    author: "Jane Doe",
    date: "11/12/2025",
    views: "28 views",
    count: "15 slides",
    badge: "business",
    badgeStyle: "bg-[#8f7535] text-[#ffe39b]",
    image: "linear-gradient(135deg, rgba(23,33,48,0.25), rgba(23,33,48,0.6)), url('/photos/group_pic.png')",
  },
  {
    title: "Safety & Workshop Training",
    author: "James Park",
    date: "11/10/2025",
    views: "67 views",
    count: "32 slides",
    badge: "training",
    badgeStyle: "bg-[#2d7a50] text-[#d5f0df]",
    image: "linear-gradient(135deg, rgba(23,33,48,0.2), rgba(23,33,48,0.45)), url('/photos/background_of_front_page.png')",
  },
  {
    title: "PCB Design Workshop",
    author: "Alex Kim",
    date: "10/13/2025",
    views: "41 views",
    count: "29 slides",
    badge: "technical",
    badgeStyle: "bg-[#3f6ca0] text-[#cfe4ff]",
    image: "linear-gradient(135deg, rgba(23,33,48,0.25), rgba(23,33,48,0.55)), url('/photos/group_pic.png')",
  },
  {
    title: "Regional Competition Debrief",
    author: "Sarah Chen",
    date: "10/5/2025",
    views: "50 views",
    count: "21 slides",
    badge: "strategy",
    badgeStyle: "bg-[#c8b0f9] text-[#2d2457]",
    image: "linear-gradient(180deg, #d9e0e7 0%, #bbc4cf 100%)",
  },
];

export default function SlidesPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]["value"]>("all");

  const filteredSlides = useMemo(() => {
    if (activeFilter === "all") {
      return slides;
    }

    return slides.filter((slide) => slide.badge === activeFilter);
  }, [activeFilter]);

  return (
    <MemberPortalShell>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2b5278] text-[#f3c35a]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
            <path d="M4 5h16v10H4z" />
            <path d="M12 15v4M8 19h8" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Meeting Slides</h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              isActive
                ? "bg-[#f3c35a] text-[#1f3651]"
                : "bg-[#315377] text-[#d6e4f1] hover:bg-[#3b628b] hover:text-white"
            }`}
          >
            {filter.label}
          </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredSlides.map((slide) => (
          <article
            key={slide.title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#284d72]/85 transition hover:border-white/30"
          >
            <div
              className="relative h-44 bg-cover bg-center"
              style={{ backgroundImage: slide.image }}
            >
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-[11px] font-medium text-white/80">
                <span className={`rounded-full px-2.5 py-1 ${slide.badgeStyle}`}>{slide.badge}</span>
                <span className="rounded-full bg-black/35 px-2.5 py-1">{slide.count}</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-base font-semibold text-white">{slide.title}</h3>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#9eb4ca]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f3c35a] text-[10px] font-bold text-[#1f3651]">
                  {slide.author[0]}
                </span>
                <span>{slide.author}</span>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-[#9eb4ca]">
                <span>{slide.date}</span>
                <span>{slide.views}</span>
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-[#3a5877] px-4 py-2 text-sm font-medium text-[#f3c35a] transition hover:bg-[#48698d]"
              >
                View Slides
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredSlides.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-[#284d72]/70 px-6 py-10 text-center text-[#c7d8e8]">
          No slides found for this tag yet.
        </div>
      )}
    </MemberPortalShell>
  );
}
