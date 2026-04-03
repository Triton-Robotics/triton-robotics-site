import Image from "next/image";

const leads = [
  {
    name: "Pamela Yung",
    role: "President",
    image: "/photos/leads/president.png",
    bio: `Hello! My name is Pamela and I am a rising senior studying cognitive science 
with a specialization in machine learning. My goal for this year is to bring 
opportunities to Triton Robotics and set the team up for success for the future. 
Outside of robotics I enjoy photography, golfing, and hanging out with friends!`,
  },
  {
    name: "Kane Li",
    role: "VP Software",
    image: "/photos/leads/vp_software.jpeg",
    bio: `Hey there! My name is Kane Li and I'm a senior in Computer Science with a 
minor in Mathematics. This year, I hope to develop an efficient CI pipeline for 
our software teams, and help keep software code clean and efficient. Outside of 
Robotics, I enjoy brawl stars and Taiko drumming.`,
  },
  {
    name: "Justin Prupas",
    role: "Mech. Lead (Infantry)",
    image: "/photos/leads/mech_infantry_lead.png",
    bio: `Hello, I'm Justin and I'm a senior studying mechanical engineering. This year, 
my goal is to reimagine Infantry to be as sturdy, lightweight, and agile as possible. 
This includes all new suspension, chassis, and turret designs. Outside of robotics, 
I enjoy watching movies and TV shows, playing video games, and exploring San Diego.`,
  },
  {
    name: "Manan Tuteja",
    role: "Mech. Lead (Hero)",
    image: "/photos/leads/mech_hero_lead.png",
    bio: `Hi, I'm Manan, a rising Aerospace Engineering senior. My goal for hero this 
year is to make a robust robot design that can be improved upon by future TR members. 
Outside of robotics, I enjoy playing basketball and spending time with my friends 
and family.`,
  },
  {
    name: "Nick Winsett",
    role: "Mech. Lead (Sentry)",
    image: "/photos/leads/mech_sentry_lead.png",
    bio: `Hi, I'm Nicholas, and I'm a junior in Mechanical Engineering. My goals for 
Sentry this year are to integrate new autonomous sensors and increase its competitive 
reliability. In my free time, I enjoy 3D printing and playing video games on my computer.`,
  },
  {
    name: "Edward Lee",
    role: "Embedded Lead",
    image: "/photos/leads/embedded_lead_2.png",
    bio: `Hello, I'm Edward, a junior majoring in Computer Engineering. My goal for 
this year is to make sure that our robots are robust yet precise, and not succumbing 
to jank code that "works". My hobbies include playing table tennis and badminton, 
as well as watching movies and TV shows.`,
  },
  {
    name: "Huian Yang",
    role: "Embedded Lead",
    image: "/photos/leads/embedded_lead.png",
    bio: `Hi, I'm Huian, a junior majoring in computer engineering. This year, my goal 
is to help our embedded team thrive and (hopefully) not break any robots along the way. 
Outside of robotics, I enjoy video games, play table tennis, and watch YouTube while I eat.`,
  },
  {
    name: "Keyush Attarde",
    role: "Autonomy Lead",
    image: "/photos/leads/auto_lead.png",
    bio: `Hello!! I am Keyush, a 2nd year Computer Engineering student passionate about 
robotics since my time in FRC. This year I'll be leading the development of robust 
auto-aim and navigation solutions while improving our testing and development workflow 
through simulation. Outside of robotics, you might find me zipping around on my 
electric skateboard or strategizing over card games.`,
  },
];

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Header */}
        <div className="mb-16 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
            The Team
          </p> */}
          <h1 className="text-5xl font-bold tracking-tight">Meet the Leads</h1>
          <p className="mt-4 text-lg text-gray-400">
            The people behind Triton Robotics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((lead) => (
            <div
              key={lead.name}
              className="
                group 
                flex 
                flex-col 
                rounded-2xl 
                border 
                border-white/10 
                bg-white/5 
                overflow-hidden 
                transition 
                duration-300 
                hover:border-white/20 
                hover:bg-white/10 
                hover:scale-105"            >
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={lead.image}
                  alt={lead.name}
                  fill
                  className="object-cover object-top transition"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5">
                <h2 className="text-base font-semibold text-white">{lead.name}</h2>
                <span className="mt-1 mb-3 inline-block text-xs font-medium text-[#FFCD00]">
                  {lead.role}
                </span>
                <p className="text-sm leading-relaxed text-gray-200 flex-1">
                  {lead.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}