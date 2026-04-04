type TimelineCell = {
  title: string;
  duration: string;
  description: string;
};

function TimelineTable({ cells }: { cells: TimelineCell[] }) {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200">
      {cells.map((cell) => (
        <div key={cell.title} className="border-r last:border-r-0 border-gray-200 p-5">
          <p className="text-sm font-bold text-[#1B2B44]">{cell.title}</p>
          <p className="text-xs text-[#FFCD00] font-semibold mb-2">{cell.duration}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{cell.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function Timeline({
  top,
  bottom,
}: {
  top: TimelineCell[];
  bottom: TimelineCell[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <TimelineTable cells={top} />
      <div className="flex justify-center">
        <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <TimelineTable cells={bottom} />
    </div>
  );
}