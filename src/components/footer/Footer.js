import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="md:col-span-2">
          <h3 className="text-white text-xl font-semibold">
            <span className="text-red-700">KAREEM</span> LAW FIRM
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            An independent legal practice providing principled,
            professional, and confidential legal counsel.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>Email: annas.sidiq10@gmail.com</li>
            <li>Office Hours: Mon – Fri</li>
            <li>09.00 – 17.00 WIB</li>
          </ul>
        </div>
      </div>

      {/* LEGAL BAR */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs flex flex-col md:flex-row justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Kareem Law Firm. All rights reserved.
          </p>

          <p className="max-w-xl text-neutral-500">
            Disclaimer: The information on this website is for general
            informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
