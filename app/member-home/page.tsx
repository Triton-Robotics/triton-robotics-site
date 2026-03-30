import { MemberPortalShell } from "./MemberPortalShell";

const events = [
  {
    month: "Nov",
    day: "12",
    title: "Weekly Team Meeting",
    type: "Meeting",
    time: "6:00 PM - 8:00 PM",
    location: "Engineering Building, Room 301",
    attendees: "24 attending",
    description: "Progress updates and planning for upcoming competition",
    accent: "bg-[#3f6ca0] text-[#cfe4ff]",
  },
  {
    month: "Nov",
    day: "14",
    title: "CAD Workshop",
    type: "Workshop",
    time: "4:00 PM - 6:00 PM",
    location: "Maker Space",
    attendees: "12 attending",
    description: "Advanced SolidWorks techniques for robot design",
    accent: "bg-[#6c5ab8] text-[#e5dcff]",
  },
  {
    month: "Nov",
    day: "19",
    title: "Regional Competition",
    type: "Competition",
    time: "8:00 AM - 6:00 PM",
    location: "San Diego Convention Center",
    attendees: "45 attending",
    description: "RoboMasters Regional Championship",
    accent: "bg-[#8f7535] text-[#ffe39b]",
  },
  {
    month: "Nov",
    day: "15",
    title: "Build Session",
    type: "Build",
    time: "2:00 PM - 8:00 PM",
    location: "Workshop",
    attendees: "18 attending",
    description: "Chassis assembly and electronics integration",
    accent: "bg-[#2d7a50] text-[#c7f3d8]",
  },
];

function MetaItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#abc1d8]">
      <span className="text-[#9eb4ca]">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

export default function MemberHomePage() {
  return (
    <MemberPortalShell>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2b5278] text-[#f3c35a]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Upcoming Events</h2>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <article
            key={`${event.title}-${event.day}`}
            className="rounded-2xl border border-transparent bg-[#284d72]/85 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-200 hover:border-white/70 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] md:px-5"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#234468] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="text-xs uppercase tracking-[0.18em] text-[#d0ab55]">{event.month}</span>
                <span className="mt-1 text-3xl font-semibold leading-none text-white">{event.day}</span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-medium text-white">{event.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${event.accent}`}>
                    {event.type}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  <MetaItem
                    icon={
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="8" />
                        <path d="M12 8v5l3 2" />
                      </svg>
                    }
                  >
                    {event.time}
                  </MetaItem>
                  <MetaItem
                    icon={
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                        <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
                        <circle cx="12" cy="10" r="2.2" />
                      </svg>
                    }
                  >
                    {event.location}
                  </MetaItem>
                  <MetaItem
                    icon={
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                        <circle cx="9.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                    }
                  >
                    {event.attendees}
                  </MetaItem>
                </div>

                <p className="mt-4 text-sm text-[#b3c4d7]">{event.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </MemberPortalShell>
  );
}
