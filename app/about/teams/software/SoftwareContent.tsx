import Image from "next/image";

const teams = [
  {
    name: "Embedded",
    image: "/photos/teams/embedded.jpg",
    description: `The Embedded sub-team programs the control systems and algorithms of all
the robots. We use the Nucleo F446RE, which is an STM32 board that we code using a
framework called mbed-os. Our work involves firmware, communications protocols, controls,
and algorithms.

Our controls group works on motor system characterization and PID control methods, using
MATLAB and Simulink. The firmware group ensures consistent communication with sensors and
our autonomy team, using C++ and RTOS libraries. Finally, the algorithms group then uses
the work from these teams to write code to control our robot kinematics and responses.

All our sub-teams work together to ship out a robot that has smooth and responsive controls
for both the driver and our autonomy teams to make the best use of.`,
    stack: ["C++", "STM32", "mbed-os", "RTOS", "MATLAB", "Simulink"],
  },
  {
    name: "Electronics",
    image: "/photos/teams/pcb.png",
    description: `The Electronics team manages all electronics for our robots including
custom PCBs, off-the-shelf components and on-robot wiring. Our most recent project was
the supercapacitor system, which is a power system that stores power in large capacitors
and allows us to breach the normal limits of power for our competition.`,
    stack: ["PCB Design", "Supercapacitors", "Wiring"],
  },
  {
    name: "Autonomy",
    image: "/photos/teams/autonomy.png",
    description: `Autonomy is focused on developing autonomous movement and controls within
the robots. This incorporates multiple fields, such as machine learning and object detection,
ballistics, communication protocols, and state management.

Our machine learning division focuses on armor plate detection using deep neural networks
that focus on speed and accuracy. We will be designing and labeling a custom dataset to
train this model.

We also heavily utilize ROS2 and OpenCV, allowing communication from subnodes to the main
robot control board. We also implement custom functions in OpenCV and the camera SDK that
enable the computer vision software to have higher flexibility in image preprocessing.

Ultimately, we do most of our programming in C++, with occasional use of Python. Our end
goal is to contribute to the ever expanding field of autonomous robotics through building
systems of our own from the ground up.`,
    stack: ["C++", "Python", "ROS2", "OpenCV", "Deep Learning"],
  },
];

export default function SoftwareContent() {
  return (
    <>
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
          Subteam
        </p>
        <h1 className="text-5xl font-bold tracking-tight">Software</h1>
        <p className="mt-4 text-lg text-gray-400">The code behind the robots.</p>
      </div>

      <div className="flex flex-col gap-20">
        {teams.map((team) => (
          <div
            key={team.name}
            className="flex flex-col gap-10 md:flex-row-reverse md:items-start"
          >
            <div className="shrink-0 md:w-1/2">
              <Image
                src={team.image}
                alt={team.name}
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl"
              />
            </div>

            <div className="md:w-1/2">
              <h2 className="mb-4 text-2xl font-bold">{team.name}</h2>

              {team.description.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 text-base leading-relaxed text-gray-300">
                  {para}
                </p>
              ))}

              <div className="mt-2 flex flex-wrap gap-2">
                {team.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#FFCD00]/20 bg-[#FFCD00]/10 px-3 py-1 text-xs font-medium text-[#FFCD00]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
