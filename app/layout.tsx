import type { Metadata } from "next";
import { Funnel_Display, Handjet } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const handjet = Handjet({
  variable: "--font-handjet",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "iConcept - Creative Digital Agency",
  description: "Creative digital agency offering web design, branding, marketing, and development solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${handjet.variable}`}
      >
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
