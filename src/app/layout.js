import "../styles/css.css";
import MobileNavbar from "../components/mobile/MobileNavbar";
import DesktopNavbar from "../components/desktop/DesktopNavbar";

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

        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
