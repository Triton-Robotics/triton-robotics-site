import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    label: "History",
    href: "/about/history",
    description: "How Triton Robotics came to be.",
    image: "/photos/teams/sentry.png",
  },
  {
    label: "Meet the Leads",
    href: "/about/leads",
    description: "The people running the team.",
    image: "/photos/leads/all_leads.jpg",
  },
  {
    label: "Robomaster",
    href: "/about/robomaster",
    description: "Our flagship competition.",
    image: "/photos/robomaster/robomaster.jpg",
  },
  {
    label: "Teams",
    href: "/about/teams",
    description: "Mechanical, Software, and Non-Technical.",
    image: "/photos/teams/embedded.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">

      {/* Article header */}
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
        {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
          UC San Diego
        </p> */}
        <h1 className="text-5xl font-bold tracking-tight">About Us</h1>
        <p className="mt-4 text-lg text-gray-400">
          UC San Diego's competitive robotics team.
        </p>
      </div>

      {/* Full width team photo */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl">
          <Image
            src="/photos/group_pic.png"
            alt="Triton Robotics team"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Article body + nav cards */}
      <div className="relative -mt-12 rounded-t-3xl bg-[#1B2B44] px-6 pt-12 pb-16">
        <div className="mx-auto max-w-4xl">

          {/* Article body text */}
          <p className="text-base leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-300">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Section divider */}
          <div className="my-12 border-t border-white/10" />

          {/* Nav cards */}
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${sections.length}, minmax(0, 1fr))` }}
          >
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-105"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.label}
                    fill
                    className="object-cover transition"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B44] via-[#1B2B44]/40 to-transparent" /> */}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white">{section.label}</h2>
                  <p className="mt-1 text-sm text-gray-400">{section.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-[#FFCD00]">
                    Learn more
                    <svg className="h-3.5 w-3.5 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}