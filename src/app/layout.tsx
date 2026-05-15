import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bourgaeux | Lifestyle Intelligence Network",
  description:
    "Bourgaeux is a social and AI-powered lifestyle assistant for discovering the food, drink, entertainment, and experiences you are missing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
