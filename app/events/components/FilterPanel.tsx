"use client";

import type { FILTERS } from "../EventsClient";

type Filter = (typeof FILTERS)[number];

export default function FilterPanel({
  filters,
  activeFilter,
  onFilterChange,
}: {
  filters: Filter[];
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
        Filter by
      </p>

      {filters.map((filter) => {
        const isActive = filter.q === activeFilter.q;
        return (
          <button
            key={filter.label}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all ${
              isActive
                ? "bg-[#FFCD00] text-[#1B2B44]"
                : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}