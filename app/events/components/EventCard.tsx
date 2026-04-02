import type { CalendarEvent } from "../EventsClient";

function formatDate(event: CalendarEvent) {
  const raw = event.start.dateTime ?? event.start.date;
  if (!raw) return "";
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: event.start.dateTime ? "numeric" : undefined,
    minute: event.start.dateTime ? "2-digit" : undefined,
  }).format(new Date(raw));
}

function parseTag(description?: string, tag?: string) {
  if (!description || !tag) return null;
  const match = description.match(new RegExp(`${tag}:\\s*([^\n\r]+)`, "i"));
  return match ? match[1].trim() : null;
}

export default function EventCard({ event }: { event: CalendarEvent }) {
  const date = formatDate(event);
  const subteam = parseTag(event.description, "subteam");
  const type = parseTag(event.description, "type");

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold leading-snug text-white">
          {event.summary}
        </h3>
        {type && (
          <span className="shrink-0 rounded-full bg-[#FFCD00]/10 px-2 py-0.5 text-xs font-medium text-[#FFCD00]">
            {type}
          </span>
        )}
      </div>

      <p className="mb-3 text-xs text-gray-400">{date}</p>

      {event.location && (
        <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </div>
      )}

      {subteam && (
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {subteam}
        </div>
      )}
    </div>
  );
}