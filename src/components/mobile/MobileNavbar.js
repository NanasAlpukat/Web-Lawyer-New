"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 py-4">
        <h1 className="font-bold text-lg">
          <Link href="/">
          <div className="flex items-center">
          <Image
            src="/assets/nobg-03.png"
            alt="Logo"
            width={62}
            height={62}
            priority
            />
          <span className="ml-2 text-[15px]"><span className="text-red-700">KAREEM</span> LAW FIRM</span>
            </div>
            </Link>
        </h1>

        <button onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col px-4 pb-4 gap-3">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-red-600">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-red-600">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-red-600">Contact</Link>
        </div>
      )}
    </nav>
  );
}
