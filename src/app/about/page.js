import Image from "next/image";

export const metadata = {
  title: "About Us | Kareem Law Firm",
  description:
    "Mengenal Kareem Law Firm — firma hukum mandiri yang berfokus pada layanan hukum yang profesional, etis, dan berorientasi solusi.",
  keywords: [
    "tentang law firm",
    "profil pengacara",
    "firma hukum indonesia",
    "kareem law firm",
  ],
  openGraph: {
    title: "About Kareem Law Firm",
    description:
      "Komitmen kami terhadap integritas, profesionalisme, dan keadilan.",
    url: "https://kareem-law-firm.vercel.app/about",
    siteName: "Kareem Law Firm",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="bg-neutral-950 text-white">

      {/* HERO */}
      <div className="relative w-full h-[420px] flex items-center">
        <Image
          src="/assets/bg2.png"
          alt="About Kareem Law Firm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            About Our Practice
          </h1>
          <p className="mt-4 max-w-xl text-neutral-300">
            An independent legal practice committed to integrity,
            clarity, and responsible legal solutions.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-28">

        {/* WHO WE ARE */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Who We Are
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Kareem Law Firm is an independent legal practice providing
              strategic and principled legal counsel. We operate with a
              strong commitment to professionalism, discretion, and
              ethical responsibility.
            </p>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              As a boutique and individually managed practice, we
              prioritize personal attention, careful analysis, and
              solutions tailored to the specific legal needs of each
              client.
            </p>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-10 border border-neutral-800">
            <p className="text-neutral-300 italic leading-relaxed">
              “Law is not merely about resolving disputes, but about
              guiding decisions with clarity, responsibility, and
              foresight.”
            </p>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section>
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold text-lg mb-3">Integrity</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Every legal opinion and action is grounded in honesty,
                ethical standards, and professional accountability.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold text-lg mb-3">Independence</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We maintain independent judgment, free from conflicts
                of interest, ensuring objective and responsible advice.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
              <h3 className="font-semibold text-lg mb-3">Discretion</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Client confidentiality and sensitive information are
                handled with the highest level of care and respect.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-neutral-900 rounded-2xl p-10 border border-neutral-800">
            <h3 className="text-xl font-semibold mb-4">
              Areas of Practice
            </h3>

            <ul className="space-y-3 text-neutral-400 text-sm">
              <li>• Legal consultation and advisory</li>
              <li>• Contract drafting and review</li>
              <li>• Business and commercial law matters</li>
              <li>• Dispute analysis and legal strategy</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              A Thoughtful Legal Approach
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We believe effective legal service is built on
              understanding context, managing risk, and providing
              realistic guidance — not promises.
            </p>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              Our role is to help clients navigate legal complexity
              with confidence and informed decision-making.
            </p>
          </div>
        </section>

        {/* CLOSING */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-neutral-400 leading-relaxed">
            Whether you are an individual or a growing business,
            Kareem Law Firm stands as a reliable legal partner,
            committed to professionalism and principled counsel.
          </p>
        </section>

      </div>
    </section>
  );
}
