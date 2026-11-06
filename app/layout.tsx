import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ridgeline Outdoors | Events for people who love the outdoors",
  description:
    "Join guided hikes, weekend camps, cycling rides and climbing meetups with the Ridgeline community.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
