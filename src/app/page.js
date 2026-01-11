import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[800px]">
        {/* Background Image */}
        <Image
          src="/assets/bg2.png"
          alt="Kareem Law Firm"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Professional Legal Services
            <br className="hidden md:block" />
            With Integrity
          </h1>

          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Pendampingan hukum yang profesional, bertanggung jawab, dan ditangani
            secara langsung oleh advokat dengan menjunjung tinggi etika dan
            kepastian hukum.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Jadwalkan Konsultasi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
