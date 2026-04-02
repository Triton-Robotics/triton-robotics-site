"use client";

import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import FilterPanel from "./components/FilterPanel";
import EventCard from "./components/EventCard";
import type { CalendarEvent } from "./EventsClient";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
});

function parseTag(description?: string, tag?: string) {
  if (!description || !tag) return null;
  const match = description.match(new RegExp(`${tag}:\\s*([^\n\r]+)`, "i"));
  return match ? match[1].trim() : null;
}

function stripTags(description?: string) {
  if (!description) return "";
  return description
    .replace(/subteam:\s*.+/gi, "")
    .replace(/type:\s*.+/gi, "")
    .trim();
}

export type { CalendarEvent };

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
}: {
  events: CalendarEvent[];
}) {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const filteredEvents = events.filter((e) =>
    activeFilter.q
      ? e.summary?.toLowerCase().includes(activeFilter.q.toLowerCase()) ||
        e.description?.toLowerCase().includes(activeFilter.q.toLowerCase())
      : true
  );

  const mapped = filteredEvents.map((e) => ({
    title: e.summary,
    start: new Date(e.start.dateTime ?? e.start.date!),
    end: new Date(e.end.dateTime ?? e.end.date!),
    resource: e,
  }));

  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Events</h1>
        <p className="mb-10 text-gray-400">Browse upcoming Triton Robotics events.</p>

        <div className="flex gap-8">

          {/* Left: filters + event cards */}
          <aside className="flex w-56 shrink-0 flex-col gap-6">
            <FilterPanel
              filters={FILTERS}
              activeFilter={activeFilter}
              onFilterChange={(f) => { setActiveFilter(f); setSelectedEvent(null); }}
            />
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-1">
              {filteredEvents.length === 0 && (
                <p className="text-xs text-gray-500">No events match this filter.</p>
              )}
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer"
                >
                  <EventCard event={event} active={selectedEvent?.id === event.id} />
                </div>
              ))}
            </div>
          </aside>

          {/* Right: calendar + detail panel */}
          <div className="flex flex-1 flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl">
              <Calendar
                localizer={localizer}
                events={mapped}
                style={{ height: 560 }}
                onSelectEvent={(e) => setSelectedEvent(e.resource)}
                eventPropGetter={() => ({
                  style: {
                    backgroundColor: "#1B2B44",
                    borderRadius: "6px",
                    border: "none",
                    color: "#FFCD00",
                    fontSize: "0.75rem",
                  },
                })}
              />
            </div>

            {/* Event detail panel */}
            {selectedEvent && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-1 flex items-start justify-between">
                  <h2 className="text-lg font-semibold">{selectedEvent.summary}</h2>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    ✕
                  </button>
                </div>
                <p className="mb-3 text-xs text-gray-400">
                  {new Intl.DateTimeFormat("en-US", {
                    weekday: "long", month: "long", day: "numeric",
                    hour: "numeric", minute: "2-digit",
                  }).format(new Date(selectedEvent.start.dateTime ?? selectedEvent.start.date!))}
                </p>
                {selectedEvent.location && (
                  <p className="mb-2 text-sm text-gray-300">📍 {selectedEvent.location}</p>
                )}
                {parseTag(selectedEvent.description, "subteam") && (
                  <p className="mb-2 text-sm text-gray-300">
                    👥 {parseTag(selectedEvent.description, "subteam")}
                  </p>
                )}
                {parseTag(selectedEvent.description, "type") && (
                  <span className="mb-3 inline-block rounded-full bg-[#FFCD00]/10 px-3 py-0.5 text-xs font-medium text-[#FFCD00]">
                    {parseTag(selectedEvent.description, "type")}
                  </span>
                )}
                {stripTags(selectedEvent.description) && (
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {stripTags(selectedEvent.description)}
                  </p>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}