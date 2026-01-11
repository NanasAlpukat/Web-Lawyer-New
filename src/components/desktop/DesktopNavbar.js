import Link from "next/link";
import Image from "next/image";

export default function DesktopNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/nobg-03.png"
            alt="Logo"
            width={62}
            height={62}
            priority
          />
          <span className="ml-2 text-[15px] font-semibold">
            <span className="text-red-700">KAREEM</span> LAW FIRM
          </span>
        </Link>

        {/* Menu */}
        <div className="flex gap-6">
          <Link href="/" className="font-semibold hover:text-red-700 transition">
            Home
          </Link>
          <Link href="/about" className="font-semibold hover:text-red-700 transition">
            About
          </Link>
          <Link href="/contact" className="font-semibold hover:text-red-700 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
