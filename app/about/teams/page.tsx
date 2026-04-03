import { MechanicalContent } from "./mechanical/page";
import { SoftwareContent } from "./software/page";
import { NonTechnicalContent } from "./non-technical/page";

const teams = [
  { id: "mechanical", label: "Mechanical" },
  { id: "software", label: "Software" },
  { id: "non-technical", label: "Non-Technical" },
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight">Our Teams</h1>
          <p className="mt-4 text-lg text-gray-400">
            The subteams that make Triton Robotics run.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-4">
          {teams.map((team) => (
            <a
              key={team.id}
              href={`#${team.id}`}
              className="rounded-full px-5 py-2 text-sm font-semibold bg-white/5 border border-white/10 text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              {team.label}
            </a>
          ))}
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-32">
          <section id="mechanical" className="scroll-mt-24">
            <MechanicalContent />
          </section>
          <section id="software" className="scroll-mt-24">
            <SoftwareContent />
          </section>
          <section id="non-technical" className="scroll-mt-24">
            <NonTechnicalContent />
          </section>
        </div>
      </div>
    </div>
  );
}