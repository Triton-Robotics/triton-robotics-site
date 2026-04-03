"use client";

import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import type { CalendarEvent } from "../EventsClient";
import { useState } from "react";
import type { View } from "react-big-calendar";
import "../calendar.css";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { "en-US": enUS },
});

export default function EventCalendar({
  events,
  onSelectEvent,
}: {
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
}) {
  const mapped = events.map((e) => ({
    title: e.summary,
    start: new Date(e.start.dateTime ?? e.start.date!),
    end: new Date(e.end.dateTime ?? e.end.date!),
    resource: e,
  }));
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState(new Date());

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-4 shadow-xl">
      <Calendar
        localizer={localizer}
        events={mapped}
        style={{ height: 560 }}
        view={view}
        date={date}
        onView={setView}
        onNavigate={setDate}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        // onView={(view) => console.log("view changed:", view)}
        // onNavigate={(date) => console.log("navigated to:", date)}
        onSelectEvent={(e) => onSelectEvent(e.resource)}
        eventPropGetter={() => ({
          style: {
            // backgroundColor: "#2d5a8e",
            borderRadius: "6px",
            border: "none",
            color: "#FFCD00",
            fontSize: "0.75rem",
          },
        })}
      />
    </div>
  );
}