import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bourgaeux",
  description:
    "Bourgaeux is a lifestyle intelligence network for food, drink, entertainment, places to go, and things to do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="animate-fade-in">
      <body>
        <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a1a] transition-opacity duration-300 pointer-events-none z-50" id="loading-screen">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71]"></div>
            <p className="text-white/80">Loading Bourgaeux...</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
