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
        <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a1a]/90 backdrop-blur-sm transition-opacity duration-300 pointer-events-none z-50" id="loading-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71] animate-pulse"></div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/90 font-medium">Loading Bourgaeux</p>
              <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF7D45] to-[#FF3D71] animate-progress w-0"></div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
