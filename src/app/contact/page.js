export const metadata = {
  title: "Contact Us",
  description:
    "Hubungi Kareem Law Firm untuk konsultasi hukum profesional dan rahasia. Tersedia konsultasi via email dan WhatsApp.",
  keywords: [
    "kontak pengacara",
    "konsultasi hukum",
    "hubungi law firm",
    "pengacara indonesia",
  ],
  openGraph: {
    title: "Contact Kareem Law Firm",
    description:
      "Konsultasi hukum profesional dan independen. Seluruh informasi dijamin kerahasiaannya.",
    url: "https://kareem-law-firm.vercel.app/contact",
  },
};

"use client";


import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        "service_56xmh6b",
        "template_f7tug48",
        e.target,
        "6pAudgNjq-0qyseqK"
      );

      setSuccess(true);
      e.target.reset();
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-neutral-950 py-32 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* LEFT — TEXT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-4xl lg:text-5xl font-semibold leading-tight">
            Get in Touch
          </h2>

          <p className="mt-6 text-neutral-400 leading-relaxed max-w-md">
            Kami menyediakan layanan hukum yang profesional, independen,
            dan berlandaskan integritas. Silakan sampaikan ringkasan
            permasalahan hukum Anda melalui formulir ini.
            Seluruh informasi diperlakukan secara rahasia.
          </p>

          <div className="mt-10 space-y-3 text-neutral-300 text-sm">
            <p>
              Email: <span className="text-white">annas.sidiq10@gmail.com</span>
            </p>
            <p>Office Hours: Mon – Fri, 09.00 – 17.00 WIB</p>
            <p>Location: Indonesia</p>
          </div>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Saya%20ingin%20konsultasi%20hukum"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2
                       w-fit px-6 py-3 rounded-full
                       border border-green-600 text-green-500
                       hover:bg-green-600 hover:text-white
                       transition text-sm font-medium"
          >
            Chat via WhatsApp
          </a>
        </div>

        {/* RIGHT — FORM */}
        <form
          onSubmit={sendEmail}
          className="bg-white rounded-2xl p-7 shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
        >
          <div className="space-y-8">

            <div>
              <label className="text-sm text-neutral-500">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">
                Phone Number (optional)
              </label>
              <input
                type="text"
                name="phone"
                className="w-full mt-2 border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">Legal Matter</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                Your message has been sent successfully.
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
