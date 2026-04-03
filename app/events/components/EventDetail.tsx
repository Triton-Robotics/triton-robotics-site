import type { CalendarEvent } from "../EventsClient";

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

export default function EventDetail({
  event,
  onClose,
}: {
  event: CalendarEvent;
  onClose: () => void;
}) {
  const subteam = parseTag(event.description, "subteam");
  const type = parseTag(event.description, "type");
  const description = stripTags(event.description);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-1 flex items-start justify-between">
        <h2 className="text-lg font-semibold">{event.summary}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-sm"
        >
          ✕
        </button>
      </div>

      <p className="mb-3 text-xs text-gray-400">
        {new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date(event.start.dateTime ?? event.start.date!))}
      </p>
      {event.location && (
        <p className="mb-2 text-sm text-gray-300"><span className="font-semibold">Location:</span> {event.location}</p>
      )}
      {subteam && (
        <p className="mb-2 text-sm text-gray-300"><span className="font-semibold">Team:</span> {subteam}</p>
      )}

      {type && (
        <span className="mb-3 inline-block rounded-full bg-[#FFCD00]/10 px-3 py-0.5 text-xs font-medium text-[#FFCD00]">
          {type}
        </span>
      )}

      {description && (
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}