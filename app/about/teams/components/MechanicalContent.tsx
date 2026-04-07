import Image from "next/image";

const robots = [
  {
    name: "Infantry",
    image: "/photos/teams/infantry.png",
    description: `Infantry is the most agile robot in the RoboMaster competition. It is equipped 
with a 17 mm projectile launcher capped at a 20 m/s launch speed. It acts as the team's 
secondary offensive tool, having fast and aggressive plays, outmaneuvering opponents and 
acting as a scout.

The latest iteration of the Infantry robot uses an x-drive, increasing lateral movement, 
ability to "spin-to-win" and maximizing the area to mount electronics. Infantry will also 
be enclosed in a free spinning roller to allow for high speed rotation near walls. A new 
auto swapping barrel will be utilized to allow for continuous firing without cooldown.`,
  },
  {
    name: "Hero",
    image: "/photos/teams/hero.png",
    description: `Hero is the main offensive ground robot in RoboMaster. It is equipped with 
42 mm projectiles with a capped speed of 16 m/s, which can be accompanied by a secondary 
17 mm projectile launcher.

The current iteration of Hero is a larger and bigger version of the Infantry robot.`,
  },
  {
    name: "Sentry",
    image: "/photos/teams/sentry.png",
    description: `Sentry is a fully autonomous robot. Previously, it moved on a rail but as 
of 2023, Sentry is a ground-constrained robot.

The current iteration of Sentry uses an x-drive along with a double barrel.`,
  },
];

export function MechanicalContent() {
  return (
    <>
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
          Subteam
        </p>
        <h1 className="text-5xl font-bold tracking-tight">Mechanical</h1>
        <p className="mt-4 text-lg text-gray-400">
          Our robots at RoboMaster North America 2025.
        </p>
      </div>

      <div className="mb-24">
        <Image
          src="/photos/teams/all_robots.png"
          alt="All robots"
          width={1200}
          height={800}
          className="w-full h-auto rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-20">
        {robots.map((robot) => (
          <div key={robot.name} className="flex flex-col gap-10 md:flex-row md:items-start">
            <div className="md:w-1/2 shrink-0">
              <Image
                src={robot.image}
                alt={robot.name}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{robot.name}</h2>
              {robot.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-gray-300 mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// export default function MechanicalPage() {
//   return (
//     <div className="min-h-screen bg-[#1B2B44] text-white">
//       <div className="mx-auto max-w-5xl px-6 py-16">
//         <MechanicalContent />
//       </div>
//     </div>
//   );
// }