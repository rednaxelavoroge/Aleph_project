import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aleph-os.vercel.app"),
  title: "Алеф — Внутренний атлас судьбы",
  description: "Экосистема для перепросмотра, трансформации и цифрового наследия души.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Алеф — Внутренний атлас судьбы",
    description: "Навигация по ландшафтам памяти и цифровое бессмертие.",
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
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
