import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Kareem Law Firm",
  description:
    "Hubungi Kareem Law Firm untuk konsultasi hukum profesional dan rahasia. Tersedia konsultasi via email dan WhatsApp.",
  keywords: [
    "kontak pengacara",
    "konsultasi hukum",
    "hubungi law firm",
    "pengacara indonesia",
    "law firm indonesia",
  ],
  openGraph: {
    title: "Contact Kareem Law Firm",
    description:
      "Konsultasi hukum profesional dan independen. Seluruh informasi dijamin kerahasiaannya.",
    url: "https://kareem-law-firm.vercel.app/contact",
    siteName: "Kareem Law Firm",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
