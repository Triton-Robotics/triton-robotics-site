import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/lib/auth";
import { MemberPortalShell } from "./MemberPortalShell";

type GoogleCalendarEvent = {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  eventType?: string;
  start?: {
    date?: string;
    dateTime?: string;
  };
  end?: {
    date?: string;
    dateTime?: string;
  };
  attendees?: Array<{
    email?: string;
  }>;
};

type ScheduleEvent = {
  id: string;
  month: string;
  day: string;
  title: string;
  type: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  accent: string;
};

const accentByType: Record<string, string> = {
  default: "bg-[#3f6ca0] text-[#cfe4ff]",
  focusTime: "bg-[#6c5ab8] text-[#e5dcff]",
  outOfOffice: "bg-[#8f7535] text-[#ffe39b]",
  workingLocation: "bg-[#2d7a50] text-[#c7f3d8]",
};

function formatDateBlock(value?: string) {
  const date = value ? new Date(value) : new Date();
  return {
    month: new Intl.DateTimeFormat("en-US", { month: "short" }).format(date),
    day: String(date.getDate()),
  };
}

function formatTimeRange(event: GoogleCalendarEvent) {
  if (event.start?.date && !event.start?.dateTime) {
    return "All day";
  }

  if (!event.start?.dateTime) {
    return "Time not listed";
  }

  const start = new Date(event.start.dateTime);
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  if (!event.end?.dateTime) {
    return formatter.format(start);
  }

  return `${formatter.format(start)} - ${formatter.format(
    new Date(event.end.dateTime)
  )}`;
}

function mapEvent(event: GoogleCalendarEvent): ScheduleEvent {
  const dateBlock = formatDateBlock(event.start?.dateTime ?? event.start?.date);
  const type = event.eventType ?? "Event";

  return {
    id: event.id,
    month: dateBlock.month,
    day: dateBlock.day,
    title: event.summary?.trim() || "Untitled event",
    type,
    time: formatTimeRange(event),
    location: event.location?.trim() || "Location not listed",
    attendees: event.attendees?.length
      ? `${event.attendees.length} invited`
      : "Attendee list not shared",
    description:
      event.description?.trim() || "No event description provided.",
    accent: accentByType[type] ?? accentByType.default,
  };
}

async function getCalendarEvents(accessToken: string) {
  const response = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events?orderBy=startTime&singleEvents=true&timeMin=" +
      encodeURIComponent(new Date().toISOString()) +
      "&maxResults=10",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as { items?: GoogleCalendarEvent[] };
  return (data.items ?? []).map(mapEvent);
}

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

export default async function MemberHomePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/member-login");
  }

  const events = session.accessToken
    ? await getCalendarEvents(session.accessToken)
    : [];

  return (
    <MemberPortalShell>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2b5278] text-[#f3c35a]">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-none stroke-current"
            strokeWidth="1.8"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Upcoming Events
        </h2>
      </div>

      {events.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-[#284d72]/70 px-6 py-10 text-center text-[#c7d8e8]">
          No upcoming events were found on this account&apos;s primary
          calendar.
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <article
              key={event.id}
              className="rounded-2xl border border-transparent bg-[#284d72]/85 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition duration-200 hover:border-white/70 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25)] md:px-5"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <div className="flex h-[76px] w-[76px] shrink-0 flex-col items-center justify-center rounded-2xl bg-[#234468] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#d0ab55]">
                    {event.month}
                  </span>
                  <span className="mt-1 text-3xl font-semibold leading-none text-white">
                    {event.day}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium text-white">
                      {event.title}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${event.accent}`}
                    >
                      {event.type}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                    <MetaItem
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-none stroke-current"
                          strokeWidth="1.8"
                        >
                          <circle cx="12" cy="12" r="8" />
                          <path d="M12 8v5l3 2" />
                        </svg>
                      }
                    >
                      {event.time}
                    </MetaItem>
                    <MetaItem
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-none stroke-current"
                          strokeWidth="1.8"
                        >
                          <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
                          <circle cx="12" cy="10" r="2.2" />
                        </svg>
                      }
                    >
                      {event.location}
                    </MetaItem>
                    <MetaItem
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-none stroke-current"
                          strokeWidth="1.8"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                          <circle cx="9.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                      }
                    >
                      {event.attendees}
                    </MetaItem>
                  </div>

                  <p className="mt-4 text-sm text-[#b3c4d7]">
                    {event.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </MemberPortalShell>
  );
}
