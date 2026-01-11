import "../styles/css.css";
import MobileNavbar from "../components/mobile/MobileNavbar";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import Footer from "../components/footer/Footer";

/* ===== SEO & GOOGLE VERIFICATION ===== */
export const metadata = {
  title: "Kareem Law Firm | Legal Consultant Indonesia",
  description:
    "Kareem Law Firm menyediakan layanan konsultasi hukum profesional, independen, dan terpercaya di Indonesia.",
  verification: {
    google: "google17c83ee58e063d4e",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>

        {/* Mobile Navbar */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>

        <main className="pt-[90px]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
