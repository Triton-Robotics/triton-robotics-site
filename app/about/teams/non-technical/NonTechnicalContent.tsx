import Image from "next/image";

const teams = [
  {
    name: "Business",
    image: "/photos/teams/finances.png",
    description: `The business team talks with companies to get sponsorships and helps
manage the finance of the organization. They also maintain the club's non-profit status.`,
  },
  {
    name: "Marketing & Design",
    image: "/photos/teams/stickers.png",
    description: `The marketing & design team designs any physical media for the club
(flyers, jerseys, and merchandise) and helps manage the team's social media accounts.`,
  },
  {
    name: "Webmaster",
    image: "/photos/teams/webmaster.png",
    description: `The webmaster team works on the official club website. They design,
integrate, and maintain the website.`,
  },
];

export default function NonTechnicalContent() {
  return (
    <>
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
          Subteam
        </p>
        <h1 className="text-5xl font-bold tracking-tight">Non-Technical</h1>
        <p className="mt-4 text-lg text-gray-400">
          The teams that keep things smooth.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {teams.map((team) => (
          <div
            key={team.name}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <Image
              src={team.image}
              alt={team.name}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />

            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-white">{team.name}</h2>
              <p className="text-sm leading-relaxed text-gray-300">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
