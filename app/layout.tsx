import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopUtilityBar from "./components/TopUtilityBar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fast & Furious Cafe | Sialkot Street Food & Fast-Casual",
  description:
    "Fast & Furious Cafe on Circular Road, Sialkot. View menu highlights and listed deal details, plus contact and location information.",
  keywords: [
    "Fast and Furious Cafe Sialkot",
    "Circular Road Sialkot restaurant",
    "Foodpanda Sialkot burgers",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface font-sans text-zinc-100 antialiased">
        <TopUtilityBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
