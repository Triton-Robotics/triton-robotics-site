"use client";

import { useState } from "react";
import FilterPanel from "./components/FilterPanel";

export type CalendarEvent = {
  id: string;
  summary: string;
  description?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
  location?: string;
};

export const FILTERS = [
  { label: "All Events", q: "" },
  { label: "Software", q: "Software" },
  { label: "Mechanical", q: "Mechanical" },
  { label: "Electrical", q: "Electrical" },
  { label: "Meetings", q: "Meeting" },
  { label: "Competitions", q: "Competition" },
];

export default function EventsClient({
  events,
  calendarId,
}: {
  events: CalendarEvent[];
  calendarId: string;
}) {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);

  const iframeSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FLos_Angeles&color=%231B2B44${activeFilter.q ? `&q=${encodeURIComponent(activeFilter.q)}` : ""}`;

  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Events</h1>
        <p className="mb-10 text-gray-400">See our upcoming events!</p>

        <div className="flex gap-8">
          {/* Left: Filter Panel */}
          <aside className="w-48 shrink-0">
            <FilterPanel
              filters={FILTERS}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </aside>

          {/* Right: Calendar Embed */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <iframe
              src={iframeSrc}
              className="h-[700px] w-full"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
}