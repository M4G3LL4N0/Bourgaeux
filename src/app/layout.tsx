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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
