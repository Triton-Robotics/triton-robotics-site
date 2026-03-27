import Image from "next/image";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen text-center px-6 py-16">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-semibold text-[#1B2B44] mb-12">
        From Triton Robotics, thank you to our Sponsors:
      </h1>

      {/* LOGO GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center mb-16">

        <Image src="/photos/kenesto.png" alt="Kenesto" width={200} height={100} />
        <Image src="/photos/ucsd.png" alt="UCSD" width={220} height={100} />
        <Image src="/photos/braincorp.png" alt="BrainCorp" width={200} height={100} />

        <Image src="/photos/vinatech.png" alt="Vinatech" width={200} height={100} />
        <Image src="/photos/keysight.png" alt="Keysight" width={200} height={100} />
        <Image src="/photos/sunlu.png" alt="Sunlu" width={200} height={100} />

        <Image src="/photos/st.png" alt="ST Microelectronics" width={200} height={100} />
        <Image src="/photos/onshape.png" alt="Onshape" width={200} height={100} />
        <Image src="/photos/moflon.png" alt="Moflon" width={200} height={100} />

        <Image src="/photos/blueorigin.png" alt="Blue Origin" width={180} height={180} />
        <Image src="/photos/asml.png" alt="ASML" width={220} height={120} />

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-400 my-12"></div>

      {/* CTA SECTION */}
      <h2 className="text-2xl md:text-3xl font-semibold text-[#1B2B44] mb-6">
        Interested in becoming a sponsor?
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-6">
        Feel free to email tritonrobotics@ucsd.edu for any questions. We can offer
        social media posts and logo placement on our website and robots.
      </p>

      <p className="text-lg text-gray-700 mb-8">
        We also accept donations via our Zeffy Page.
      </p>

      <a
        href="https://www.zeffy.com/donation-form/help-tr-inspire-the-next-generation-of-engineers"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0F2A2E] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#12363B] transition inline-block"
        >
        Donate Here!
      </a>

    </div>
  );
}