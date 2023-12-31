import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Developers.Studio",
  description: "Showcase and discover remarkable developers projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
