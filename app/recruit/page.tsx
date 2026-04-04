import Image from "next/image";
import FAQ from "./components/FAQ";
import Timeline from "./components/Timeline";

const faqs = [
  {
    question: "When do you accept members?",
    answer: null,
    list: [
      "Summer — late July / early August",
      "Fall — Week 0–1",
      "Winter — Week 1",
    ],
    listLabel: "Application Cycles:",
  },
  {
    question: "Do I need prior experience to join?",
    answer: null,
    list: [
      "Embedded: Familiarity with C++ required. Recommended to take CSE courses before applying if you have never programmed before.",
      "Autonomy: Familiarity with Python + C++ required. Same recommendation applies.",
      "Mechanical: Some CAD experience recommended.",
      "Electronics: Some PCB experience recommended.",
      "We have training programs for all teams — you do not need to be a specific major or have expertise in any field.",
    ],
    guide: true,
  },
  {
    question: "What does the recruitment process look like after I'm accepted?",
    answer: null,
    sections: [
      {
        label: "Training",
        items: [
          "Mechanical: OnShape and design",
          "Autonomy: ROS 2, Simulink basics, Git",
          "Embedded: Workflow training",
          "Electronics: PCB design (EasyEDA)",
        ],
      },
      {
        label: "Skill Evaluation",
        items: [
          "Members are given a capstone project after training (week 6) and present it during a general meeting.",
        ],
      },
    ],
  },
  {
    question: "What does the time commitment look like?",
    answer: `Members are expected to work on assigned tasks throughout the week and ask 
questions to their leads as needed. We don't expect you to know everything.`,
  },
];

const timelineTop = [
  {
    title: "Open Applications",
    duration: "1–2 weeks",
    description:
      "We will release a Google Form asking for basic information, a resume, an optional introduction video, and any other relevant work or experience.",
  },
  {
    title: "Acceptances",
    duration: "< 1 week",
    description:
      "Acceptances will be sent to your email a couple days after the application deadline.",
  },
];

const timelineBottom = [
  {
    title: "Training Program",
    duration: "3–5 weeks",
    description:
      "Students accepted will start a training program where they will learn necessary skills to succeed in the club.",
  },
  {
    title: "Capstone Project",
    duration: "Time can vary",
    description:
      "After completing the trainee program, members will be assigned a capstone project by their sub-team lead. Topics and length of time can vary. Members are strongly encouraged to tell their lead what skills they want to work on. At the end, recruits will make and present their project to the club.",
  },
];

const images = [
  { src: "/photos/recruit/recruit_1.jpg", alt: "Triton Robotics team" },
  { src: "/photos/recruit/recruit_2.png", alt: "Triton Robotics build" },
  { src: "/photos/recruit/recruit_3.png", alt: "Triton Robotics competition" },
];

const RECRUITING = false; // flip to true when apps open
const FORM_LINK = "https://forms.gle/PLACEHOLDER";

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-16">

        {/* Header */}
        <div className="mb-12 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
            Get Involved
          </p> */}
          <h1 className="text-5xl font-bold tracking-tight text-[#1B2B44]">
            Join Triton Robotics
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about joining the team.
          </p>
        </div>

        {/* Three images */}
        <div className="mb-10 grid grid-cols-3 gap-4">
          {images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl object-cover"
            />
          ))}
        </div>

        {/* Recruitment button */}
        <div className="mb-16 text-center">
          {RECRUITING ? (
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFCD00] px-10 py-4 text-lg font-bold text-[#1B2B44] shadow-lg transition hover:bg-[#e6b800]"
            >
              Apply Now
            </a>
          ) : (
            <div className="inline-block rounded-full bg-gray-100 px-10 py-4 text-lg font-bold text-gray-400 cursor-not-allowed">
              Applications Open Summer 2026
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-[#1B2B44]">
            Frequently Asked Questions
          </h2>
          <FAQ faqs={faqs} />
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-gray-200" />

        {/* Timeline + Flowchart */}
        <h2 className="mb-10 text-3xl font-bold text-[#1B2B44]">
          General Recruitment Timeline
        </h2>
        <div className="flex gap-10 items-start">
          <div className="flex-1">
            <Timeline top={timelineTop} bottom={timelineBottom} />
          </div>
          <div className="w-72 shrink-0">
            <Image
              src="/photos/recruit/flowchart.png"
              alt="Recruitment flowchart"
              width={600}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}