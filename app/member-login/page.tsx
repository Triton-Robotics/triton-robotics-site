import Link from "next/link";

export default function MemberLoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#26476a]">
      <div className="overflow-hidden md:grid md:min-h-screen md:grid-cols-[1.05fr_1fr]">
        <section
          className="relative min-h-[360px] overflow-hidden bg-cover"
          style={{
            backgroundImage: "url('/photos/group_pic.png')",
            backgroundPosition: "center top",
          }}
        >
          <div className="absolute inset-0 bg-[#0f172a]/12" />

          <div className="relative flex h-full items-center justify-center px-6 py-12 md:px-8">
            <div className="mt-0 flex w-full max-w-[760px] items-center justify-center gap-4 md:-mt-24 md:gap-5">
              <img
                src="/photos/logo.png"
                alt="Triton Robotics crest"
                className="w-20 shrink-0 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] md:w-24"
              />
              <img
                src="/photos/Triton_Robotics_Letter_Logo_1.png"
                alt="Triton Robotics wordmark"
                className="w-full max-w-[560px] drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center px-8 py-16 md:px-14">
          <div className="w-full max-w-[420px] text-white">
            <h1 className="mb-10 text-5xl font-light tracking-tight">Sign in</h1>

            <form className="rounded-md bg-[#f5f2ef] p-5 text-[#1f1f1f] shadow-xl">
              <label htmlFor="email" className="mb-2 block text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="[your email]@ucsd.edu"
                className="mb-6 h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-[#26476a]"
              />

              <label htmlFor="password" className="mb-2 block text-lg">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="[your password]"
                className="mb-6 h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-base outline-none transition focus:border-[#26476a]"
              />

              <button
                type="submit"
                className="mb-5 h-12 w-full rounded-lg border border-[#7a5c1c] bg-[#f7bf5e] text-xl font-medium text-[#1f1f1f] transition hover:bg-[#efb44d]"
              >
                Sign In
              </button>

              <a href="#" className="text-lg underline underline-offset-4">
                Forgot password?
              </a>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
