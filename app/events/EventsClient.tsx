"use client";

import { useState } from "react";
import FilterPanel from "./components/FilterPanel";
import EventCard from "./components/EventCard";
import EventCalendar from "./components/EventCalendar";
import EventDetail from "./components/EventDetail";

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

export default function EventsClient({ events }: { events: CalendarEvent[] }) {
  const [activeFilter, setActiveFilter] = useState(FILTERS[0]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const filteredEvents = events.filter((e) =>
    activeFilter.q
      ? e.summary?.toLowerCase().includes(activeFilter.q.toLowerCase()) ||
        e.description?.toLowerCase().includes(activeFilter.q.toLowerCase())
      : true
  );

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

          {/* Right: calendar + detail */}
          <div className="flex flex-1 flex-col gap-4">
            <EventCalendar
              events={filteredEvents}
              onSelectEvent={setSelectedEvent}
            />
            {selectedEvent && (
              <EventDetail
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}