import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saab Electric | Electrical Contractors in the GTA",
  description:
    "Since 2000, Saab Electric has been providing quality electrical contracting services to residential, commercial, and industrial clients in the Greater Toronto Area.",
  keywords: [
    "electrical contractor",
    "GTA electrician",
    "residential electrical",
    "commercial electrical",
    "industrial electrical",
    "Toronto electrician",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
