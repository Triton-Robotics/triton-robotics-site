export default function RobotVisPage() {
  return (
    <div className="min-h-screen bg-[#1B2B44] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="mb-8 text-center">
          {/* <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCD00]">
            Interactive
          </p> */}
          <h1 className="text-5xl font-bold tracking-tight">Robot Visualizer</h1>
          <p className="mt-4 text-lg text-gray-400">
            Explore a 3D simulation of our Sentry robot.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {[
            { key: "Left Click + Drag", desc: "Rotate view" },
            { key: "Right Click + Drag", desc: "Pan camera" },
            // { key: "Ctrl + Drag", desc: "Move robot" },
            { key: "Scroll", desc: "Zoom in / out" },
          ].map((control) => (
            <div
              key={control.key}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
            >
              <span className="rounded-md bg-[#FFCD00]/10 px-2 py-0.5 text-xs font-bold text-[#FFCD00]">
                {control.key}
              </span>
              <span className="text-sm text-gray-400">{control.desc}</span>
            </div>
          ))}
        </div>

        {/* Embed */}
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <iframe
            src="https://chimerical-torrone-76204f.netlify.app/"
            className="w-full"
            style={{ height: "80vh" }}
            allow="fullscreen"
          />
        </div>

      </div>
    </div>
  );
}