import EventsClient from "./EventsClient";

export default async function EventsPage() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID!;
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY!;

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`,
    { next: { revalidate: 3600 } } // re-fetch at most once per hour
  );

  const data = await res.json();
  // console.log("RAW EVENTS:", JSON.stringify(data.items, null, 2));
  // console.log("FULL RESPONSE:", JSON.stringify(data, null, 2));
  const events = data.items ?? [];

  return <EventsClient events={events} />;
}