import "../styles/css.css";
import MobileNavbar from "../components/mobile/MobileNavbar";
import DesktopNavbar from "../components/desktop/DesktopNavbar";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className="min-h-screen">
        {/* Desktop */}
        <div className="hidden md:block">
          <DesktopNavbar />
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>

        <main className="pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
