import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khethiwecreatives.co.za"),

  title: {
    default: "Khethiwe Creatives | Visual Creative Studio",
    template: "%s | Khethiwe Creatives",
  },

  description:
    "Khethiwe Creatives is a visual creative studio creating photography, videography, brand identities and digital experiences for businesses, brands and creators.",

  keywords: [
    "Khethiwe Creatives",
    "creative studio South Africa",
    "visual creative studio",
    "photography South Africa",
    "videography South Africa",
    "brand identity design",
    "graphic design",
    "web design South Africa",
    "creative studio",
  ],

  authors: [{ name: "Khethiwe Creatives" }],
  creator: "Khethiwe Creatives",
  publisher: "Khethiwe Creatives",

  alternates: {
    canonical: "https://khethiwecreatives.co.za",
  },

  openGraph: {
    title: "Khethiwe Creatives | Visual Creative Studio",
    description:
      "We create the visual world around your vision — from photography and film to brand identity and digital experiences.",
    url: "https://khethiwecreatives.co.za",
    siteName: "Khethiwe Creatives",
    locale: "en_ZA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
