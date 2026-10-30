import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "INDO ANNAI SERVICE | Japan & India",
    template: "%s | INDO ANNAI SERVICE",
  },
  description:
    "Japanese-speaking travel coordination, interpretation, translation, accommodation, business support, and Japanese lessons in India.",
  metadataBase: new URL("https://indoannai.com"),
  openGraph: {
    title: "INDO ANNAI SERVICE",
    description: "Your trusted Japanese-speaking partner in India.",
    url: "https://indoannai.com",
    siteName: "INDO ANNAI SERVICE",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
