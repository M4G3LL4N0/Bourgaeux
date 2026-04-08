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
          <div className="flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71] animate-pulse opacity-80"></div>
              <div className="absolute inset-1 rounded-full bg-[#0a0a1a]"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#FF7D45] via-[#FF5E62] to-[#FF3D71] animate-spin border-[3px] border-transparent border-t-white/80"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p className="text-white/90 font-medium tracking-wider">BOURGAEUX</p>
              <div className="h-1.5 w-40 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#FF7D45] to-[#FF3D71] animate-progress w-0"></div>
              </div>
              <p className="text-xs text-white/60 mt-2 animate-pulse">Curating your experience...</p>
              <div className="flex gap-2 mt-4">
                <div className="h-2 w-2 rounded-full bg-[#FF7D45] animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="h-2 w-2 rounded-full bg-[#FF5E62] animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="h-2 w-2 rounded-full bg-[#FF3D71] animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
