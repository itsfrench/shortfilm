import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shortfilm - Fake Tinder",
  description: "A fake Tinder app for a short film",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
