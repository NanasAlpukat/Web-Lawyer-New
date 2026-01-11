import "../styles/css.css";
import MobileNavbar from "../components/mobile/MobileNavbar";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import Footer from "../components/footer/Footer";

/* ===== SEO ===== */
export const metadata = {
  title: "Kareem Law Firm | Legal Consultant Indonesia",
  description:
    "Kareem Law Firm menyediakan layanan konsultasi hukum profesional, independen, dan terpercaya di Indonesia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE SITE VERIFICATION */}
        <meta
          name="google-site-verification"
          content="google17c83ee58e063d4e"
        />
        {/* SEO meta tags */}
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>

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
