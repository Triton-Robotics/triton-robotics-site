import { MemberPortalShell } from "../MemberPortalShell";

const categories = ["All", "Documentation", "CAD", "Code", "Presentation"] as const;

const resources = [
  {
    title: "Robot Design Specifications v3.2",
    tags: ["documentation", "design", "specs"],
    updated: "10/31/2025",
    size: "2.4 MB",
    downloads: "129 downloads",
  },
  {
    title: "Chassis CAD Files",
    tags: ["cad", "solidworks", "chassis"],
    updated: "10/28/2025",
    size: "14.7 MB",
    downloads: "56 downloads",
  },
  {
    title: "Arduino Control System",
    tags: ["code", "arduino", "firmware"],
    updated: "10/24/2025",
    size: "1.9 MB",
    downloads: "42 downloads",
  },
  {
    title: "Competition Strategy Deck",
    tags: ["presentation", "strategy", "competition"],
    updated: "10/22/2025",
    size: "3.8 MB",
    downloads: "51 downloads",
  },
  {
    title: "Safety Protocol Manual",
    tags: ["documentation", "safety", "training"],
    updated: "10/14/2025",
    size: "1.2 MB",
    downloads: "67 downloads",
  },
  {
    title: "Motor Controller Library",
    tags: ["code", "library", "motors"],
    updated: "10/12/2025",
    size: "820 KB",
    downloads: "38 downloads",
  },
];

export default function ResourcesPage() {
  return (
    <MemberPortalShell>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2b5278] text-[#f3c35a]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
            <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5H11l2 2h3.5A2.5 2.5 0 0 1 19 9.5v7A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5v-9Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Resource Archive</h2>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 rounded-xl border border-white/10 bg-[#284d72]/70 px-4 py-3 text-sm text-[#9eb4ca]">
          Search resources...
        </div>
        <button
          type="button"
          className="rounded-xl border border-white/10 bg-[#284d72]/70 px-4 py-3 text-sm font-medium text-[#dbe8f8] transition hover:border-white/20 hover:text-white"
        >
          Filter
        </button>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              index === 0
                ? "bg-[#f3c35a] text-[#1f3651]"
                : "bg-[#315377] text-[#d6e4f1] hover:bg-[#3b628b] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource, index) => (
          <article
            key={resource.title}
            className={`rounded-2xl border border-white/10 bg-[#284d72]/85 p-5 transition hover:border-white/30 ${
              index === 0 ? "md:col-span-2 xl:col-span-1" : ""
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-lg bg-[#234468] text-[#f3c35a]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                    <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                    <path d="M14 3v5h5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{resource.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {resource.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#315377] px-2.5 py-1 text-[11px] font-medium text-[#c7d8e8]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3a5877] text-[#f3c35a] transition hover:bg-[#48698d]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </button>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#9eb4ca]">
              <span>{resource.updated}</span>
              <span>{resource.size}</span>
              <span>{resource.downloads}</span>
            </div>
          </article>
        ))}
      </div>
    </MemberPortalShell>
  );
}
