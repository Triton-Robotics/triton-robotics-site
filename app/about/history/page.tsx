import Image from "next/image";

const timeline = [
  {
    year: "2025–26",
    text: null,
    image: "/photos/group_pic_edit.png",
  },
  {
    year: "2024–25",
    text: `This year, Triton Robotics successfully hosted the 24-25 RoboMaster 
            competition. We successfully deployed computer vision, 
            reintroduced carbon fiber parts and suspension, and had one of TR's 
            best showings in years. In the photo on the right, you can see our 
            members who helped us attain this victory and make hosting the 
            competition a great success!`,
    image: "/photos/history/history_2425.png",
  },
  {
    year: "2023–24",
    text: `Triton Robotics travelled to Colorado to compete in another 
            RoboMaster competition. This year was focused on updating our 
            current robots and working on building a greater sense of 
            community outside of robotics. Triton Robotics returned to doing 
            outreach and worked on getting company sponsorships.`,
    image: "/photos/history/history_2324.jpg",
  },
  {
    year: "2022–23",
    text: `This was one of the most monumental years for Triton Robotics: 
            501(c)(3) status was obtained and Triton Robotics officially 
            became a non-profit student organization; complete new redesigns 
            of the robots were made; and the non-technical teams were created. 
            In the photo to the right, you can see our members wearing the new 
            jerseys at the University of Washington.`,
    image: "/photos/history/history_2223.jpg",
  },
  {
    year: "2021–22",
    text: `After the pandemic, Triton Robotics continued to grow and become 
            one of the largest engineering project teams on campus. During 
            this year, Triton Robotics tried to expand into RMUC with the 
            drone, engineer, and dart sub-team; however, budget issues proved 
            to be too significant.`,
    image: "/photos/history/history_2122.jpg",
  },
  {
    year: "2019–21",
    text: `After the founding members left, COVID-19 happened and made it 
            difficult for progress to be made. Members were forced to work 
            online and competition ceased. The RoboMaster North American 
            community decided to host its very first RMUL NA competition in 
            Texas A&M during the summer of 2021, where Triton Robotics 
            competed again for the first time in years.`,
    image: "/photos/history/history_1921.jpg",
  },
  {
    year: "2017–18",
    text: `Triton Robotics was founded in the Winter of 2017 by a group of 
            undergraduate students with the hopes of creating a platform and 
            community for robotics at UC San Diego. Aspiring to participate 
            in RoboMaster, an international robotics competition hosted by 
            DJI (Dai-Jang Innovations) in Shenzhen, China, the founding 
            members went through the initial challenges of establishing a 
            RoboMaster team and were able to qualify and attended their 
            first RoboMaster Competition in 2018.`,
    image: "/photos/history/history_1718_bigboss.jpg",
  },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-16 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
            Our Story
          </p> */}
          <h1 className="text-5xl font-bold tracking-tight">History</h1>
          <p className="mt-4 text-lg text-gray-400">
            From a small group of undergraduates to one of UCSD's largest engineering teams.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-24">
          {timeline.map((entry, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={entry.year}
                className={`flex flex-col gap-10 md:flex-row md:items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2 shrink-0">
                  <Image
                    src={entry.image}
                    alt={`Triton Robotics ${entry.year}`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2">
                  <span className="mb-3 inline-block rounded-full bg-[#FFCD00]/10 px-4 py-1 text-sm font-semibold text-[#FFCD00]">
                    {entry.year}
                  </span>
                  {entry.text ? (
                    <p className="mt-4 text-base leading-relaxed text-gray-300">
                      {entry.text}
                    </p>
                  ) : (
                    <p className="mt-4 text-base italic text-gray-500">
                      Content coming soon.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}