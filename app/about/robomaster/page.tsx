import Image from "next/image";
import Link from "next/link";

const alternating = [
  {
    heading: "ARC Championships: Team-Oriented Robotics Competition",
    body: `ARC University Championship is an annual robotics competition for universities 
worldwide. It is the first global team-oriented, live, projectile robotics competition 
that fuses engineering with teamwork, strategy, and innovation.`,
    image: "/photos/robomaster/robomaster.jpg",
    link: { label: "Learn more at arc-robotics.org", href: "https://www.arc-robotics.org/" },
  },
  {
    heading: "Interdisciplinary Branches of Knowledge",
    body: `The competition primarily focuses on the application of different branches of engineering:`,
    list: [
      "Mechanical Design",
      "Electronics Design",
      "Embedded Systems",
      "Computer Vision",
      "Autonomous Systems",
    ],
    image: "/photos/robomaster/interdis.jpg",
  },
];

const pillars = [
  {
    heading: "Teamwork",
    body: `Applying these skills enables students to put their theoretical knowledge from 
class into practice while also gaining the soft skills needed to work in the industry.`,
    image: "/photos/robomaster/teamwork.jpg",
  },
  {
    heading: "Innovation",
    body: `New teams gain resources to acquire some basic robot designs and coding to 
get started in the competition.`,
    image: "/photos/robomaster/innovation.jpg",
  },
  {
    heading: "Strategy",
    body: `Meanwhile, established teams can continue to iterate and push the competition 
forward while optimizing their robot designs for future seasons.`,
    image: "/photos/robomaster/strategy.jpg",
  },
];

export default function RobomasterPage() {
  return (
    // <div className="min-h-screen bg-[#1B2B44] text-white">
    <div className="min-h-screen bg-white text-[#1B2B44]">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Header */}
        <div className="mb-12 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
            The Competition
          </p> */}
          <h1 className="text-5xl font-bold tracking-tight">RoboMaster</h1>
          <p className="mt-4 text-lg text-gray-500">
            Engineering, strategy, and teamwork on a global stage.
          </p>
        </div>

        {/* Alternating sections */}
        <div className="flex flex-col gap-14">
          {alternating.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={section.heading}
                className={`flex flex-col gap-10 md:flex-row md:items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 shrink-0">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold tracking-tight">{section.heading}</h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">{section.body}</p>

                  {section.list && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {section.list.map((item, i) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffe373] text-xs font-bold text-[#000000]">
                            {i + 1}
                          </span>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.link && (
                    <Link
                      href={section.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FFCD00] px-5 py-2.5 text-sm font-semibold text-[#1B2B44] transition hover:bg-[#f0bc00]"
                    >
                      {section.link.label}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-gray-200" />

        {/* Pillars */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Theory into Practice</h2>
          <p className="mt-3 text-gray-600">
            Applying these skills enables students to put their theoretical knowledge from 
            class into practice while also gaining the soft skills needed to work in the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.heading}
              className="overflow-hidden rounded-2xl border border-gray/200 bg-gray-100"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.heading}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{pillar.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}