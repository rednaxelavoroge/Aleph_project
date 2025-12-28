import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aleph-os.vercel.app"),
  title: "Aleph — Internal Atlas of Destiny",
  description: "A sanctuary for reflection, transformation, and digital soul legacy.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Aleph — Internal Atlas of Destiny",
    description: "Preserve your essence in the digital sanctuary.",
    url: "https://aleph-os.vercel.app",
    siteName: "Aleph Sanctuary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aleph Sanctuary Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
